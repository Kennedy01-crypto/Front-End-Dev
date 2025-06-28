import { useState } from "react";

function useGithubUser(initialUsername = "octocat") {
  const [username, setUsername] = useState(initialUsername);
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

  const fetchUser = async (usernameToFetch) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.github.com/users/${usernameToFetch}`
      );
      if (!response.ok) {
        throw new Error("User not found!");
      }
      const data = await response.json();
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
    } finally {
      setIsLoading(false);
    }
  };

  return {
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
  };
}

export default useGithubUser;
