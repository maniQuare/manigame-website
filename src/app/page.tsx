import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"
import Dashboard from "@/components/Dashboard"
import Footer from "@/components/Footer"

export default function Page() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex flex-col flex-1">

        <Header />

        <Dashboard />

        <Footer />

      </div>

    </div>
  )
}