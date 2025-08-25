import {
  decimal,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';

export const categoryEnum = pgEnum('category', [
  'income',
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

export const items = pgTable('items', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  category: categoryEnum().notNull(),
  price: decimal('price').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export type Item = typeof items.$inferSelect;
