import React, { useState, useContext, createContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const BlogForm = (props) => {
  const { initialValues, onSubmit, navigation } = props;
  const { id } = initialValues;
  const [title, setTitle] = useState(initialValues.title);
  const [description, setDescription] = useState(initialValues.description);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.header}>Title</Text>
        <TextInput
          value={title}
          style={styles.titleInput}
          onChangeText={setTitle}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.header}>Description</Text>
        <TextInput
          value={description}
          style={styles.descriptionInput}
          onChangeText={setDescription}
        />
      </View>
      <Button
        title="save"
        onPress={() => {
          onSubmit({ title, description, id }, () =>
            navigation.navigate("Home")
          );
        }}
      />
    </View>
  );
};

BlogForm.defaultProps = {
  initialValues: {
    id: null,
    title: "",
    description: "",
  },
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

export default BlogForm;
