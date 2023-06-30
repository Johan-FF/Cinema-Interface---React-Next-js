import NavBar from "@/app/components/NavBar"
import Search from "@/app/components/Search"
import adminLayoutProps from "@/app/types/props/AdminLayoutProps"
import BuyButton from "./BuyButton"
import Background from "@/app/components/Background"
import { useState } from "react"

export default function AdminLayout({ children, search, navBar}: adminLayoutProps ) {
  const [showProducts, setShowProducts] = useState(false)

  return (
    <main className="h-[100vh] w-[100%] flex">
      <NavBar func={() => setShowProducts(!showProducts)} type={navBar.type} changeCurrentPane={navBar.changeCurrentPane} />
      <section className="z-1 h-[100%] w-[100%] md:w-[80%] pb-[5%] bg-primary ">
        <Search title={search.title} searchTerm={search.searchTerm} handleSearchChange={search.handleSearchChange}>
          {
            search.title === "ShopMovies" || search.title === "ShopSnacks" ?
            <BuyButton/> : <></>
          }
        </Search>
        <section className="h-[95%] w-full">
          <Background viewProducts={showProducts} >
            {children}
          </Background>
        </section>
      </section>
    </main>
  )
}