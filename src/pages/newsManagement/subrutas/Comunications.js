import React from "react";
import Title from "../../../components/headerTitle/Title";
import IconSearch from "../../../assets/imgs/iconSearch.svg";
import { useHistory } from "react-router";
// import { ButtonDownload } from "../../../components/Button";
import TableComunications from "../../../components/Tables/TableComunications";

const Communications = () => {
  const history = useHistory();

  const handleNewAdmin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="pb-20">
      <Title color="gray-100" title="COMUNICACIONES" />
      <div className="max-w-screen-md ml-auto mr-auto">
        <form onSubmit={handleNewAdmin}>
          <div className="relative flex flex-col sm:flex-row gap-6">
            <img className="absolute left-3 top-3" src={IconSearch} alt="" />
            <input
              className="w-full text-on-warn-300 font-semibold border-2 border-on-warn-300 rounded-lg  outline-none 
            py-2 pl-10  focus:ring-2  focus:ring-2 focus:ring-on-warn-400 focus:border-on-warn-400"
              name="name"
              type="text"
              id="name"
              placeholder="Buscar por nombre de comunicación o por Área"
            />
            {/* <ButtonDownload
              text="CREAR NUEVO"
              color="primary"
              width="small"
              type="submit"
              onClick={() => console.log("hola")}
            /> */}
            <button
              className="bg-primary-500 text-white"
              onClick={() =>
                history.push(
                  "/gestion-noticias/comunicaciones/nueva-comunicacion"
                )
              }
            >
              CREAR NUEVO
            </button>
          </div>
        </form>
        <div className="mt-13">
          <TableComunications />
        </div>
      </div>
    </div>
  );
};

export default Communications;
