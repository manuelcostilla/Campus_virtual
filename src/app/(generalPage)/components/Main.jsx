import React from "react";

export const Main = () => {
  return (
    <>
    <div className="flex w-full">
  <div className="w-2/3 p-4">
    <div className="flex flex-col justify-end">
      <h1>Bienvenido a nuestra plataforma!</h1>
      <p>descripcion de quienes somos</p>
    </div>
    <div className="mb-4">
      <p>seccion intermedia con 3 flechas hacia abajo</p>
    </div>
    <div>
      <p>explicacion de las dos modalidades disponibles, online y offline</p>
    </div>
    <div>
      <p>mostrar ejemplos de ambas modalides</p>
    </div>
    <div>
      <p>explicacion de la forma de conseguir los cursos y sus precios</p>
    </div>
    <div>
      <p>carrusel mostrado personas que hayan hecho el curso con nosotros junto con opiniones positivas</p>
    </div>
    <div>
      <p>formulario de consulta/ayuda al consumidor</p>
    </div>
  </div>
  <div className="w-1/3 ml-auto p-4">
    <video
      className="bg-white"
      width="400"
      height="480"
      loop
      autoPlay
    >
      <source src="https://www.youtube.com/watch?v=pNO6MjogdJg" type="video/mp4"></source>
    </video>
  </div>
</div>

    </>
  );
};

