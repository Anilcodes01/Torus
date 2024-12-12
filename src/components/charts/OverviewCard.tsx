import { useSelector } from "react-redux";
import { Users, UserCheck, UserX, MapPin } from "lucide-react";


interface User {
  id: string;
  isActive: boolean;
  region: string;
}


interface CardData {
  icon: React.ComponentType<any>;
  title: string;
  value: string | number;
  bgColor: string;
  textColor: string;
  iconBgColor: string;
  subValue?: string;
}

export default function OverviewCard() {
 
  const users = useSelector((state: { user: { users: User[] } }) => state.user.users);

  
  const activeUsersCount = users.filter((user) => user.isActive).length;
  const inactiveUsersCount = users.filter((user) => !user.isActive).length;

 
  const usersByRegion = users.reduce<{ [key: string]: number }>((acc, user) => {
    acc[user.region] = (acc[user.region] || 0) + 1;
    return acc;
  }, {});

 
  const topRegion = Object.keys(usersByRegion).reduce((a, b) =>
    usersByRegion[a] > usersByRegion[b] ? a : b, ''
  );


  const cardData: CardData[] = [
    {
      icon: Users,
      title: "Total Users",
      value: users.length,
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-400",
      iconBgColor: "bg-blue-500/20"
    },
    {
      icon: UserCheck,
      title: "Active Users",
      value: activeUsersCount,
      bgColor: "bg-green-500/10",
      textColor: "text-green-400",
      iconBgColor: "bg-green-500/20"
    },
    {
      icon: UserX,
      title: "Inactive Users",
      value: inactiveUsersCount,
      bgColor: "bg-red-500/10",
      textColor: "text-red-400",
      iconBgColor: "bg-red-500/20"
    },
    {
      icon: MapPin,
      title: "Top Region",
      value: topRegion,
      bgColor: "bg-purple-500/10",
      textColor: "text-purple-400",
      iconBgColor: "bg-purple-500/20",
      subValue: `${usersByRegion[topRegion]} Users`
    }
  ];

  return (
    <div className="grid grid-cols-2 p-12 pt-16 lg:p-16 gap-4 w-full">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`
            ${card.bgColor}
            rounded-2xl
            p-6
            flex
            items-center
            justify-between
            transform
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-xl
          `}
        >
          <div className="flex flex-col justify-center">
            <span className="text-sm uppercase tracking-wide text-gray-400 mb-2">
              {card.title}
            </span>
            <span className={`
              ${card.textColor}
              text-5xl
              font-bold
              tracking-tighter
              flex
              items-center
            `}>
              {card.value}
            </span>
            {card.subValue && (
              <span className="text-sm text-gray-500 mt-1">
                {card.subValue}
              </span>
            )}
          </div>
          <div className={`
            ${card.iconBgColor}
            rounded-full
            p-4
            flex
            items-center
            justify-center
          `}>
            <card.icon
              className={`
                ${card.textColor}
                w-8
                h-8
              `}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
