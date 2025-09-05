'use server';

import { db } from '@/db/db';
import { items, users } from '@/db/schema';
import { sql, eq } from 'drizzle-orm';

export async function getUser() {
  try {
    const user = await db.select().from(users);
    return user;
  } catch (error) {
    throw error;
  }
}
