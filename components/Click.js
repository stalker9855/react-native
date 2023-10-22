import { Component } from "react";
import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";

class Click extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }
  updateState = () => this.setState({count: this.state.count + 1  })

  render() {
    return (
      <View style={styles.container}>
        <Text  style={styles.incrementedText}>{this.state.count}</Text>
        <Button color={'#282828'} title="Click" onPress={this.updateState}/>
      </View>
    )
  }
}
export default Click;

const styles = StyleSheet.create({
  incrementedText: {
    fontSize: 144,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

