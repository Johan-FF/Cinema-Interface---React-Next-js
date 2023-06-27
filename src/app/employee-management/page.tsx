"use client"

import { useState } from "react"
import CardList from "../shopping/CardList"
import Table from "./Table"
import Search from "@/app/components/Search"
import NavBar from "@/app/components/NavBar"
import { products } from "@/app/types/data/ProductData"


export default function EmployeeManagement() {
  const [currentPane, setCurrentPane] = useState('employee')
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }
  const snacksData = products.snacks.filter((item) => {
    return (
      item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.productPrice.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })
  const moviesData = products.movies.filter((item) => {
    return (
      item.movieTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.movieDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.movieDuration.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.movieAge.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  return (
    <main className="h-[100vh] w-[100%] flex relative">
      <NavBar changeCurrentPane={setCurrentPane} />
        {
          'employee-management' === currentPane ? 
          <section className="z-1 h-[100%] w-[100%] absolute md:left-[20%] md:w-[80%] pb-[5%] bg-primary">
            <div className="w-[100%] h-[20%]">
              <Search title="Empleados" searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
            </div>
            <div className="flex justify-center items-center h-[80%] w-[100%]">
              <span className="h-[90%] w-[90%] overflow-auto scrollbar-thin scrollbar-thumb-tertiary-opacity scrollbar-track-secondary-opacity rounded-lg shadow-2xl shadow-black">
                <Table searchTerm={searchTerm}/>
              </span>
            </div>
          </section> : ''
        }
        {
          currentPane === 'movies' ?
            <section className="z-1 h-[100%] w-[100%] absolute md:left-[20%] md:w-[80%] pb-[5%] bg-primary ">
              <Search title='Películas' searchTerm={searchTerm} handleSearchChange={handleSearchChange}/>
              <CardList typeProduct='movie' filteredData={moviesData}/>
            </section> : ''
        }
        {
          currentPane === 'snacks' ?
            <section className="z-1 h-[100%] w-[100%] absolute md:left-[20%] md:w-[80%] pb-[5%] bg-primary ">
              <Search title='Comidas' searchTerm={searchTerm} handleSearchChange={handleSearchChange}/>
              <CardList typeProduct='snack' filteredData={snacksData}/>
            </section> : ''
        }
    </main>
  )
}/*
export default function EmployeeManagement({ typeProduct }) {
  const url = typeProduct === "searchemployee" ? "/searchemployee" : "";
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const data = [
    {
      codigo: "1",
      cedula: "123444",
      cargo: "cajero",
      nombre: "juan",
      telefono: "333993991",
      fechaContrato: "10/12/2022",
      salario: "1300333",
      multiple: "Titán",
    },
    {
      codigo: "2",
      cedula: "33441234",
      cargo: "Despachador de comida",
      nombre: "pedro",
      telefono: "32123993991",
      fechaContrato: "4/11/2022",
      salario: "1300333",
      multiple: "Unicentro",
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
              <input
                placeholder="Buscar"
                className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Codigo
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Cedula
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Cargo
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Nombre
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Número de telefono
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Fecha de comienzo de contrato
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Salario
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
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
  );
}*/
