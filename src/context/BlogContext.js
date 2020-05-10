import { blogsData } from "../data/blogsJSON";
import CreateDataContext from "./CreateDataContext";
import jsonserver from "../api/jsonserver";

const BlogsReducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
      return state.filter((blog) => blog.id !== action.data);
    case "EDIT":
      return state.map((blog) => {
        return blog.id === action.data.id ? action.data : blog;
      });
    case "DATA":
      return action.data;
    default:
      state;
  }
};

const addBlog = (dispatch) => {
  return async (blog, callback) => {
    try {
      await jsonserver.post("/blogposts", {
        title: blog.title,
        description: blog.description,
      });
      callback && callback();
    } catch (error) {}
  };
};

const deleteBlog = (dispatch) => {
  return async (id) => {
    try {
      await jsonserver.delete(`/blogposts/${id}`);
      dispatch({
        type: "DELETE",
        data: id,
      });
    } catch (error) {}
  };
};

const editBlog = (dispatch) => {
  return async (blog, callback) => {
    try {
      await jsonserver.put(`/blogposts/${blog.id}`, {
        title: blog.title,
        description: blog.description,
      });
      callback && callback();
    } catch (error) {}
  };
};

const createBlog = () => {};

const getData = (dispatch) => {
  return async () => {
    try {
      const response = await jsonserver.get("/blogposts");
      dispatch({
        type: "DATA",
        data: response.data,
      });
    } catch (error) {}
  };
};

export const { Context, Provider } = CreateDataContext(
  BlogsReducer,
  { addBlog, deleteBlog, createBlog, editBlog, getData },
  []
);
