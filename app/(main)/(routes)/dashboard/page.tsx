"use client";

import BarChart from "@/components/charts/barChart";
import PieChart from "@/components/charts/pieChart";
import Heading from "@/components/header";
import ProfitCard from "@/components/profite-card";
import { dashboardData } from "@/constants";
import { Instagram, MailIcon, Plus, YoutubeIcon } from "lucide-react";
import { useEffect, useState } from "react";

import Youtube from "@/public/twitter.svg";
import Insta from "@/public/insta.svg";
import Whatsapp from "@/public/whatsapp.svg";
import Mail from "@/public/Mail.svg";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Title } from "@tremor/react";

const DashboardPage = () => {
  const [open, setOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("basic");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [insta, setInsta] = useState("");
  const [youtube, setYoutube] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const hasData: boolean = !!name && !!email && !!phone && !!insta && !!youtube;

  const onClick = () => {
    setOpen(true);
  };

  return (
    <div className="p-6 text-black flex flex-col items-center gap-4">
      <Heading />
      <div className="flex justify-between gap-4 flex-wrap w-full h-full">
        {dashboardData.map((data) => (
          <ProfitCard
            key={data.id}
            id={data.id}
            label={data.label}
            icon={data.icon}
            profit={data.profit}
            value={data.value}
          />
        ))}
      </div>
      <div className="w-full">
        <BarChart />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-[252px] w-full gap-4">
        <PieChart />
        <Card className="h-full w-full min-h-[252px] flex items-center justify-center">
          {!hasData && (
            <div
              onClick={onClick}
              className="flex flex-col items-center gap-2 group transition-all cursor-pointer"
            >
              <Plus className="text-zinc-300 rounded-full bg-zinc-100 h-12 w-12 p-2 group-hover:text-zinc-400 group-hover:bg-zinc-200/50" />
              <p className="text-sm text-zinc-400 group-hover:text-zinc-500/70">
                Add Profile
              </p>
            </div>
          )}
          {hasData && (
            <div className="flex flex-col items-start p-6">
              <Title>{name}</Title>
              <div className="grid grid-cols-2 gap-12 mt-6 w-full">
                <p className="underline flex gap-2 items-center">
                  <div className="h-7 w-7 rounded-full flex items-center justify-between bg-[#e9f9eb] p-1">
                    <svg
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="svgviewer-output 1">
                        <path
                          id="Vector"
                          d="M1.24686 15.2892L1.24692 15.2891L2.28127 12.2462C1.46158 10.8627 1.12156 9.24676 1.31482 7.64943C1.50995 6.03671 2.23755 4.53517 3.38238 3.38264L3.38277 3.38225C4.74209 2.02896 6.5821 1.2692 8.5002 1.2692C10.4183 1.2692 12.2583 2.02896 13.6176 3.38225L13.6183 3.38291C14.8165 4.59839 15.5479 6.19737 15.6839 7.89875C15.8199 9.60012 15.3518 11.295 14.3618 12.6854C13.3719 14.0757 11.9235 15.0726 10.2712 15.5008C8.62973 15.9262 6.89145 15.7631 5.35813 15.0406L1.66646 15.77L1.65686 15.7719H1.64707L1.59421 15.7719L1.59395 15.7719M1.24686 15.2892L1.59395 15.6719V15.7719M1.24686 15.2892C1.22826 15.3443 1.22306 15.403 1.23169 15.4605C1.24032 15.518 1.26254 15.5726 1.2965 15.6198C1.33046 15.667 1.37518 15.7054 1.42696 15.7319C1.47866 15.7583 1.5359 15.772 1.59395 15.7719M1.24686 15.2892L1.59395 15.7719M5.40627 14.2836L5.39233 14.2835L5.3789 14.2872L5.33468 14.2995L2.1454 14.9343L3.03521 12.3124C3.03524 12.3123 3.03527 12.3122 3.0353 12.3122C3.05308 12.2604 3.05904 12.2054 3.05272 12.151C3.0464 12.0967 3.02795 12.0444 2.99874 11.9981C2.20966 10.7443 1.86809 9.26032 2.0296 7.78767C2.19111 6.31511 2.84614 4.94053 3.88813 3.88754C4.49373 3.28186 5.21271 2.80139 6.00401 2.47358C6.79539 2.14573 7.6436 1.97699 8.5002 1.97699C9.3568 1.97699 10.205 2.14573 10.9964 2.47358C11.7877 2.80139 12.5067 3.28186 13.1123 3.88754C14.202 4.98514 14.8664 6.4342 14.987 7.97621C15.1075 9.51825 14.6763 11.053 13.7703 12.3066C12.8642 13.5602 11.5423 14.4512 10.0403 14.8205C8.53849 15.1899 6.95428 15.0137 5.57027 14.3235C5.51946 14.2976 5.4633 14.2839 5.40627 14.2836Z"
                          fill="none"
                          stroke="#3CC952"
                          stroke-width="0.6"
                        />
                        <path
                          id="Vector_2"
                          d="M10.1494 12.3183L10.1494 12.3182C9.42103 12.2386 8.60837 11.8414 7.92168 11.4099C7.23293 10.9772 6.65743 10.5014 6.40082 10.2502L6.40006 10.2495C6.14824 9.99764 5.67155 9.42175 5.23857 8.7318C4.80679 8.04375 4.40954 7.22838 4.33135 6.4999L4.43077 6.48923M10.1494 12.3183L6.87718 4.33235M10.1494 12.3183L10.1549 12.3186C10.2396 12.3232 10.3244 12.3232 10.4091 12.3187C10.7956 12.3048 11.1746 12.2084 11.5207 12.0358C11.8669 11.8632 12.1721 11.6184 12.4158 11.318M10.1494 12.3183L12.4158 11.318M4.43077 6.48923L4.33136 6.50002C4.20356 5.32206 4.98924 4.52719 5.32479 4.24298C5.4912 4.10016 5.70577 4.0261 5.92484 4.03587L6.64145 4.05975L6.64182 4.05977C6.71401 4.06244 6.78379 4.08644 6.84236 4.12874C6.90087 4.17099 6.94556 4.22962 6.97081 4.29724M4.43077 6.48923C4.58218 7.8997 5.97937 9.68735 6.47077 10.1788L5.92093 4.13579C5.72697 4.127 5.53696 4.19256 5.38968 4.31907C5.06031 4.59798 4.30859 5.36298 4.43077 6.48923ZM6.97081 4.29724C6.97083 4.2973 6.97086 4.29736 6.97088 4.29742L6.87718 4.33235M6.97081 4.29724C6.97079 4.29717 6.97076 4.29711 6.97074 4.29705L6.87718 4.33235M6.97081 4.29724C7.05076 4.50911 7.21991 4.96728 7.36923 5.41856C7.44388 5.64417 7.51394 5.86917 7.56545 6.06133C7.6159 6.24951 7.65187 6.41774 7.65187 6.52376C7.65187 6.71419 7.56744 6.87706 7.4584 7.01533C7.35014 7.15261 7.21014 7.27473 7.08674 7.38238L7.08636 7.38271L7.08539 7.38355L7.08538 7.38355C7.05172 7.41216 7.0119 7.44716 6.97751 7.47935M6.87718 4.33235C7.03656 4.7547 7.55187 6.15985 7.55187 6.52376C7.55187 6.84251 7.27031 7.08954 7.02062 7.30735C6.96749 7.35251 6.89577 7.41626 6.85327 7.46142M6.97751 7.47935C6.96523 7.45743 6.95306 7.43546 6.941 7.41341L6.85327 7.46142M6.97751 7.47935C6.95789 7.4977 6.94004 7.51514 6.92609 7.52995L6.85327 7.46142M6.97751 7.47935C7.23387 7.93693 7.53735 8.36654 7.88304 8.76118M6.85327 7.46142C7.12174 7.95204 7.4433 8.41167 7.81218 8.83204M7.81218 8.83204L7.87813 8.75687C7.87977 8.75831 7.8814 8.75974 7.88304 8.76118M7.81218 8.83204C8.23259 9.20087 8.69222 9.52243 9.18281 9.79095M7.81218 8.83204L7.88735 8.76608C7.88591 8.76445 7.88448 8.76281 7.88304 8.76118M7.88304 8.76118C8.27739 9.10653 8.70662 9.4098 9.16376 9.66608M9.18281 9.79095L9.1121 9.72024C9.12742 9.70491 9.14517 9.68618 9.16376 9.66608M9.18281 9.79095C9.22466 9.7491 9.28248 9.68442 9.32667 9.635C9.33016 9.6311 9.33357 9.6273 9.33687 9.6236M9.18281 9.79095L9.23082 9.70323C9.2084 9.69096 9.18604 9.67857 9.16376 9.66608M9.16376 9.66608C9.19337 9.63405 9.22512 9.59855 9.25264 9.56778C9.25579 9.56426 9.25888 9.56079 9.26191 9.5574M9.33687 9.6236L9.26151 9.55787L9.26191 9.5574M9.33687 9.6236C9.55468 9.37392 9.80171 9.09235 10.1337 9.09235C10.4977 9.09235 11.9028 9.60767 12.3252 9.76704M9.33687 9.6236L9.26234 9.55692C9.2622 9.55708 9.26206 9.55724 9.26191 9.5574M9.26191 9.5574L9.26199 9.55731C9.3696 9.43397 9.49185 9.29382 9.63104 9.18544C9.77165 9.07596 9.9376 8.99235 10.1337 8.99235C10.2398 8.99235 10.408 9.02833 10.5962 9.07877C10.7883 9.13028 11.0133 9.20035 11.2389 9.27499C11.6904 9.42435 12.1487 9.59356 12.3605 9.67348M12.3252 9.76704L12.3601 9.67334C12.3602 9.67339 12.3603 9.67343 12.3605 9.67348M12.3252 9.76704L12.3605 9.67348M12.3252 9.76704L12.4158 11.318M12.3605 9.67348C12.428 9.69874 12.4865 9.74341 12.5288 9.80186C12.5711 9.86043 12.5951 9.93021 12.5977 10.0024L12.5978 10.0028L12.6217 10.72L12.6217 10.7205C12.6278 10.938 12.5546 11.1504 12.4158 11.318M7.02709 9.82836L6.93014 9.72906C6.71638 9.51012 6.2823 8.98643 5.88513 8.36169C5.48637 7.73447 5.13456 7.02028 5.06941 6.41739L5.0694 6.41723C4.97969 5.59991 5.54549 5.01955 5.80637 4.80016C5.83714 4.77572 5.87562 4.76301 5.91492 4.76433L6.38076 4.78063C6.60376 5.34529 6.78557 5.92537 6.92476 6.51633C6.92049 6.52365 6.91412 6.53315 6.9052 6.54482C6.88375 6.57287 6.85318 6.60622 6.81743 6.64198C6.75824 6.70117 6.69145 6.76048 6.64066 6.80559C6.6301 6.81496 6.62024 6.82372 6.61128 6.83174L6.61128 6.83173L6.61065 6.83231C6.60564 6.83687 6.60063 6.84143 6.59563 6.84597C6.49961 6.93331 6.4062 7.01827 6.33709 7.10604C6.26247 7.2008 6.20874 7.30775 6.20874 7.43751C6.20874 7.4967 6.22742 7.56458 6.25274 7.63195C6.27887 7.70147 6.31567 7.77963 6.3593 7.86229C6.44664 8.02775 6.56489 8.21793 6.69027 8.4044C6.93972 8.77542 7.22567 9.14398 7.36428 9.2826C7.50261 9.42092 7.86885 9.70872 8.23945 9.96034C8.42561 10.0867 8.61587 10.2061 8.7822 10.2942C8.8653 10.3383 8.9441 10.3754 9.01452 10.4018C9.08295 10.4274 9.15172 10.4461 9.21202 10.4461C9.34485 10.4461 9.45371 10.3932 9.54947 10.3178C9.64261 10.2444 9.72994 10.1444 9.81865 10.0426C9.82363 10.0369 9.82891 10.0308 9.83447 10.0244C9.88041 9.97158 9.94495 9.89732 10.0087 9.83328C10.0446 9.79726 10.0777 9.76703 10.1051 9.74648C10.1157 9.73855 10.1241 9.73305 10.1304 9.72943C10.7224 9.86866 11.3034 10.0507 11.8689 10.2741L11.8852 10.7399C11.8852 10.74 11.8852 10.74 11.8852 10.7401M7.02709 9.82836L11.8852 10.7401M7.02709 9.82836C7.28209 10.0604 7.7454 10.4285 8.28405 10.7696C8.91365 11.1684 9.63051 11.5203 10.2295 11.5854C11.0495 11.6726 11.6298 11.1069 11.8495 10.8483M7.02709 9.82836L11.8495 10.8483M11.8852 10.7401C11.8865 10.7792 11.8738 10.8176 11.8495 10.8483M11.8852 10.7401L11.8495 10.8483"
                          fill="none"
                          stroke="#3CC952"
                          stroke-width="0.3"
                        />
                      </g>
                    </svg>
                  </div>
                  {phone}
                </p>
                <p className="underline flex gap-2 items-center">
                  <div className="rounded-full flex items-center justify-between h-7 w-7 bg-[#ffe9ec]">
                    <Instagram className=" stroke-[#ff4e64]" />
                  </div>
                  {insta}
                </p>
                <p className="underline flex gap-2 items-center">
                  <div className="rounded-full flex items-center justify-between h-7 w-7 bg-[#ebe6f9]">
                    <MailIcon className="stroke-[#5c33cf]" />
                  </div>
                  {email}
                </p>
                <p className="underline flex gap-2 items-center">
                  <div className="rounded-full flex items-center justify-between h-7 w-7 bg-[#f1dddd]">
                    <YoutubeIcon className="stroke-[#ff0000]" />
                  </div>
                  {youtube}
                </p>
              </div>
            </div>
          )}
        </Card>
      </div>
      {open && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Profile</DialogTitle>
            </DialogHeader>
            <Tabs defaultValue="basic" value={currentTab} className="mb-2">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="basic">Basic</TabsTrigger>
                <TabsTrigger value="social">Social</TabsTrigger>
              </TabsList>
              <TabsContent value="basic" className="space-y-4">
                <div className="space-y-4 pt-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Enter Name*</Label>
                    <Input
                      id="name"
                      placeholder="Eg. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email">Enter Email*</Label>
                    <Input
                      id="email"
                      placeholder="Eg. John@xyz.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="phone">Enter Phone*</Label>
                    <Input
                      id="phone"
                      placeholder="Eg. 9123456789"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button
                    className="bg-indigo-500"
                    onClick={() => setCurrentTab("social")}
                  >
                    Next
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="social" className="space-y-4">
                <div className="space-y-4 pt-2">
                  <div className="space-y-1">
                    <Label htmlFor="insta">Instagram Link</Label>
                    <Input
                      id="insta"
                      placeholder="Eg. ..instagram.com/username"
                      value={insta}
                      onChange={(e) => setInsta(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="youtube">Youtube Link</Label>
                    <Input
                      id="youtube"
                      placeholder="Eg. ..youtube/username"
                      value={youtube}
                      onChange={(e) => setYoutube(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentTab("basic")}
                  >
                    Back
                  </Button>
                  <Button
                    className="bg-indigo-500"
                    onClick={() => setOpen(false)}
                  >
                    Submit
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default DashboardPage;
