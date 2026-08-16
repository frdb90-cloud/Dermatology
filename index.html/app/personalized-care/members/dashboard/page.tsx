"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutGrid,
  GraduationCap,
  Package,
  Bookmark,
  Sparkles,
  MessageCircle,
  Activity,
  Bell,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { MemberHeader } from "@/components/shared/member-header";
import { ProfileCard } from "@/components/shared/profile-card";
import { DashboardSidebar } from "@/components/shared/dashboard-sidebar";
import { DashboardCard } from "@/components/shared/dashboard-card";
import { TreatmentTimeline } from "@/components/shared/treatment-timeline";
import {
  mockMyCourses,
  mockMyProducts,
  mockSavedArticles,
  mockConsultationHistory,
  mockNotifications,
} from "@/lib/data/dashboard-mock";
import { mockTreatmentTimeline, mockNextAppointment } from "@/lib/data/treatment-timeline-mock";

/*
  NOT indexed for SEO (Phase 5 rule 12: "do not expose private dashboard
  pages as public SEO content") — a robots meta tag is set below. No
  real auth guard exists yet (per rule: UI-only in this phase); a
  future auth phase adds a server-side redirect for unauthenticated
  users ahead of this component, without needing to change this file.
*/
export default function MemberDashboardPage() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
      <Section>
        <Container>
          <div className="mb-8">
            <MemberHeader />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
            <div className="flex flex-col gap-6">
              <ProfileCard />
              <DashboardSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-2xl bg-primary/5 p-6">
                <h1 className="text-lg font-bold text-foreground">خوش آمدید 👋</h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  این یک نمونه‌ی نمایشی از پنل کاربری است و تمام اطلاعات آن داده‌ی آزمایشی است.
                </p>
              </div>

              <DashboardCard icon={GraduationCap} title="دوره‌های من">
                {mockMyCourses.map((course) => (
                  <Link
                    key={course.slug}
                    href={`/academy/courses/${course.slug}`}
                    className="flex items-center justify-between rounded-xl bg-secondary/25 px-4 py-3 text-xs transition-colors hover:bg-secondary/40"
                  >
                    <span className="font-medium text-foreground">{course.title}</span>
                    <span className="text-muted-foreground">{course.progress}٪ تکمیل</span>
                  </Link>
                ))}
              </DashboardCard>

              <DashboardCard icon={Package} title="محصولات دیجیتال من">
                {mockMyProducts.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/academy/products/${product.slug}`}
                    className="flex items-center justify-between rounded-xl bg-secondary/25 px-4 py-3 text-xs font-medium text-foreground transition-colors hover:bg-secondary/40"
                  >
                    {product.title}
                  </Link>
                ))}
              </DashboardCard>

              <DashboardCard icon={Bookmark} title="مقالات ذخیره‌شده">
                {mockSavedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="rounded-xl bg-secondary/25 px-4 py-3 text-xs font-medium text-foreground transition-colors hover:bg-secondary/40"
                  >
                    {article.title}
                  </Link>
                ))}
              </DashboardCard>

              <DashboardCard
                icon={Sparkles}
                title="روتین پوستی"
                footer={
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/personalized-care/custom-routine">ویرایش / تکمیل ارزیابی</Link>
                  </Button>
                }
              >
                <p className="text-xs leading-6 text-muted-foreground">
                  هنوز روتین نهایی برای شما ثبت نشده است. با تکمیل فرم ارزیابی، تیم درمانی روتین
                  اختصاصی شما را آماده می‌کند.
                </p>
              </DashboardCard>

              <DashboardCard icon={MessageCircle} title="تاریخچه مشاوره">
                {mockConsultationHistory.map((item) => (
                  <div
                    key={item.date}
                    className="flex items-center justify-between rounded-xl bg-secondary/25 px-4 py-3 text-xs"
                  >
                    <span className="font-medium text-foreground">{item.type}</span>
                    <span className="text-muted-foreground">
                      {item.date} · {item.status}
                    </span>
                  </div>
                ))}
              </DashboardCard>

              <DashboardCard icon={Activity} title="پیگیری درمان">
                <TreatmentTimeline steps={mockTreatmentTimeline} />
                <p className="mt-2 rounded-xl bg-accent/15 px-4 py-2.5 text-[11px] text-foreground">
                  نوبت بعدی: {mockNextAppointment.date} ساعت {mockNextAppointment.time} (
                  {mockNextAppointment.type})
                </p>
              </DashboardCard>

              <DashboardCard icon={Bell} title="اعلان‌ها">
                {mockNotifications.map((note) => (
                  <div key={note.title} className="rounded-xl bg-secondary/25 px-4 py-3 text-xs">
                    <p className="font-medium text-foreground">{note.title}</p>
                    <p className="mt-0.5 text-muted-foreground">{note.date}</p>
                  </div>
                ))}
              </DashboardCard>

              <DashboardCard icon={Settings} title="تنظیمات حساب">
                <p className="text-xs leading-6 text-muted-foreground">
                  مدیریت اطلاعات حساب کاربری، رمز عبور و تنظیمات اعلان‌ها در فاز اتصال احراز هویت
                  فعال خواهد شد.
                </p>
              </DashboardCard>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}