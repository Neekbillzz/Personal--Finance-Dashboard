import { BellDot, UserRound, SearchCheck } from "lucide-react";

function Navbar({ searchTerm, setSearchTerm }) {
  return (
  <div className="border-b flex flex-row justify-between gap-4 px-6 bg-white shadow-sm items-center w-full h-20 shrink-0">
  <p className="text-black font-bold text-xl whitespace-nowrap shrink-0">
    Welcome, User!
  </p>

  <div className="flex flex-row items-center gap-4 md:gap-6">
    <div className="relative bg-slate-200 rounded-lg">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchCheck className="h-5 w-5 text-slate-400" />
      </div>
      <input
        className="bg-transparent border-none py-2 pl-10 pr-4 w-48 md:w-72 lg:w-96 focus:outline-none"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>

    <BellDot className="w-6 h-6 text-slate-500 shrink-0" />
    <UserRound className="bg-slate-300 text-slate-400 rounded-full w-10 h-10 p-2 shrink-0" />
    <p className="bg-green-700 text-white rounded-lg py-2 px-4 text-sm font-medium shrink-0">
      0123456789
    </p>
  </div>
</div>
  );
}

export default Navbar;
