import React, {Component} from 'react';
import { AppRegistry,StyleSheet, Text, View,Image ,FlatList,TouchableOpacity} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { TextInput,Divider } from 'react-native-paper';
import { RadioButton,Button,IconButton, Colors} from 'react-native-paper';
import { Font } from 'expo';
import { Searchbar } from 'react-native-paper';
import { List } from 'react-native-paper';
import { DrawerActions } from 'react-navigation';


export default class SelectPrinterScreen extends Component {

    constructor(props)
    {
      super(props);
      this.state = {
        fontLoaded: false,
        text: '',
        firstQuery: '',
        checked: '',
      };
      console.log(this.state)
    }

    static navigationOptions = ({navigation}) => (
      {
      title: 'Select Printer',
      drawerLabel: 'selectPrinter',
      headerLeft:   <IconButton
      icon="menu"
      color={'white'}
      size={24}
      onPress={() => { navigation.dispatch(DrawerActions.openDrawer());}}
    />,
    headerRight:<IconButton
    icon="refresh"
    color={'white'}
    size={24}
    onPress={() => console.log('Pressed')}
  />,
    })

    async componentDidMount() {
      await Font.loadAsync({
        'Roboto': require('./../../assets/fonts/Roboto.ttf'),
      });
  
      this.setState({ fontLoaded: true });
    }

    onPressChange=()=>{
      this.setState({ checked: 'first' }); 
    }

    onConfirm=()=>{
      this.props.navigation.navigate('receiving')
    }
 
    render()
    {
  return (
      <View style={styles.container}> 
      <Searchbar
        placeholder="Search"
        onChangeText={query => { this.setState({ firstQuery: query }); }}
        value={this.state.firstQuery}
      />
      <Text style={styles.total}>Total Printers 100</Text>
      <FlatList
          data={[
            {key: 'Printer 1'},
            {key: 'Printer 2'},
            {key: 'Printer 3'},
            {key: 'Printer 4'},
            {key: 'Printer 5'},
            {key: 'Printer 6'},
            {key: 'Printer 7'},
            {key: 'Printer 8'},
          ]}
          renderItem={({item}) =>
          <View style={styles.listView1}>
          <TouchableOpacity onPress={this.onPressChange}>
         
                <View style={styles.listView}>
                    <RadioButton
                    status={this.state.checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={this.onPressChange}
                    />
                    <Text style={styles.item}>{item.key}</Text>
                </View>
             
                </TouchableOpacity>
          </View>

          
          }
        />
          <View style={styles.confirm}> 
             <Button onPress={this.onConfirm} color='white' style={styles.confirmButton}>Confirm</Button>
          </View>
        
      </View>
     
  );
}
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        padding:24,
        flexDirection:'column',
        justifyContent:'center',
        height:'100%'
    },
    divider:{
      backgroundColor:'rgba(0,0,0,.12)',
      height:1
    },
    total:{
      marginTop:8,
      textAlign:'right'
    },
    item: {
      padding: 10,
      fontSize: 15,
      height: 44,
    },
    heading:{
        color:'black',
        fontSize:60,
        fontFamily:'Roboto'
    },
    heading1:{
        color:'black',
        fontSize:60,
    },
    input:{
        width:'100%',
        marginBottom:12
    },
    list:{
      color:'black',
      fontSize:40
    },
    confirm:{
      display:'flex',
      flexDirection:'row',
      alignItems:'flex-end',
      justifyContent:'flex-end'
    },
    confirmButton:{
      backgroundColor:'#006cc8'
   
    },
    listView:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'flex-start',
      borderColor:'rgba(0,0,0,.12)',
      borderWidth:.5
    },
    listView1:{
      display:'flex',
      flexDirection:'column',
    }
  });

  AppRegistry.registerComponent('AwesomeProject', () => SelectPrinterScreen);