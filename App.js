import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert, borderWidth } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);



export default function App() {
  function Press() {
    var x = Math.floor((Math.random() + 3) + 1)
    if (x == testID) {
      alert("Ai ghicit")
    } else {
      alert("Mai incearca")
    }
  }
  return (
    <View style={styles.container}>
      <Button 
        title="Button 1"
        style={{borderWidth: 1}}
        testID="1"
        onPress={Press()}
      />
      <View>
        <Button
        title="Button 2"
        />
      </View>
      <View>
        <Button
        title="Button 3"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
