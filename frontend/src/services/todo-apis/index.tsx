import api from "../axios";

const useTodadoApis = () => {
  const getTodoList = async () => {
    const response = await api.get("/tasks");
    return response.data;
  };

  const createTask = async (data: { title: string; description: string }) => {
    const response = await api.post("/tasks", data);
    return response.data;
  };

  const updateTask = async (
    id: number,
    data: { title: string; description: string }
  ) => {
    const response = await api.patch(`/tasks/${id}`, data);
    return response.data;
  };

  const deleteTask = async (id: number) => {
    const response = await api.delete(`/tasks/${id}`);
    return response.data;
  };

  return {
    getTodoList,
    createTask,
    updateTask,
    deleteTask,
  };
};

export default useTodadoApis;
