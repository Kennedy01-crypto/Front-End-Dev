import React from "react";
import { MapPin, Link } from "lucide-react";

const ProfileCard = ({ user }) => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900 my-4 mx-2 sm:mx-1 p-3 rounded-lg shadow-lg gap-3 ">
      <img
        src={
          user?.avatar ||
          "https://ui-avatars.com/api/?name=Github+User&background=gray&color=fff"
        }
        alt={`${user}'s avatar`}
        className="rounded-full w-24 h-24 m-4 md:w-32 md:h-32 object-cover mx-auto md:mx-0"
      />
      <div className="flex flex-col p-4">
        <div className="flex flex-col md:flex-row text-center md:text-left  gap-3">
          <div className=" ">
            <h1 className="text-3xl font-bold text-blue-950 dark:text-white">
              {user?.name}
            </h1>
            <h2 className="text-xl  text-blue-600 dark:text-blue-400">
              {user?.devusername}
            </h2>
          </div>
          <div className=" text-gray-900 dark:text-blue-600 font-semibold">
            <h2>Joined on {user?.joinDate}</h2>
          </div>
        </div>
        <div className="my-5 text-gray-900 dark:text-gray-100">
          <h1 className=" text-center md:text-start font-bold">
            {user?.name}'s Bio
          </h1>
          <h2 className="text-xl ">{user?.bio || "No Bio Available"}</h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row my-3 sm:justify-between sm:gap-5 md:gap-8">
          <div className="bg-gray-300  dark:bg-blue-200 p-3 rounded-lg shadow-sm flex-1 text-center">
            <h1 className="text-lg sm:text-xl font-semibold">Repos</h1>
            <span className="text-blue-600 font-bold dark:text-gray-900">
              {user?.publicRepos}
            </span>
          </div>

          <div className="bg-gray-300 dark:bg-blue-200 p-3 rounded-lg shadow-sm flex-1 text-center">
            <h1 className="text-lg sm:text-xl font-semibold">Followers</h1>
            <span className="text-blue-600 dark:text-gray-900 font-bold">
              {user?.followers}
            </span>
          </div>

          <div className="bg-gray-300 dark:bg-blue-200 p-3 rounded-lg shadow-sm flex-1 text-center">
            <h1 className="text-lg sm:text-xl font-semibold">Following</h1>
            <span className="text-blue-600  dark:text-gray-900 font-bold">
              {user?.following}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center md:place-items-start gap-2">
          <div className="flex flex-row text-black dark:text-white gap-2">
            <MapPin size={19} />
            <span className="">{user?.location || "Not Available!"}</span>
          </div>
          <div className="flex flex-row  gap-2">
            <Link size={19} className=" text-black dark:text-white" />
            <a
              href={user?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 font-bold dark:text-blue-600 hover:text-blue-500 dark:hover:text-white transition-colors duration-200"
              title="GitHub Profile Link"
            >
              {"Github Url" || "Null!!"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
