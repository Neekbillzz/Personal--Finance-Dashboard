import { BellDot, UserRound, SearchCheck } from "lucide-react";

function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <div className="border-y-1 flex flex-row justify-around gap p-4 bg-white-shadow items-center w-full h-20 flex-1 border-r border-l">
      <p className="text-black font-bold text-xl mr-25 whitespace-nowrap shrink-0">
        Welcome, User!
      </p>
      <div className="flex flex-row items-center justify-between gap-12">
        <div className="relative gap-2 bg-slate-200 rounded-lg">
          <div className="absolute insert-y-0 left-0 flex items-center pl-3">
            <SearchCheck className="h-6 w-6 mt-2 text-slate-400" />
          </div>
          <input
            className="border-none py-2 pl-10 pr-4 w-[400px]"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <BellDot className=" w-6 h-6 text-slate-500" />
        <UserRound className="bg-slate-300 text-slate-400 rounded-full w-12 h-12" />
        <p className="bg-green-700 text-white border border-xl border-1 rounded-lg py-2 pl-6 pr-6">
          0123456789
        </p>
      </div>
    </div>
  );
}

export default Navbar;
