import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="p-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Skeleton className="min-h-64 rounded-xl" />
        <Skeleton className="min-h-64 rounded-xl" />
        <Skeleton className="min-h-64 rounded-xl" />
        <Skeleton className="min-h-64 rounded-xl" />
        <Skeleton className="min-h-64 rounded-xl" />
      </div>
    </div>
  );
}
