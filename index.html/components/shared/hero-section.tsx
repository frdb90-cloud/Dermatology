import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { doctor } from "@/lib/data/doctor";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,hsl(var(--secondary))_0%,transparent_45%),radial-gradient(circle_at_85%_80%,hsl(var(--accent))_0%,transparent_45%)] opacity-60" />

      <Container className="grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-right"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            بیش از ۵۰۰۰ بیمار راضی
          </span>

          <h1 className="max-w-xl text-3xl font-bold leading-[1.4] text-foreground text-balance sm:text-4xl lg:text-5xl">
            پوستی سالم، درخشان و متعلق به{" "}
            <span className="text-primary">خودِ واقعیِ شما</span>
          </h1>

          <p className="max-w-md text-base leading-8 text-muted-foreground">
            {doctor.bio}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/personalized-care/consultation">
                رزرو مشاوره رایگان
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/clinic/services">مشاهده خدمات کلینیک</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-[4/5] w-full max-w-md"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-primary/8" />
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-card-hover">
            <Image
              src={doctor.heroPhoto}
              alt={doctor.name}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-5 right-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-card-hover sm:right-10">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-success/10 text-success">
              <Star className="h-5 w-5 fill-success" />
            </span>
            <div className="text-right">
              <p className="text-sm font-bold text-foreground">۴.۹ از ۵</p>
              <p className="text-xs text-muted-foreground">رضایت بیماران</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}