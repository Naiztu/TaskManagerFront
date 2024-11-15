import Task from "./components/task";
import { FaPlus } from "react-icons/fa6";

export default function Home() {
  const tasks = [
    {
      id: 1,
      title: "Task 1",
      description: "Description 1",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description 2",
    },
    {
      id: 3,
      title: "Task 3",
      description: "Description 3",
    },
  ];
  return (
    <div className="px-5 max-w-[800px] m-auto">
      <div className="pt-11 border-b-2 pb-5 px-5 sm:space-x-6 flex flex-col sm:flex-row sm:justify-between">
        <h1 className="text-5xl">Home</h1>
        <button className="px-6 flex justify-center items-center space-x-2 mt-2 mx-auto">
          <p>Create new task</p> <FaPlus />
        </button>
      </div>

      <div>
        <div className="flex flex-col space-y-4 pt-7">
          {tasks.map((task) => (
            <Task {...task} />
          ))}
        </div>
      </div>
    </div>
  );
}
