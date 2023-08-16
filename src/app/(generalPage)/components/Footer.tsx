import React from "react";
import { YoutubeIcon, InstagramIcon, FacebookIcon, ChevronUp  } from "lucide-react";
const Footer = () => {
  return (
    <footer className=" flex flex-col p-4 bg-slate-950 w-full">
      <div className="flex justify-between">
      <div className="mt-2">
        <p>Asistencia al consumidor</p>
      </div>
      <div className="mt-2">
        <p>Terminos y condiciones</p>
      </div >
      <div className="mt-2">
        <p>Aviso de privacidad</p>
      </div>
      <div className="mt-2">
        <p>Trabaja con nosotros</p>
      </div>
      <div className="flex mt-8">
      <YoutubeIcon className="mr-4" />
      <InstagramIcon className="mr-3" />
      <FacebookIcon />
      </div>
      </div>
      <div className="w-full h-[1px] bg-gray-500 mt-8"></div>
      <div className="flex justify-between mt-6 mb-10">
        <p className="text-sm">Preferencias de cookies© 2023 Nankurunaisa. Todos los derechos reservados.</p>
        <p>Ir al inicio <ChevronUp size="20" className=" text-sm inline mb-1" color="white" /></p>
      </div>
    </footer>
  );
};

export default Footer;
