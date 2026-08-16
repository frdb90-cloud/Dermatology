import Image from "next/image";
import { Bell } from "lucide-react";
import { mockNotifications, mockProfile } from "@/lib/data/dashboard-mock";

/*
  Top bar for the member dashboard only (distinct from the site-wide
  Header component). Reads mock profile/notification data — swapping
  in real session data later means passing real props here, no
  structural change.
*/
export function MemberHeader() {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4 shadow-soft">
      <div className="flex items-center gap-3">
        <div className="relative h-11 w-11 overflow-hidden rounded-full">
          <Image src={mockProfile.avatar} alt={mockProfile.name} fill sizes="44px" className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">{mockProfile.name}</p>
          <p className="text-[11px] text-muted-foreground">{mockProfile.membershipTier}</p>
        </div>
      </div>

      <button
        type="button"
        aria-label="اعلان‌ها"
        className="relative flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted"
      >
        <Bell className="h-5 w-5" aria-hidden="true" />
        {mockNotifications.length > 0 && (
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-destructive" />
        )}
      </button>
    </div>
  );
}