'use server';

import { db } from '@/db/db';
import { items } from '@/db/schema';
import { sql } from 'drizzle-orm';

export async function getItems() {
  try {
    const fetchedItems = await db.select().from(items);
    return fetchedItems;
  } catch (error) {
    throw error;
  }
}

export async function getItem(id: number) {
  try {
    const fetchedItem = await db
      .select()
      .from(items)
      .where(sql`${items.id} = ${id}`);
    return fetchedItem;
  } catch (error) {
    throw error;
  }
}

// export default async function createItem() {}

// export default async function updateItem() {}

// export default async function deleteItem() {}
