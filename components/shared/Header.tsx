import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b ">
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"} className="w-36">
          <Image
            src={"/assets/images/logo.svg"}
            alt={"Evently Logo"}
            width={128}
            height={38}
          />
        </Link>

        <SignedIn>
          <nav className="hidden md:flex-between w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="w-32 flex justify-end items-center gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <div className="md:hidden">
              <MobileNav />
            </div>
          </SignedIn>

          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
