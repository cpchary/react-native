import React, {Component} from 'react';
import { AppRegistry,StyleSheet,View} from 'react-native';
import { IconButton,Text,Card} from 'react-native-paper';
import { FAB} from 'react-native-paper';


export default class PalletsScreen extends Component {

    constructor(props)
    {
      super(props);
    }

    static navigationOptions = {
      title: 'Pallets',
      headerLeft:   <IconButton
      icon="arrow-back"
      color={'white'}
      size={24}
      onPress={() => console.log('Pressed')}
    />,
    headerRight:null,
    }


    onPressChange=()=>{
      this.setState({ checked: 'first' }); 
    }
 
    render()
    {
  return (
      <View style={styles.container}> 
        <Card>
            <View style={styles.card}>

                    <View style={[styles.row,styles.spaceBetween]}>
                        <View style={styles.column}>
                                    <View style={styles.row}>
                                        <Text style={styles.key}>Master Pallet</Text>
                                        <View style={styles.palletStatus}>
                                            <Text style={styles.palletStatusText}>Open</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.value}>74900174901507202005</Text>
                        </View>
                        <View style={styles.column}>
                            <IconButton
                                icon="more-horiz"
                                color={'black'}
                                size={24}
                                onPress={() => console.log('Pressed')}
                                />
                        </View>
                    </View>



                <View style={[styles.row,styles.fullWidth]}>
                    <View style={[styles.column,styles.grow1]}>
                        <Text style={styles.key}>Store #</Text>
                        <Text style={styles.value}>7490</Text>
                    </View>

                    <View style={[styles.column,styles.grow1]}>
                        <Text style={styles.key}>Lane/Slot</Text>
                        <Text style={styles.value}>101/GR005</Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.key}>Total No. of cartons</Text>
                        <Text style={styles.value}>70</Text>
                    </View>
                </View>

            </View>
        </Card>
        <FAB
    style={styles.fab}
    color={'white'}
    icon="print"
    onPress={() => console.log('Pressed')}
  />
      </View>
     
  );
}
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        paddingLeft:6,
        paddingRight:6,
        paddingTop:18,
        paddingBottom:18,
        flexDirection:'column',
        justifyContent:'flex-start',
        height:'100%'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor:'#006bb3',
        padding:5,
        borderRadius:50
      },
    fullWidth:{
        width:'100%'
    },
    grow1:{
        flexGrow:1
    },
    card:{
        display:'flex',
        flexDirection:'column',
        paddingLeft:12,
        paddingRight:12,
        paddingTop:12,
        paddingBottom:12,
    },
    row:{
        display:'flex',
        flexDirection:'row',
    },
    column:{
        display:'flex',
        flexDirection:'column'
    },
    palletStatus:{
        backgroundColor:'#367c2b',
        marginLeft:8,
        paddingLeft:8,
        paddingRight:8,
        borderRadius:2 
    },
    palletStatusText:{
        color:'white',
    
    },
    key:{
        color:'#676767',
        fontSize:16
    },
    value:{
        color:'#404040',
        fontSize:18
    },
    spaceBetween:{
        justifyContent: 'space-between'
    }
  });