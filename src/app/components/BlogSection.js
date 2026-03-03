import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Top 5 Reasons to Invest in Lahore Real Estate in 2025",
    date: "February 28, 2025",
    category: "Investment",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    excerpt:
      "Lahore's real estate market continues to offer some of the best returns in Pakistan, with growing infrastructure and LDA approvals...",
    href: "/blog/invest-lahore-2025",
  },
  {
    id: 2,
    title: "Crown Residencia: A New Standard in Luxury Living",
    date: "January 15, 2025",
    category: "Projects",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    excerpt:
      "Our latest residential society sets a new benchmark for premium living with world-class amenities and verdant landscapes...",
    href: "/blog/crown-residencia",
  },
  {
    id: 3,
    title: "How to Choose the Right Plot Size for Your Family",
    date: "December 20, 2024",
    category: "Guide",
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80",
    excerpt:
      "Choosing the right plot size can be daunting. Here's our comprehensive guide to help you make the best decision...",
    href: "/blog/plot-size-guide",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase font-semibold">
                Latest News
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#0D3D2A]">
              Blog <span className="italic text-[#C9A96E]">& Insights</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#0D3D2A] border-b border-[#C9A96E] pb-0.5 hover:text-[#C9A96E] transition-colors font-medium tracking-wide"
          >
            View All Posts
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={post.href}
              className="group bg-white shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1 overflow-hidden"
            >
              {/* Image */}

              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <span className="absolute top-4 left-4 bg-[#0D3D2A] text-[#C9A96E] text-[10px] uppercase tracking-widest px-3 py-1 font-bold">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[#C9A96E] text-[11px] uppercase tracking-widest mb-2 font-medium">
                  {post.date}
                </p>
                <h3 className="font-display text-lg font-medium text-[#0D3D2A] mb-3 leading-snug group-hover:text-[#A8843E] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-[#777] text-sm leading-relaxed line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-[#C9A96E] text-xs font-semibold tracking-wide uppercase">
                  Read More
                  <svg
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Gold bottom accent */}
              <div className="h-0.5 bg-gradient-to-r from-[#A8843E] to-[#DFC08A] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
