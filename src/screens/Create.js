import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";

import { Context } from "../context/BlogContext";
import BlogForm from "../components/BlogForm";

const Create = ({ navigation }) => {
  const { addBlog } = useContext(Context);

  return (
    <View style={styles.container}>
      <BlogForm onSubmit={addBlog} navigation={navigation} />
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

export default Create;
