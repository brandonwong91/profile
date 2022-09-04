import { MoonIcon, SunIcon } from "@heroicons/react/outline";

export default function NavBar() {
  return (
    <div className="navbar sticky top-0 z-10 backdrop-blur-sm">
      <div className="flex-1 justify-between">
        <a className="btn btn-ghost text-xl normal-case">Home</a>
        <label className="swap-rotate swap mr-4">
          <input type="checkbox" />
          <SunIcon data-set-theme="pastel" className="swap-on h-5 w-5" />
          <MoonIcon data-set-theme="dark" className="swap-off h-5 w-5" />
        </label>
      </div>
    </div>
  );
}
