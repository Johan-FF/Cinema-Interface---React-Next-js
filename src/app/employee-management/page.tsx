"use client";
import { useState } from "react";
export default function employeeManagement() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const data = [
        {
            codigo: '1',
            cedula: '123444',
            cargo: 'cajero',
            nombre: 'juan',
            telefono: '333993991',
            fechaContrato: '10/12/2022',
            salario: '1300333',
            multiple: 'Titán',
        },
        {
            codigo: '2',
            cedula: '33441234',
            cargo: 'Despachador de comida',
            nombre: 'pedro',
            telefono: '32123993991',
            fechaContrato: '4/11/2022',
            salario: '1300333',
            multiple: 'Unicentro',
        },
        
    ];

    const filteredData = data.filter((item) => {
        return (
            item.codigo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.cedula.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.cargo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.telefono.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.fechaContrato.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.salario.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.multiple.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });
    return (
        <>
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="py-8">
                        <div>
                            <h2 className="text-2xl font-semibold leading-tight">Empleados</h2>
                        </div>
                        <div className="my-2 flex sm:flex-row flex-col">
                            <div className="block relative">
                                <input placeholder="Buscar"
                                    className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                                    value={searchTerm}
                                    onChange={handleSearchChange} />
                            </div>
                        </div>
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Codigo
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Cedula
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Cargo
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Nombre
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Número de telefono
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Fecha de comienzo de contrato
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Salario
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Multiple
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData.map((item, idx) => (
                                            <tr key={idx}>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div className="flex items-center">

                                                        <div className="ml-3">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {item.codigo}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {item.cedula}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {item.cargo}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {item.nombre}
                                                    </p>
                                                </td>

                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {item.telefono}
                                                    </p>
                                                </td>

                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {item.fechaContrato}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {item.salario}
                                                    </p>
                                                </td>

                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {item.multiple}
                                                    </p>
                                                </td>
                                            </tr>

                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}