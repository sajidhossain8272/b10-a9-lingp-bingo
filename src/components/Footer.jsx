import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">

  <div>
    {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn pl-16 pr-16  p-8 text-2xl pb-16" onClick={()=>document.getElementById('my_modal_3').showModal()}>Contact Us</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Contact us for any queries at lingobingo@xyz.com</p>
  </div>
</dialog></div>    
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
      <FaFacebook className="text-2xl" />

      </a>
      <a>
    <FaInstagram className="text-2xl" />
      </a>
      <a>
    <FaTwitter className="text-2xl" />
      </a>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Lingo Bingo</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer