'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { z } from 'zod';

import { createInsertSchema } from 'drizzle-zod';
import { transactions, Transaction } from '@/db/schema';
import { addExpense, TransactionInsert } from '@/server/transactions';

import { capitalize } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loader2Icon } from 'lucide-react';
import { toast } from 'sonner';

// const formSchema = createInsertSchema(transactions, {
//   title: z
//     .string()
//     .min(2, {
//       message: 'Name must be at least 2 characters long',
//     })
//     .transform((s) => capitalize(s)),
//   amount: z.string().min(1, {
//     message: 'Please enter a price',
//   }),
//   category: z.string().nonempty('Please choose a category'),
// });

const formSchema = createInsertSchema(transactions, {
  title: z.string().min(2, {
    message: 'Name must be at least 2 characters long',
  }),
  amount: z
    .string()
    .min(1, { message: 'Please enter a price' })
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
      message: 'Please enter a valid positive number',
    }),
  category: z.string().min(1, 'Please choose a category'),
  transactionType: z.string(),
});

export default function ExpenseForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      transactionType: 'expense',
      title: '',
      amount: '',
      category: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    console.log('funktioniert bis hier hin');

    try {
      const expenseData: TransactionInsert = {
        transactionType: 'expense',
        title: capitalize(values.title),
        category: values.category as Transaction['category'],
        amount: values.amount,
      };
      await addExpense(expenseData);

      form.reset();

      toast.success('Item created successfully');
      router.refresh();
      setIsLoading(false);
    } catch (error) {
      toast.error('Failed to create item');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expense</FormLabel>
              <FormControl>
                <Input placeholder="Bread" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between gap-4 items-center">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="$4.99"
                    {...field}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="housing">Housing</SelectItem>
                      <SelectItem value="food">Food</SelectItem>
                      <SelectItem value="health">Health</SelectItem>
                      <SelectItem value="entertainment">
                        Entertainment
                      </SelectItem>
                      <SelectItem value="shopping">Shopping</SelectItem>
                      <SelectItem value="savings">Savings</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="travel">Travel</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* <div className="border p-4 space-y-2">
          <h3>Debug Info:</h3>
          <Button
            type="button"
            onClick={() =>
              console.log('Direct button works!', form.getValues())
            }
            variant="outline"
          >
            Test Button (Direct)
          </Button>
          <Button
            type="button"
            onClick={() => {
              console.log('Form values:', form.getValues());
              console.log('Form errors:', form.formState.errors);
              console.log('Form valid:', form.formState.isValid);
            }}
            variant="outline"
          >
            Log Form State
          </Button>
        </div> */}

        {!isLoading ? (
          <Button type="submit">Submit</Button>
        ) : (
          <Button disabled={isLoading}>
            <Loader2Icon className="animate-spin" />
            Submitting...
          </Button>
        )}
      </form>
    </Form>
  );
}
