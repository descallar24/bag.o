import * as React from 'react';
import {Image, Button,View,Text,SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

const History = ({ navigation }) => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
   
       
        <View>
        <Text style={styles.textAbout}>HISTORY</Text>
        </View>
        
        <TouchableOpacity style={styles.Bbutton} onPress={()=> {
          navigation.navigate('DrawBar')
        }}>
          <Text style={styles.btext}>BACK</Text>
        </TouchableOpacity>
        <View>
        <Text style={styles.h1}></Text>
        <Text style={styles.h1}></Text>
        <Text style={styles.h1}></Text>
        <Text style={styles.h1}></Text>
        <Text style={styles.h1}></Text>
        <Text style={styles.h1}></Text>
        <Text style={styles.t1}>12/10/22</Text>
        <Text style={styles.t2}>12/11/22</Text>
        <Text style={styles.t3}>12/12/22</Text>
        <Text style={styles.t4}>12/13/22</Text>
        <Text style={styles.t5}>12/14/22</Text>
        <Text style={styles.t6}>12/15/22</Text>
        <Text style={styles.p1}>POSSIBLE BILL:</Text>
        <Text style={styles.p2}>POSSIBLE BILL:</Text>
        <Text style={styles.p3}>POSSIBLE BILL:</Text>
        <Text style={styles.p4}>POSSIBLE BILL:</Text>
        <Text style={styles.p5}>POSSIBLE BILL:</Text>
        <Text style={styles.p6}>POSSIBLE BILL:</Text>
        
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default History;

const styles = StyleSheet.create({    
    p6:{
    fontSize:15,
    marginVertical:45,
    top:-1310,
    left:195,
    fontWeight:'bold'
},
    p5:{
        fontSize:15,
        marginVertical:45,
        top:-1320,
        left:195,
        fontWeight:'bold'
    },
    p4:{
        fontSize:15,
        marginVertical:45,
        top:-1330,
        left:195,
        fontWeight:'bold'
    },
    p3:{
        fontSize:15,
        marginVertical:45,
        top:-1340,
        left:195,
        fontWeight:'bold'
    },
    p2:{
        fontSize:15,
        marginVertical:45,
        top:-1350,
        left:195,
        fontWeight:'bold'
    },
    p1:{
        fontSize:15,
        marginVertical:45,
        top:-1360,
        left:195,
        fontWeight:'bold'
    },
    t6:{
        fontSize:20,
        marginVertical:45,
        top:-705,
        left:5,
        fontWeight:'bold'

    },
    t5:{
        fontSize:20,
        marginVertical:45,
        top:-710,
        left:5,
        fontWeight:'bold'

    },
    t4:{
        fontSize:20,
        marginVertical:45,
        top:-715,
        left:5,
        fontWeight:'bold'

    },
    t3:{
        fontSize:20,
        marginVertical:45,
        top:-720,
        left:5,
        fontWeight:'bold'

    },
    t2:{
        fontSize:20,
        marginVertical:45,
        top:-725,
        left:5,
        fontWeight:'bold'

    },
    t1:{
        fontSize:20,
        marginVertical:45,
        top:-730,
        left:5,
        fontWeight:'bold'

    },
   
    h1:{
        width: 370,
        height: 83,
        marginVertical:18,
        top:10,

        backgroundColor: '#F8D866',
    },
  
  container: {
    alignItems: 'center',
    height: 850,
  },
  
  btext:{
      fontStyle: "normal",
      fontSize: 21,
      textAlign:'center',
      width: 50,
      fontWeight: "bold",
      fontFamily: "sans-serif-condensed",
  },



  Bbutton: {
      backgroundColor:'#FEF0B3',
      alignItems: "center",
      borderRadius: 15,
      width: 100,
      height: 35,
      top: -5,
      left: -140,
      textAlign: 'center'
      
  },

  textAbout: {
      fontStyle: "normal",
      fontSize: 25,
      height: 60,
      width: 400,
      padding:13,
      fontWeight: "bold",
      fontFamily: "sans-serif-condensed",
      backgroundColor: "#F8D866",
      textAlign: 'center',
      top:40
  },
});