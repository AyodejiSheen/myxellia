import Carousels from "@/components/carousels";
import { Iconify } from "@/components/icon";
import StatsCard from "@/components/statsCard";
import StatsInfo from "@/components/statsInfo";
import { duration } from "@/utils/constants";
import { cn } from "@/utils/helper";
import SalesCharts from "./_components/salesChart";

export default function Home() {
  return (
    <section className="container px-2 mx-auto py-3">
      <h1 className="text-xl font-semibold">Welcome, Ahmed</h1>
      <section className="mt-4 flex gap-5">
        <div className="flex-1 py-4 bg-white border border-gray rounded-2xl space-y-4">
          <div className="pb-3 px-4 border-b border-gray space-y-3">
            <div className="flex items-center gap-6 justify-between">
              <div className="space-y-3">
                <h1 className="text-xl font-semibold">Sales Overview</h1>
                <p className="text-xs text-[#606060]">
                  Showing overview Jan 2022 - Sep 2022
                </p>
              </div>
              <button className="h-10 text-xs hover:bg-gray hover_transit flex place-items-center border border-gray rounded-full px-9">
                View Transactions
              </button>
            </div>

            <div className="flex items-center justify-end">
              <div className="w-full max-w-xs flex items-center gap-3">
                {duration.map((item, index) => (
                  <button
                    key={index}
                    className={cn(
                      "px-5 h-9 gap-2 hover_transit flex items-center justify-center text-[#3D3D3D] rounded-lg sub_text w-full",
                      index === 2
                        ? "bg-[#F5F5F5] font-semibold text-black"
                        : "hover:bg-[#F5F5F5]"
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid xl:grid-cols-2 gap-6 px-4">
            <div>
              <SalesCharts />
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              <StatsCard
                title="Total Inflow"
                value="₦120,000,000.00"
                percentage="2.5%"
                isUp
                titleClass="text-blue"
              />
              <StatsCard
                title="MRR"
                value="₦50,000,000.00"
                percentage="2.5%"
                isUp
                titleClass="text-green"
              />
              <StatsCard
                title="Commission Revenue"
                value="₦200,000,000.00"
                percentage="0.5%"
                titleClass="text-teal"
              />
              <StatsCard
                title="GMV"
                value="₦100,000,000.00"
                percentage="0.5%"
                titleClass="text-danger"
              />
            </div>
          </div>
        </div>

        <div className="w-full max-w-sm flex flex-col gap-5">
          <div className="rounded-2xl border border-gray overflow-hidden flex-1">
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray bg-[#F9FAFB] rounded-t-xl">
              <div className="flex items-center gap-2.5">
                <Iconify
                  icon="solar:home-linear"
                  className="text-blue text-lg"
                />
                <h6 className="sub_text font-medium">Listing Overview</h6>
              </div>
              <button className="flex items-center font-medium gap-2 text-xs text-blue hover_transit">
                <p>View all</p>
                <Iconify icon="ep:arrow-right" />
              </button>
            </div>
            <div className="px-5 py-5 grid grid-cols-3 gap-9">
              <StatsInfo title="Total" value="1.8k" />
              <StatsInfo title="Active" value="80" />
              <StatsInfo title="Archived" value="1k" />
            </div>
          </div>

          <div className="rounded-2xl border border-gray overflow-hidden flex-1">
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray bg-[#F9FAFB] rounded-t-xl">
              <div className="flex items-center gap-2.5">
                <Iconify
                  icon="solar:user-outline"
                  className="text-blue text-lg"
                />
                <h6 className="sub_text font-medium">Users Overview</h6>
              </div>
              <button className="flex items-center font-medium gap-2 text-xs text-blue hover_transit">
                <p>View all</p>
                <Iconify icon="ep:arrow-right" />
              </button>
            </div>
            <div className="px-5 py-5 grid grid-cols-3 gap-9">
              <StatsInfo title="Total" value="20.7k" />
              <StatsInfo title="Riders" value="8.5k" />
              <StatsInfo title="Subscribers" value="7.5k" />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 grid grid-cols-3 gap-4">
        <Carousels
          data={[
            {
              subtext: "Urban Prime Plaza Premiere",
              title: "MOST CLICKED",
              img: "/carousel-1.jpg",
            },
            {
              subtext: "Urban Prime Plaza Premiere",
              title: "MOST CLICKED",
              img: "/carousel-1.jpg",
            },
          ]}
        />

        <Carousels
          data={[
            {
              subtext: "Urban Prime Plaza Premiere",
              title: "MOST WATCHLISTED",
              img: "/carousel-2.jpg",
            },
            {
              subtext: "Urban Prime Plaza Premiere",
              title: "MOST WATCHLISTED",
              img: "/carousel-2.jpg",
            },
            {
              subtext: "Urban Prime Plaza Premiere",
              title: "MOST WATCHLISTED",
              img: "/carousel-2.jpg",
            },
          ]}
        />

        <Carousels
          data={[
            {
              subtext: "Urban Prime Plaza Premiere",
              title: "HOTTEST LISTING",
              img: "/carousel-3.jpg",
            },
            {
              subtext: "Urban Prime Plaza Premiere",
              title: "HOTTEST LISTING",
              img: "/carousel-3.jpg",
            },
            {
              subtext: "Urban Prime Plaza Premiere",
              title: "HOTTEST LISTING",
              img: "/carousel-3.jpg",
            },
            {
              subtext: "Urban Prime Plaza Premiere",
              title: "HOTTEST LISTING",
              img: "/carousel-3.jpg",
            },
          ]}
        />
      </section>
    </section>
  );
}
