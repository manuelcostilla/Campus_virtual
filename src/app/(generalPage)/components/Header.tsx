import React from "react";
import Link from "next/link";
import { Globe } from "lucide-react";
import { ModeToggle } from "./DarkModeButton";

const Header = () => {
  return (
    <header className=" flex justify-between items-center w-full h-[80px] px-8 bg-slate-950">
      <div className="flex">
        <p>logo de la empresa</p>
        <h2 className="ml-4">Nankurunaisa</h2>
      </div>
      <p>Contacto</p>
      <div className="flex">
        <button className="border px-2 rounded-md border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 mr-2">
          <Globe />
        </button>
        <ModeToggle />
        <Link
          href="./login"
          className="text-center border px-2 rounded-md border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 mr-2 flex items-center"
        >
          Iniciar sesión
        </Link>
      </div>
    </header>
  );
};

export default Header;
