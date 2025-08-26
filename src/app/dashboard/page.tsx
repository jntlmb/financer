import TotalBalance from '@/components/total-balance';
import { ActivityChart } from '@/components/activity-chart';
import QuickActions from '@/components/quick-actions';
import { getItems } from '@/lib/items';
import { getUser } from '@/lib/user';

export default async function Page() {
  const data = await getItems();
  const user = await getUser();

  return (
    <div className="p-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <TotalBalance balance={user[0].balance} />
        <ActivityChart />
        <div className="order-last">
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
