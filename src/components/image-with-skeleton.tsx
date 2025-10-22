"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  height: number;
  width: number;
}

export const ImageWithSkeleton = ({
  src,
  alt,
  height,
  width,
}: ImageWithSkeletonProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative w-full")}>
      {!isLoaded && <Skeleton className="absolute inset-0 w-full h-full" />}
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        className={cn(
          "w-full object-cover transition-transform transform group-hover:scale-105 filter brightness-75 group-hover:brightness-50",
          { "opacity-100": isLoaded, "opacity-0": !isLoaded },
        )}
        onLoadingComplete={() => setIsLoaded(true)}
      />
    </div>
  );
};
