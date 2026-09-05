import { todosTable } from "../db/schema";
import { Todo, CreateTodoInput, UpdateTodoInput } from "shared";
import { db } from "../db/connection";
import { eq } from "drizzle-orm";

function toTodo(row: typeof todosTable.$inferSelect): Todo {
  return {
    id: row.id,
    title: row.title,
    isCompleted: row.isCompleted,
  };
}

export const todosService = {
  getAll: async (): Promise<Todo[]> => {
    const rows = await db.select().from(todosTable);
    return rows.map(toTodo);
  },

  getById: async (id: string): Promise<Todo | undefined> => {
    const [row] = await db
      .select()
      .from(todosTable)
      .where(eq(todosTable.id, id));

    return row ? toTodo(row) : undefined;
  },

  create: async (input: CreateTodoInput): Promise<Todo> => {
    const { title } = input;
    const [row] = await db
      .insert(todosTable)
      .values({ title: title })
      .returning();

    return toTodo(row);
  },
};
