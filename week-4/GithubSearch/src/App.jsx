import { useState, useEffect } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";
import useGithubUser from "./hooks/useGithubUser";
import { Moon, Search, Sun } from "lucide-react";

function App() {
  const {
    username,
    setUsername,
    devusername,
    user,
    avatar,
    location,
    publicRepos,
    followers,
    following,
    bio,
    url,
    joinDate,
    isloading,
    error,
    fetchUser,
  } = useGithubUser();
  const [theme, setTheme] = useState("light");

  const onSubmit = (e) => {
    e.preventDefault();
    if (username) {
      fetchUser(username);
    } else {
      alert("Please enter a username");
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
