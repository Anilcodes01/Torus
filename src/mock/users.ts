const usersData = [
    {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@example.com",
      "isActive": true,
      "avatarUrl": "https://randomuser.me/api/portraits/men/1.jpg",
      "dateJoined": "2024-05-15",
      "region": "Auckland"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "janesmith@example.com",
      "isActive": false,
      "avatarUrl": "https://randomuser.me/api/portraits/women/2.jpg",
      "dateJoined": "2024-02-28",
      "region": "Wellington"
    },
    {
      "id": 3,
      "name": "Samuel Green",
      "email": "samuelgreen@example.com",
      "isActive": true,
      "avatarUrl": "https://randomuser.me/api/portraits/men/3.jpg",
      "dateJoined": "2024-07-12",
      "region": "Christchurch"
    },
    {
      "id": 4,
      "name": "Emily Brown",
      "email": "emilybrown@example.com",
      "isActive": false,
      "avatarUrl": "https://randomuser.me/api/portraits/women/4.jpg",
      "dateJoined": "2024-09-09",
      "region": "Auckland"
    },
    {
      "id": 5,
      "name": "Michael Johnson",
      "email": "michaeljohnson@example.com",
      "isActive": true,
      "avatarUrl": "https://randomuser.me/api/portraits/men/5.jpg",
      "dateJoined": "2024-01-20",
      "region": "Wellington"
    },
    {
      "id": 6,
      "name": "Emma Wilson",
      "email": "emmawilson@example.com",
      "isActive": true,
      "avatarUrl": "https://randomuser.me/api/portraits/women/6.jpg",
      "dateJoined": "2024-06-04",
      "region": "Christchurch"
    },
    {
      "id": 7,
      "name": "David Jones",
      "email": "davidjones@example.com",
      "isActive": false,
      "avatarUrl": "https://randomuser.me/api/portraits/men/7.jpg",
      "dateJoined": "2024-03-18",
      "region": "Auckland"
    },
    {
      "id": 8,
      "name": "Sophia Garcia",
      "email": "sophiagarcia@example.com",
      "isActive": true,
      "avatarUrl": "https://randomuser.me/api/portraits/women/8.jpg",
      "dateJoined": "2024-11-07",
      "region": "Wellington"
    },
    {
      "id": 9,
      "name": "James Martinez",
      "email": "jamesmartinez@example.com",
      "isActive": true,
      "avatarUrl": "https://randomuser.me/api/portraits/men/9.jpg",
      "dateJoined": "2024-08-23",
      "region": "Christchurch"
    },
    {
      "id": 10,
      "name": "Isabella Rodriguez",
      "email": "isabellarodriguez@example.com",
      "isActive": false,
      "avatarUrl": "https://randomuser.me/api/portraits/women/10.jpg",
      "dateJoined": "2024-10-11",
      "region": "Auckland"
    },
    {
      "id": 11,
      "name": "Benjamin Lopez",
      "email": "benjaminlopez@example.com",
      "isActive": true,
      "avatarUrl": "https://randomuser.me/api/portraits/men/11.jpg",
      "dateJoined": "2024-07-02",
      "region": "Wellington"
    },
    {
      "id": 12,
      "name": "Mia Gonzalez",
      "email": "miagonzalez@example.com",
      "isActive": false,
      "avatarUrl": "https://randomuser.me/api/portraits/women/12.jpg",
      "dateJoined": "2024-05-27",
      "region": "Christchurch"
    },
    {
      "id": 13,
      "name": "Henry Perez",
      "email": "henryperez@example.com",
      "isActive": true,
      "avatarUrl": "https://randomuser.me/api/portraits/men/13.jpg",
      "dateJoined": "2024-02-05",
      "region": "Auckland"
    },
    {
      "id": 14,
      "name": "Olivia Turner",
      "email": "oliviaturner@example.com",
      "isActive": false,
      "avatarUrl": "https://randomuser.me/api/portraits/women/14.jpg",
      "dateJoined": "2024-04-19",
      "region": "Wellington"
    },
    {
      "id": 15,
      "name": "Lucas Parker",
      "email": "lucasparker@example.com",
      "isActive": true,
      "avatarUrl": "https://randomuser.me/api/portraits/men/15.jpg",
      "dateJoined": "2024-03-25",
      "region": "Christchurch"
    },
    {
      "id": 16,
      "name": "Charlotte Evans",
      "email": "charlotteevans@example.com",
      "isActive": true,
      "avatarUrl": "https://randomuser.me/api/portraits/women/16.jpg",
      "dateJoined": "2024-06-18",
      "region": "Auckland"
    },
    {
      "id": 17,
      "name": "Elijah Carter",
      "email": "elijahcarter@example.com",
      "isActive": false,
      "avatarUrl": "https://randomuser.me/api/portraits/men/17.jpg",
      "dateJoined": "2024-10-03",
      "region": "Wellington"
    },
    {
      "id": 18,
      "name": "Amelia Mitchell",
      "email": "ameliamitchell@example.com",
      "isActive": true,
      "avatarUrl": "https://randomuser.me/api/portraits/women/18.jpg",
      "dateJoined": "2024-09-22",
      "region": "Christchurch"
    },
    {
      "id": 19,
      "name": "Matthew Hill",
      "email": "matthewhill@example.com",
      "isActive": true,
      "avatarUrl": "https://randomuser.me/api/portraits/men/19.jpg",
      "dateJoined": "2024-08-14",
      "region": "Auckland"
    },
    {
      "id": 20,
      "name": "Harper Wright",
      "email": "harperwright@example.com",
      "isActive": false,
      "avatarUrl": "https://randomuser.me/api/portraits/women/20.jpg",
      "dateJoined": "2024-05-06",
      "region": "Wellington"
    },
    {
      "id": 21,
      "name": "Alexander Scott",
      "email": "alexanderscott@example.com",
      "isActive": true,
      "avatarUrl": "https://randomuser.me/api/portraits/men/21.jpg",
      "dateJoined": "2024-01-30",
      "region": "Christchurch"
    },
    {
      "id": 22,
      "name": "Evelyn Young",
      "email": "evelynyoung@example.com",
      "isActive": false,
      "avatarUrl": "https://randomuser.me/api/portraits/women/22.jpg",
      "dateJoined": "2024-02-11",
      "region": "Auckland"
    },
    {
      "id": 23,
      "name": "Daniel King",
      "email": "danielking@example.com",
      "isActive": true,
      "avatarUrl": "https://randomuser.me/api/portraits/men/23.jpg",
      "dateJoined": "2024-07-30",
      "region": "Wellington"
    },
    {
      "id": 24,
      "name": "Ava Lewis",
      "email": "avalewis@example.com",
      "isActive": true,
      "avatarUrl": "https://randomuser.me/api/portraits/women/24.jpg",
      "dateJoined": "2024-08-19",
      "region": "Christchurch"
    },
    {
      "id": 25,
      "name": "William Harris",
      "email": "williamharris@example.com",
      "isActive": false,
      "avatarUrl": "https://randomuser.me/api/portraits/men/25.jpg",
      "dateJoined": "2024-09-12",
      "region": "Auckland"
    }
  ];
  
  export default usersData;
  