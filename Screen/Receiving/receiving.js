import React, {Component} from 'react';
import { AppRegistry,StyleSheet,View,TouchableOpacity} from 'react-native';
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
        placeholder="Search"
        onChangeText={query => { this.setState({ firstQuery: query }); }}
        value={this.state.firstQuery}
        icon={null}
        onIconPress={this.onPressChange}
      />
  
        
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
    input:{
        width:'100%',
        marginBottom:12
    },


  });
