import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Context } from "../context/BlogContext";

const Blogs = (props) => {
  const { navigation } = props;
  const { state } = useContext(Context);
  const id = navigation.getParam("id");
  const blog = state.find((blog) => blog.id === id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blog.title}</Text>
      <Text style={styles.description}>{blog.description}</Text>
    </View>
  );
};

Blogs.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", {
            id: navigation.getParam("id"),
          })
        }
      >
        <Feather name="edit-2" style={styles.icon} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 12,
    marginHorizontal: 12,
    marginVertical: 18,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    textDecorationLine: "underline",
    marginVertical: 30,
  },
  description: {
    marginBottom: 30,
    fontSize: 18,
  },
  icon: {
    fontSize: 30,
    right: 0,
  },
});

export default Blogs;
