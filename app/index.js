import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../components/welcome/Welcome.jsx'
import Register from '../components/register/Register.jsx'
import Login from '../components/login/Login.jsx'
import Waiting from '../components/waitPage/Waiting.jsx'
import AdminPanel from '../admin/AdminPanel.jsx'
import Homepage from '../client/homepage/Homepage.jsx'
import WaitingPage from '../client/waitingPage/WaitingPage.jsx'
import ServiceProvider from '../components/serviceProvider/ServiceProvider.jsx'
import { Provider } from 'react-redux'
import store from '../store/store.js'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen
            name='Welcome'
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Waiting' component={Waiting} />
          <Stack.Screen name='AdminPanel' component={AdminPanel} />
          <Stack.Screen name='Homepage' component={Homepage} />
          <Stack.Screen name='WaitingPage' component={WaitingPage} />
          <Stack.Screen name='ServiceProvider' component={ServiceProvider} />
        </Stack.Navigator>
      </Provider>
    </SafeAreaProvider>
  )
}

export default App
