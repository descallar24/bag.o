import Login from './authentication/login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from './authentication/registration';
import Profile from './authentication/profile';
import Forgotpassword from './authentication/forgotpassword';
import { StyleSheet } from 'react-native';
import Dashboard from './authentication/dashboard';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Devices from './screen/Devices';
import About from './screen/About';
import DrawBar from './screen/DrawBar';
import FAQ from './screen/FAQ';
import GetDone from './authentication/GetDone';
import Verification from './authentication/verification';
import Instructions from './screen/Instructions';
import History from './screen/History';
import YourDevices from './screen/YourDevices';
import Computer from './screen/Computer';
import EditDevice from './screen/EditDevice';
import Ricecooker from './screen/Ricecooker';
import Ricecookeredit from './screen/Ricecookeredit';
import Flatiron from './screen/Flatiron';
import Flatironedit from './screen/Flatironedit';
import AC from './screen/AC';
import ACedit from './screen/ACedit';

import TV from './screen/TV';
import Laptop from './screen/Laptop';
import Bulb from './screen/Bulb';
import Cfan from './screen/Cfan';
import Ref from './screen/Ref';
import Heater from './screen/Heater';
import Result from './screen/Result';
import { Provider } from 'react-redux';
import store from './plugins/store';

import Reports from './screen/Reports';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetDone" screenOptions={{headerShown:false}}>
        <Stack.Screen name="GetDone" component={GetDone} />
        <Stack.Screen name="Registration" component={Registration} options={{title:"Register"}} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="DrawBar" component={DrawBar} />
        <Stack.Screen name= "Devices"  component={Devices}/>
        <Stack.Screen name= "About" component={About}/>
        <Stack.Screen name= "FAQ's" component={FAQ}/>
        <Stack.Screen name= "Log Out" component={Login}/>
        <Stack.Screen name= "Instructions" component={Instructions}/>
        <Stack.Screen name= "History" component={History} />
        <Stack.Screen name= "Your Devices" component={YourDevices} />
        <Stack.Screen name= "Computer" component={Computer} />
        <Stack.Screen name= "EditDevice" component={EditDevice} />
        <Stack.Screen name= "Ricecooker" component={Ricecooker} />
        <Stack.Screen name= "Ricecookeredit" component={Ricecookeredit} />
        <Stack.Screen name= "Flatiron" component={Flatiron} />
        <Stack.Screen name= "Flatironedit" component={Flatironedit} />
        <Stack.Screen name= "AC" component={AC} />
        <Stack.Screen name= "ACedit" component={ACedit} />

        <Stack.Screen name= "TV" component={TV} />
        <Stack.Screen name= "Laptop" component={Laptop} />
        <Stack.Screen name= "Bulb" component={Bulb} />
        <Stack.Screen name= "Cfan" component={Cfan} />
        <Stack.Screen name= "Ref" component={Ref} />
        <Stack.Screen name= "Heater" component={Heater} />
        <Stack.Screen name= "Result" component={Result} />
        <Stack.Screen name= "Reports" component={Reports} />



        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
  );
}



/*const styles = StyleSheet.create({
  container: {
      width: 100,
      height: 100,
      backgroundColor: 'yellow'
  }

})
  */