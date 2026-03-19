"use client";

import { ShieldCheck } from "lucide-react";

import { authorizationLetters } from "@/data/site";
import { authorizedBrands } from "@/data/site";
import { BrandLogo } from "@/components/shared/brand-logo";
import { DocumentPreview } from "@/components/shared/document-preview";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AuthorizationGrid() {
  return (
    <div className="space-y-8">
      <p className="max-w-3xl text-sm leading-7 text-slate-600">
        Selected manufacturer authorizations and distribution confirmations available for
        review. Supporting documents can be shared upon request alongside relevant technical
        references and quotation documentation.
      </p>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {authorizationLetters.map((letter) => {
          const brand = authorizedBrands.find(
            (item) => item.name.includes(letter.brand) || letter.brand.includes(item.name),
          );

          return (
          <Card key={letter.brand} className="overflow-hidden">
            <CardContent className="p-0">
              <DocumentPreview
                src={letter.imagePath}
                alt={`${letter.brand} authorization letter preview`}
                className="rounded-none"
              />
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-slate-950">{letter.brand}</h2>
                    {brand ? (
                      <BrandLogo
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        mode={brand.logoMode}
                        className="w-[180px] min-h-[72px]"
                      />
                    ) : null}
                  </div>
                  <Badge variant="success">Authorized</Badge>
                </div>
                <p className="text-sm leading-7 text-slate-600">{letter.note}</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      View Authorization
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <div className="space-y-5">
                      <div className="sr-only">
                        <DialogTitle>{letter.brand} authorization letter</DialogTitle>
                        <DialogDescription>{letter.summary}</DialogDescription>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-cyan-50 p-3 text-cyan-700">
                          <ShieldCheck className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-950">{letter.brand}</h3>
                          <p className="text-sm text-slate-500">{letter.summary}</p>
                        </div>
                      </div>
                      <DocumentPreview
                        src={letter.imagePath}
                        alt={`${letter.brand} authorization letter preview`}
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
          );
        })}
      </div>
      <p className="text-sm text-slate-500">
        Additional brand documentation and technical references can be provided upon request.
      </p>
    </div>
  );
}
