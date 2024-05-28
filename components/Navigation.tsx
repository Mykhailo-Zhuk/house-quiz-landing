"use client";

import { Button } from "./ui/button";
import Image from "next/image";
import logo from "@/public/icons/logo.png";
import phone from "@/public/icons/phone.png";

const Navigation = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
      <nav className="flex flex-col gap-5 md:flex-row md:h-32 justify-evenly items-center">
        <div className="px-1 md:px-5">
          <Button className="hidden md:flex bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.25)] text-sm uppercase">
            Дизайн и ремонт в Киеве
          </Button>
        </div>
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <div className="hidden md:flex items-center ">
          <div className="text-white">
            <p className="text-base lg:text-2xl">
              <a href="tel:+380951500551">+38(095) 15-00-551</a>
            </p>
            <p className="text-base lg:text-2xl">
              <a href="tel:+380671500551">+38(067) 15-00-551</a>
            </p>
            <p className="text-sm md:text-right">Консультации по ремонту</p>
          </div>
          <div className="flex items-center justify-center px-7">
            <Image src={phone} alt="phone" />
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navigation;
