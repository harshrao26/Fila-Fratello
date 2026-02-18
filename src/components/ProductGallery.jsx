"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ProductGallery({ images, primaryImage, name }) {
    const allImages = Array.from(
        new Set([
            ...(primaryImage ? [primaryImage] : []),
            ...(Array.isArray(images) ? images : []),
        ]),
    ).filter(Boolean);

    const [activeImage, setActiveImage] = useState(primaryImage || allImages[0]);

    // Sync active image if primary changes (e.g. during client-side navigation or data updates)
    useEffect(() => {
        if (primaryImage) {
            setActiveImage(primaryImage);
        }
    }, [primaryImage]);

    if (allImages.length === 0) {
        return (
            <div className="aspect-square bg-slate-50 rounded-3xl flex items-center justify-center border border-slate-100 italic text-slate-400">
                No images available
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Main Image */}
            <div className="relative aspect-square bg-slate-50 rounded-3xl flex items-center justify-center border border-slate-100 shadow-inner overflow-hidden group">
                <Image
                    src={activeImage}
                    alt={name}
                    width={800}
                    height={800}
                    className="object-contain hover:scale-105 transition duration-700 ease-in-out"
                    priority
                />
            </div>

            {/* Thumbnails */}
            {allImages.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide justify-start lg:justify-center">
                    {allImages.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveImage(img)}
                            className={`relative flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${activeImage === img
                                    ? "border-blue-600 ring-2 ring-blue-50"
                                    : "border-slate-100 hover:border-blue-200"
                                }`}
                        >
                            <Image
                                src={img}
                                alt={`${name} thumbnail ${idx}`}
                                fill
                                className="object-contain p-1"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
