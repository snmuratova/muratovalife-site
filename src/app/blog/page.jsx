import Link from "next/link";
import Image from "next/image";
import { stories } from "./stories";

export default function BlogPage() {
  return (
    <main className="blog-page">
      <header className="blog-page-header">
        <Link href="/" className="blog-back">MuratovaLife</Link>
        <Link href="/" className="blog-home-link">Главная</Link>
      </header>

      <section className="blog-page-hero">
        <h1>Блог</h1>
        <p className="blog-intro">Об обучении, развитии и качестве жизни.</p>
        <section className="blog-stories" aria-labelledby="stories-title">
          <h2 id="stories-title">Психологические сказки</h2>
          {stories.length === 0 ? <p>Здесь будут появляться авторские сказки и иллюстрации.</p> : (
            <div className="story-grid">
              {stories.map((story) => (
                <article className="story-card" key={story.id}>
                  {story.image && <Image src={story.image} alt={story.imageAlt || ""} width={800} height={600} />}
                  <h3>{story.title}</h3>
                  {story.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                </article>
              ))}
            </div>
          )}
        </section>
      </section>
    </main>
  );
}
