import React from "react";
import { DownloadIcon } from "../../assets/icons";

const TableComunications = () => {
  return (
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
  );
};

export default TableComunications;
