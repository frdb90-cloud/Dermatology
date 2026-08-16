import Image from "next/image";
import { mockProfile } from "@/lib/data/dashboard-mock";

export function ProfileCard() {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-soft">
      <div className="relative h-20 w-20 overflow-hidden rounded-full">
        <Image src={mockProfile.avatar} alt={mockProfile.name} fill sizes="80px" className="object-cover" />
      </div>
      <div>
        <h3 className="text-sm font-bold text-foreground">{mockProfile.name}</h3>
        <p className="mt-0.5 text-[11px] text-muted-foreground">{mockProfile.email}</p>
      </div>
      <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
        {mockProfile.membershipTier}
      </span>
      <p className="text-[11px] text-muted-foreground">عضویت از {mockProfile.memberSince}</p>
    </div>
  );
}