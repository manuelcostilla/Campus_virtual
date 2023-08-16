import React from "react";
import VideoPlayer from "./VideoPlayer";

export const Main = () => {
  const videoId = "EvKm8yhM7V8";
  return (
    <>
      <div className="flex w-full">
        <div className="w-2/3 p-4">
          <div className="flex flex-col justify-end">
            <p>
              ¡Saludos! En Nankurunaisa, estamos dedicados a empoderar a
              individuos de todas las edades y antecedentes a alcanzar su máximo
              potencial a través de la educación en línea. Nuestro compromiso es
              proporcionar cursos de alta calidad que inspiren, informen y
              transformen vidas. Permítenos compartir contigo quiénes somos y
              cómo estamos en una misión para enriquecer tus habilidades y
              conocimientos.
            </p>
          </div>
          <div className="mb-4">
            <p>seccion intermedia con 3 flechas hacia abajo</p>
          </div>
          <div>
            <p>
              explicacion de las dos modalidades disponibles, online y offline
            </p>
          </div>
          <div>
            <p>mostrar ejemplos de ambas modalides</p>
          </div>
          <div>
            <p>explicacion de la forma de conseguir los cursos y sus precios</p>
          </div>
          <div>
            <p>
              carrusel mostrado personas que hayan hecho el curso con nosotros
              junto con opiniones positivas
            </p>
          </div>
          <div>
            <p>formulario de consulta/ayuda al consumidor</p>
          </div>
        </div>
        <div className="w-1/3 ml-auto p-4">
          <VideoPlayer videoID={videoId} />
        </div>
      </div>
    </>
  );
};
