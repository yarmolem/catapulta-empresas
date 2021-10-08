import React from "react";
import Title from "../../components/headerTitle/Title";
import ImgComunicaciones from "../../assets/imgs/img_comunicaciones.png";
import ImgNovedades from "../../assets/imgs/img_novedades.png";

const NewsManagement = () => {
  return (
    <div className=" w-full">
      <Title color="gray-100" title="GESTION DE NOTICIAS" />
      <div className=" px-3 md:px-0 flex flex-col md:flex-row justify-between md:mx-28 gap-y-10 md:gap-y-0">
        <div>
          <img src={ImgComunicaciones} />
          <p>Comunicaciones</p>
        </div>
        <div>
          <img src={ImgNovedades} alt="" />
          <p>Novedades</p>
        </div>
      </div>
    </div>
  );
};

export default NewsManagement;
