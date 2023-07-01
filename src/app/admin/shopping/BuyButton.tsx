import React from 'react'
import { useState } from 'react'
import { seats } from '@/app/types/data/SeatsData'
import CardMovie from './movie/CardMovie'
import Card from './Card'
import ModalButton from "@/app/components/ModalButton"
import { products } from '@/app/types/data/ProductData'
import Cart from '@/app/services/cart'



export default function BuyButton() {
  const [selectedSummary, setSelectedSummary] = useState('movie_summary');
  const handleBtnSummary = (btnSummary: string) => {
    setSelectedSummary(btnSummary);
  }

  const [showMovieModal, setShowMovieModal] = useState(false)
  const movieData = products.movies[0]
  const snacksData = Cart.getInstance().findUniqueProducts(Cart.getInstance().getCartProducts());

  const [forceUpdateFlag, setForceUpdateFlag] = useState(false);


  const forceComponentUpdate = () => {
    setForceUpdateFlag(!forceUpdateFlag);
  };

  const handleRemoveProduct = (item: string) => {
    Cart.getInstance().removeProductFromCart(item);
    forceComponentUpdate();
  }

  function calculateTotal(): number {
    var total = 0;
    for (var prod of Cart.getInstance().findUniqueProducts(Cart.getInstance().getCartProducts())) {
      total = total + parseInt(prod.productPrice);
    }
    return total;
  }

  function calculateTotalPoints(): number {
    var total = 0;
    for (var prod of Cart.getInstance().findUniqueProducts(Cart.getInstance().getCartProducts())) {
      total = total + prod.productPoints;
    }
    return total;
  }


  return (
    <ModalButton showModal={showMovieModal} setShowModal={setShowMovieModal} >
      <div className="justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-blue-900 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Resumen de compra
              </h3>
              <button className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowMovieModal(false)}>
                <span className="bg-transparent text-white opacity-3 h-6 w-6 text-2xl block outline-none focus:outline-none">
                X
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p>Cliente 123123123 </p>
              <p>Puntos actuales: 15 </p>
              <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
                <ul className="flex flex-wrap -mb-px" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                  <li className="mr-2" role="presentation">
                    <button className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                      id="movie-tab" type="button" role="tab" onClick={() => handleBtnSummary('movie_summary')}>Peliculas</button>
                  </li>
                  <li className="mr-2" role="presentation">
                    <button className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 active"
                      id="snacks-tab" type="button" role="tab" onClick={() => handleBtnSummary('snacks_summary')}>Snacks</button>
                  </li>
                </ul>
              </div>
            </div>
            <div id="tabContent">
              {selectedSummary === "movie_summary" ?
                <div id="movie_sum">
                  <div className='relative p-6 flex-auto'>
                    <div className="w-[100%] flex justify-center items-center ">
                      <CardMovie isInHome={false} movieUrl={movieData.movieUrl} movieAge={movieData.movieAge} movieDescription={movieData.movieDescription} movieDuration={movieData.movieDuration}
                        movieTitle={movieData.movieTitle} movieId={movieData.movieId} />
                    </div>
                  </div>
                  <div className=" items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <p>Asientos</p>
                    {
                      seats.map((item, idx) => (
                        <div className=" justify-end p-6 border-t border-solid border-bg-cyan-200 rounded-b">
                          <p>Codigo asiento: {item.seatCode}</p>
                          <p>Tipo asiento: {item.seatType}</p>
                          <p>Puntos a añadir: {item.points}</p>
                        </div>
                      ))
                    }
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowMovieModal(false)}>
                      Confirmar compra
                    </button>
                  </div>

                </div>
                :
                <div id="snack_sum">
                  <div className='relative p-6 flex-auto'>
                    <div className="w-[100%]">

                      {snacksData.map((item, idx) => {
                        const productItem = item
                        return (
                          <div className='flex flex-wrap justify-left items-center'>
                            <div className="w-2/5 p-4">
                              <div className="w-[200%] mx-auto">
                                <Card
                                  productId={productItem.productId}
                                  url={""}
                                  key={idx}
                                  imgUrl={productItem.url}
                                  productName={productItem.productName}
                                  productPrice={productItem.productPrice}
                                />
                              </div>
                            </div>
                            <div className='w-1/5 p-4'>
                              <p>Puntos por producto: {productItem.productPoints}</p><br />
                              <p>Puntos por cantidad:{productItem.productPoints * productItem.count}</p>
                            </div>
                            <div className='w-1/5 p-4'>
                              <p>Cantidad: {productItem.count}</p><br />
                            </div>
                            <div className='w-1/5 p-4'>
                              <button className="button-red rounded-2xl mr-2 md:mr-5" onClick={() => handleRemoveProduct(item.productId)}>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                </svg>
                              </button>
                            </div>
                          </div>

                        )
                      })}
                      {/*footer*/}
                      <div>
                        <p>Total compra: {calculateTotal()}</p>
                        <p>Puntos a añadir: {calculateTotalPoints()}</p>
                      </div>
                      <br />
                      <div className="flex items-center justify-start p-6 border-t border-solid border-slate-200 rounded-b">

                        <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowMovieModal(false)}>
                          Confirmar compra
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              }
            </div>



          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </ModalButton>
  )
}