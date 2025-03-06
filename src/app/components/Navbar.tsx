"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem} from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50 text-lg", className)}
    >
     <Menu setActive={setActive}>
        <Link href={"/home"}>
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
         <div className="flex flex-col gap-2 "> 
            <HoveredLink href="/courses">
              All Courses
            </HoveredLink>
            <HoveredLink href="/projects">
             Projects
            </HoveredLink>
            <HoveredLink href="/blogs">
             Blogs
            </HoveredLink>
            <HoveredLink href="/events">
              Events 
            </HoveredLink>
            <HoveredLink href="/js">
             Js Extra
            </HoveredLink>
         </div>
        </MenuItem>
        <Link href={"/contact"}>
        <MenuItem setActive={setActive} active={active} item="Contact Us">
        </MenuItem>
        </Link>
     
     </Menu>
    </div>
  )
}

export default Navbar
