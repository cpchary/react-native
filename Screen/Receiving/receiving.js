import React, {Component} from 'react';
import { AppRegistry,StyleSheet,View,Text,Image} from 'react-native';
import { IconButton, } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';


export default class ReceivingScreen extends Component {

    constructor(props)
    {
      super(props);
      this.state = {
        firstQuery: '',
        checked: '',
      };
      console.log(this.state)
    }

    static navigationOptions = {
      title: 'Receiving',
      headerLeft:   <IconButton
      icon="menu"
      color={'white'}
      size={24}
      onPress={() => console.log('Pressed')}
    />,
    headerRight:null,
    }


    onPressChange=()=>{
        this.props.navigation.navigate('pallets')
    }
 
    render()
    {
  return (
      <View style={styles.container}> 
       
        <Searchbar
        inputStyle={styles.searchBarInput}
        placeholder="Enter continer or lane Number"
        onChangeText={query => { this.setState({ firstQuery: query }); }}
        value={this.state.firstQuery}
        icon={require('../../assets/barcode.png')}
        onIconPress={this.onPressChange}
      />

      <View style={styles.searchResult}>

      {/* <View>
            <Text>Scan Carton or Label</Text>
      </View> */}

      <View style={styles.imgContainer}>
      <Text style={styles.imgText}>Scan container or lane to continue</Text>
             <Image source={require('../../assets/box.png')} style={{width: 300, height: 300,resizeMode: 'center',}}>
            
            </Image>
      </View>
           
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
        justifyContent:'flex-start',
        height:'100%'
    },
    searchBarInput:{
        fontSize:12
    },
    searchResult:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'flex-start',
        height:'100%',
        width:'100%'
    },
    imgContainer:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%'
    },
    imgText:{
        fontWeight:"600",
        color:'#80807F',
        textAlign:'center',
        fontSize:20
    },
    input:{
        width:'100%',
        marginBottom:12
    },


  });
