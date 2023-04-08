import { MenuIcon, XIcon } from "@heroicons/react/outline";
import ContactIcons from "./ContactIcons";

export default function NavBar() {
  return (
    <div className="sticky left-[25vw] top-8 z-[9000] -mt-12 w-[50vw] justify-self-center rounded-xl bg-none shadow-sm backdrop-blur-sm sm:left-[12.5vw] sm:w-[75vw]">
      <div className="flex justify-between bg-none">
        <div
          className="btn btn-ghost text-xl normal-case"
          data-set-theme="night"
          onClick={() => location.reload()}
        >
          <div className="w-6 hover:scale-150">
            <img src={`img/favicon.ico`} alt={""} />
          </div>
        </div>
        <div className="dropdown-end dropdown">
          <label className="swap-rotate btn swap btn-ghost btn-circle">
            <input type="checkbox" />
            <MenuIcon className="swap-off h-5 w-5" />
            <XIcon className="swap-on h-5 w-5" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-transparent p-2 shadow"
          >
            <li>
              <div className="flex justify-start gap-x-4 px-4 py-2">
                <ContactIcons />
              </div>
            </li>
            <li>
              <a href="#hero">About me</a>
            </li>
            <li>
              <a href="#experiences">Experiences</a>
            </li>
            <li>
              <a href="#quotes">Favourite quotes</a>
            </li>
            <li>
              <a href="#terminal">Talk to the robot</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
