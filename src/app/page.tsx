import RecentChart from '@/components/recent-chart';
import RecentList from '@/components/recent-list';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import { getItem } from '@/lib/items';

export default async function Home() {
  // fetch data and pass to components ->

  const item = await getItem(2);
  console.log(item);

  return (
    <div className="p-4">
      <div className="mt-4 mb-4">
        <RecentChart />
      </div>
      <RecentList />
    </div>
  );
}
