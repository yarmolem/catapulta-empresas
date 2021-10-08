import React from "react";
import Title from "../../../components/headerTitle/Title";
import IconSearch from "../../../assets/imgs/iconSearch.svg";
// import IconSearch from "../../assets/imgs/iconSearch.svg";
import { ButtonDownload } from "../../../components/Button";
import { DownloadIcon } from "../../../assets/icons";

const Communications = () => {
  const handleNewAdmin = (e) => {
    e.preventDefault();
    // history.push("/administrador/crear-nuevo-administrador");
  };
  return (
    <div>
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
            <ButtonDownload
              text="CREAR NUEVO"
              color="primary"
              width="small"
              type="submit"
            />
          </div>
        </form>
        <div className="mt-13">
          <table className="w-10/12 ml-auto mr-auto text-center">
            <thead className=" shadow-2xl">
              <tr className="text-lg font-bold tracking-wide text-primary bg-white border border-on-warn-300 text-center ">
                <th className="px-4 py-3 ">Nombre</th>
                <th className="px-4 py-3">Área</th>
                <th className="px-4 py-3">Tipo</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="bg-on-warn-100 border border-on-warn-100 text-base">
              <tr className="text-primary font-medium">
                <td className="px-4 py-3">El agua es nuestra fuerza</td>
                <td className="px-4 py-3">Recuros Humanos</td>
                <td className="px-4 py-3">PDF</td>
                <td className="px-4 py-3 ">
                  <span className="flex gap-2">
                    <DownloadIcon />
                    <button className="underline">Descargar</button>
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-red-600 underline">Eliminar</button>
                </td>
              </tr>
              <tr className="text-primary font-medium">
                <td className="px-4 py-3">El agua es nuestra fuerza</td>
                <td className="px-4 py-3">Recuros Humanos</td>
                <td className="px-4 py-3">PDF</td>
                <td className="px-4 py-3 ">
                  <span className="flex gap-2">
                    <DownloadIcon />
                    <button className="underline">Descargar</button>
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-red-600 underline">Eliminar</button>
                </td>
              </tr>
              <tr className="text-primary font-medium">
                <td className="px-4 py-3">El agua es nuestra fuerza</td>
                <td className="px-4 py-3">Recuros Humanos</td>
                <td className="px-4 py-3">PDF</td>
                <td className="px-4 py-3 ">
                  <span className="flex gap-2">
                    <DownloadIcon />
                    <button className="underline">Descargar</button>
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-red-600 underline">Eliminar</button>
                </td>
              </tr>
              <tr className="text-primary font-medium">
                <td className="px-4 py-3">El agua es nuestra fuerza</td>
                <td className="px-4 py-3">Recuros Humanos</td>
                <td className="px-4 py-3">PDF</td>
                <td className="px-4 py-3 ">
                  <span className="flex gap-2">
                    <DownloadIcon />
                    <button className="underline">Descargar</button>
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-red-600 underline">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Communications;
