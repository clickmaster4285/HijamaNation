// app/blog/page.jsx
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blogdata';

export const metadata = {
  title: 'Blog - Hijama Nation',
  description: 'Explore our collection of articles on Hijama cupping therapy, holistic health, and wellness.',
};

export default function BlogPage() {
  if (!blogPosts || blogPosts.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50">
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-800">No blog posts</h1>
          <p className="text-gray-600">Check your data file.</p>
        </section>
      </main>
    );
  }

  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative flex items-start pb-12 md:pb-20 overflow-hidden pt-36 md:pt-44 lg:pt-52 xl:pt-60">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/images/bloghero.png)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-gray-900/40" />

        <div className="relative z-10 pl-8 pr-0 md:pl-16 lg:pl-20 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-white/60" />
            <p className="text-white/70 text-sm md:text-base tracking-widest font-light">Insights &amp; Guides</p>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-[1.05] mb-4">
            Our <em className="text-green-600 font-serif italic font-light">Blog</em>
          </h1>
          <p className="text-white text-lg md:text-xl italic font-light mb-5 tracking-wide">
            Discover insights, guides, and stories about Hijama cupping therapy, holistic health, and wellness.
          </p>
          <p className="text-white/70 text-sm md:text-base leading-relaxed mb-10 max-w-2xl">
            Explore our latest articles on Hijama, cupping therapy, and holistic living.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}

function BlogCard({ post }) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const cardTitle = post.metaTitle || post.title;
  const cardExcerpt = post.metaDescription || post.excerpt;

  return (
    <article className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      <Link href={`/blog/${post.slug}`} className="block relative h-56 overflow-hidden bg-gray-200">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
            <span className="text-emerald-600 font-medium text-sm">No Image</span>
          </div>
        )}
        {post.category && (
          <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {post.category}
          </span>
        )}
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <time className="text-sm text-gray-500 mb-2" dateTime={post.date}>{formattedDate}</time>
        <Link href={`/blog/${post.slug}`} className="block">
          <h2 className="text-xl font-bold text-gray-800 hover:text-emerald-600 transition-colors line-clamp-2 font-serif">
            {cardTitle}
          </h2>
        </Link>
        <p className="text-gray-600 text-sm mt-2 line-clamp-3 flex-1">{cardExcerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-emerald-600 font-medium text-sm mt-4 group-hover:text-emerald-700 transition-colors group-hover:translate-x-1 duration-200"
        >
          Read More
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}