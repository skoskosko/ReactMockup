import React, { Component } from 'react';
import { StyleSheet, ListView, View ,TouchableOpacity, Text} from 'react-native';
import ListingItem from './rows/ListingItem';


class ListingList extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Ben Carson',
            employer: 'Semi Good Company',
            startDate: '2018-31-08 08:30' ,
            endDate:'2018-05-10 16:30',
            desc:'Programmer',
            uri: 'http://api.muxuni.fi/gaelin/logo1.png'

         },
         {
            id: 1,
            name: 'Bobby Banana',
            employer: 'Semi Good Company',
            startDate: '2018-01-10 08:30' ,
            endDate:'2018-10-10 16:30',
            desc:'Dev-Ops',
            uri: 'http://api.muxuni.fi/gaelin/logo1.png'

         },
         {
            id: 2,
            name: 'Esko Takku',
            employer: 'Semi Good Company',
            startDate: '2018-31-08 08:30' ,
            endDate:'2018-05-10 16:30',
            desc:'Techincal Specialist',
            uri: 'http://api.muxuni.fi/gaelin/logo1.png'

         },
         {
            id: 3,
            name: 'Gael Dukenukem',
            employer: 'Semi Good Company',
            startDate: '2018-31-08 08:30' ,
            endDate:'2018-05-10 16:30',
            desc:'Programmer',
            uri: 'http://api.muxuni.fi/gaelin/logo1.png'

         },
      ]
   }

   alertItemName = (item) => {
      //alert(item.name)
      alert("This opens editor for add");
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

                     <ListingItem props={item} ></ListingItem>

                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}
export default ListingList

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
