import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import Blog from "../components/Blog";
import { Context } from "../context/BlogContext";

const Create = (props) => {
  const { navigation } = props;
  const blogs = useContext(Context);
  const { state, getData } = blogs;

  useEffect(() => {
    getData();
    const listener = navigation.addListener("didFocus", () => {
      getData();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={(item, index) => `blog-${index}`}
        renderItem={({ item }) => {
          return <Blog blog={item} />;
        }}
      ></FlatList>
    </View>
  );
};

Create.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Create", {
            blog: {
              title: "",
              description: "",
            },
          })
        }
      >
        <Feather name="plus" style={styles.icon} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 6,
    marginVertical: 24,
  },
  icon: {
    fontSize: 30,
    zIndex: 9999,
  },
});

export default Create;
