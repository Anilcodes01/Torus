import Sidebar from "../components/sidebar";
import { Search } from "lucide-react";
import Users from "../components/userTable/usersTable";
import UsersChart from "../components/charts/LineChart";
import OverviewCard from "../components/charts/OverviewCard";
import UsersByRegionChart from "../components/charts/BarChart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";





function Dashboard() {
  
 
  return (
    <div className="grid md:grid-cols-[20%_80%] grid-cols-1 bg-customDark text-white min-h-screen">
      <div className="hidden   md:block bg-gray-100 p-4">
        <Sidebar />
      </div>

      <div className="flex-grow p-4  space-y-4">
        <div className="flex justify-between">
          <span className="text-3xl font-mona text-black font-bold">
            Your Dashboard
          </span>
          <div className="flex items-center border rounded-lg p-2 ">
            <Search className="text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search Users..."
              className="ml-2 w-full text-sm  outline-none"
            />
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
        >
          <SwiperSlide>
            <OverviewCard />
          </SwiperSlide>
          <SwiperSlide>
            <UsersChart />
          </SwiperSlide>
       
          <SwiperSlide>
            <UsersByRegionChart />
          </SwiperSlide>
        </Swiper>

        <div className="flex-grow">
          <Users />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
