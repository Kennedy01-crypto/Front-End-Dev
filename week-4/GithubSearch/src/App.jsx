import { useState, useEffect } from "react";
import "./App.css";
import { Moon, Search, MapPin, Link } from "lucide-react";

function App() {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [location, setLocation] = useState("");
  const [publicRepos, setPublicRepos] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [bio, setBio] = useState("");
  const [url, setUrl] = useState("");
  const handleClick = () => {
    console.log("Button clicked");
  };
  fetch("https://api.github.com/users/kennedy01-crypto")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setUsername(data.name);
      setAvatar(data.avatar_url);
      setLocation(data.location);
      setPublicRepos(data.public_repos);
      setFollowers(data.followers);
      setFollowing(data.following);
      setBio(data.bio);
      setUrl(data.html_url);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    })
    .finally(() => {
      console.log("Fetch attempt finished");
    });

  return (
    <div className="w-3xl sm:w-xl md:w-2xl">
      <div className="flex sm:w-1xl flex-row justify-between p-3 text-2xl text-blue-950">
        <h1 className="font-bold ">devfinder Clone</h1>
        {/* darkmode and lightmode functionality */}
        <Moon className="cursor-pointer" />
      </div>
      <form className="flex flex-row items-center  bg-gray-100 m-2 p-5 rounded-lg shadow-lg gap-3">
        <Search className="text-blue-600" />
        <input
          type="text"
          placeholder="Search Github username..."
          className="bg-neutral text-black-xl outline-none placeholder:text-gray-700"
          // value={username}
          // onChange={(event) => setUsername(event.target.value)}
        />
        <button
          onClick={handleClick}
          className="ml-auto bg-blue-600 text-white p-2 cursor-pointer rounded-lg font-bold"
        >
          Search
        </button>
      </form>

      {/* Github Profile Card */}
      <div className="flex flex-row bg-gray-100 m-2 mt-4 p-3 rounded-lg shadow-lg  ">
        <img
          src={avatar}
          // src="./assets/react.svg"
          alt="My-avatar"
          className="rounded-full w-25 h-25 m-4"
        />
        <div className="flex flex-col p-4">
          <div className="flex flex-row items-start">
            <div className="">
              <h1 className="text-3xl font-bold text-blue-950">{username}</h1>
              {/* Kennedy01-crypto */}
              <h2 className="text-xl text-blue-600">@Kennedy01-crypto</h2>
            </div>
            <div className="ml-auto text-gray-900 font-semibold">
              <h2>Joined on 25 Jan 2011</h2>
            </div>
          </div>
          <div className="my-5">
            <h1 className="text-gray-900 font-bold">Github Bio</h1>
            <h2 className="text-xl text-gray-900">{bio}</h2>
          </div>
          <div className="flex flex-row my-3 justify-between gap-5">
            <div className="bg-gray-300 p-3 rounded-lg shadow-sm">
              <h1 className="text-xl">Repos</h1>
              <span className="">{publicRepos}</span>
            </div>

            <div className="bg-gray-300 p-3 rounded-lg shadow-sm">
              <h1 className="text-xl">Followers</h1>
              <span className="">{followers}</span>
            </div>
            <div className="bg-gray-300 p-3 rounded-lg shadow-sm">
              <h1 className="text-xl">Following</h1>
              <span className="">{following}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row  gap-2">
              <MapPin size={19} />
              <span className="">{location}</span>
            </div>
            <div className="flex flex-row  gap-2">
              <Link size={19} />
              <span className="">{url}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
