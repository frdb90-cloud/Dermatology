"use client";

import { useCallback, useState } from "react";
import { UploadCloud, X, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export interface UploadedFile {
  id: string;
  file: File;
  previewUrl: string;
}

/*
  Visual-only secure-looking upload UI. Files are NEVER sent anywhere —
  `URL.createObjectURL` only creates a local, in-browser preview. This
  is explicitly a frontend placeholder (per Phase 5 rule 2, step 6):
  swapping in a real upload just means adding a fetch/S3 call inside
  handleFiles where the TODO comment is, no UI change needed.
*/
export function FileUpload({
  files,
  onChange,
  maxFiles = 6,
}: {
  files: UploadedFile[];
  onChange: (files: UploadedFile[]) => void;
  maxFiles?: number;
}) {
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = useCallback(
    (fileList: FileList) => {
      const incoming = Array.from(fileList)
        .filter((file) => file.type.startsWith("image/"))
        .slice(0, Math.max(0, maxFiles - files.length))
        .map((file) => ({
          id: `${file.name}-${file.lastModified}-${Math.random().toString(36).slice(2)}`,
          file,
          previewUrl: URL.createObjectURL(file),
        }));
      // TODO(backend): upload `incoming[].file` to secure storage here later.
      onChange([...files, ...incoming]);
    },
    [files, maxFiles, onChange]
  );

  const removeFile = (id: string) => {
    onChange(files.filter((f) => f.id !== id));
  };

  return (
    <div className="flex flex-col gap-4">
      <label
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          if (e.dataTransfer.files) handleFiles(e.dataTransfer.files);
        }}
        className={cn(
          "flex flex-col items-center gap-3 rounded-2xl border-2 border-dashed px-6 py-10 text-center transition-colors cursor-pointer",
          isDragging ? "border-primary bg-primary/5" : "border-border bg-secondary/20 hover:border-primary/40"
        )}
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <UploadCloud className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-medium text-foreground">تصاویر پوست یا صورت خود را بارگذاری کنید</p>
          <p className="mt-1 text-xs text-muted-foreground">فرمت JPG یا PNG — حداکثر {maxFiles} تصویر</p>
        </div>
        <input
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => e.target.files && handleFiles(e.target.files)}
        />
      </label>

      <div className="flex items-center gap-2 rounded-xl bg-success/10 px-4 py-3 text-xs text-success">
        <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
        تصاویر شما فقط برای بررسی تخصصی تیم درمانی استفاده می‌شود و به‌صورت محرمانه نگهداری خواهد شد.
      </div>

      {files.length > 0 && (
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
          {files.map((item) => (
            <div key={item.id} className="group relative aspect-square overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.previewUrl} alt="پیش‌نمایش تصویر" className="h-full w-full object-cover" />
              <button
                type="button"
                onClick={() => removeFile(item.id)}
                aria-label="حذف تصویر"
                className="absolute left-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity group-hover:opacity-100"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}