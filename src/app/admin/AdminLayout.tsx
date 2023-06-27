import NavBar from "@/app/components/NavBar"
import Search from "@/app/components/Search"
import adminLayoutProps from "@/app/types/props/AdminLayoutProps"
import BuyButton from "./shopping/BuyButton"

export default function AdminLayout({ children, search, navBar}: adminLayoutProps ) {
  return (
    <main className="h-[100vh] w-[100%] flex">
      <NavBar type={navBar.type} changeCurrentPane={navBar.changeCurrentPane} />
      <section className="z-1 h-[100%] w-[100%] md:w-[80%] pb-[5%] bg-primary ">
        <Search title={search.title} searchTerm={search.searchTerm} handleSearchChange={search.handleSearchChange}>
          {
            search.title === "Movies" || search.title === "Snacks" ?
            <BuyButton/> : <></>
          }
        </Search>
        {children}
      </section>
    </main>
  )
}