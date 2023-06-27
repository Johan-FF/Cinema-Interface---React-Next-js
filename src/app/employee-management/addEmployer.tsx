import React, { useState } from "react";
import { inputsEmpleado } from "@/app/types/data/empleadoForm";

const AddEmployer = ({ typeProduct }) => {
  const url = typeProduct === "employee" ? "/employee" : "";
  const [formulario, setFormulario] = useState({
    codigo: "",
    cedula: "",
    cargo: "",
    nombre: "",
    telefono: "",
    fechaContrato: "",
    salario: "",
    multiplex: "",
  });

  const {
    codigo,
    cedula,
    cargo,
    nombre,
    telefono,
    fechaContrato,
    salario,
    multiplex,
  } = formulario;

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log("Formulario:", formulario);
    // Restablecer el formulario
    setFormulario({
      codigo: "",
      cedula: "",
      cargo: "",
      nombre: "",
      telefono: "",
      fechaContrato: "",
      salario: "",
      multiplex: "",
    });
  };

  return (
    <main className="bg-primary min-h-[100vh] xl:h-[100vh] md:py-[5%] xl:py-0 w-[100%] flex justify-center items-center">
      <section className="min-h-[90%] xl:h-[90%] w-[100%] md:w-[60%] flex flex-col xl:flex-row rounded-md md:shadow-2xl md:shadow-black">
        <div className="bg-secondary py-[5%] xl:py-0 h-[100%] xl:h-[100%] w-[100%] xl:w-[100%] md:rounded-r-md">
          <section className="w-[100%] h-[10%] p-3 flex justify-center items-center">
            <h1 className="text-primary text-[20px] w-[70%] text-center">
              Plataforma para el ingreso de nuevos esclavos
            </h1>
          </section>
          <section className="w-[100%] max-h-[80%] pr-[5%] flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-4  flex flex-col">
                {inputsEmpleado.registro.map((item) => {
                  return (
                    <>
                      <label
                        htmlFor="nombre"
                        className="block mb-2 text-sm font-bold text-white"
                      >
                        {item.content}
                      </label>
                      <input
                        type={item.type}
                        id={item.id}
                        name={item.id}
                        onChange={handleChange}
                        className="w-full px-3 py-2 leading-tight border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        placeholder={item.placeHolder}
                      />
                    </>
                  );
                })}
              </div>
              <button
                type="submit"
                className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Enviar
              </button>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
};

export default AddEmployer;
