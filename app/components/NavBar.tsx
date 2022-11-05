import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function NavBar() {
  return (
    <div className="sticky left-[25vw] top-8 z-[9000] -mt-12 w-[50vw] justify-self-center rounded-xl bg-none shadow-sm backdrop-blur-sm sm:left-[12.5vw] sm:w-[75vw]">
      <div className="flex justify-between bg-none">
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
          className="drawer-button btn swap btn-ghost hover:swap-rotate"
        >
          <MenuIcon className="swap-off h-5 w-5" />
          <XIcon className="swap-on h-5 w-5" />
        </label>
      </div>
    </div>
  );
}
