import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/home");
  }
  
  return (
    <>
      <div className=" flex justify-center items-center min-h-[100vh] ">
        <form action="" className="card">
          <h1>Login</h1>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="flex flex-col space-y-3">
            <button onClick={handleSubmit}>Submit</button>
            <div className="link">
              <Link to="/register" replace={true}>
                Register here!
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
