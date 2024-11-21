import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4 ">

  <div>
   
<button className="btn btn-info kosugi-maru-regular " onClick={()=>document.getElementById('my_modal_3').showModal()}> <span className="font-bold"> Contact Us </span></button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      <button className=" btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <p className="py-4 kosugi-maru-regular">Contact us for any queries at <span className="text-blue-600 underline"> info@lingobingo.com</span></p>
  </div>
</dialog></div>    
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <NavLink to="*" >
      <FaFacebook className="text-2xl" />

      </NavLink>
      <NavLink to="*" >
    <FaInstagram className="text-2xl" />
      </NavLink>
      <NavLink to="*" >
    <FaTwitter className="text-2xl" />
      </NavLink>
    </div>
  </nav>
  <aside>
    <p className="kosugi-maru-regular">Copyright © {new Date().getFullYear()} - All right reserved by Lingo Bingo</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer