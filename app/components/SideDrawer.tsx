import { SunIcon, MoonIcon } from "@heroicons/react/outline";

export default function SideDrawer() {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

      <ul className="menu w-80 overflow-y-auto bg-base-100 p-4 text-base-content">
        <label className="swap swap-rotate my-4">
          <input type="checkbox" />
          <SunIcon data-set-theme="pastel" className="swap-on h-5 w-5" />
          <MoonIcon data-set-theme="night" className="swap-off h-5 w-5" />
        </label>
        <li>
          <a href="#hero">Me</a>
        </li>
        <li>
          <a href="#experiences">Experiences</a>
        </li>
        <li>
          <a href="#quotes">Favourite Quotes</a>
        </li>
        <li>
          <a href="#terminal">Talk to me</a>
        </li>
      </ul>
    </div>
  );
}
