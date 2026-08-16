import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatToman } from "@/lib/utils/format";
import { cn } from "@/lib/utils/cn";

export interface CourseCardProps {
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  duration?: string;
  level?: string;
  href: string;
  className?: string;
}

/*
  Used for "دوره‌های آموزشی محبوب". Distinguished from ProductCard by
  a landscape portrait-style headshot image plus meta row (duration/level)
  matching physical courses rather than flat digital downloads.
*/
export function CourseCard({
  title,
  image,
  price,
  originalPrice,
  duration,
  level,
  href,
  className,
}: CourseCardProps) {
  return (
    <Card hoverable className={cn("group overflow-hidden p-0", className)}>
      <Link href={href} className="block">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 45vw, 220px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="flex flex-col gap-3 p-4">
        {(duration || level) && (
          <div className="flex items-center gap-2">
            {level && <Badge variant="accent">{level}</Badge>}
            {duration && (
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                {duration}
              </span>
            )}
          </div>
        )}
        <Link href={href}>
          <h3 className="line-clamp-2 min-h-[2.6rem] text-sm font-bold text-foreground transition-colors hover:text-primary">
            {title}
          </h3>
        </Link>
        <div className="flex items-baseline gap-2">
          <span className="text-base font-bold text-primary">{formatToman(price)}</span>
          {originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {formatToman(originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}