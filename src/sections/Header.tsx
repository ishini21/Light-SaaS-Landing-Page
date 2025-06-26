import Image from "next/image";
import ArrowRight from "@/assets/right-arrow.jpg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <Image
            src={ArrowRight}
            className="h-6 w-6 inline-flex justify-center items-center"
            alt="right-arrow"
          />
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
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="">About</a>
              <a href="">Features</a>
              <a href="">Customers</a>
              <a href="">Updates</a>
              <a href="">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                Get For Free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
