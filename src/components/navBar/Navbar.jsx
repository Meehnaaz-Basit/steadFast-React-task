import NavMenu from "../../hooks/NavMenu";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow  "
            >
              <NavMenu></NavMenu>
            </ul>
          </div>
          <a className=" lg:text-4xl font-semibold">
            MyLogo<span className="text-primary">.</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavMenu></NavMenu>
          </ul>
        </div>
        <div className="navbar-end  lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="bg-primary text-white px-5 py-3 rounded transform hover:scale-90 duration-300 hover:bg-primary hover:text-white transition-all"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Contact
              </button>
              <dialog
                id="my_modal_3"
                className="modal fixed inset-0 flex items-center justify-center"
              >
                <div className="modal-box lg:max-w-5xl">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                    <div className="lg:py-4 lg:px-10">
                      <h1 className="lg:text-4xl font-bold">Get In Touch</h1>
                      <p className="text-[#6e6191] mt-4">
                        Fell free to contact us and we will get back to you as
                        soon as possible
                      </p>
                      <div>
                        <div className="grid lg:grid-cols-2 mt-8 gap-3 mb-4">
                          <label className="form-control w-full max-w-lg">
                            <div className="label">
                              <span className="label-text">First Name</span>
                            </div>
                            <input
                              type="text"
                              placeholder="First Name"
                              className="input input-bordered w-full max-w-lg"
                            />
                          </label>
                          {/*  */}
                          <label className="form-control w-full max-w-lg">
                            <div className="label">
                              <span className="label-text">Last Name</span>
                            </div>
                            <input
                              type="text"
                              placeholder="Last Name"
                              className="input input-bordered w-full max-w-lg"
                            />
                          </label>
                        </div>
                        <div className="space-y-4">
                          <label className="form-control ">
                            <div className="label">
                              <span className="label-text">Email Address</span>
                            </div>
                            <input
                              type="text"
                              placeholder="someone@gmail.com"
                              className="input input-bordered w-full max-w-lg"
                            />
                          </label>
                          <label className="form-control">
                            <div className="label">
                              <span className="label-text">Text Area</span>
                            </div>
                            <textarea
                              className="textarea textarea-bordered h-24"
                              placeholder="Required example textarea"
                            ></textarea>
                          </label>
                          <label className="form-control space-x-2">
                            <div className="flex items-center gap-3">
                              <input type="checkbox" className="checkbox " />
                              <span>Agree to terms and conditions</span>
                            </div>
                          </label>
                        </div>
                        <div>
                          <button className="bg-primary text-white p-4 rounded font-semibold mt-6">
                            Submit Form
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </dialog>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
