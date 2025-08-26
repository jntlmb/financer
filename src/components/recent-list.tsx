import { getItems } from '@/lib/items';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default async function RecentList() {
  const items = await getItems();

  return (
    <Table className="md:max-w-3/4 mx-auto">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Date</TableHead>
          <TableHead className="">Item</TableHead>
          <TableHead>Category</TableHead>

          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.items.id}>
            <TableCell>
              {item.items.createdAt?.toLocaleString().split(',')[0]}
            </TableCell>
            <TableCell className="font-semibold capitalize">
              {item.items.name}
            </TableCell>
            <TableCell className="capitalize">{item.items.category}</TableCell>
            <TableCell className="text-right">${item.items.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
