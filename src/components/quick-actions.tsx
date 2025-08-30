import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { PlusCircle, MinusCircle } from 'lucide-react';
import ExpenseForm from './expense-form';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function QuickActions() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Dialog>
          <DialogTrigger asChild className="min-w-full">
            <Button variant={'secondary'} className="">
              <PlusCircle />
              Income
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>test</DialogTitle>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild className="min-w-full">
            <Button variant={'secondary'} className="min-w-auto">
              <MinusCircle />
              Expense
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Add Expense</DialogTitle>
            <DialogDescription>Here you can add an expense.</DialogDescription>
            <ExpenseForm />
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
