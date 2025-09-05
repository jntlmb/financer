import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Transaction } from '@/db/schema';

import { capitalize } from '@/lib/utils';

interface ComponentProps {
  data: Transaction[];
}

export default function TransactionList({ data }: ComponentProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Recent Transactions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            {data
              .slice(-5)
              .toReversed()
              .map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.title}</TableCell>
                  <TableCell>{capitalize(transaction.category)}</TableCell>
                  {transaction.transactionType === 'expense' ? (
                    <TableCell className="text-right font-semibold">
                      -${transaction.amount}
                    </TableCell>
                  ) : (
                    <TableCell className="text-right font-semibold">
                      +${transaction.amount}
                    </TableCell>
                  )}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
