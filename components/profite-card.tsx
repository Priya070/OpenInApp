import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Badge } from "./ui/badge";

interface ProfitCardProps {
  id: number;
  label: string;
  value: string;
  profit: string;
  icon: LucideIcon;
}
export default function ProfitCard({
  id,
  label,
  value,
  profit,
  icon,
}: ProfitCardProps) {
  const Icon = icon;

  return (
    <div className="flex flex-col gap-y-2 border-2 shadow-md rounded-xl p-4 w-full max-w-[280px] min-h-[120px]">
      <div
        className={cn(
          "h-8 w-8 flex items-center justify-center rounded-full p-1",
          id === 1
            ? "bg-profit-1"
            : id === 2
            ? "bg-profit-2"
            : id === 3
            ? "bg-profit-3"
            : "bg-profit-4"
        )}
      >
        <Icon className=" h-5 w-5" />
      </div>
      <p className="text-xs">{label}</p>
      <div className="flex items-center justify-between gap-2 w-full">
        <p className="font-semibold text-xl">{value}</p>
        <Badge variant="secondary" className="bg-[#e9f9eb] text-[#3cc952]">
          {profit}
        </Badge>
      </div>
    </div>
  );
}
