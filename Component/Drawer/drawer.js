
import {createAppContainer,createDrawerNavigator,createStackNavigator} from 'react-navigation';
import SelectPrinterScreen from '../SelectPrinter/selectPrinter';
import ReceivingScreen from '../Receiving/receiving';
import PalletsScreen from '../Pallets/pallets';
import SideMenu from '../Drawer/SideMenu/sideMenu';


 
const DrawerNavigator = createDrawerNavigator({
    selectPrinterScreen: {
      screen: SelectPrinterScreen,
        navigationOptions :{
        title: 'Select Printer'}
      },
    receiving:{screen:ReceivingScreen},
    pallets:{screen:PalletsScreen}
},{
    initialRouteName: 'selectPrinterScreen',
    contentComponent: SideMenu,
    drawerPosition:'right'
})


export default createStackNavigator({ DrawerNavigator });



