"use client"
import { useState } from "react"

export default function Shopping() {
    const [selecProducId, setProducId] = useState('');
    const [cart, setCart] = useState<{ productId: string; productName: string; productPrice: string; }[]>([]);

    const handleProdPrice = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setProducId(event.target.value);
    };

    const addProduct = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const selectedProduct = snacksData.find(item => item.productId === selecProducId);

        if (selectedProduct) {
          setCart([...cart, selectedProduct]);
        }
    };

    const snacksData = [
        {
            productId: '1',
            productName: 'Hot dog',
            productPrice: '5000',
        },
        {
            productId: '2',
            productName: 'Pop corn dulce',
            productPrice: '8000',
        }
    ];

    const selecProduct = snacksData.find(
        (item) => item.productId == selecProducId
    );

    const selecProductPrice = selecProduct ? selecProduct.productPrice : "";
    return (
        <>
            <form>

                <label htmlFor="products" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seleccionar producto</label>
                <select id="products" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleProdPrice}>
                    <option value="null">Seleccione</option>
                    {snacksData.map((item, idx) => (
                        <option key={idx} value={item.productId}>{item.productName}</option>
                    ))}
                </select>
                <input type="text" id="disabled-input-2" aria-label="disabled input 2" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={selecProductPrice} disabled />
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onClick={addProduct}
                >
                    Agregar</button>
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Producto
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Precio
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                                        {cart.map((item, idx) => (
                                            <tr key={idx}>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div className="flex items-center">

                                                        <div className="ml-3">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {item.productName}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {item.productPrice}
                                                    </p>
                                                </td>
                                             
                                            </tr>

                                        ))}
                                        </tbody>

                </table>
            </form>

        </>
    )
}