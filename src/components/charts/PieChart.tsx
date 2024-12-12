import React, { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { ApexOptions } from "apexcharts";


interface User {
  id: number;
  name: string;
  isActive: boolean;
}


interface RootState {
  user: {
    users: User[];
  };
}

const UserPieChart: React.FC = () => {
  
  const users = useSelector((state: RootState) => state.user.users) || [];

  
  const { activeUsersCount, inactiveUsersCount } = useMemo(() => {
    const activeCount = users.filter((user) => user.isActive).length;
    const inactiveCount = users.filter((user) => !user.isActive).length;
    return {
      activeUsersCount: activeCount,
      inactiveUsersCount: inactiveCount
    };
  }, [users]);

 
  const chartData = useMemo(() => {
    
    if (users.length === 0) {
      return {
        series: [0, 0],
        options: {
          labels: ["Active Users", "Inactive Users"],
          chart: {
            type: "pie",
          },
          noData: {
            text: 'No Data Available',
            align: 'center',
            verticalAlign: 'middle',
            style: {
              color: '#888',
              fontSize: '14px'
            }
          }
        } as ApexOptions
      };
    }

    return {
      series: [activeUsersCount, inactiveUsersCount],
      options: {
        chart: {
          type: "pie",
          width: "100%",
          height: "100%",
          background: 'transparent',
          animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
          },
        },
        labels: ["Active Users", "Inactive Users"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: "100%",
              },
              legend: {
                position: "bottom" as const,
              },
            },
          },
        ],
        colors: ["#10B981", "#EF4444"],
        stroke: {
          show: false,
        },
        plotOptions: {
          pie: {
            donut: {
              size: '45%',
              background: 'transparent',
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#4B5563',
                },
                value: {
                  show: true,
                  fontSize: '14px',
                  color: '#6B7280',
                },
                total: {
                  show: true,
                  label: 'Total Users',
                  color: '#9CA3AF',
                  formatter: function (w: any) {
                    
                    return w.globals.seriesTotals?.reduce 
                      ? w.globals.seriesTotals.reduce((a: number, b: number) => a + b, 0)
                      : 0;
                  }
                }
              }
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val: number) {
            return `${val.toFixed(1)}%`;
          },
          dropShadow: {
            enabled: false,
          },
          style: {
            fontSize: '12px',
            fontWeight: 'bold',
            colors: ['#ffffff']
          }
        },
        legend: {
          show: true,
          position: 'bottom' as const,
          horizontalAlign: 'center',
          floating: false,
          fontSize: '14px',
          fontWeight: 500,
          labels: {
            colors: '#4B5563',
          },
          markers: {
            width: 12,
            height: 12,
            radius: 6
          }
        },
        title: {
          text: "User Activity Distribution",
          align: "center",
          margin: 10,
          style: {
            fontSize: "18px",
            fontWeight: "bold",
            color: '#4B5563'
          },
        },
      } as ApexOptions,
    };
  }, [users, activeUsersCount, inactiveUsersCount]);

  return (
    <div className="w-full h-full flex justify-center items-center p-4 pt-8">
      <div className="w-full max-w-md">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="donut"
          height="350"
        />
      </div>
    </div>
  );
};

export default UserPieChart;