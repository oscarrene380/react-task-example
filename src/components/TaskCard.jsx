import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  function eliminar(id) {
    let q = confirm("¿Quiere eliminar la tarea? \n" + task.title);
    if (!q) return;
    deleteTask(task.id);
  }

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-2 rounded-md mt-4 hover:bg-red-400"
        onClick={eliminar}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
