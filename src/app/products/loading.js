import React from "react";

export default function ProductsLoading() {
  return (
    <main className="min-h-screen bg-slate-50/50 pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto space-y-6">
          <div className="h-12 w-3/4 mx-auto bg-slate-200 rounded-2xl animate-pulse"></div>
          <div className="h-16 w-full mx-auto bg-slate-100 rounded-xl animate-pulse"></div>
          <div className="h-1 w-20 bg-blue-100 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Catalog Grid Skeleton */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm"
            >
              {/* Image Skeleton */}
              <div className="aspect-square relative bg-slate-50 m-2 rounded-2xl animate-pulse">
                <div className="absolute top-4 left-4 h-6 w-16 bg-white/80 rounded-full"></div>
              </div>

              {/* Details Section Skeleton */}
              <div className="p-6 pt-2 flex flex-col flex-grow space-y-4">
                <div className="h-7 w-3/4 bg-slate-100 rounded-lg animate-pulse"></div>
                <div className="h-4 w-full bg-slate-50 rounded-lg animate-pulse"></div>
                
                <div className="mt-auto flex items-center justify-between pt-4">
                  <div className="h-4 w-24 bg-blue-50 rounded-lg animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
