import RecentChart from '@/components/ui/recent-chart';
import RecentList from '@/components/ui/recent-list';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <div className="p-4 flex flex-col">
      <h1 className="text-2xl font-bold">Finance Tracker</h1>
      <div className="mt-4 mb-4">
        <RecentChart />
      </div>
      <Suspense fallback={<Skeleton className="w-full" />}>
        <RecentList />
      </Suspense>
    </div>
  );
}
