"use client";

import { Github } from "lucide-react";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Google from "@/public/google.svg";
import Apple from "@/public/apple.svg";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SignInPage = () => {
  const { status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status])


  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="relative h-full w-full p-6 text-white after:absolute after:h-full after:w-full after:block after:bg-blue-500 after:top-0 after:left-0 after:-z-10 after:origin-top-left after:-skew-x-6">
        <div className="flex flex-col h-full">
          <div className="font-semibold text-2xl">LOGO</div>
          <div className="flex items-center justify-center p-4 text-5xl font-bold flex-1">
            Board.
          </div>
          <div className="flex items-center px-3 justify-center gap-x-6">
            <Github className="h-6 w-6 p-1 bg-white rounded-full fill-blue-500 stroke-blue-500 stroke-1" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-blue-500 bg-white rounded-full p-1"
              viewBox="0 0 512 512"
            >
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-white"
              viewBox="0 0 448 512"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-white"
              viewBox="0 0 640 512"
            >
              <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-[#f8faff] justify-center relative h-full w-full p-6 after:absolute after:h-full after:w-full after:block after:bg-[#f8faff] after:top-0 after:left-0 after:-z-10 after:origin-top-left after:-skew-x-6">
        <div className="flex flex-col items-start justify-center gap-4 h-fit w-full max-w-[390px]">
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-2xl">Sign In</h1>
            <p className="text-sm">Sign in to your account</p>
          </div>
          <div className="flex justify-between w-full gap-2">
            <Button
              variant="ghost"
              className="bg-white text-zinc-400 flex items-center text-xs"
              onClick={() => signIn("google")}
            >
              <Image className="h-4 w-4 mr-2" alt="google_icon" src={Google} />
              Sign in with Google
            </Button>
            <Button
              variant="ghost"
              className="bg-white text-zinc-400 flex items-center text-xs"
            >
              <Image className="h-4 w-4 mr-2" alt="google_icon" src={Apple} />
              Sign in with Apple
            </Button>
          </div>
          <div className="bg-white rounded-md flex flex-col gap-4 flex-1 w-full h-full p-6">
            <div className="flex flex-col gap-1 items-start">
              <p className="text-md">Email address</p>
              <Input
                className="bg-zinc-100 border-none outline-none rounded-md"
                placeholder="johndoe@gmail.com"
              />
            </div>
            <div className="flex flex-col gap-1 items-start">
              <p className="text-md">Password</p>
              <Input
                className="bg-zinc-100 border-none outline-none rounded-md"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <p className="mt-1 text-indigo-500">Forgot password?</p>
            <Button className="bg-indigo-500 text-white">Sign In</Button>
          </div>
          <div className="text-center text-sm text-zinc-400 w-full">
            Don&#39;t have an accout?{" "}
            <span className="text-indigo-500">Register here</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
