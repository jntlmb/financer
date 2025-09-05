import TotalBalance from '@/components/total-balance';
import TransactionList from '@/components/transaction-list';
import { ActivityChart } from '@/components/activity-chart';
import { CategoryChart } from '@/components/category-chart';
import QuickActions from '@/components/quick-actions';
import { getTransactions } from '@/server/transactions';
import { getUser } from '@/server/users';

export default async function Page() {
  const data = await getTransactions();
  const user = await getUser();

  return (
    <div className="p-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <TotalBalance balance={user[0].balance} />
        <TransactionList data={data} />
        <ActivityChart />
        <CategoryChart />
        <div className="order-last">
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
