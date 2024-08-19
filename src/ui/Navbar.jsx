import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-center gap-x-4 bg-secondary-200 mb-6 h-14">
        <h1 className="md:text-xl text-sm font-bold text-secondary-900">
          Inventory App using tailwind & Js
        </h1>
        <div>
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
