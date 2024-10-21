import "./App.css";

import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import ImportExportIcon from "@mui/icons-material/ImportExport";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import { brown, green, orange } from "@mui/material/colors";
import PaidIcon from "@mui/icons-material/Paid";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import WestIcon from "@mui/icons-material/West";
import AttachMoneySharpIcon from "@mui/icons-material/AttachMoneySharp";
function App() {
  return (
    <>
      <Box className="grid grid-cols-5 font-open">
        {/*Finance  */}
        <Box className="flex flex-col h-full text-white bg-[#201f24] rounded-r-2xl ">
          <Box>
            <h2 className="pt-5 pl-5 text-left text-2xl font-bold">Finance</h2>
          </Box>
          {/* 5 items */}
          <Box sx={{ flexDirection: "column", paddingTop: "10px" }}>
            <Box className="flex flex-col gap-2 mr-3 pt-4 ">
              {/* item-1 */}
              <Box className="bg-[#f8f5f0] text-[#201f24] text-sm transition duration-500 ease-in-out flex items-center gap-3 py-2 pl-6 hover:border-l-8 hover:border-green-400 cursor-pointer rounded-r-md">
                <HomeIcon sx={{ color: green[500] }} />
                <Box className="font-bold text-xs">Overview</Box>
              </Box>
              {/* item-2 */}
              <Box className=" text-sm transition duration-500 ease-in-out flex items-center gap-3 py-2 pl-6 hover:border-l-8 hover:border-yellow-400 cursor-pointer rounded-r-md hover:bg-[#f8f5f0] hover:text-[#201f24]">
                <Box>
                  <ImportExportIcon sx={{ color: orange[200] }} />
                </Box>
                <Box className="font-bold text-xs">Transactions</Box>
              </Box>
              {/* item-3 */}
              <Box className=" text-sm transition duration-500 ease-in-out flex items-center gap-3 py-2 pl-6 hover:border-l-8 hover:border-yellow-400 cursor-pointer rounded-r-md hover:bg-[#f8f5f0] hover:text-[#201f24]">
                <Box>
                  <DonutSmallIcon sx={{ color: orange[200] }} />
                </Box>
                <Box className="font-bold text-xs">Budgets</Box>
              </Box>
              {/* item-4 */}
              <Box className=" text-sm transition duration-500 ease-in-out flex items-center gap-3 py-2 pl-6 hover:border-l-8 hover:border-yellow-400 cursor-pointer rounded-r-md hover:bg-[#f8f5f0] hover:text-[#201f24]">
                <Box>
                  <PaidIcon sx={{ color: orange[200] }} />
                </Box>
                <Box className="font-bold text-xs">Pots</Box>
              </Box>
              {/* item-5 */}
              <Box className=" text-sm transition duration-500 ease-in-out flex items-center gap-3 py-2 pl-6 hover:border-l-8 hover:border-yellow-400 cursor-pointer rounded-r-md hover:bg-[#f8f5f0] hover:text-[#201f24]">
                <ReceiptIcon sx={{ color: orange[200] }} />
                <Box className="font-bold text-xs">Recurring Bills</Box>
              </Box>
            </Box>
          </Box>
          {/* Minimize */}
          <Box className="transition duration-500 ease-in-out flex items-center gap-3 py-2 pl-6 cursor-pointer rounded-r-md pt-[540px] font-bold text-xs">
            <span>
              <WestIcon sx={{ color: orange[200] }} />
            </span>
            Minimize Menu
          </Box>
        </Box>
        {/* Overview */}
        <Box className="col-span-4 bg-[#f8f5f0] p-6 rounded-r-2xl">
          <Box className="">
            <h2 className="text-left text-2xl font-bold pb-5 pl-2 text-[#201f24]">
              Overview
            </h2>
            {/* Overview 3-cards */}
            <Box className="grid grid-cols-3 gap-3">
              <Box className="flex flex-col items-start rounded-lg my-2 mx-2 bg-white px-4 py-3 text-[#201f24] hover:bg-black hover:text-[#f8f5f0] transition duration-500 cursor-pointer ">
                <div className="text-sm">Current Balance</div>
                <div className="text-3xl font-extrabold pt-3">$4,836.00</div>
              </Box>
              <Box className="flex flex-col items-start rounded-lg my-2 mx-2 bg-white px-4 py-3 text-[#201f24] hover:bg-black hover:text-[#f8f5f0] transition duration-500 cursor-pointer ">
                <div className="text-sm">Income</div>
                <div className="text-3xl font-extrabold pt-3">$3,814.25</div>
              </Box>
              <Box className="flex flex-col items-start rounded-lg my-2 mx-2 bg-white px-4 py-3 text-[#201f24] hover:bg-black hover:text-[#f8f5f0] transition duration-500 cursor-pointer ">
                <div className="text-sm">Expenses</div>
                <div className="text-3xl font-extrabold pt-3">$1,700.50</div>
              </Box>
            </Box>
          </Box>

          <Box class="grid grid-cols-5 grid-rows-3 gap-4 pt-4">
            {/* 1. Pots */}
            <Box class="col-span-3 bg-white p-3 rounded-xl ">
              <Box className="flex items-center px-5">
                <h2 className="flex-1 text-left font-bold text-lg text-[#201f24]">
                  Pots
                </h2>
                <p className="flex-none w-20 text-xs text-slate-400 ">
                  See Details
                </p>
                <ArrowRightIcon
                  sx={{ fontSize: "medium", color: brown[900] }}
                />
              </Box>
              {/* Pots-Details */}
              <Box className="flex pt-8 pl-5">
                <Box className="flex items-center mr-4 px-4 bg-[#f8f5f0] rounded-lg w-56 h-24 ">
                  <Box className="flex w-9 ">
                    <AttachMoneySharpIcon
                      sx={{ fontSize: "40px", color: brown[900] }}
                    />
                  </Box>
                  {/* Total Saved */}
                  <Box className="pl-4">
                    <p className="text-left text-xs text-[#201f24]">
                      Total Saved
                    </p>
                    <p className="font-extrabold text-4xl pt-2 text-[#201f24]">
                      $850
                    </p>
                  </Box>
                </Box>
                {/* 4 minipots */}
                <Box className="grid grid-cols-2 gap-x-3">
                  <Box className="border-l-4 border-[#277c77] ml-1 pl-3">
                    <p className="text-left text-xs text-gray-400">Savings</p>
                    <p className="text-left font-extrabold text-sm text-[#201f24]">
                      $159
                    </p>
                  </Box>
                  <Box className="border-l-4 border-[#81c8d7] ml-5 pl-3">
                    <p className="text-left text-xs text-gray-400">Gift</p>
                    <p className="text-left font-extrabold text-sm text-[#201f24]">
                      $40
                    </p>
                  </Box>
                  <Box className="border-l-4 border-[#625f70] ml-1 pl-3 mt-4">
                    <p className="text-left text-xs text-gray-400">
                      Concert Ticket
                    </p>
                    <p className="text-left font-extrabold text-sm text-[#201f24]">
                      $159
                    </p>
                  </Box>
                  <Box className="border-l-4 border-[#f1cdab] ml-5 pl-3 mt-4">
                    <p className="text-left text-xs text-gray-400">
                      New Laptop
                    </p>
                    <p className="text-left font-extrabold text-sm text-[#201f24]">
                      $10
                    </p>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* 2. Budgets */}
            <Box class="row-span-2 col-span-2 bg-white p-3 rounded-xl ">
              <Box className="flex px-4 items-center">
                <h2 className="flex-1 text-left font-bold text-lg text-[#201f24]">
                  Budgets
                </h2>
                <p className="flex-none w-20 text-xs text-slate-400 ">
                  See Details
                </p>
                <ArrowRightIcon
                  sx={{ fontSize: "medium", color: brown[900] }}
                />
              </Box>

              <Box className="flex items-center text-black rounded-lg pt-10">
                <Box className="flex justify-center items-center">
                  <img
                    src="images/Screenshot_From_2024-10-19_16-08-35-removebg-preview.png"
                    alt=""
                  />
                </Box>
                {/* Details 4 */}
                <Box className="text-left text-xs flex flex-col gap-1">
                  <Box className="border-l-4 border-[#277c77] ml-1 pl-2 flex flex-col gap-1">
                    <p className="text-gray-400">Entertainment</p>
                    <p className=" font-extrabold text-xs text-[#201f24]">
                      $50.00
                    </p>
                  </Box>

                  <Box className="border-l-4 border-[#81c8d7] ml-1 pl-2 mt-3 flex flex-col gap-1">
                    <p className="text-gray-400">Bills</p>
                    <p className=" font-extrabold text-xs text-[#201f24]">
                      $750.00
                    </p>
                  </Box>

                  <Box className="border-l-4 border-[#625f70] ml-1 pl-2 mt-3 flex flex-col gap-1">
                    <p className="text-gray-400">Dining Out</p>
                    <p className=" font-extrabold text-xs text-[#201f24]">
                      $75.00
                    </p>
                  </Box>

                  <Box className="border-l-4 border-[#f1cdab] ml-1 pl-2 mt-3 flex flex-col gap-1">
                    <p className="text-gray-400">Personal Care</p>
                    <p className=" font-extrabold text-xs text-[#201f24]">
                      $100.00
                    </p>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* 3. Transactions */}
            <Box class="col-span-3 row-span-2 bg-white rounded-xl px-5 ">
              <Box className="flex items-center">
                <h2 className="flex-1 text-left font-bold text-lg pt-3 text-[#201f24]">
                  Transactions
                </h2>
                <p className="flex-none w-20 text-xs text-slate-400 ">
                  See Details
                </p>
                <ArrowRightIcon
                  sx={{ fontSize: "medium", color: brown[900] }}
                />
              </Box>

              <Box className="flex flex-col gap-4 text-xs">
                {/* profile-1 */}
                <Box className=" flex justify-between items-end border-b-2 pb-4 pt-6 ">
                  <div className="flex justify-center items-center gap-2">
                    <img
                      src="images/1.jpg"
                      alt=""
                      className="w-10 rounded-3xl"
                    />
                    <p className="text-left font-bold text-[#201f24]">
                      Emma Richardson
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="pb-2 font-bold text-[#277c77] ">+$75.50</p>
                    <p className="text-gray-400">19 Aug 2024</p>
                  </div>
                </Box>

                {/* profile-2 */}

                <Box className="flex justify-between items-end border-b-2 pb-4">
                  <div className="flex justify-center items-center gap-2">
                    <img
                      src="images/2.jpg"
                      alt=""
                      className="w-10 rounded-3xl"
                    />
                    <p className="text-left font-bold  text-[#201f24]">
                      Savory Bites Bistro
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="pb-2 font-bold text-[#201f24]">+$55.50</p>
                    <p className="text-gray-400">19 Aug 2024</p>
                  </div>
                </Box>

                {/* profile-3 */}

                <Box className="flex justify-between items-end border-b-2 pb-4 ">
                  <div className="flex justify-center items-center gap-2">
                    <img
                      src="images/3.jpg"
                      alt=""
                      className="w-10 rounded-3xl"
                    />{" "}
                    <p className="text-left font-bold text-[#201f24]">
                      Daniel Carter
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="pb-2 font-extrabold text-[#201f24]">
                      +$42.30
                    </p>
                    <p className="text-gray-400">17 Aug 2024</p>
                  </div>
                </Box>

                {/* profile-4 */}

                <Box className="flex justify-between items-end border-b-2 pb-4 ">
                  <div className="flex justify-center items-center gap-2">
                    <img
                      src="images/4.jpg"
                      alt=""
                      className="w-10 rounded-3xl"
                    />{" "}
                    <p className="text-left font-bold text-[#201f24]">
                      Sun Park
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="pb-2 font-bold text-[#277c77] ">+$120.00</p>
                    <p className="text-gray-400">17 Aug 2024</p>
                  </div>
                </Box>

                {/* profile-5 */}

                <Box className="flex justify-between items-end pb-2 ">
                  <div className="flex justify-center items-center gap-2">
                    <img
                      src="images/5.jpg"
                      alt=""
                      className="w-10 rounded-3xl"
                    />
                    <p className="text-left font-bold text-[#201f24]">
                      Urban Services Hub
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="pb-2 font-bold text-[#201f24]">+$65.50</p>
                    <p className="text-gray-400">17 Aug 2024</p>
                  </div>
                </Box>
              </Box>
            </Box>

            {/* 4. Recurring Bills */}
            <Box class="  col-span-2 bg-white p-3 rounded-xl ">
              <Box className="flex items-center justify-between pb-6 text-sm">
                <h2 className="flex-1 text-left font-bold text-lg  text-[#201f24]">
                  Recurring Bills
                </h2>
                <p className="flex-none w-20 text-xs text-slate-400 ">
                  See Details
                </p>
                <ArrowRightIcon sx={{ fontSize: "medium" }} />
              </Box>
              <Box className="flex flex-col gap-3">
                {/*Bill-1*/}
                <Box className="flex items-center justify-between bg-[#f8f5f0] px-3 py-3 border-l-4 border-[#277c77] rounded-md">
                  <p className="text-xs text-gray-400">Paid Bills</p>
                  <p className="font-bold text-xs text-[#201f24]">$190.00</p>
                </Box>
                {/* Bill-2*/}
                <Box className="flex items-center justify-between bg-[#f8f5f0] px-3 py-3 border-l-4 border-[#f1cdab] rounded-md">
                  <p className="text-xs text-gray-400">Total Upcoming</p>
                  <p className="font-bold text-xs text-[#201f24]">$194.98</p>
                </Box>
                {/*Bill-3*/}
                <Box className="flex items-center justify-between bg-[#f8f5f0] px-3 py-3 border-l-4 border-[#81c8d7] rounded-md">
                  <p className="text-xs text-gray-400">Due Soon</p>
                  <p className="font-bold text-xs text-[#201f24]">$59.98</p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
