// lib/extractHeadings.js
// Walks an article's HTML string, finds <h2>/<h3> headings, gives each a
// stable slug id (so the Table of Contents can link/scroll to them), and
// returns the rewritten HTML alongside the heading list.

export function extractHeadings(html) {
  if (!html) return { html: html || '', headings: [] };

  const headings = [];
  const usedIds = new Set();
  let index = 0;

  const newHtml = html.replace(
    /<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi,
    (match, level, attrs, inner) => {
      index += 1;
      const text = inner.replace(/<[^>]+>/g, '').trim();

      let baseId =
        text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-+|-+$)/g, '') || `section-${index}`;

      let id = baseId;
      let counter = 1;
      while (usedIds.has(id)) {
        id = `${baseId}-${counter}`;
        counter += 1;
      }
      usedIds.add(id);

      headings.push({ id, text, level: Number(level) });

      const cleanedAttrs = attrs.replace(/\s+id=["'][^"']*["']/i, '');
      return `<h${level}${cleanedAttrs} id="${id}">${inner}</h${level}>`;
    }
  );

  return { html: newHtml, headings };
}

export function estimateReadingTime(html) {
  if (!html) return 1;
  const text = html.replace(/<[^>]+>/g, ' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

// Finds an "<h2>Frequently Asked Questions</h2>" section inside the article
// HTML, pulls every <h3> question + following <p> answer(s) out of it into a
// { question, answer } array, and returns the article HTML with that whole
// section removed (so it isn't rendered twice  once as flat HTML, once as
// the interactive accordion).
export function extractFAQs(html) {
  if (!html) return { html: html || '', faqs: [] };

  const h2Pattern = /<h2[^>]*>[\s\S]*?<\/h2>/gi;
  let match;
  let faqStart = -1;

  while ((match = h2Pattern.exec(html)) !== null) {
    const text = match[0].replace(/<[^>]+>/g, '').trim();
    if (/frequently asked questions/i.test(text)) {
      faqStart = match.index;
      break;
    }
  }

  if (faqStart === -1) return { html, faqs: [] };

  const before = html.slice(0, faqStart);
  const faqSection = html.slice(faqStart);

  const faqs = [];
  // Matches each <h3>question</h3> followed by one or more <p> answer blocks.
  const qaPattern = /<h3[^>]*>([\s\S]*?)<\/h3>\s*((?:<p[^>]*>[\s\S]*?<\/p>\s*)+)/gi;
  let qaMatch;
  while ((qaMatch = qaPattern.exec(faqSection)) !== null) {
    const question = qaMatch[1].replace(/<[^>]+>/g, '').trim();
    const answer = qaMatch[2].trim();
    if (question && answer) {
      faqs.push({ question, answer });
    }
  }

  return { html: before, faqs };
}