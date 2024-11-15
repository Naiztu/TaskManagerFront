import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <div className=" flex justify-center items-center min-h-[100vh] ">
        <form action="" className="card">
          <h1>Register</h1>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="flex flex-col space-y-3">
            <button type="submit">Submit</button>
            <div className="link">
              <Link to="/" replace={true}>
                Go back to login!
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
