'use server';

import { db } from '@/db/db';
import { items, users } from '@/db/schema';
import { sql, eq } from 'drizzle-orm';

export async function getItems() {
  try {
    const fetchedItems = await db
      .select()
      .from(items)
      .leftJoin(users, eq(items.userId, users.id));

    console.log(fetchedItems);
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
