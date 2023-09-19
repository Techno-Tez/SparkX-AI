import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Loading from "./loading";
import { Suspense } from "react";

const DashboardLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="h-full relative md:space-x-4">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-72">
        <Navbar />
        <Suspense fallback={<Loading />} >
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {children}
        </Suspense>
      </main>
    </div>
  )
}

export default DashboardLayout