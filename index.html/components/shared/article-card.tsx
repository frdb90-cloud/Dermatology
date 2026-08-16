import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils/cn";

export interface ArticleCardProps {
  title: string;
  excerpt?: string;
  image: string;
  category: string;
  href: string;
  className?: string;
}

/*
  Used in "آخرین مقالات" and the future /blog listing. Kept intentionally
  simpler than Product/Course cards — no price row, just category badge
  + title + optional excerpt + "ادامه مطلب" link, matching the reference.
*/
export function ArticleCard({ title, excerpt, image, category, href, className }: ArticleCardProps) {
  return (
    <Card hoverable className={cn("group overflow-hidden p-0", className)}>
      <Link href={href} className="block">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 90vw, 280px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="flex flex-col gap-3 p-5">
        <Badge variant="secondary" className="self-start">
          {category}
        </Badge>
        <Link href={href}>
          <h3 className="line-clamp-2 text-base font-bold leading-8 text-foreground transition-colors hover:text-primary">
            {title}
          </h3>
        </Link>
        {excerpt && <p className="line-clamp-2 text-sm leading-7 text-muted-foreground">{excerpt}</p>}
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-transform hover:gap-2"
        >
          ادامه مطلب
          <ArrowLeft className="h-3.5 w-3.5" />
        </Link>
      </div>
    </Card>
  );
}