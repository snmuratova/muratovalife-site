import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="blog-page">
      <header className="blog-page-header">
        <Link href="/" className="blog-back">MuratovaLife</Link>
        <Link href="/" className="blog-home-link">Главная</Link>
      </header>

      <section className="blog-page-hero">
        <h1>Блог</h1>
      </section>
    </main>
  );
}
