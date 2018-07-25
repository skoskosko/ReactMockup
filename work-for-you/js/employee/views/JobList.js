import React, { Component } from 'react';
import { StyleSheet, ListView, View ,TouchableOpacity, Text} from 'react-native';
import JobRow from './JobRow';


class JobList extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Ben Carson',
            employer: 'Awesome Company',
            startDate: new Date('2018-31-08T10:20:30Z') ,
            endDate:new Date('2018-05-09T10:20:30Z'),
            uri: 'http://api.muxuni.fi/gaelin/logo1.png'

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

                     <Text style = {styles.text}>
                        {item.name}
                     </Text>


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
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
})
