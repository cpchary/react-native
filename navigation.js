import LoginScreen from './Screen/Login/login';
import {createStackNavigator, createAppContainer,createDrawerNavigator} from 'react-navigation';
import SelectPrinterScreen from './Screen/SelectPrinter';
import ReceivingScreen from './Screen/Receiving/receiving';
import PalletsScreen from './Screen/Pallets/pallets';
import React,{Component} from 'react'; 
import { IconButton} from 'react-native-paper';
import { DrawerActions } from 'react-navigation';
 const MainNavigator = createStackNavigator(
    {
        login: {screen: LoginScreen},
        selectPrinter: {screen: SelectPrinterScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'Select Printer',
                headerLeft:   <IconButton
                icon="menu"
                color={'white'}
                size={24}
                onPress={() => {navigation.dispatch(DrawerActions.openDrawer());}}
              />,
              }),
            },
        receiving:{screen:ReceivingScreen},
        pallets:{screen:PalletsScreen}
    },  
    {
    initialRouteName: 'login',
    defaultNavigationOptions: 
    {
      headerStyle: 
      {
        backgroundColor: '#004c91',
        height:56
      },
    headerTintColor: '#fff',
    headerTitleStyle: 
    {
        fontWeight: '500',
        fontSize:20
    },
    },
  }
  );
  ;


const DrawerNavigator = createDrawerNavigator({
    login: {screen: LoginScreen},
    selectPrinter: {screen: SelectPrinterScreen},
    receiving:{screen:ReceivingScreen},
    pallets:{screen:PalletsScreen}
})
  
const Config = createAppContainer(MainNavigator);
const Drawer = createAppContainer(DrawerNavigator);

export const   Navigation = () =>   <Drawer/>
export default  DrawerNavigation = () =>  <Config/>
