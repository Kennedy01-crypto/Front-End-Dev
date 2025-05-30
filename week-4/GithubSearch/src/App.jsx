import { useState, useEffect } from "react";
import "./App.css";
import ProfileCard from "./ProfileCard";
import Footer from "./Footer";
import { Moon, Search, Sun } from "lucide-react";

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
  const [theme, setTheme] = useState("light");

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
        throw new Error("User not found!");
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
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
    fetchUser("octocat");
  }, []);

  return (
    <div
      className={`${
        theme === "dark" ? "dark" : ""
      } min-h-screen w-full flex flex-col items-center justify-center bg-gray-300 dark:bg-gray-800/100`}
    >
      <div
        className="
          flex-1 sm:mx-auto  px-4 sm:px-6 lg:px-8  "
      >
        <div className="flex flex-row justify-between items-center w-full max-w-md mx-auto xs:text-lg p-3 px-2 text-xl sm:text-2xl text-blue-950 dark:text-blue-400">
          <h1 className="font-bold ">devfinder Clone</h1>
          {/* darkmode and lightmode functionality */}
          <button
            className="cursor-pointer"
            onClick={() => {
              const currentTheme = localStorage.getItem("theme");
              if (currentTheme === "dark") {
                setTheme("light");
                localStorage.setItem("theme", "light");
              } else {
                setTheme("dark");
                localStorage.setItem("theme", "dark");
              }
            }}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>
        <form
          className="flex flex-row items-center bg-gray-100 dark:bg-gray-900 sm:m-1 p-4 max-xs:p-2 sm:p-3 rounded-lg shadow-lg gap-3 md:gap-5 max-xs:gap-1"
          onSubmit={onSubmit}
        >
          <Search className="text-blue-950 dark:text-blue-400" />
          <input
            type="text"
            placeholder="Enter Github username..."
            className="flex-1 text-base outline-none placeholder:text-gray-700 caret-black dark:caret-blue-700 text-black dark:text-white dark:placeholder:text-gray-300 bg-transparent max-xs:text-sm"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <button
            type="submit"
            className="ml-auto max-xs:text-sm bg-blue-950 dark:bg-blue-600 text-white dark:text-gray-900 p-2 cursor-pointer rounded-lg font-bold"
          >
            Search
          </button>
        </form>

        {/* Github Profile Card */}

        {isloading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <h1 className="text-emerald-600 text-2xl font-bold">Loading...</h1>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center min-h-[200px">
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
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
