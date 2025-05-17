import { useState, useEffect } from "react";
import "./App.css";
import { ProfileCard } from "./ProfileCard";
import { Moon, Search } from "lucide-react";

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

      {error ? (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl text-red-600 font-bold">{error}</h1>
        </div>
      ) : (
        <ProfileCard
          user={user}
          devusername={devusername}
          avatar={avatar}
          followers={followers}
          following={following}
          publicRepos={publicRepos}
          bio={bio}
          location={location}
          url={url}
          joinDate={joinDate}
        />
      )}
      {isloading ? (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-emerald-600 text-2xl font-bold">Loading...</h1>
        </div>
      ) : (
        <ProfileCard.jsx
          user={user}
          devusername={devusername}
          avatar={avatar}
          followers={followers}
          following={following}
          publicRepos={publicRepos}
          bio={bio}
          location={location}
          url={url}
          joinDate={joinDate}
        />
      )}
    </div>
  );
}

export default App;
