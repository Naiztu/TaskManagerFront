import { Link, useNavigate } from "react-router-dom";
import { register } from "../../services/auth";
import { useMutation } from "react-query";
import { useRef } from "react";
import Swal from "sweetalert2";
import Logo from "../../assets/logo.png";

export default function Register() {
  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useMutation("signup", register);
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
        await mutateAsync({
          email,
          password,
        });

        await Swal.fire({
          title: "Success",
          text: "User created successfully",
          icon: "success",
        });
        navigate("/");
      } catch (error) {
        console.error(error);
        await Swal.fire({
          title: "Error",
          text: "There was an error",
          icon: "error",
        });
      }
  };

  return (
    <>
      <div className=" flex justify-center items-center min-h-[100vh] ">
        <div className="card">
          <img src={Logo} className="shadow-img" />
          <input type="text" placeholder="Email" ref={refEmail} />
          <input type="password" placeholder="Password" ref={refPassword} />
          <div className="flex flex-col space-y-3">
            <button onClick={handleSubmit} disabled={isLoading}>
              Submit
            </button>
            <div className="link">
              <Link to="/" replace={true}>
                Go back to login!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
