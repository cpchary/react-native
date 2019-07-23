import React, {Component} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Header from './../../Component/Header/header';
import { TextInput } from 'react-native-paper';
import { RadioButton,Button } from 'react-native-paper';
import { Font } from 'expo';

export default class LoginScreen extends Component {

    constructor(props)
    {
      super(props);
      this.state = {
        fontLoaded: false,
        text: '',
        checked: '',
        
      };
    }

    static navigationOptions = {
      header: null
    }


    
    async componentDidMount() {
      await Font.loadAsync({
        'Roboto': require('./../../assets/fonts/Roboto.ttf'),
      });
  
      this.setState({ fontLoaded: true });
    }

    onFocus = () => {
      this.setState({
          backgroundColor: 'green'
      })
    }
  
    onBlur = () => {
      this.setState({
        backgroundColor: '#ededed'
      })
    }
 
    render()
    {
  return (
      <View style={styles.container}> 
       {/* {
       this.state.fontLoaded ? (
       <Text style={styles.heading}>
           HBS
       </Text>):null
       } */}

        <Text style={styles.heading1}>
        Hybrid Batch Sorter
       </Text>

       <TextInput style={styles.input}
        mode={'outlined'}
        label='User Id'
        value={this.state.text}
        underlineColor={'#007dc6'}
        onChangeText={text => this.setState({ text })}
        
      />
        <TextInput style={styles.input}
       mode= {'outlined'}
        label='Password'
        value={this.state.text}
        selectionColor={'#007dc6'}
        secureTextEntry={true}
        onChangeText={text => this.setState({ text })}
      />
        <TextInput style={styles.input}
        mode={'outlined'}
        label='DC'
        value={this.state.text}
        selectionColor={'#007dc6'}
        onChangeText={text => this.setState({ text })}
      />

        <Button color={'#004c91'}  mode="contained" onPress={() => this.props.navigation.navigate('selectPrinter')}>
    Login
  </Button>
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
        alignItems:'center',
        height:'100%',
       
    },
    heading:{
        color:'black',
        fontSize:60,
        fontFamily:'Roboto',
       
    },
    heading1:{
        color:'black',
        fontSize:28,
        marginBottom:24
    },
    input:{
        width:'100%',
        marginBottom:24,
    },
  });