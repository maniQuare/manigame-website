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
          <Menu className="size-7 w-7   bg-[#1fabb5] p-1" />
        </SheetTrigger>

        <SheetContent className="overflow-x-hidden">
          <SheetHeader className=" bg-[#1fabb5] h-[70px] w-[100%] md:h-[55px]">
           
            <SheetTitle className="text-white m-2 md:hidden">
              BSF1010PRO
            </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
         
 
     
 
          <SheetFooter></SheetFooter>
        </SheetContent>
      </Sheet>
    </nav>
  );
}