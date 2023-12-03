import Link from "next/link";
import { useState } from "react";
import { errToast, successToast } from "./../../utils/toast";
import { useRouter } from "next/router";
import axios from "axios";
import { useStore } from "../../lib/store/store";
export default function Example() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const register = useStore((state) => state.register);
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSignUpHandler = async (e) => {
    try {
      e.preventDefault();
      setLoader(true);
      setFormData({ ...formData, [e.target.name]: e.target.value });
      const resp = await axios.post("/api/auth/register", { ...formData });
      console.log(
        "🚀 ~ file: index.jsx:23 ~ onSignUpHandler ~ resp:",
        resp.data.data
      );
      if (resp.data.status !== 200) {
        return errToast(resp.data.message);
        if (resp.data.status === 400) {
          return router.push("/register");
        }
      }
      register(resp.data.data);
      router.push("/");
      return successToast(resp.data.message);
    } catch (error) {
      errToast(error.message);
    } finally {
      setLoader(false);
    }
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name{" "}
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={onChangeHandler}
                  required
                  value={formData.name}
                  className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={onChangeHandler}
                  value={formData.email}
                  autoComplete="email"
                  required
                  className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={onChangeHandler}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={onSignUpHandler}
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              href="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              <span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer">
                Login
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
