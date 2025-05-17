import React from "react";
import { MapPin, Link } from "lucide-react";

export const ProfileCard = ({
  user,
  devusername,
  avatar,
  followers,
  following,
  publicRepos,
  bio,
  location,
  url,
  joinDate,
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 mt-4 mx-2 sm:mx-1 p-3 rounded-lg shadow-lg gap-3 ">
      <img
        src={avatar}
        alt={`${user}'s avatar`}
        className="rounded-full w-24 h-24 m-4 md:w-32 md:h-32 object-cover mx-auto md:mx-0"
      />
      <div className="flex flex-col p-4">
        <div className="flex flex-col md:flex-row text-center  gap-3">
          <div className=" sm:mr-auto">
            <h1 className="text-3xl font-bold text-blue-950">{user}</h1>
            <h2 className="text-xl  text-blue-600">{devusername}</h2>
          </div>
          <div className="md:ml-auto text-gray-900 font-semibold">
            <h2>{joinDate}</h2>
          </div>
        </div>
        <div className="my-5">
          <h1 className="text-gray-900 text-center md:text-start font-bold">
            {user}'s Bio
          </h1>
          <h2 className="text-xl text-gray-900">{bio || "No Bio Available"}</h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row my-3 sm:justify-between sm:gap-5 md:gap-8">
          <div className="bg-gray-300 p-3 rounded-lg shadow-sm flex-1 text-center">
            <h1 className="text-lg sm:text-xl">Repos</h1>
            <span className="text-blue-600 font-bold">{publicRepos}</span>
          </div>

          <div className="bg-gray-300 p-3 rounded-lg shadow-sm flex-1 text-center">
            <h1 className="text-lg sm:text-xl">Followers</h1>
            <span className="text-blue-600 font-bold">{followers}</span>
          </div>

          <div className="bg-gray-300 p-3 rounded-lg shadow-sm flex-1 text-center">
            <h1 className="text-lg sm:text-xl">Following</h1>
            <span className="text-blue-600 font-bold">{following}</span>
          </div>
        </div>
        <div className="flex flex-col items-center sm:place-items-start gap-2">
          <div className="flex flex-row  gap-2">
            <MapPin size={19} />
            <span className="">{location || "Not Available!"}</span>
          </div>
          <div className="flex flex-row  gap-2">
            <Link size={19} />
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {url || "Null!!"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
