import { todosTable } from "../db/schema";
import { CreateTodo, todoSchema, Todo, UpdateTodo } from "shared";
import { db } from "../db/connection";
import { eq } from "drizzle-orm";

export const getAll = async (): Promise<Todo[]> => {
  const rows = await db.select().from(todosTable);
  // Ensuring response conforms to the Todo schema
  const result = rows.map((row) => todoSchema.parse(row));
  return result;
};

// We may find or not find a todo by its ID
export const getTodoById = async (id: string): Promise<Todo | null> => {
  const [row] = await db.select().from(todosTable).where(eq(todosTable.id, id));
  if (!row) {
    return null;
  }
  const result = todoSchema.parse(row);
  return result;
};

export const createTodo = async (input: CreateTodo): Promise<Todo> => {
  const { title } = input;
  const [row] = await db
    .insert(todosTable)
    .values({ title: title })
    .returning();

  const result = todoSchema.parse(row);
  return result;
};

export const updateTodo = async (input: UpdateTodo): Promise<Todo | null> => {
  const { id, title, isCompleted } = input;
  const [row] = await db
    .update(todosTable)
    .set({ title, isCompleted })
    .where(eq(todosTable.id, id))
    .returning();
  if (!row) {
    return null;
  }
  const result = todoSchema.parse(row);
  return result;
};

export const deleteTodo = async (id: string): Promise<Todo | null> => {
  const [row] = await db
    .delete(todosTable)
    .where(eq(todosTable.id, id))
    .returning();
  if (!row) {
    return null;
  }
  const result = todoSchema.parse(row);
  return result;
};
