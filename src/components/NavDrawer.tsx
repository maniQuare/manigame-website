"use clinet";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";

import { GrHomeRounded } from "react-icons/gr";

import Link from "next/link";
import { MdSupervisorAccount } from "react-icons/md";



export default function NavDrawer() {
  return (
    <nav>
      <Sheet>
        <SheetTrigger className=" text-white ">
          <Menu className="size-9 w-7 ml-2  bg-[#1fabb5]" />
        </SheetTrigger>

        <SheetContent className="overflow-x-hidden">
          <SheetHeader className=" bg-[#1fabb5] h-[130px] w-[100%] md:h-[55px]">
           
            <SheetTitle className="text-white m-2 md:hidden">
              BSF1010PRO
            </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="flex  justify-between  border-b-5 border-gray-300 items-center md:hidden">
            <Link href={"#"} className="ml-5.5 mb-5 font-bold ">
              Dashboard
            </Link>
            <Link href={"#"} className="mr-7 mb-5 ">
              <GrHomeRounded className="font-bold" />
            </Link>
          </div>
 
     
 
          <SheetFooter></SheetFooter>
        </SheetContent>
      </Sheet>
    </nav>
  );
}