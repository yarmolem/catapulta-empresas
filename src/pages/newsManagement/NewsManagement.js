import React from "react";
import Title from "../../components/headerTitle/Title";
import ImgComunicaciones from "../../assets/imgs/img_comunicaciones.png";
import ImgNovedades from "../../assets/imgs/img_novedades.png";

const NewsManagement = () => {
  return (
    <div className=" w-full">
      <Title color="gray-100" title="GESTION DE NOTICIAS" />
      <div className="px-3 md:px-0 flex flex-col sm:flex-row justify-center sm:gap-16 md:gap-24 md:mx-28 gap-y-10 md:gap-y-0">
        <div className="cursor-pointer py-4 px-10 shadow-lg flex flex-col justify-center">
          <img 
          src={ImgComunicaciones} />
          <p className="text-3xl font-black text-center text-orange-600 mt-6">Comunicaciones</p>
        </div>
        <div className="cursor-pointer py-4 px-10 shadow-lg flex flex-col justify-center">
          <img src={ImgNovedades} alt="" />
          <p className="text-3xl font-black text-center text-orange-600 mt-6">Novedades</p>
        </div>
      </div>
    </div>
  );
};

export default NewsManagement;
