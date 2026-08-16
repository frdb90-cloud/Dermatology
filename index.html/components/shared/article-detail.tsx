import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArticleMeta } from "@/components/shared/article-meta";
import { ShareButtons } from "@/components/shared/share-buttons";
import { RelatedArticles } from "@/components/shared/related-articles";
import { MedicalDisclaimer } from "@/components/shared/medical-disclaimer";
import { blogCategories } from "@/lib/data/blog-categories";
import type { ArticleData, ArticleContentBlock } from "@/lib/data/articles";

/*
  Renders the ordered `content` block array as semantic HTML — no
  dangerouslySetInnerHTML anywhere. Headings become <h2> (the article
  <h1> is the title above), paragraphs <p>, lists <ul>/<li>, images a
  real <figure>/<Image>/<figcaption> — a correct heading hierarchy for
  long-form medical content per Phase 6 rule 4 and rule 13.
*/
function ContentBlock({ block, index }: { block: ArticleContentBlock; index: number }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 key={index} className="mt-10 text-lg font-bold text-foreground sm:text-xl">
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p key={index} className="text-sm leading-8 text-foreground/90 sm:text-base sm:leading-9">
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul key={index} className="flex flex-col gap-2.5 pr-1">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm leading-7 text-foreground/90 sm:text-base">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "image":
      return (
        <figure key={index} className="flex flex-col gap-2">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <Image src={block.src} alt={block.alt} fill sizes="(max-width: 768px) 100vw, 720px" className="object-cover" />
          </div>
          {block.caption && (
            <figcaption className="text-center text-xs text-muted-foreground">{block.caption}</figcaption>
          )}
        </figure>
      );
    default:
      return null;
  }
}

export function ArticleDetail({ article, pageUrl }: { article: ArticleData; pageUrl: string }) {
  const categoryData = blogCategories.find((c) => c.value === article.category);

  return (
    <article className="flex flex-col gap-10">
      <header className="flex flex-col gap-5">
        <Link
          href="/blog/articles"
          className="flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
        >
          <ArrowLeft className="h-3.5 w-3.5 rotate-180" aria-hidden="true" />
          بازگشت به مقالات
        </Link>

        {categoryData && (
          <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
            {categoryData.label}
          </span>
        )}

        <h1 className="text-xl font-bold leading-9 text-foreground sm:text-2xl lg:text-3xl">
          {article.title}
        </h1>
        <p className="text-sm leading-8 text-muted-foreground sm:text-base">{article.excerpt}</p>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
          <ArticleMeta author={article.author} date={article.date} readingTime={article.readingTime} />
          <ShareButtons title={article.title} url={pageUrl} />
        </div>
      </header>

      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          sizes="(max-width: 1024px) 100vw, 800px"
          priority
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-5">
        {article.content.map((block, index) => (
          <ContentBlock key={index} block={block} index={index} />
        ))}
      </div>

      <MedicalDisclaimer />

      <div className="flex flex-col items-center gap-4 rounded-3xl bg-primary/5 px-6 py-10 text-center">
        <h2 className="text-lg font-bold text-foreground">سوالی درباره پوست یا موی خود دارید؟</h2>
        <p className="max-w-md text-sm leading-7 text-muted-foreground">
          می‌توانید با تکمیل ارزیابی پوست یا رزرو مشاوره، مسیر مراقبتی اختصاصی خود را آغاز کنید.
        </p>
        <Button size="lg" asChild>
          <Link href="/personalized-care/consultation">رزرو مشاوره</Link>
        </Button>
      </div>

      <RelatedArticles current={article} />
    </article>
  );
}