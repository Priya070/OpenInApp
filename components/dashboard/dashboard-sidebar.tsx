import {
  PieChart,
  Tags,
  CalendarClock,
  UserCircle,
  Settings,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import NavigationItem from "./dashborad-navigation-item";

const Items = [
  {
    id: 1,
    label: "Dashboard",
    path: "/dashboard",
    icon: <PieChart className="h-4 w-4 mr-2" />,
  },
  {
    id: 2,
    label: "Transactions",
    path: "/transactions",
    icon: <Tags className="h-4 w-4 mr-2" />,
  },
  {
    id: 3,
    label: "Schedules",
    path: "/schedules",
    icon: <CalendarClock className="h-4 w-4 mr-2" />,
  },
  {
    id: 4,
    label: "Users",
    path: "/users",
    icon: <UserCircle className="h-4 w-4 mr-2" />,
  },
  {
    id: 5,
    label: "Settings",
    path: "/settings",
    icon: <Settings className="h-4 w-4 mr-2" />,
  },
];

const NavigationSidebar = () => {
  return (
    <div className="p-6 h-full w-full text-white">
      <div className="flex flex-col justify-between bg-gradient-to-b from-[#4285F4] to-[#3C83F9] h-full rounded-[20px] px-6 py-6">
        <div className="flex flex-col flex-1 p-2 py-4">
          <h1 className="font-semibold text-3xl mb-8">Board.</h1>
          {Items.map((item) => (
            <div key={item.id} className="mb-4">
              <NavigationItem
                label={item.label}
                icon={item.icon}
                path={item.path}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start">
          <Button variant="link" className="text-white text-xs">
            Help
          </Button>
          <Button variant="link" className="text-white text-xs">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavigationSidebar;
