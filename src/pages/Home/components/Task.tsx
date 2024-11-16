import { FaRegTrashCan } from "react-icons/fa6";
import { useMutation } from "react-query";
import { deleteTask } from "../../../services/task";
import { useAppSelector } from "../../../redux/hooks";
import { selectAccessToken } from "../../../redux/slices/auth.slice";
import Swal from "sweetalert2";

export interface TaskProps {
  id: number;
  title: string;
  description: string;
  refetch: () => void;
}

export default function Task({ id, title, description, refetch }: TaskProps) {
  const token = useAppSelector(selectAccessToken);
  const { mutateAsync } = useMutation("deleteTask", deleteTask);
  return (
    <div key={id} className="task">
      <h2>{title}</h2>
      <p>{description}</p>
      <button
        onClick={async () => {
          try {
            if (token) await mutateAsync({ token, id });
            Swal.fire({
              title: "Eliminado!",
              icon: "error",
            });
            refetch()
          } catch {
            Swal.fire({
              title: "Error!",
              icon: "question",
            });
          }
        }}
      >
        <FaRegTrashCan />
      </button>
    </div>
  );
}
