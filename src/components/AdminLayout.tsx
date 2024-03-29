'use client'

import NavBar from "@/app/components/NavBar"
import Search from "@/app/components/Search"
import { adminLayoutProps } from "@/app/types/Props"
import Cart from "../modules/shop/cart/Cart"
import Background from "@/app/components/Background"

export default function AdminLayout({ children, search, navBar }: adminLayoutProps) {

  return (
    <main className="h-[100vh] w-[100%] flex">
      <NavBar type={navBar.type} changeCurrentPane={navBar.changeCurrentPane} />
      <section className="z-1 size-all md:w-[80%] pb-[5%] ">
        <Search title={search.title} searchTerm={search.searchTerm} handleSearchChange={search.handleSearchChange}>
          {
            search.title === "ShopMovies" || search.title === "ShopSnacks" ?
              <Cart />
              : <></>
          }
        </Search>
        <section className="h-[95%] w-full">
          <Background hideContent={search.title === "ShopMovies" || search.title === "ShopSnacks" || search.title === "ShopQualification" ? true : false}>
            {children}
          </Background>
        </section>
      </section>
    </main>
  )
}