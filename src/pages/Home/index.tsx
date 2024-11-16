import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { selectAccessToken } from "../../redux/slices/auth.slice";
import Task from "./components/Task";
import { FaPlus } from "react-icons/fa6";
import { useMutation, useQuery } from "react-query";
import { createTask, getTasks, IPropsTask } from "../../services/task";
import { TaskType } from "../../types/task.type";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const token = useAppSelector(selectAccessToken);
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const { data, isLoading, refetch } = useQuery<{ tasks: TaskType[] }>(
    "getTasks",
    () => getTasks(token || "")
  );
  const { mutateAsync } = useMutation("createTask", createTask);

  useEffect(() => {
    if (data) setTasks(data.tasks);
  }, [data]);

  if (!token) {
    return <Navigate to="/" />;
  }

  const handleCreate = async () => {
    let titleInput: HTMLInputElement;
    let descriptionInput: HTMLInputElement;
    const res = await Swal.fire<IPropsTask>({
      title: "Create Form",
      html: `
        <input type="text" id="title" class="swal2-input" placeholder="Title">
        <input type="text" id="description" class="swal2-input" placeholder="Description">
      `,
      confirmButtonText: "Save",
      focusConfirm: false,
      didOpen: () => {
        const popup = Swal.getPopup()!;
        titleInput = popup.querySelector("#title") as HTMLInputElement;
        descriptionInput = popup.querySelector(
          "#description"
        ) as HTMLInputElement;
        titleInput.onkeyup = (event) =>
          event.key === "Enter" && Swal.clickConfirm();
        descriptionInput.onkeyup = (event) =>
          event.key === "Enter" && Swal.clickConfirm();
      },
      preConfirm: () => {
        const title = titleInput.value;
        const description = descriptionInput.value;
        if (!title || !description) {
          Swal.showValidationMessage(`Please enter title and description`);
        }

        return { title, description };
      },
    });
    try {
      await mutateAsync({
        description: res.value?.description || "",
        title: res.value?.title || "",
        token,
      });
      Swal.fire({
        title: "Listo",
        icon: "success",
      });
      refetch();
    } catch (err) {
      console.log(err);
      if (res.isConfirmed)
        Swal.fire({
          title: "Error!",
          icon: "error",
        });
    }
  };

  return (
    <div className="px-5 max-w-[800px] m-auto">
      <div className="pt-11 border-b-2 pb-5 px-5 sm:space-x-6 flex flex-col sm:flex-row sm:justify-between">
        <h1 className="text-5xl">Home</h1>
        <button
          onClick={handleCreate}
          className="px-6 flex justify-center items-center space-x-2 mt-2 mx-auto"
        >
          <p>Create new task</p> <FaPlus />
        </button>
      </div>

      <div>
        <div className="flex flex-col space-y-4 pt-7">
          {isLoading && <p>{"Loading..."}</p>}
          {tasks &&
            tasks.map((task: TaskType) => <Task {...task} refetch={refetch} />)}
        </div>
      </div>
    </div>
  );
}
