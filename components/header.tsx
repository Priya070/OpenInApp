"use client";

import { useSession, signOut } from "next-auth/react";
import { Search, Bell, LogOut } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useRouter } from "next/navigation";

export default function Heading() {
  const { status, data } = useSession();

  const router = useRouter();

  const onClick = async () => {
    await signOut();
    router.push("/sign-in")
  }

  return (
    <div className="flex items-center justify-between w-full">
      <h1 className="font-semibold text-xl">Dashboard</h1>
      <div className="flex gap-2 items-center">
        <div className="flex items-center w-70 rounded-2xl bg-white px-4">
          <Input
            placeholder="Search..."
            className="text-zinc-400 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Search className="h-4 w-4 text-zinc-400" />
        </div>
        <Bell />
        {status === "authenticated" && (
          <LogOut onClick={onClick} className="cursor-pointer" />
        )}
        <Avatar>
          <AvatarImage src={data?.user?.image!} />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
