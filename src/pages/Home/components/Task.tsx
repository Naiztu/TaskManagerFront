import { FaRegTrashCan } from "react-icons/fa6";

export interface TaskProps {
  id: number;
  title: string;
  description: string;
}

export default function Task({ id, title, description }: TaskProps) {
  return (
    <div key={id} className="task">
      <h2>{title}</h2>
      <p>{description}</p>
      <button>
        <FaRegTrashCan />
      </button>
    </div>
  );
}
