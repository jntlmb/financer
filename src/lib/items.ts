'use server';

import { db } from '@/db/db';
import { items } from '@/db/schema';

export default async function getItems() {
  try {
    const fetchedItems = await db.select().from(items);
    console.log(fetchedItems);
    return fetchedItems;
  } catch (error) {
    throw error;
  }
}

// export default async function createItem() {}

// export default async function updateItem() {}

// export default async function deleteItem() {}
