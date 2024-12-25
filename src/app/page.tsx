"use client";
import {
  ChevronDown,
  ChevronRight,
  Cpu,
  LoaderCircle,
  MemoryStick,
  Search,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > 100) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
      }
      if (currentScroll < 100) {
        setIsNavbarVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F8FF]">
      {/* Sticky Navbar */}
      {isNavbarVisible && (
        <div className="sticky top-0 z-10 ">
          <div className="bg-[#023359] flex gap-4 justify-center items-center">
            <div className="p-3 flex justify-center items-center bg-[#023359] uppercase text-blue-500 font-bold tracking-wide border-r-[1px] border-blue-500">
              Overview
            </div>
            <div className="p-3 flex justify-center items-center bg-[#023359] uppercase text-white font-bold tracking-wide border-r-[1px] border-blue-500">
              Specs
            </div>
            <div className="p-3 flex justify-center items-center bg-[#023359] uppercase text-white font-bold tracking-wide border-r-[1px] border-blue-500">
              Compare
            </div>
            <div className="p-3 flex justify-center items-center bg-[#023359] uppercase text-white font-bold tracking-wide border-r-[1px] border-blue-500">
              Expert View
            </div>
            <div className="p-3 flex justify-center items-center bg-[#023359] uppercase text-white font-bold tracking-wide border-r-[1px] border-blue-500">
              User Ratings
            </div>
            <div className="p-3 flex justify-center items-center bg-[#023359] uppercase text-white font-bold tracking-wide border-r-[1px] border-blue-500">
              News
            </div>
            <div className="p-3 flex justify-center items-center bg-[#023359] uppercase text-white font-bold tracking-wide border-r-[1px] border-blue-500">
              Benchmarks
            </div>
          </div>
        </div>
      )}
      <div className="bg-white w-full text-black">
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
          <div className="w-full rounded-md flex flex-col items-center gap-10">
            <Image
              src={"https://wallpaperaccess.com/full/271396.jpg"}
              width={500}
              height={400}
              alt="product"
            />
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            </div>

            <div className="text-blue-900 font-bold underline">
              View Gallery
            </div>

            <div className="flex gap-2">
              {/* div*4 with image same as above image url and size small */}
              <div className="p-2 w-full bg-[#e3eeff] rounded-lg">
                <Image
                  alt="image"
                  width={80}
                  height={400}
                  src={"https://wallpaperaccess.com/full/271396.jpg"}
                />
              </div>
              <div className="p-2 w-full bg-[#E3EEFF] rounded-lg">
                <Image
                  alt="image"
                  width={80}
                  height={400}
                  src={"https://wallpaperaccess.com/full/271396.jpg"}
                />
              </div>
              <div className="p-2 w-full bg-[#E3EEFF] rounded-lg">
                <Image
                  alt="image"
                  width={80}
                  height={400}
                  src={"https://wallpaperaccess.com/full/271396.jpg"}
                />
              </div>
              <div className="p-2 w-full bg-[#E3EEFF] rounded-lg">
                <Image
                  alt="image"
                  width={80}
                  height={400}
                  src={"https://wallpaperaccess.com/full/271396.jpg"}
                />
              </div>
            </div>

            <div className="bg-[#F6F6F8] flex gap-1 rounded-lg px-2 py-1">
              <Star
                stroke="black"
                strokeWidth={1}
                fill="yellow"
                className="w-3"
              />
              #5 in Cars above Rs 50,000 (Editor&apos;s Choice)
            </div>
          </div>

          <div className="grid grid-rows-2 gap-4">
            <div className="w-full flex flex-col gap-2 rounded-md font-bold relative">
              <p className="col-span-2 row-span-1 font-semibold h-fit text-xl">
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
                        <div className="text-black text-base font-light">
                          BMW
                        </div>
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
                        <div className="text-black text-base font-light">
                          BMW
                        </div>
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
                        <div className="text-black text-base font-light">
                          BMW
                        </div>
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
                        <div className="text-black text-base font-light">
                          BMW
                        </div>
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
                        <div className="text-black text-base font-light">
                          BMW
                        </div>
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
                        <div className="text-black text-base font-light">
                          BMW
                        </div>
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
                        <div className="text-black text-base font-light">
                          BMW
                        </div>
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
                        <div className="text-black text-base font-light">
                          BMW
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="absolute right-0 bottom-0 text-[#007fdb] flex">
                View Full Specs <ChevronRight className="w-5" />
              </p>
            </div>

            <div className="w-full gap-7 flex flex-col">
              <div className="w-full flex justify-center">
                <div className="w-[95%] h-[1px] bg-[#DEDFDF]"></div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="font-semibold text-xl">BMW 4 Series Prices</p>

                <div className="border gap-5 flex flex-col py-3 rounded-xl pr-2">
                  <div className="flex justify-between pl-5">
                    <div className="flex gap-2">
                      <MemoryStick /> 12 GB + 256 GB
                    </div>
                    <div className="bg-[#E3EEFF] rounded-full">
                      <ChevronDown stroke="#65B0EB" />
                    </div>
                  </div>
                  <div className="gap-2 flex flex-col">
                    <div className="flex justify-between px-5">
                      <div className="flex gap-2 items-center">
                        <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                        Amazon
                      </div>
                      <div className="text-blue-800 font-extrabold">$5,000</div>
                      <div className="rounded-full py-1 px-2 bg-[#007FDB] text-white">
                        Go to Store
                      </div>
                    </div>
                    <div className="w-full flex justify-center">
                      <div className="w-[95%] h-[1px] bg-[#DEDFDF]"></div>
                    </div>
                    <div className="flex justify-between px-5">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                        Samsung
                      </div>
                      <div className="text-blue-800 font-extrabold">$2,000</div>
                      <div className="rounded-full py-1 px-2 bg-[#007FDB] text-white">
                        Go to Store
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between px-7 bg-[#F3FAFF] py-2 rounded-lg border items-center">
                  <div>12 GB + 512 GB</div>
                  <div className="text-gray-700">
                    Starting From{" "}
                    <span className="text-black font-bold">$500000</span>
                  </div>
                  <div className="rounded-full py-1 px-2 text-[#007FDB] font-medium flex  gap-1">
                    View All <ChevronDown />
                  </div>
                </div>
                <div className="flex justify-between px-7 bg-[#F3FAFF] py-2 rounded-lg border items-center">
                  <div>12 GB + 512 GB</div>
                  <div className="text-gray-700">
                    Starting From{" "}
                    <span className="text-black font-bold">$500000</span>
                  </div>
                  <div className="rounded-full py-1 px-2 text-[#007FDB] font-medium flex  gap-1">
                    View All <ChevronDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* After Card */}

      <div className="p-6 bg-white shadow rounded-lg max-w-5xl mx-auto mt-10">
        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <h2 className="text-lg font-semibold">Expert View</h2>
            <p className="text-sm text-gray-500">
              By{" "}
              <a href="#" className="text-blue-600">
                Robin John
              </a>{" "}
              | on Feb 11, 2024
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">8.7</span>
            <span className="text-gray-500">/10</span>
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
              Expert Score
            </span>
          </div>
        </div>

        {/* <!-- Scores Section --> */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mt-4">
          <div className="text-center">
            <p className="text-xl font-bold text-green-600">9.0</p>
            <p className="text-sm text-gray-500">Design</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-green-600">9.0</p>
            <p className="text-sm text-gray-500">Display</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-green-600">8.5</p>
            <p className="text-sm text-gray-500">Performance</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-green-600">9.0</p>
            <p className="text-sm text-gray-500">Battery</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-green-600">8.5</p>
            <p className="text-sm text-gray-500">Camera</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-green-600">9.0</p>
            <p className="text-sm text-gray-500">Software</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-green-600">8.5</p>
            <p className="text-sm text-gray-500">Sound</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-yellow-500">7.5</p>
            <p className="text-sm text-gray-500">VFM</p>
          </div>
        </div>

        {/* <!-- Pros and Cons --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-green-50 p-4 rounded-lg shadow">
            <h3 className="text-green-700 font-semibold flex items-center">
              <span className="mr-2">👍</span> Pros
            </h3>
            <ul className="mt-2 text-sm text-gray-600 space-y-1">
              <li>Striking, bright and vivid display</li>
              <li>Anti-reflective coating is a godsend</li>
              <li>Excellent and reliable battery life</li>
              <li>Circle to search and Generative Edit are useful tools</li>
              <li>Great camera setup, useful 5x periscope lens</li>
              <li>Good performance</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg shadow">
            <h3 className="text-red-700 font-semibold flex items-center">
              <span className="mr-2">👎</span> Cons
            </h3>
            <ul className="mt-2 text-sm text-gray-600 space-y-1">
              <li>Costlier than ever</li>
              <li>Unwieldy size, sharp edges</li>
              <li>Charging speeds need an upgrade</li>
              <li>Some AI features need refinement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
