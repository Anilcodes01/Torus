import React, { useState, useEffect } from "react";
import ApexCharts from "react-apexcharts";
import { useSelector, useDispatch } from "react-redux";
import { fetchAnalytics } from "../../redux/analytics/analyticsSlice";
import { AppDispatch, RootState } from "../../app/store"; 

interface TimeRangeOption {
  months: number;
  label: string;
}

const UsersChart: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { totalUsers, activeUsers, inactiveUsers, status } = useSelector(
    (state: RootState) => state.analytics
  );
  const [timeRange, setTimeRange] = useState<number>(12);

  useEffect(() => {
    dispatch(fetchAnalytics({ timeRange }));
  }, [timeRange, dispatch]);

  const timeRangeOptions: TimeRangeOption[] = [
    { months: 12, label: "12 Months" },
    { months: 6, label: "6 Months" },
    { months: 4, label: "4 Months" },
  ];

  const data = {
    series: [
      {
        name: `User Stats (Last ${timeRange} Months)`,
        data: [totalUsers, activeUsers, inactiveUsers],
      },
    ],
    options: {
      chart: {
        type: "area" as "area",
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      stroke: {
        curve: "smooth" as const,
        width: 2,
      },
      fill: {
        opacity: 0.4,
        colors: ["#1E88E5"],
      },
      title: {
        text: `User Statistics - Last ${timeRange} Months`,
        align: "center" as const,
        style: {
          color: "#32325d",
          fontSize: "16px",
        },
      },
      xaxis: {
        categories: ["Total Users", "Active Users", "Inactive Users"],
        labels: {
          style: {
            colors: "#000",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        min: 0,
        max: Math.max(totalUsers, 25),
        labels: {
          formatter: (value: number) => value.toFixed(0),
          style: {
            colors: "#000",
            fontSize: "12px",
          },
        },
      },
      tooltip: {
        theme: "dark",
        style: {
          fontSize: "12px",
          color: "#000",
        },
      },
      legend: {
        labels: {
          colors: "#000",
        },
      },
    },
  };

  return (
    <div className="h-1/2 bg-customDark rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center gap-4 mb-4">
        <span className="text-xl text-black font-bold">Total Members</span>
        <div className="flex gap-2">
          {timeRangeOptions.map(({ months, label }) => (
            <button
              key={months}
              className={`px-2 py-1 rounded transition-all duration-300 ${
                timeRange === months ? "text-black" : "text-gray-400"
              }`}
              onClick={() => setTimeRange(months)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {status === "loading" ? (
        <p className="text-white">Loading...</p>
      ) : status === "failed" ? (
        <p className="text-red-500">Failed to fetch analytics.</p>
      ) : (
        <ApexCharts
          options={data.options}
          series={data.series}
          type="area"
          height={350}
        />
      )}
    </div>
  );
};

export default UsersChart;
