import { useHistory } from 'react-router'
import IconSearch from '../../assets/imgs/iconSearch.svg'
import { ButtonDownload, ButtonOffice } from '../../components/Button/index'
import Title from '../../components/headerTitle/Title';
import InputCheck from '../../components/inputs/InputCheck';

const BdEmpleados = () => {
    const history = useHistory();

    const handleNewAdmin = (e) => {
        e.preventDefault()
        history.push('/administrador/crear-nuevo-administrador');
    }


    return (
        <div className="">
            <Title color="gray-100" title="LISTA DE EMPLEADOS" />
            <div className="px-6 sm:px-10 pb-8">
                <div className="flex flex-col gap-y-6">
                    <form onSubmit={handleNewAdmin}>
                        <div className="relative flex flex-col  sm:flex-row gap-6  ">
                            <img className="absolute left-3 top-3" src={IconSearch} alt="" />
                            <input
                                className=" w-full   text-on-warn-300 font-semibold border-2 border-on-warn-300 
                                             rounded-lg  outline-no py-2 pl-10  focus:ring-2  
                                             focus:ring-2 focus:ring-on-warn-400 focus:border-on-warn-400"
                                name="name"
                                type="text"
                                id="name"
                                placeholder="Buscar por número de DNI o Área"
                            />
                            <div className="min-w-40  flex justify-end ">
                                <ButtonDownload
                                    text="CREAR NUEVO"
                                    color="primary"
                                    width="small"
                                    type="submit"
                                />
                            </div>

                        </div>
                    </form>

                    <select className="border h-12 self-center w-40 px-6 border-primary text-lg text-primary font-bold" value="Filtrar">
                        <option className="font-bold text-center" disabled>Filtrar</option>
                        <option >Adm. Nuevos</option>
                        <option >Adm. Activos</option>
                        <option >Adm. No Activos</option>
                    </select>
                    <section className="container ">
                        <div className="w-full mb-8 overflow-hidden  ">
                            <div className="w-full overflow-x-auto">
                                <table className="w-full  text-center">
                                    <thead className=" shadow-2xl" >
                                        <tr className="text-lg font-bold tracking-wide text-primary bg-white border border-on-warn-300 text-center ">
                                            <th className="px-4 py-3 "></th>
                                            <th className="px-4 py-3">Nombres</th>
                                            <th className="px-4 py-3">Apellidos</th>
                                            <th className="px-4 py-3">DNI</th>
                                            <th className="px-4 py-3">Área</th>
                                            <th className="px-4 py-3">Activos</th>
                                            <th className="px-4 py-3"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-on-warn-100 border border-on-warn-100 text-base">
                                        <tr className="text-primary">
                                            <td className="px-4 py-3" >
                                                <div className="flex items-center justify-center text-sm">
                                                    <div className="relative w-10 h-10 mr-3 rounded-full">
                                                        <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                                                        <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 ">
                                                Juana Sofía
                                            </td>
                                            <td className="px-4 py-3">Paredes Méndez</td>
                                            <td className="px-4 py-3">
                                                20154963
                                            </td>
                                            <td className="px-4 py-3 ">Recursos Humanos</td>
                                            <td className="px-4 py-3">
                                                <InputCheck
                                                    textLabel=""
                                                />
                                            </td>
                                            <td className="px-4 py-3">
                                                <ButtonDownload color="primary" text="Ver Perfil" width="large" />
                                            </td>
                                        </tr>
                                        <tr className="text-primary">
                                            <td className="px-4 py-3" >
                                                <div className="flex items-center justify-center text-sm">
                                                    <div className="relative w-10 h-10 mr-3 rounded-full">
                                                        <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                                                        <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 ">
                                                Juana Sofía
                                            </td>
                                            <td className="px-4 py-3">Paredes Méndez</td>
                                            <td className="px-4 py-3">
                                                20154963
                                            </td>
                                            <td className="px-4 py-3 ">Recursos Humanos</td>
                                            <td className="px-4 py-3">
                                                <InputCheck
                                                    textLabel=""
                                                />
                                            </td>
                                            <td className="px-4 py-3">
                                                <ButtonDownload color="primary" text="Ver Perfil" width="large" />
                                            </td>
                                        </tr>
                                        <tr className="text-primary">
                                            <td className="px-4 py-3" >
                                                <div className="flex items-center justify-center text-sm">
                                                    <div className="relative w-10 h-10 mr-3 rounded-full">
                                                        <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                                                        <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 ">
                                                Juana Sofía
                                            </td>
                                            <td className="px-4 py-3">Paredes Méndez</td>
                                            <td className="px-4 py-3">
                                                20154963
                                            </td>
                                            <td className="px-4 py-3 ">Recursos Humanos</td>
                                            <td className="px-4 py-3">
                                                <InputCheck
                                                    textLabel=""
                                                />
                                            </td>
                                            <td className="px-4 py-3">
                                                <ButtonDownload color="primary" text="Ver Perfil" width="large" />
                                            </td>
                                        </tr>
                                        <tr className="text-primary">
                                            <td className="px-4 py-3" >
                                                <div className="flex items-center justify-center text-sm">
                                                    <div className="relative w-10 h-10 mr-3 rounded-full">
                                                        <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                                                        <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 ">
                                                Juana Sofía
                                            </td>
                                            <td className="px-4 py-3">Paredes Méndez</td>
                                            <td className="px-4 py-3">
                                                20154963
                                            </td>
                                            <td className="px-4 py-3 ">Recursos Humanos</td>
                                            <td className="px-4 py-3">
                                                <InputCheck
                                                    textLabel=""
                                                />
                                            </td>
                                            <td className="px-4 py-3">
                                                <ButtonDownload color="primary" text="Ver Perfil" width="large" />
                                            </td>
                                        </tr>
                                        <tr className="text-primary">
                                            <td className="px-4 py-3" >
                                                <div className="flex items-center justify-center text-sm">
                                                    <div className="relative w-10 h-10 mr-3 rounded-full">
                                                        <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                                                        <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 ">
                                                Juana Sofía
                                            </td>
                                            <td className="px-4 py-3">Paredes Méndez</td>
                                            <td className="px-4 py-3">
                                                20154963
                                            </td>
                                            <td className="px-4 py-3 ">Recursos Humanos</td>
                                            <td className="px-4 py-3">
                                                <InputCheck
                                                    textLabel=""
                                                />
                                            </td>
                                            <td className="px-4 py-3">
                                                <ButtonDownload color="primary" text="Ver Perfil" width="large" />
                                            </td>
                                        </tr>
                                        <tr className="text-primary">
                                            <td className="px-4 py-3" >
                                                <div className="flex items-center justify-center text-sm">
                                                    <div className="relative w-10 h-10 mr-3 rounded-full">
                                                        <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                                                        <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 ">
                                                Juana Sofía
                                            </td>
                                            <td className="px-4 py-3">Paredes Méndez</td>
                                            <td className="px-4 py-3">
                                                20154963
                                            </td>
                                            <td className="px-4 py-3 ">Recursos Humanos</td>
                                            <td className="px-4 py-3">
                                                <InputCheck
                                                    textLabel=""
                                                />
                                            </td>
                                            <td className="px-4 py-3">
                                                <ButtonDownload color="primary" text="Ver Perfil" width="large" />
                                            </td>
                                        </tr>
                                        <tr className="text-primary">
                                            <td className="px-4 py-3" >
                                                <div className="flex items-center justify-center text-sm">
                                                    <div className="relative w-10 h-10 mr-3 rounded-full">
                                                        <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                                                        <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 ">
                                                Juana Sofía
                                            </td>
                                            <td className="px-4 py-3">Paredes Méndez</td>
                                            <td className="px-4 py-3">
                                                20154963
                                            </td>
                                            <td className="px-4 py-3 ">Recursos Humanos</td>
                                            <td className="px-4 py-3">
                                                <InputCheck
                                                    textLabel=""
                                                />
                                            </td>
                                            <td className="px-4 py-3">
                                                <ButtonDownload color="primary" text="Ver Perfil" width="large" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                    <ButtonOffice />
                </div>
            </div >
        </div>
    )
}

export default BdEmpleados