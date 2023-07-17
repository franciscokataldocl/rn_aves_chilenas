// import { StatusBar } from 'expo-status-bar';
import { store } from './store/store';
import { Provider } from 'react-redux';
// import ContainerCards from './components/cards/ContainerCards';
import { NativeBaseProvider } from 'native-base';
import { CustomTheme } from './src/theme';

import Navigation from './router/navigation/Navigation';
import { LogBox } from "react-native"

export default function App() {
  LogBox.ignoreLogs([
    'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
    ])
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={CustomTheme} >
      <Navigation/>
      </NativeBaseProvider>
    </Provider>
  );
}
