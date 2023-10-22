import { useState } from "react";
import {
  FlatList,
  Alert,
  View,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";
import { StyleSheet } from "react-native";
import Dialog from "react-native-dialog";

const randomColor = () => {
  const colors = [
    "#fb4834",
    "#b8bb26",
    "#fabd2f",
    "#83a598",
    "#8ec08c",
    "#d3869b",
    "#fe8019",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Todolist = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([
    { title: "G", description: "Hello", color: randomColor() },
    { title: "-", description: "Hello", color: randomColor() },
    { title: "M", description: "Hello", color: randomColor() },
    { title: "A", description: "Hello", color: randomColor() },
    { title: "M", description: "Hello", color: randomColor() },
  ]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleTitle = (title) => {
    setTitle(title);
  };
  const handleDescription = (description) => {
    setDescription(description);
  };
  const showDialog = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  onButtonPress = () => {
    if (title !== "") {
      setData([
        ...data,
        { title: title, description: description, color: randomColor() },
      ]);
      setVisible(false);
    } else {
      Alert.alert("Title must have a value");
    }
  };
  getListViewItem = (item) => {
    Alert.alert(item.title, item.description, [
      {
        text: "Delete",
        onPress: () => {
          data.splice(data.indexOf(item), 1);
          setData([...data]);
        },
      },
      {
        text: "OK",
        onPress: () => {
          console.log(data);
        },
      },
    ]);
  };
  headerComponent = () => {
    return (
      <View
        style={{
          paddingTop: 10,
          paddingBottom: 2,
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: "white",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
          }}
        >
          List
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={headerComponent}
        ListEmptyComponent={
          <Text style={{ color: "white" }}>There is nothing here -_-</Text>
        }
        data={data}
        renderItem={({ item }) => (
          <Text
            style={[styles.item, { backgroundColor: item.color }]}
            onPress={() => getListViewItem(item)}
          >
            {item.title}
          </Text>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={showDialog}>
        <Text style={{ fontSize: 18 }}>Add</Text>
      </TouchableOpacity>
      <Dialog.Container visible={visible}>
        <Dialog.Title></Dialog.Title>
        <Dialog.Input
          label="Title"
          value={title}
          onChangeText={handleTitle}
        ></Dialog.Input>
        <Dialog.Input
          label="Description"
          value={description}
          onChangeText={handleDescription}
        ></Dialog.Input>
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Ok" onPress={onButtonPress} />
      </Dialog.Container>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  item: {
    alignItems: "center",
    textAlign: "center",
    borderRadius: 15,
    margin: 10,
    padding: 10,
    fontSize: 18,
    // backgroundColor: "#fb4934",
    color: "#fbf1c7",
    flex: 1,
  },
  button: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 15,
    marginBottom: 10,
  },
});
export default Todolist;
