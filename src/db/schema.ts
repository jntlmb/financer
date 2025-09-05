import {
  decimal,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  integer,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

import { createInsertSchema } from 'drizzle-zod';

export const categoryEnum = pgEnum('category', [
  'housing',
  'food',
  'health',
  'entertainment',
  'shopping',
  'savings',
  'education',
  'travel',
  'other',
]);

export const transactionTypeEnum = pgEnum('transaction_type', [
  'income',
  'expense',
]);

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  username: text('username').notNull(),
  balance: decimal('balance').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const transactions = pgTable('transactions', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  transactionType: transactionTypeEnum().notNull(),
  category: categoryEnum().notNull(),
  amount: decimal('amount').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
  userId: integer('user_id'),
});

export const transactionInsertSchema = createInsertSchema(transactions);

export const usersRelations = relations(users, ({ many }) => ({
  transactions: many(transactions),
}));

export const transactionsRelations = relations(transactions, ({ one }) => ({
  user: one(users, {
    fields: [transactions.userId],
    references: [users.id],
  }),
}));

export type User = typeof users.$inferSelect;
export type Transaction = typeof transactions.$inferSelect;
