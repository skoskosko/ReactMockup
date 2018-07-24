import React, { Component } from 'react';
import { AppRegistry, StyleSheet, ActivityIndicator, ListView, Text, View, Alert, Platform, TouchableOpacity} from 'react-native';

import JobRow from './JobRow';


class JobList extends Component {
  constructor(props) {
 super(props);
 this.state = {
   isLoading: true
 }
}

GetItem (student_name) {

Alert.alert(student_name);

}


componentDidMount() {
  // temp = [{"id":"1","student_name":"Rohit","student_phone_number":"1234567890","student_subject":"C++"},
  // {"id":"2","student_name":"Mukesh","student_phone_number":"0987654321","student_subject":"PHP"},
  // {"id":"4","student_name":"Rita","student_phone_number":"1234567890","student_subject":"JAVA"},
  // {"id":"5","student_name":"Nikita","student_phone_number":"0987654321","student_subject":"Maths"},
  // {"id":"6","student_name":"Sonal","student_phone_number":"1234567890","student_subject":"English"},
  // {"id":"7","student_name":"Pankaj","student_phone_number":"1029384756","student_subject":"HTML"},
  // {"id":"8","student_name":"Nighat","student_phone_number":"0987654321","student_subject":"Android"},
  // {"id":"9","student_name":"Amit","student_phone_number":"0987654321","student_subject":"Operating System"},
  // {"id":"10","student_name":"Dipak","student_phone_number":"1234567890","student_subject":"Hindi"},
  // {"id":"11","student_name":"Ravish","student_phone_number":"0987654321","student_subject":"DBMS"}];
  //
  // let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  // this.setState({
  //   isLoading: false,
  //   dataSource: ds.cloneWithRows(temp),
  // }, function() {
  //
  //   // In this block you can do something with new state.
  // });

 return fetch('https://reactnativecode.000webhostapp.com/StudentsList.php')
   .then((response) => response.json())
   .then((responseJson) => {
     let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.setState({
       isLoading: false,
       dataSource: ds.cloneWithRows(responseJson),
     }, function() {
       // In this block you can do something with new state.
     });
   })
   .catch((error) => {
     console.error(error);
   });
}

ListViewItemSeparator = () => {
 return (
   <View
     style={{

       height: .5,
       width: "100%",
       backgroundColor: "#000",

     }}
   />
 );
}

   alertItemName = (item) => {
      alert(item.name)
   }

   render() {
  if (this.state.isLoading) {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (

    <View style={styles.MainContainer}>

      <ListView

        dataSource={this.state.dataSource}

        renderSeparator= {this.ListViewItemSeparator}

        renderRow={(rowData) =>

       <View style={{flex:1, flexDirection: 'column'}} >

         <TouchableOpacity onPress={this.GetItem.bind(this, rowData.student_name)} >

         <Text style={styles.textViewContainer} >{'id = ' + rowData.id}</Text>

         <Text style={styles.textViewContainer} >{'Name = ' + rowData.student_name}</Text>

         <Text style={styles.textViewContainer} >{'Phone Number = ' + rowData.student_phone_number}</Text>

         <Text style={styles.textViewContainer} >{'Subject = ' + rowData.student_subject}</Text>

         </TouchableOpacity>

       </View>

        }
      />

    </View>
  );
}

}

const styles = StyleSheet.create({

MainContainer :{

// Setting up View inside content in Vertically center.
justifyContent: 'center',
flex:1,
paddingTop: (Platform.OS === 'ios') ? 20 : 0,
backgroundColor: '#00BCD4',
padding: 5,

},

textViewContainer: {

 textAlignVertical:'center',
 padding:10,
 fontSize: 20,
 color: '#fff',

}

});

export default JobList

// const styles = StyleSheet.create ({
//    container: {
//       padding: 10,
//       marginTop: 3,
//       backgroundColor: '#d9f9b1',
//       alignItems: 'center',
//    },
//    text: {
//       color: '#4f603c'
//    }
// })
