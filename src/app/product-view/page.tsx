"use client";
import { useState } from "react";
export default function productView() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    const productData = [
        {
            productId: '1',
            productName: 'Hot dog',
            productPrice: '5000',
            url: 'https://www.wikihow.com/images/0/09/Boil-a-Hot-Dog-Step-13-Version-3.jpg'
        },
        {
            productId: '2',
            productName: 'Pop corn dulce',
            productPrice: '8000',
            url:'https://elcomercio.pe/resizer/fn6WLFZcDuL7QUy_AXwkwPbBLkk=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/MXUE22HMSJGJJOM7Y7A6UGETN4.jpg'
        }
    ];
    const filteredData = productData.filter((item) => {
        return (
            item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.productPrice.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });
    return (
        <>


            <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">
                    <div>
                        <h2 className="text-2xl font-semibold leading-tight">Productos</h2>
                    </div>
                    <div className="block relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg fill="none" className="w-5 h-5 text-gray-500 dark:text-gray-400" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20'" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>

                        </div>
                        <input placeholder="Buscar"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={searchTerm}
                            onChange={handleSearchChange} />
                    </div>

                    {filteredData.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                            
                                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={item.url} alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.productName}</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">${item.productPrice}</p>
                                </div>
                    </div>
                    ))}

                </div>
            </div>
        </>
    )
}