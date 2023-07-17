import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '../../screens/onBoarding/Index';
import Home from '../../screens/home/Index';



const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name='Splash'
          component={OnBoarding}
          options={{
            title: 'OnBoarding',
            headerShown: false
          }}/>
          <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Home',
            headerShown: false
          }}/>
          {/* <Stack.Screen
          name='Single'
          component={SingleBird}
          options={{
            title: 'Single',
            headerShown: false
          }}/> */}
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Navigation