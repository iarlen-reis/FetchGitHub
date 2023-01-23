import React, { useState } from "react";
import axios from "axios";

export const useFetchUser = async (user) => {
  const userSearch = await axios(`https://api.github.com/users/${user}`);
  await userSearch.data;

  return userSearch;
};
