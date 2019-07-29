
import {createAppContainer,createDrawerNavigator,createStackNavigator} from 'react-navigation';
import { RadioButton,Button,IconButton, Colors} from 'react-native-paper';
import SelectPrinterScreen from '../SelectPrinter/selectPrinter';
import ReceivingScreen from '../Receiving/receiving';
import PalletsScreen from '../Pallets/pallets';
import SideMenu from '../../Component/SideMenu/sideMenu';


export default createStackNavigator(
    {

        selectPrinter: {screen: SelectPrinterScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'Select Printer'
              }),
            },
        receiving:{screen:ReceivingScreen},
        pallets:{screen:PalletsScreen}
    },  
    {

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
    selectPrinterScreen: {screen: SelectPrinterScreen,
        navigationOptions :{
        title: 'Select Printer'}},
    receiving:{screen:ReceivingScreen},
    pallets:{screen:PalletsScreen}
},{
    initialRouteName: 'selectPrinterScreen',
    contentComponent: SideMenu,
    
})





