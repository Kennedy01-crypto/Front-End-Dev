import { useState } from "react";

function useGithubUser(initialUsername = "octocat") {
  const [username, setUsername] = useState(initialUsername);
  const [user, setUser] = useState(null);
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
      setUser({
        devusername: data.login,
        name: data.name,
        avatar: data.avatar_url,
        location: data.location,
        public_repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        bio: data.bio,
        url: data.html_url,
        joinDate: new Date(data.created_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    username,
    setUsername,
    user,
    isloading,
    error,
    fetchUser,
  };
}

export default useGithubUser;
