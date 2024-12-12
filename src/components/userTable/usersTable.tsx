import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, removeUsers } from "../../redux/user/userSlice";
import { useEffect, useState } from "react";
import { Search, Trash2, Dot, EllipsisVertical } from "lucide-react";
import { FaArrowDown } from "react-icons/fa6";


interface User {
  id: number;
  name: string;
  email: string;
  avatarUrl: string;
  isActive: boolean;
  dateJoined: string;
}


interface RootState {
  user: {
    users: User[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
  };
}

function Users() {
  const [search, setSearch] = useState<string>("");
  const dispatch = useDispatch();

  
  const { users, status, error } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchUsers() as any);  
  }, [dispatch]);

  if (status === "failed") {
    return <p className="text-red-500">Error: {error}</p>;
  }

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 bg-customBackgroundColour rounded-lg shadow-lg">
      <h2 className="text-xl mb-4 font-bold text-black flex justify-between text-customAccent">
        Members
        <EllipsisVertical size={22} className="text-black cursor-pointer" />
      </h2>

      <div className="flex items-center border rounded-lg p-2 w-full mb-6 shadow-sm">
        <Search className="text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search Users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="ml-2 w-full text-gray-300 text-sm  outline-none "
        />
      </div>
      
    
      <div className="grid grid-cols-[3fr_1fr_1fr_1fr] items-center bg-customAccent text-black py-2 px-4 rounded-lg ">
        <div className=" items-center gap-2 flex">
          Member
          <FaArrowDown />
        </div>
        <div className=" ">Status</div>
        <div className=" text-center">Enrolled</div>
        <div className=" text-end">Action</div>
      </div>
      
      
      <div className="mt-4">
        {filteredUsers.map((user) => (
          <div
            className={`grid grid-cols-[3fr_1fr_1fr_1fr] items-center py-2 cursor-pointer rounded-lg hover:shadow-lg`}
            key={user.id}
          >
           
            <div className="flex items-center gap-4">
              <img
                className="rounded-full h-12 w-12 shadow"
                src={user.avatarUrl}
                alt="User Avatar"
              />
              <div>
                <span className="font-medium text-black">{user.name}</span>
                <div className="text-sm text-gray-500">{user.email}</div>
              </div>
            </div>
           
            <div className="text-gray-500 flex items-end text-center">
              {user.isActive ? (
                <span className="border rounded-full w-20 flex text-center text-sm items-center border-gray-600 ">
                  <Dot className="text-yellow-500" />
                  Active
                </span>
              ) : (
                <span className="border rounded-full w-20 flex text-center px-1 text-sm border-gray-600 ">
                  <Dot className="text-gray-500" />
                  Inactive
                </span>
              )}
            </div>
           
            <div className="text-gray-500 text-sm text-center">
              {user.dateJoined}
            </div>
           
            <div className="flex justify-end w-full">
              <Trash2
                onClick={() => dispatch(removeUsers(user.id) as any)}  
                size={20}
                className="text-gray-600 hover:text-gray-700 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
