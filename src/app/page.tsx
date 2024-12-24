import { ChevronDown, ChevronRight, Cpu, LoaderCircle, Search, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white min-h-screen w-full text-black">
      {/* Logo and search */}
      <div className="flex w-full justify-between items-center p-2 px-36 pt-4 pb-4 ">
        <div className="text-blue-700 font-extrabold text-2xl">Logo</div>
        <div className="flex gap-2 bg-[#F0F5FE] rounded-full p-3 h-fit text-[#787878] ">
          <Search color="#787878" className="w-5 h-5" /> Search mobiles,
          laptops, brands and more
        </div>
      </div>

      {/* menu bar */}
      <div className="w-full bg-[#023359]">
        <div className="flex justify-center items-center gap-8 p-[10px]">
          <div className="text-white flex gap-1 text-[14px] justify-center items-center ">
            Mobiles <ChevronDown className="w-3" />
          </div>
          <div className="text-white flex gap-1 text-[14px] justify-center items-center ">
            Laptops
            <ChevronDown className="w-3" />
          </div>
          <div className="text-white flex gap-1 text-[14px] justify-center items-center ">
            TV
            <ChevronDown className="w-3" />
          </div>
          <div className="text-white flex gap-1 text-[14px] justify-center items-center ">
            Appliances
            <ChevronDown className="w-3" />
          </div>
          <div className="text-white flex gap-1 text-[14px] justify-center items-center ">
            Audio & Wearables
            <ChevronDown className="w-3" />
          </div>
          <div className="text-white flex gap-1 text-[14px] justify-center items-center ">
            Accessories
            <ChevronDown className="w-3" />
          </div>
          <div className="text-white flex gap-1 text-[14px] justify-center items-center ">
            News & Reviews
            <ChevronDown className="w-3" />
          </div>
          <div className="text-white flex gap-1 text-[14px] justify-center items-center ">
            Recharge
            <ChevronDown className="w-3" />
          </div>
          <div className="text-white flex gap-1 text-[14px] justify-center items-center ">
            Gaming
            <ChevronDown className="w-3" />
          </div>
        </div>
      </div>

      {/* Product Title with two sub heading and a rating and expert rating  in one flex div   */}
      <div className="flex justify-between p-5 pl-10 pr-10 items-center">
        <div>
          <div className="font-bold text-3xl text-[#253858]">
            BMW Car 4 Series
          </div>

          <div className="flex gap-4 items-center">
            <div className="text-sm text-[#7B879B]">
              Market Status : <span className="text-black">Available</span> |
              Released on: <span className="text-black">18 Jan 2024</span>
            </div>
            <div className="flex gap-2 justify-center items-center text-xs">
              <div className="text-xs text-[#7B879B] bg-[#ECF6FF] rounded-full flex gap-2 justify-center items-center px-2 py-1 pl-0">
                <div className="text-black flex justify-center items-center gap-1 pl-2 text-xs">
                  <Star
                    stroke="black"
                    strokeWidth={1}
                    fill="yellow"
                    className="w-3"
                  />
                  4.5/5
                </div>
                1,339 Ratings
              </div>

              <div className="text-xs text-[#7B879B] flex gap-2 justify-center items-center px-2 py-1 pl-0 bg-[#EBFDF9] rounded-full">
                <div className="text-black flex justify-center items-center gap-1 pl-2 text-xs">
                  <LoaderCircle stroke="green" className="w-3" />
                  8.7/10
                </div>
                By Expert
              </div>
            </div>
          </div>
        </div>

        <button className="border-[#007fdb] text-[#007fdb] py-1 px-2 font-bold  border-2 rounded-full p-0 h-fit">
          + Compare
        </button>
      </div>

      {/* A line full width h only 1 */}
      <div className="w-full flex justify-center">
        <div className="w-[95%] h-[1px] bg-[#DEDFDF]"></div>
      </div>

      {/* Card with grid display two columns only no row w-full. The second column has also grid display with two rows */}
      <div className="grid grid-cols-2 gap-4 mt-8 pl-10 pr-10">
        <div className="w-full rounded-md flex justify-center">
          <Image
            src={"https://wallpaperaccess.com/full/271396.jpg"}
            layout="responsive"
            width={500}
            height={10}
            alt="product"
          />
        </div>

        <div className="grid grid-rows-2 gap-4">
          <div className="w-full flex flex-col gap-2 rounded-md font-bold relative">
            <p className="col-span-2 row-span-1 font-semibold h-fit">
              Key Specifications
            </p>

            <div className="flex">
              {/*Specifications element*/}
              <div className="w-full flex flex-col gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <Cpu stroke="#7B879B" />
                    <div className="flex flex-col">
                      <div className="text-[#7B879B] font-extralight text-sm">
                        Processor
                      </div>
                      <div className="text-black text-base font-light">BMW</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Cpu stroke="#7B879B" />
                    <div className="flex flex-col">
                      <div className="text-[#7B879B] font-extralight text-sm">
                        Processor
                      </div>
                      <div className="text-black text-base font-light">BMW</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Cpu stroke="#7B879B" />
                    <div className="flex flex-col">
                      <div className="text-[#7B879B] font-extralight text-sm">
                        Processor
                      </div>
                      <div className="text-black text-base font-light">BMW</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Cpu stroke="#7B879B" />
                    <div className="flex flex-col">
                      <div className="text-[#7B879B] font-extralight text-sm">
                        Processor
                      </div>
                      <div className="text-black text-base font-light">BMW</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <Cpu stroke="#7B879B" />
                    <div className="flex flex-col">
                      <div className="text-[#7B879B] font-extralight text-sm">
                        Processor
                      </div>
                      <div className="text-black text-base font-light">BMW</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Cpu stroke="#7B879B" />
                    <div className="flex flex-col">
                      <div className="text-[#7B879B] font-extralight text-sm">
                        Processor
                      </div>
                      <div className="text-black text-base font-light">BMW</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Cpu stroke="#7B879B" />
                    <div className="flex flex-col">
                      <div className="text-[#7B879B] font-extralight text-sm">
                        Processor
                      </div>
                      <div className="text-black text-base font-light">BMW</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Cpu stroke="#7B879B" />
                    <div className="flex flex-col">
                      <div className="text-[#7B879B] font-extralight text-sm">
                        Processor
                      </div>
                      <div className="text-black text-base font-light">BMW</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <p className="absolute right-0 bottom-0 text-[#007fdb] flex">View Full Specs <ChevronRight className="w-5"/></p>


          </div>

          <div className="w-full  bg-[#F4F4F4] rounded-md"></div>
        </div>
      </div>
    </div>
  );
}
