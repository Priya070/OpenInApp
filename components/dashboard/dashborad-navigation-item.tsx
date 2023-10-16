"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

interface NavigationItemProps {
  label: string;
  icon: React.ReactNode;
  path: string;
}

const NavigationItem = ({ label, icon, path }: NavigationItemProps) => {
  const router = useRouter();
  const Origpath = usePathname();

  return (
    <button
      className={cn(
        "group relative flex items-center px-2 py-2 rounded-md gap-x-2 w-full text-zinc-200/95 hover:bg-indigo-200/10 transition",
        Origpath === path && "text-white"
      )}
    >
      {icon} {label}
    </button>
  );
};

export default NavigationItem;
