import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';


export default function Header() {

  let user = useSelector((store) => store.user.value);
  return (
    <>
    {/* Prescription */}
       <section>
      <div className="p-4 flex">
        <h1>-------Make remaining Navitems--------</h1>
        <Link
          to="/prescription"
          className="bg-[#EB59A3] text-white py-1 px-3 flex items-center gap-2 rounded-lg hover:shadow-lg transition duration-300 inline-block"
          style={{ width: "fit-content" }}
        >
          <i className="bi bi-camera text-xl"></i>
          <div className="flex flex-col items-start">
            <span className="text-[12px] leading-tight">Upload</span>
            <span className="text-[14px] font-bold leading-tight">
              Prescriptions
            </span>
          </div>
        </Link>
      </div>
    </section>
    </>
  )
}
