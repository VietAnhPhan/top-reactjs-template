import "./Login.css";
import loginImage from "../../assets/password_223128.png";

function Login() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-4">
      <div className="bg-white p-6 rounded-md xl:col-span-1 xl:col-start-3">
        <div className="mb-8 flex flex-col gap-2.5">
          <img src={loginImage} alt="login icon" className="size-14 mx-auto" />
          <p className="uppercase text-blue-700">
            XYZ Blog to share meaningful stories from top author
          </p>
        </div>
        <form action="/" method="post" className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-zinc-500">
              Username:
            </label>
            <div className="flex relative">
              <span className="absolute flex items-center h-[100%] border-r-1 border-zinc-400 bg-icon-box z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="size-9 fill-zinc-500 pl-2 pr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <input
                type="text"
                name="username"
                id="username"
                className="p-1.5 flex-1 pl-11 z-20"
              />
            </div>
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="password" className="text-zinc-500">
              Password:
            </label>
            <div className="flex relative">
              <span className="absolute flex items-center h-[100%] border-r-1 border-zinc-400 bg-icon-box z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-9 fill-zinc-500 pl-2 pr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <input
                type="password"
                name="password"
                id="password"
                className="p-1.5 flex-1 z-20 pl-11"
              />
            </div>
          </div>
          <button type="submit" className="mt-5">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
