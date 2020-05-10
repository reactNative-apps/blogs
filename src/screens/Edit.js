import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";

import { Context } from "../context/BlogContext";
import BlogForm from "../components/BlogForm";

const Edit = ({ navigation }) => {
  const { editBlog, state } = useContext(Context);
  const blog = state.find((blog) => blog.id === navigation.getParam("id"));
  console.log(blog);

  return (
    <View style={styles.container}>
      <BlogForm
        onSubmit={editBlog}
        navigation={navigation}
        initialValues={blog}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginVertical: 24,
  },
  titleContainer: {
    marginBottom: 12,
  },
  titleInput: {
    borderWidth: 1,
    height: 50,
    marginVertical: 12,
    fontSize: 18,
    paddingHorizontal: 12,
  },
  descriptionContainer: {
    marginBottom: 12,
  },
  descriptionInput: {
    borderWidth: 1,
    height: 50,
    marginVertical: 12,
    fontSize: 18,
    paddingHorizontal: 12,
  },
  header: {
    fontSize: 24,
  },
});

export default Edit;
