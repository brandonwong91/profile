import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import ContactIcons from "./ContactIcons";

export default function SideDrawer() {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

      <ul className="menu w-60 overflow-y-auto bg-base-100 p-4 text-base-content">
        <div className="flex flex-col justify-center">
          <div className="flex justify-start gap-x-4 px-4 py-2">
            <ContactIcons />
          </div>
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
        </div>
      </ul>
    </div>
  );
}
