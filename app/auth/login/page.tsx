"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      username: username,
      password: pass,
      redirect: false,
      callbackUrl: "/",
    });

    if (result?.error) {
      console.error("Login failed:", result.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="w-screen h-screen">
      <img
        src="/assets/photos/login-bg.png"
        className="h-screen w-screen object-cover"
      />
      <div className="overlay absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-[#0e0e0ebc]">
        <div className="mx-4 grid h-full max-h-[500px] w-full max-w-[1000px] grid-cols-1 overflow-hidden rounded-[10px] md:mx-3 md:grid-cols-2">
          <div>
            <div className="flex h-full max-h-[500px] flex-col items-start justify-center bg-grey px-4">
              <div className="mx-auto mb-[25px] flex w-full max-w-[360px] items-center gap-4">
                <img src="/assets/photos/din.png" className="max-h-[100px]" />
                <h4 className="text-[24px] font-semibold">Nəqliyyat sistemi</h4>
              </div>
              <form
                className="auth-box mx-auto w-full max-w-[360px]"
                onSubmit={onSubmit}
              >
                <div className="relative w-full">
                  <label className="pointer-events-none absolute left-[4.5%] top-6 translate-y-[-50%] cursor-pointer text-sm font-semibold text-gray-700">
                    User Name
                  </label>
                  <input
                    className="text-md placeholder:text-md focus:border-primary mb-6 w-full rounded-lg border-[1px] border-transparent px-4 pb-3 pt-8 text-black shadow-md !outline-none duration-300 hover:border-[#b3b3b3] disabled:bg-[#f2f2f2]"
                    type="text"
                    value={username}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setUsername(e.target.value)
                    }
                    required
                    placeholder="Xidməti vəsiqə nömrəsini daxil edin"
                  />
                </div>

                <div className="relative w-full">
                  <label className="pointer-events-none absolute left-[4.5%] top-6 translate-y-[-50%] cursor-pointer text-sm font-semibold text-gray-700">
                    Password
                  </label>
                  <input
                    className="text-md placeholder:text-md focus:border-primary mb-6 w-full rounded-lg border-[1px] border-transparent px-4 pb-3 pt-8 text-black shadow-md !outline-none duration-300 hover:border-[#b3b3b3] disabled:bg-[#f2f2f2]"
                    type="password"
                    value={pass}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPass(e.target.value)
                    }
                    required
                    placeholder="Şifrəni daxil et"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blackWhite px-4 py-4 text-lg text-white duration-300 hover:bg-black"
                >
                  Daxil ol
                </button>
              </form>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex h-full flex-col items-center justify-center bg-blue-950">
              <img src="/assets/photos/login-logo.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
