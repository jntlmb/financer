'use server';

import { db } from '@/db/db';
import { transactions, users, Transaction } from '@/db/schema';
import { sql } from 'drizzle-orm';

export async function getTransactions() {
  try {
    const data = await db.select().from(transactions);

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getTransaction(id: number) {
  try {
    const data = await db
      .select()
      .from(transactions)
      .where(sql`${transactions.id} = ${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export type TransactionInsert = Omit<
  Transaction,
  'id' | 'createdAt' | 'updatedAt' | 'userId'
>;

export async function addExpense(data: TransactionInsert) {
  try {
    await db.insert(transactions).values({
      ...data,
      userId: 1,
    });
  } catch (error) {
    throw error;
  }
}
