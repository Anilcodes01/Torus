import  { useState, useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { ApexOptions } from "apexcharts";

interface User {
  id: number;
  region: string;
  dateJoined: string;
}

interface RootState {
  user: {
    users: User[];
  };
}

const UsersByRegionChart = () => {
  const [timeRange, setTimeRange] = useState<number>(12);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const users: User[] = useSelector((state: RootState) => state.user.users) || [];

  const availableRegions: string[] = useMemo(
    () => [...new Set(users.map((user) => user.region))],
    [users]
  );

  const filteredUsers: User[] = useMemo(() => {
    const currentDate = new Date();
    const cutoffDate = new Date(currentDate.setMonth(currentDate.getMonth() - timeRange));

    return users.filter((user) => {
      const userJoinDate = new Date(user.dateJoined);
      const matchesTimeRange = userJoinDate >= cutoffDate;
      const matchesRegion = !selectedRegion || user.region === selectedRegion;

      return matchesTimeRange && matchesRegion;
    });
  }, [users, timeRange, selectedRegion]);

  const countUsersByRegion = (users: User[]): Record<string, number> => {
    const regionCounts: Record<string, number> = {};
    users.forEach((user) => {
      regionCounts[user.region] = (regionCounts[user.region] || 0) + 1;
    });
    return regionCounts;
  };

  const regionCounts = countUsersByRegion(filteredUsers);

  const chartData: { series: { name: string; data: number[] }[]; options: ApexOptions } = {
    series: [
      {
        name: "Users",
        data: Object.values(regionCounts),
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      title: {
        text: `User Distribution by Region (Last ${timeRange} Months)${
          selectedRegion ? ` - ${selectedRegion}` : ""
        }`,
        align: "center",
        style: {
          fontSize: "16px",
          fontWeight: "bold",
        },
      },
      xaxis: {
        categories: Object.keys(regionCounts),
        title: {
          text: "Region",
        },
      },
      yaxis: {
        title: {
          text: "Number of Users",
        },
        min: 0,
      },
      tooltip: {
        theme: "dark",
        style: {
          fontSize: "12px",
          
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%",
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div className="bg-customDark rounded-lg  pl-12 pt-6">
      <div className="flex justify-between items-center mb-4">
        <select
          value={selectedRegion || ""}
          onChange={(e) => setSelectedRegion(e.target.value || null)}
          className="border text-black p-1 outline-none rounded"
        >
          <option value="">All Regions</option>
          {availableRegions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
        <div className="flex gap-2">
          {[12, 6, 4].map((months) => (
            <button
              key={months}
              className={`px-2 py-1 rounded ${
                timeRange === months ? "text-black" : "text-gray-400"
              }`}
              onClick={() => setTimeRange(months)}
            >
              {months} Months
            </button>
          ))}
        </div>
      </div>

      {Object.keys(regionCounts).length > 0 ? (
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={350}
        />
      ) : (
        <div className="text-center text-white py-4">
          No users found for the selected time range and region.
        </div>
      )}
    </div>
  );
};

export default UsersByRegionChart;
