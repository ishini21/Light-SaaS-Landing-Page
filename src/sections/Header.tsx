import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import ThemeToggle from "@/components/ThemeToggle";
// import ThemeSwitch from "@/components/ThemeSwitch";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 dark:bg-darkbg">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center dark:text-darktext">
          <p>Get started for free</p>
          <ArrowRight className="h-5 w-5 inline-flex justify-center items-center "/>
        </div>
      </div>
      <div className="p-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="saas logo" height={40} width={40} />
            <Image
              src={MenuIcon}
              className="h-5 w-5 md:hidden"
              alt="menu icon"
            />
            <nav className="hidden md:flex gap-6 text-lighttext items-center dark:text-darktext ">
              <a href="">About</a>
              <a href="">Features</a>
              <a href="">Customers</a>
              <a href="">Updates</a>
              <a href="">Help</a>
              {/* <ThemeSwitch/> */}
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight dark:bg-white dark:text-black">
                Get For Free
              </button>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
