import "./Signup.css";
import loginImage from "../../assets/password_223128.png";
import { ErrorBoundary } from "react-error-boundary";
import { useState } from "react";

function Signup(props) {
  const [username, setUsername] = useState("");
  const [authResults, setAuthResults] = useState("");

  function typingUsername(e) {
    setUsername(e.target.value);
  }
  async function handleSignup(formData) {
    const username = formData.get("username");
    const password = formData.get("password");
    const repeatPassword = formData.get("repeat_password");
    const fullname = formData.get("fullname");
    const email = formData.get("email");

    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
        headers: {
          "Content-type": "application/json",
        },
      });

      const result = await response.json();
      if (result.info) {
        setAuthResults(result.info.message);
      }

      localStorage.setItem("access_token", result.token);
    } catch (e) {
      throw new Error(`Sign up error: ${e.message}`);
    }
  }

  return (
    <ErrorBoundary
      fallback={<p>There was an error while submitting the form</p>}
    >
      <title>{`Signup | ${props.sitename}`}</title>
      <div className="flex sm:justify-center items-center h-full">
        <div className="grid grid-cols-1 xl:grid-cols-4">
          <div className="bg-white p-6 rounded-md xl:col-span-1 xl:col-start-3">
            <div className="mb-8 flex flex-col gap-2.5">
              <img
                src={loginImage}
                alt="signup icon"
                className="size-20 mx-auto"
              />
              <p className="uppercase text-blue-700 text-center font-bold">
                Sign up today to let others know your thoughts
              </p>
            </div>
            <form action={() => handleSignup()} className="flex flex-col">
              <div className="flex flex-col">
                <label htmlFor="username" className="text-zinc-500">
                  Username:
                </label>
                <div className="flex">
                  <span className="flex items-center h-[100%] border-1 border-r-0 rounded-l-md border-zinc-400 bg-icon-box">
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
                    className="p-1.5 w-full"
                    onChange={typingUsername}
                    value={username}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col mt-3">
                <label htmlFor="password" className="text-zinc-500">
                  Password:
                </label>
                <div className="flex">
                  <span className="flex items-center h-[100%] border-1 border-r-0 rounded-l-md border-zinc-400 bg-icon-box">
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
                    className="p-1.5 w-full"
                    required
                    minLength={8}
                    maxLength={30}
                  />
                </div>
              </div>
              <div className="flex flex-col mt-3">
                <label htmlFor="password" className="text-zinc-500">
                  Repeat Password:
                </label>
                <div className="flex">
                  <span className="flex items-center h-[100%] border-1 border-r-0 rounded-l-md border-zinc-400 bg-icon-box">
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
                    name="repeat_password"
                    id="repeat_password"
                    className="p-1.5 w-full"
                    required
                    minLength={8}
                    maxLength={30}
                  />
                </div>
              </div>

              <div className="flex flex-col mt-3">
                <label htmlFor="password" className="text-zinc-500">
                  Fullname:
                </label>
                <div className="flex">
                  <span className="flex items-center h-[100%] border-1 border-r-0 rounded-l-md border-zinc-400 bg-icon-box">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-9 fill-zinc-500 pl-2 pr-2"
                    >
                      <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                      <path
                        fillRule="evenodd"
                        d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>

                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    className="p-1.5 w-full"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col mt-3">
                <label htmlFor="password" className="text-zinc-500">
                  Email:
                </label>
                <div className="flex">
                  <span className="flex items-center h-[100%] border-1 border-r-0 rounded-l-md border-zinc-400 bg-icon-box">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-9 fill-zinc-500 pl-2 pr-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="p-1.5 w-full"
                    required
                  />
                </div>
              </div>

              {authResults && <p className="text-red-500">{authResults}</p>}
              <button type="submit" className="mt-5 bg-blue-700">
                Sign up now
              </button>
              <p className="text-black text-center">
                Have an account? <a href="/login">Login now</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default Signup;
