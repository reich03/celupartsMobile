// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import WebViewScreen from './components/webViewScreen';
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{
            title: '',  
            headerTitle: () => (
              <Image
                source={require('./assets/images/celuparts-transparent-2.png')}
                style={{ width: 150, height: 40, resizeMode: 'contain' }}
              />
            ),
          }}
        />
        <Stack.Screen 
          name="WebViewScreen" 
          component={WebViewScreen} 
          options={{ title: 'Reparaciones' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
