import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { PlusCircle, MinusCircle } from 'lucide-react';

export default function QuickActions() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button variant={'secondary'} className="min-w-auto">
          <PlusCircle />
          Income
        </Button>
        <Button variant={'secondary'} className="min-w-auto">
          <MinusCircle />
          Expense
        </Button>
      </CardContent>
    </Card>
  );
}
