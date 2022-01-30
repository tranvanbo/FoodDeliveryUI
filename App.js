

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './component/Home';
import Detail from './component/Detail';

const Tab =createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator  screenOptions={{
        headerShown:false
      }}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Detail" component={Detail}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

