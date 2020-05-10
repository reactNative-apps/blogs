import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

import { Context } from "../context/BlogContext";

const Blog = (props) => {
  const { blog, navigation } = props;
  const { title, id } = blog;
  const { deleteBlog } = useContext(Context);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Blogs", { id: id })}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => deleteBlog(id)}
        style={styles.iconContainer}
      >
        <Feather name="trash" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  icon: {
    fontSize: 24,
    marginRight: 0,
  },
});

export default withNavigation(Blog);
