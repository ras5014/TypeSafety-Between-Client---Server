import axios from "axios";

export const getTasks = async () => {
  const response = await axios.get("http://localhost:3000/api/tasks");
  return response.data;
};

export const addTask = async (title: string) => {
  const response = await axios.post("http://localhost:3000/api/tasks", {
    title,
  });
  return response.data;
};

export const deleteTask = async (id: number) => {
  const response = await axios.delete(`http://localhost:3000/api/tasks/${id}`);
  return response.data;
};
