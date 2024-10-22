import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <article key={index} className="block relative group">
          <div className="block overflow-hidden rounded-lg border border-foreground/20">
            <div className="relative w-full">
              <Skeleton className={`h-[215px] w-full`} />
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
