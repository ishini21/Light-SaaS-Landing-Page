import Image from "next/image";
import Logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.png";
import SocialInsta from "@/assets/social-insta.png";
import SocialLinkdIn from "@/assets/social-linkedin.png";
import SocialPin from "@/assets/social-pin.jpg";
import SocialYoutube from "@/assets/social-youtube.png";

export const Footer = () => {
  return (
    <footer
      className="bg-black
     text-[#BCBCBC] text-sm py-10 text-center"
    >
      <div className="container p-5">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur  before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={Logo} alt="logo" height={40} className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className=" flex justify-center gap-6 mt-6">
          <Image src={SocialX} alt="x" className="h-6 w-6" />
          <Image src={SocialInsta} alt="inster" className="h-6 w-6" />
          <Image src={SocialLinkdIn} alt="linkdin" className="h-6 w-6" />
          <Image src={SocialPin} alt="pin"  className="h-6 w-6"/>
          <Image src={SocialYoutube} alt="youtube"  className="h-6 w-6"/>
        </div>
        <p className="mt-6">© 2024 Your Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
