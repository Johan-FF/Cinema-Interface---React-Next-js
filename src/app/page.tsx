import dynamic from "next/dynamic"
import Login from "../pages/login/page"
/*
const DinamicLogin = dynamic(
  () => import('../pages/login/page'),
  { ssr: false }
  )

*/

export default function Home() {
  return (
      <>
        <Login/>
      </>
    )
}
