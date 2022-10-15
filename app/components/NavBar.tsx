import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function NavBar() {
  return (
    <div className="navbar sticky top-0 z-[9000] backdrop-blur-sm">
      <div className="flex-1 justify-between">
        <div
          className="btn btn-ghost text-xl normal-case"
          onClick={() => location.reload()}
        >
          <div className="w-6 hover:scale-150">
            <img src={`img/favicon.ico`} alt={""} />
          </div>
        </div>
        <label
          htmlFor="my-drawer-4"
          className="btn swap btn-ghost drawer-button hover:swap-rotate"
        >
          <MenuIcon className="swap-off h-5 w-5" />
          <XIcon className="swap-on h-5 w-5" />
        </label>
      </div>
    </div>
  );
}
