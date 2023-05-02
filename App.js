import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Home';

export default function App() {
  return (
    <NavigationContainer>{  <Home /> }</NavigationContainer>
  );
}

