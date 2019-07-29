import LoginScreen from './Screen/Login/login';
import {createStackNavigator, createAppContainer,createDrawerNavigator} from 'react-navigation';
import SelectPrinterScreen from './Screen/SelectPrinter';
import ReceivingScreen from './Screen/Receiving/receiving';
import PalletsScreen from './Screen/Pallets/pallets';
import React,{Component} from 'react'; 
import { IconButton} from 'react-native-paper';



const DrawerNavigator = createDrawerNavigator({
    login: {
        screen: LoginScreen,
        navigationOptions: {
            drawerLabel: 'login'
          }
    },
    selectPrinter: {
        screen: SelectPrinterScreen,
        navigationOptions: {
            drawerLabel: 'Select Printer'
          }
    },
    receiving:{
        screen:ReceivingScreen,
        navigationOptions: {
            drawerLabel: 'Receiving'
          }
    },
    pallets:{
        screen:PalletsScreen,
        navigationOptions: {
            drawerLabel: 'Pallets'
          }
    }
})



  
// const Config = createAppContainer(MainNavigator);
const Drawer = createAppContainer(DrawerNavigator);

export default  DrawerNavigation = () =>  <Drawer/>
