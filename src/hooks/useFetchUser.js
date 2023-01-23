import axios from "axios";

export const useFetchUser = async (user) => {
  const response = await axios(`https://api.github.com/users/${user}`);

  return response;
};
