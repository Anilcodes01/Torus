import  { useEffect, useState } from 'react';
import { House, TvMinimal, ShoppingCart, CircleGauge, UsersRound, Component } from 'lucide-react';


interface User {
    id: number;
    name: string;
    avatarUrl: string
}

function Sidebar() {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  
  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      setLoggedInUser(JSON.parse(user));
    }
  }, []);

  if (!loggedInUser) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <div className="flex w-full items-center gap-2 lg:gap-4">
        <img
          className="rounded-full h-10 w-10"
          src={loggedInUser.avatarUrl}
          alt="User Avatar"
        />
        <span className="text-black font-bold">{loggedInUser.name}</span>
      </div>
      <div className="text-gray-400 mt-6 flex flex-col gap-2">
        <div className="p-2 cursor-pointer flex items-center hover:text-black gap-2 hover:bg-gray-200 rounded-lg">
          <House size={20} />
          <span>Home</span>
        </div>
        <div className="p-2 flex cursor-pointer items-center hover:text-black gap-2 hover:bg-gray-200 rounded-lg">
          <TvMinimal size={20} />
          <span>View site</span>
        </div>
        <div className="p-2 flex cursor-pointer items-center hover:text-black gap-2 hover:bg-gray-200 rounded-lg">
          <ShoppingCart size={20} />
          <span>Marketplace</span>
        </div>
        <div className="p-2 flex cursor-pointer items-center hover:text-black gap-2 hover:bg-gray-200 rounded-lg">
          <CircleGauge size={20} />
          <span>Performance</span>
        </div>
        <div className="p-2 flex cursor-pointer items-center hover:text-black gap-2 hover:bg-gray-200 rounded-lg">
          <UsersRound size={20} />
          <span>Members</span>
        </div>
        <div className="p-2 flex cursor-pointer items-center hover:text-black gap-2 hover:bg-gray-200 rounded-lg">
          <Component size={20} />
          <span>Design</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
