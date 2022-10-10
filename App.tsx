import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './navigator/RootNavigator';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}