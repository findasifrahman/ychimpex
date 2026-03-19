"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { Expand, ImageOff } from "lucide-react";

import { galleryItems } from "@/data/site";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Reveal } from "@/components/shared/reveal";

function GalleryImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`flex h-full w-full items-center justify-center bg-slate-900 ${className ?? ""}`}>
        <div className="text-center text-white">
          <ImageOff className="mx-auto h-10 w-10 text-slate-400" />
          <p className="mt-3 text-sm text-slate-300">Gallery image not found</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full object-cover ${className ?? ""}`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export function CompanyGallery() {
  return (
    <div className="mt-14 space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-lg font-semibold uppercase tracking-[0.18em] text-slate-500" >
            Gallery
          </p>

        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {galleryItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.04}>
            <Dialog>
              <DialogTrigger asChild>
                <button className="group relative block overflow-hidden rounded-[28px] border border-slate-200 bg-white text-left shadow-[0_12px_40px_-18px_rgba(15,23,42,0.28)] transition hover:-translate-y-1">
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <GalleryImage
                      src={item.image}
                      alt={`${item.title} gallery artwork`}
                      className="transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(2,6,23,0.82)_100%)]" />
                    <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur-sm">
                      <Expand className="h-4 w-4" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
                        {item.category}
                      </p>
                      <h4 className="mt-2 text-lg font-semibold text-white">{item.title}</h4>
                    </div>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="w-[min(96vw,1320px)] border-white/10 bg-slate-950 p-3 sm:p-4">
                <div className="sr-only">
                  <DialogTitle>{item.title}</DialogTitle>
                  <DialogDescription>{item.category} gallery image preview</DialogDescription>
                </div>
                <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-slate-950">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <GalleryImage
                      src={item.image}
                      alt={`${item.title} full-screen gallery artwork`}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.1),rgba(2,6,23,0.78))]" />
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                        {item.category}
                      </p>
                      <h4 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
