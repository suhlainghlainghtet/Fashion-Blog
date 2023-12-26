import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { config } from "../config/config";
import { BlogPost, User } from "../typings/types";
interface BlogAppContextType {
  blogPosts: BlogPost[];
  user: User | null;
  accessToken: string;
  statusTextForSignUp: string;
  fetchData: () => void;
  updateData: (value: any) => void;
}

const blogDatas: BlogAppContextType = {
  blogPosts: [],
  user: null,
  accessToken: "",
  statusTextForSignUp: "",
  fetchData: () => {},
  updateData: () => {},
};
const BlogAppContext = createContext<BlogAppContextType>(blogDatas);

export const UseBlogWebAppContext = () => {
  const blogAppDatas = useContext(BlogAppContext);
  return blogAppDatas;
};

export const BlogAppProvider = ({ children }: any) => {
  const [data, updateData] = useState(blogDatas);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${config.apiUrl}/data`, {
        headers: {
          Authorization: `Bearer ${data.accessToken}`,
        },
      });
      const dataFromDatabase = await response.data;
      updateData({ ...data, user: data.user, blogPosts: dataFromDatabase });
      console.log("data...", data);
    } catch (error) {
      console.log("Error is...", error);
    }
  };
  useEffect(() => {
    if (data.accessToken) {
      fetchData();
    }
  }, [data.accessToken]);

  return (
    <BlogAppContext.Provider value={{ ...data, fetchData, updateData }}>
      {children}
    </BlogAppContext.Provider>
  );
};
