import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
const navigation = [
  { name: "Invitations", href: "/invitations" },
  { name: "Doctors", href: "/doctors" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProtectdLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const logoutHandler = () => {
    localStorage.removeItem("adminInfo");
    navigate("/");
  };

  return (
    <>
      <div className="py-10">
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex flex-col px-6 pb-2 overflow-y-auto bg-white grow gap-y-5">
                <div className="flex items-center h-16 shrink-0">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    className="w-auto h-8"
                  />
                </div>
                <nav className="flex flex-col flex-1">
                  <ul role="list" className="flex flex-col flex-1 gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={`${
                                item.href === pathname
                                  ? "bg-gray-50 text-indigo-600"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                              }
                                 
                                group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6
                              `}
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="py-2 mt-6 bg-red-100">
                      <button
                        className="w-full font-semibold text-black rounded-sm"
                        onClick={logoutHandler}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col px-6 overflow-y-auto bg-white border-r border-gray-200 grow gap-y-5">
            <div className="flex items-center h-16 shrink-0">
              <img
                alt="Your Company"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="w-auto h-8"
              />
            </div>
            <nav className="flex flex-col flex-1">
              <ul role="list" className="flex flex-col flex-1 gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={`${
                            item.href === pathname
                              ? "bg-gray-50 text-indigo-600"
                              : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                          }
                             
                            group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6
                          `}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                    <li className="py-2 mt-6 bg-red-100">
                      <button
                        className="w-full font-semibold text-black rounded-sm"
                        onClick={logoutHandler}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>

                <li className="mt-auto -mx-6">
                  <a
                    href="#"
                    className="flex items-center px-6 py-3 text-sm font-semibold leading-6 text-gray-900 gap-x-4 hover:bg-gray-50"
                  >
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="w-8 h-8 rounded-full bg-gray-50"
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Tom Cook</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center px-4 py-4 bg-white shadow-sm gap-x-6 sm:px-6 lg:hidden">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          >
            <span className="text-black sr-only">Open sidebar</span>
            <GiHamburgerMenu />
            {/* <Bars3Icon aria-hidden="true" className="w-6 h-6" /> */}
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
            Dashboard
          </div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="w-8 h-8 rounded-full bg-gray-50"
            />
          </a>
        </div>

        <main className=" lg:pl-72">
          <div className="px-2 ">
            <div className="h-full min-h-[calc(100vh-80px)] px-4 py-10 shadow-md sm:px-6 lg:px-8 lg:py-6 rounded-xl shadow-blue-600">
              {/* Main area */}
              {children}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
