import { MapPin } from "lucide-react";

/*
  Visual placeholder standing in for a real map integration (Phase 7
  rule 5 — explicitly no Google Maps/external map service yet). Takes
  a plain address label as its only prop so wiring in a real map
  component later (e.g. an iframe or a maps SDK) means swapping just
  this component's internals, not any page that renders it.
*/
export function MapPlaceholder({ addressLabel }: { addressLabel: string }) {
  return (
    <div className="flex aspect-[16/9] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-secondary/25 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <MapPin className="h-5 w-5" aria-hidden="true" />
      </span>
      <p className="max-w-xs text-xs leading-6 text-muted-foreground">{addressLabel}</p>
      <p className="text-[11px] text-muted-foreground/70">نقشه واقعی در فاز اتصال سرویس‌ها فعال می‌شود</p>
    </div>
  );
}