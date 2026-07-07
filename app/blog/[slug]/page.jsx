// app/blog/[slug]/page.jsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blogdata';
import CopyButton from '@/components/blogs/CopyButton';
import { extractHeadings, estimateReadingTime, extractFAQs } from '@/lib/ExtractHeading';
import ReadingProgress from '@/components/blogs/ReadingProgress';
import TableOfContents from '@/components/blogs/TableOfContents';
import AnimatedProse from '@/components/blogs/AnimatedProse';
import FAQAccordion from '@/components/blogs/FaqAccordion';
import FadeIn from '@/components/blogs/FadeIn';
import BlogCTA from '@/components/blogs/CTA';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: `${post.title} - Hijama Nation`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const updatedRaw = post.updatedDate || post.dateUpdated || post.lastUpdated || null;
  const formattedUpdated = updatedRaw
    ? new Date(updatedRaw).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  const shareUrl = `https://hijamanation.com/blog/${post.slug}`;
  const shareText = encodeURIComponent(post.title);

  const { html: htmlWithIds, headings } = extractHeadings(post.content);
  const { html: articleHtml, faqs } = extractFAQs(htmlWithIds);
  const faqHeading = headings.find((h) => /frequently asked questions/i.test(h.text));
  const readingTime = estimateReadingTime(post.content);

  return (
    <main className="min-h-screen bg-white">
      <ReadingProgress />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@400;500;600;700&display=swap');

        .prose-hijama {
          font-family: 'Inter', sans-serif;
          color: #1a202c;
        }
        .prose-hijama h1 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2.75rem;
          font-weight: 700;
          color: #1a2e1a;
        }
        .prose-hijama h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2.125rem;
          font-weight: 700;
          color: #1a2e1a;
        }
        .prose-hijama h3 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.625rem;
          font-weight: 700;
          color: #1a2e1a;
        }
        .prose-hijama h4 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.375rem;
          font-weight: 700;
          color: #1a2e1a;
        }
        .prose-hijama a {
          color: #1c7c47;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        .prose-hijama a:hover {
          color: #14532d;
          text-decoration: underline;
        }
        .prose-hijama blockquote {
          border-left: 4px solid #1c7c47;
          background: #f0fdf4;
          padding: 0.75rem 1.5rem;
          border-radius: 0 8px 8px 0;
          margin: 1.5rem 0;
          font-style: italic;
          color: #374151;
        }
        .prose-hijama ul li::marker, .prose-hijama ol li::marker {
          color: #1c7c47;
        }
        .prose-hijama strong {
          color: #1a2e1a;
          font-weight: 700;
        }
        .prose-hijama img {
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
      `}</style>

      {/* ─── HEADER – LIGHT GREEN, EDITORIAL ─── */}
      <header className="relative pt-20 md:pt-28 lg:pt-32 pb-12 bg-green-100 border-b border-green-800/10 overflow-hidden">
        {/* Faint dot pattern, echoing the cupping motif */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 15% 30%, #1c7c47 0, #1c7c47 2px, transparent 2px), radial-gradient(circle at 85% 70%, #1c7c47 0, #1c7c47 2px, transparent 2px)',
            backgroundSize: '120px 120px',
          }}
        />

        {/* Left side accent — vertical rule with rotated label, framing the content column */}
        <div className="hidden lg:flex absolute inset-y-0 left-0 w-40 xl:w-52 items-center justify-center pointer-events-none">
          <div className="flex items-center gap-4 h-full py-16">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-green-800/20 to-transparent" />
            <span className="text-[11px] tracking-[0.35em] font-semibold uppercase text-green-800/40 [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
              Est. Practice
            </span>
          </div>
        </div>

        {/* Right side accent — mirrored vertical rule with rotated label */}
        <div className="hidden lg:flex absolute inset-y-0 right-0 w-40 xl:w-52 items-center justify-center pointer-events-none">
          <div className="flex items-center gap-4 h-full py-16">
            <span className="text-[11px] tracking-[0.35em] font-semibold uppercase text-green-800/40 [writing-mode:vertical-rl] whitespace-nowrap">
              Sunnah Wellness
            </span>
            <div className="w-px h-full bg-gradient-to-b from-transparent via-green-800/20 to-transparent" />
          </div>
        </div>

        <div className="relative z-10 px-8 sm:px-16 md:px-28 lg:px-40 xl:px-52">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <div className="flex justify-start mb-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm text-green-800/70 hover:text-green-900 transition-colors font-medium"
              >
                <span aria-hidden="true">←</span> All posts
              </Link>
            </div>

            {/* Signature mark — three overlapping rings, evoking hijama cups */}
            <div className="flex justify-center mb-6" aria-hidden="true">
              <svg width="52" height="28" viewBox="0 0 52 28" fill="none">
                <circle cx="14" cy="14" r="10.5" stroke="#1c7c47" strokeWidth="1.5" opacity="0.55" />
                <circle cx="26" cy="14" r="10.5" stroke="#1c7c47" strokeWidth="1.5" opacity="0.85" />
                <circle cx="38" cy="14" r="10.5" stroke="#1c7c47" strokeWidth="1.5" opacity="0.55" />
              </svg>
            </div>

            {/* Eyebrow */}
            <p className="text-center text-[11px] md:text-xs tracking-[0.25em] font-semibold uppercase text-green-800/60 mb-4">
              Hijama Nation Journal
            </p>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl lg:text-[3.25rem] font-serif font-bold text-green-950 leading-[1.15] mb-8 text-center">
              {post.title}
            </h1>

            {/* Metadata row */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-green-900/70">
              <span className="inline-flex items-center gap-2 font-medium text-green-950">
                <span className="w-6 h-6 rounded-full bg-green-900/5 border border-green-900/10 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/hijamalogo.png"
                    alt="Hijama Nation Logo"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </span>
                {post.author}
              </span>
              <span className="text-green-900/25">·</span>
              <span>{readingTime} min read</span>
              <span className="text-green-900/25">·</span>
              <span>Published {formattedDate}</span>
              {formattedUpdated && (
                <>
                  <span className="text-green-900/25">·</span>
                  <span>Updated {formattedUpdated}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ─── CONTENT – LIGHT GREEN, FULL WIDTH ─── */}
      <div className="relative">
        <div className="px-8 sm:px-16 md:px-28 lg:px-40 xl:px-52 py-10 md:py-14 flex flex-col lg:flex-row gap-6 lg:gap-8 items-start bg-green-50">
          <article className="flex-1 order-1 lg:order-1">
            {post.image && (
              <FadeIn>
                <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-10 bg-gray-200 shadow-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority
                  />
                </div>
              </FadeIn>
            )}

            <div className="p-6 md:p-8">
              <AnimatedProse
                html={articleHtml}
                className="prose-hijama prose prose-lg max-w-none
                           prose-headings:font-serif prose-headings:font-bold prose-headings:scroll-mt-28
                           prose-a:text-green-700 prose-a:no-underline hover:prose-a:underline
                           prose-strong:text-gray-800 prose-strong:font-bold
                           prose-blockquote:border-green-500 prose-blockquote:bg-green-50
                           prose-blockquote:px-6 prose-blockquote:py-3 prose-blockquote:rounded-r-lg
                           prose-img:rounded-xl prose-img:shadow-md
                           prose-li:marker:text-green-600"
              />

              {faqs.length > 0 && (
                <FadeIn className="mt-10 pt-8 border-t border-gray-200">
                  <h2 id={faqHeading?.id} className="font-serif text-2xl font-bold text-green-900 mb-5 scroll-mt-28">
                    Frequently Asked Questions
                  </h2>
                  <FAQAccordion faqs={faqs} />
                </FadeIn>
              )}

              <FadeIn className="mt-10 pt-6 border-t border-gray-200" delay={120}>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-sm text-gray-600 font-medium">Share this article:</p>
                  <div className="flex gap-3">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-green-600 hover:text-white p-2.5 rounded-full transition-all duration-200"
                      aria-label="Share on Twitter"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-green-600 hover:text-white p-2.5 rounded-full transition-all duration-200"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-green-600 hover:text-white p-2.5 rounded-full transition-all duration-200"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <CopyButton url={shareUrl} />
                  </div>
                </div>
              </FadeIn>
            </div>
          </article>

          <TableOfContents headings={headings} className="bg-transparent w-full lg:w-72 shrink-0 order-2 lg:order-2 sticky top-28 self-start" />
        </div>
      </div>

      <BlogCTA />
    </main>
  );
}