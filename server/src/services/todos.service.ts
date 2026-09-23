import { todosTable } from "../db/schema";
import { CreateTodo, todoSchema, Todo, UpdateTodo } from "shared";
import { db } from "../db/connection";
import { eq } from "drizzle-orm";

/**
 * Retrieves all todo items from the database.
 * Each row is validated against the Todo schema before being returned.
 *
 * @returns A promise that resolves to an array of Todo objects.
 */
export const getAllTodos = async (): Promise<Todo[]> => {
  const rows = await db.select().from(todosTable);
  // Ensuring response conforms to the Todo schema
  const result = rows.map((row) => todoSchema.parse(row));
  return result;
};

/**
 * Retrieves a single todo item by its unique identifier.
 *
 * @param id - The unique ID of the todo to retrieve.
 * @returns A promise that resolves to the Todo object if found, or null if no todo exists with the given ID.
 */
export const getTodoById = async (id: string): Promise<Todo | null> => {
  const [row] = await db.select().from(todosTable).where(eq(todosTable.id, id));
  if (!row) {
    return null;
  }
  const result = todoSchema.parse(row);
  return result;
};

/**
 * Creates a new todo item in the database.
 *
 * @param input - The data for the new todo, containing at minimum a title.
 * @returns A promise that resolves to the newly created Todo object.
 */
export const createTodo = async (input: CreateTodo): Promise<Todo> => {
  const { title } = input;
  const [row] = await db
    .insert(todosTable)
    .values({ title: title })
    .returning();

  const result = todoSchema.parse(row);
  return result;
};

/**
 * Updates an existing todo item in the database.
 * Only the provided fields (title, isCompleted) will be modified.
 *
 * @param input - The update data, including the todo's ID and the fields to change.
 * @returns A promise that resolves to the updated Todo object, or null if no todo exists with the given ID.
 */
export const updateTodo = async (
  id: string,
  input: UpdateTodo,
): Promise<Todo | null> => {
  const { title, isCompleted } = input;
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

/**
 * Deletes a todo item from the database by its unique identifier.
 *
 * @param id - The unique ID of the todo to delete.
 * @returns A promise that resolves to the deleted Todo object, or null if no todo exists with the given ID.
 */
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
