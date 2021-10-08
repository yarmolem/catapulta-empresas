import React from "react";
import Title from "../../components/headerTitle/Title";
import IconSearch from "../../assets/imgs/iconSearch.svg";
import { ButtonDownload } from "../../components/Button";

const Communications = () => {
  const handleNewAdmin = (e) => {
    e.preventDefault();
    // history.push("/administrador/crear-nuevo-administrador");
  };
  return (
    <div>
      <Title color="gray-100" title="COMUNICACIONES" />
      <form onSubmit={handleNewAdmin}>
        <div className="relative flex flex-col sm:flex-row gap-6">
          <img className="absolute left-3 top-3" src={IconSearch} alt="" />
          <input
            className="  w-full text-on-warn-300 font-semibold border-2 border-on-warn-300 rounded-lg  outline-none 
            py-2 pl-10  focus:ring-2  focus:ring-2 focus:ring-on-warn-400 focus:border-on-warn-400"
            name="name"
            type="text"
            id="name"
            placeholder="Buscar por nombre de comunicación o por Área"
          />
          <ButtonDownload
            text="CREAR NUEVO"
            color="primary"
            width="small"
            type="submit"
          />
        </div>
      </form>
      <h1>communications</h1>
    </div>
  );
};

export default Communications;
