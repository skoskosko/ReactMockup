import React, { Component } from 'react';
import { StyleSheet, ListView, View ,TouchableOpacity, Text} from 'react-native';
import JobRow from './JobRow';


class JobList extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Bill cosbworth',
            employer: 'Awesome Company',
            startDate: '2018-31-08 08:30' ,
            endDate:'2018-05-10 16:30',
            desc:'Programmer',
            uri: 'http://api.muxuni.fi/gaelin/logo1.png'

         },
         {
            id: 1,
            name: 'Benny Apricot',
            employer: 'Semi Good Company',
            startDate: '2018-01-10 08:30' ,
            endDate:'2018-10-10 16:30',
            desc:'Accountanttor',
            uri: 'http://api.muxuni.fi/gaelin/logo2.png'

         },
      ]
   }

   alertItemName = (item) => {
      //alert(item.name)
      alert("This opens Companys ad");
   }

   render() {
      return (
      //   <ListView
      //   style={styles.container}
      //   dataSource={this.state.names}
      //   renderRow={(data) => <JobRow {...data} />}
      // />
         <View>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity

                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>

                     <JobRow props={item} ></JobRow>

                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}
export default JobList

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#eff7ed'
   },
   text: {
      color: '#4f603c'
   }
})
