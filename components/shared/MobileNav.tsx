import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Image
            src={"assets/icons/menu.svg"}
            alt={"trigger icon"}
            width={24}
            height={24}
          />
        </SheetTrigger>
        <SheetContent className="bg-white  md:hidden">
          <Image
            src={"/assets/images/logo.svg"}
            alt={"Evently Logo"}
            width={128}
            height={38}
          />
          <Separator className="my-5 border border-gray-50" />

          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
