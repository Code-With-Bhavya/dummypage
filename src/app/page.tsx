import { Search } from "lucide-react";

export default function Home() {


  return (
    <div className="bg-white min-h-screen w-full text-black">

      {/* Logo and search */}
      <div className="flex w-full justify-between p-2 px-36 pt-8 ">
        <div className="text-blue-700 font-extrabold text-2xl">Logo</div>
        <div className="flex gap-2 bg-[#F0F5FE] rounded-full p-3 h-fit "><Search color="black" className="w-5 h-5"/> Search mobiles, laptops, brands and more</div>
      </div>



    {/* menu bar */}
    <div className="w-full"></div>

    </div>
  );
}
