import { MoonIcon, SunIcon } from "@heroicons/react/outline";

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
        <label className="swap swap-rotate mr-4">
          <input type="checkbox" />
          <SunIcon data-set-theme="pastel" className="swap-on h-5 w-5" />
          <MoonIcon data-set-theme="dark" className="swap-off h-5 w-5" />
        </label>
      </div>
    </div>
  );
}
