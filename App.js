import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CreateScreen from "./src/screens/Create";
import HomeScreen from "./src/screens/Home";
import BlogsScreen from "./src/screens/Blogs";
import EditScreen from "./src/screens/Edit";

import { Provider } from "./src/context/BlogContext";

const navigator = createStackNavigator(
  {
    Create: CreateScreen,
    Home: HomeScreen,
    Blogs: BlogsScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Blog List",
    },
  }
);

const App = createAppContainer(navigator);

export default () => (
  <Provider>
    <App />
  </Provider>
);
