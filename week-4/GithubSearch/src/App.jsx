import { useState, useEffect } from "react";
import "./App.css";
import { Moon, Search, MapPin, Link } from "lucide-react";

function App() {
  const [username, setUsername] = useState("");
  const [devusername, setDevUsername] = useState("");
  const [user, setUser] = useState("");
  const [avatar, setAvatar] = useState("");
  const [location, setLocation] = useState("");
  const [publicRepos, setPublicRepos] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [bio, setBio] = useState("");
  const [url, setUrl] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (username) {
      fetchUser(username);
    } else {
      alert("Please enter a username");
    }
  };
  const fetchUser = async (username) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("Network Response was not ok. User not found!");
      }
      const data = await response.json();
      console.log(data);
      setDevUsername(data.login);
      setUser(data.name);
      setAvatar(data.avatar_url);
      setLocation(data.location);
      setPublicRepos(data.public_repos);
      setFollowers(data.followers);
      setFollowing(data.following);
      setBio(data.bio);
      setJoinDate(
        new Date(data.created_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
      setUrl(data.html_url);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching data:", error);
    } finally {
      console.log("Fetch attempt finished");
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchUser("octocat");
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
      <div className="flex flex-row justify-between p-3 text-xl sm:text-2xl text-blue-950">
        <h1 className="font-bold ">devfinder Clone</h1>
        {/* darkmode and lightmode functionality */}
        <Moon className="cursor-pointer" />
      </div>
      <form
        className="flex flex-row items-center bg-gray-100 mx-2 sm:m-1 p-5 sm:p-3 rounded-lg shadow-lg gap-3"
        onSubmit={onSubmit}
      >
        <Search className="text-blue-600" />
        <input
          type="text"
          placeholder="Search Github username..."
          className="flex-1 text-base outline-none placeholder:text-gray-700"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button
          type="submit"
          className="ml-auto bg-blue-600 text-white p-2 cursor-pointer rounded-lg font-bold"
        >
          Search
        </button>
      </form>

      {/* Github Profile Card */}

      {error && (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl text-red-600 font-bold">
            User not found, please try again.
          </h1>
        </div>
      )}
      {isloading ? (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-emerald-600 text-2xl font-bold">Loading...</h1>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row bg-gray-100 mt-4 mx-2 sm:mx-1 p-3 rounded-lg shadow-lg gap-3 ">
          <img
            src={avatar}
            alt="My-avatar"
            className="rounded-full w-24 h-24 m-4 md:w-32 md:h-32 object-cover mx-auto md:mx-0"
          />
          <div className="flex flex-col p-4">
            <div className="flex flex-col md:flex-row text-center  gap-3">
              <div className=" sm:mr-auto">
                <h1 className="text-3xl font-bold text-blue-950">{user}</h1>
                {/* Kennedy01-crypto */}
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
              <h2 className="text-xl text-gray-900">{bio}</h2>
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
                <h1 className="text-lg sm:text-xll">Following</h1>
                <span className="text-blue-600 font-bold">{following}</span>
              </div>
            </div>
            <div className="flex flex-col items-center sm:place-items-start gap-2">
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
      )}
    </div>
  );
}

export default App;
