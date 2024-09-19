import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Map from './Map.jsx';
import DOMComponent from './my-component.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>OUTSIDE MAP!</Text>
      <DOMComponent dom={{ autoSize: true }} />
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
