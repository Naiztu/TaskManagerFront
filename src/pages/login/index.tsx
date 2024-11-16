import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { login } from "../../services/auth";
import { useAppDispatch } from "../../redux/hooks";
import { setAccessToken, setUser } from "../../redux/slices/auth.slice";
import { useRef } from "react";
import Swal from "sweetalert2";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useMutation("login", login);
  const refEmail = useRef<HTMLInputElement>(null);
  const refPassword = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    const email = refEmail.current?.value || null;
    const password = refPassword.current?.value || null;

    if (!email || !password) {
      await Swal.fire({
        title: "Password or email is empty",
        text: "Verify your email and password",
        icon: "error",
      });
    } else
      try {
        const response = await mutateAsync({
          email,
          password,
        });

        dispatch(setUser(response.user));
        dispatch(setAccessToken(response.token));
        navigate("/home");
      } catch (error) {
        console.error(error);
        await Swal.fire({
          title: "Error",
          text: "Invalid email or password",
          icon: "error",
        });
      }
  };

  return (
    <>
      <div className=" flex justify-center items-center min-h-[100vh] ">
        <div  className="card">
          <h1>Login</h1>
          <input type="text" placeholder="Email" ref={refEmail} />
          <input type="password" placeholder="Password" ref={refPassword} />
          <div className="flex flex-col space-y-3">
            <button onClick={handleSubmit} disabled={isLoading}>
              Submit
            </button>
            <div className="link">
              <Link to="/register" replace={true}>
                Register here!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
