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
            desc:'Programmer',
            uri: 'http://api.muxuni.fi/gaelin/logo2.png'

         },
         {
            id: 2,
            name: 'Esko Takku',
            employer: 'Muxuni Programmin Co',
            startDate: '2018-31-08 08:30' ,
            endDate:'2018-05-10 16:30',
            desc:'Programmer',
            uri: 'http://api.muxuni.fi/gaelin/logo3.png'

         },
         {
            id: 3,
            name: 'Gael Dukenukem',
            employer: 'Futuristic company',
            startDate: '2018-31-08 08:30' ,
            endDate:'2018-05-10 16:30',
            desc:'Programmer',
            uri: 'http://api.muxuni.fi/gaelin/logo4.png'

         },
         {
            id: 4,
            name: 'Watashi Matattamotto',
            employer: 'Foreign Company',
            startDate: '2018-01-09 09:00' ,
            endDate:'2018-01-10 16:30',
            desc:'Programmer',
            uri: 'http://api.muxuni.fi/gaelin/logo5.png'

         },
         {
            id: 5,
            name: 'Samantha Bosswoman',
            employer: 'Muxuni Programmin Co',
            startDate: '2018-31-12 08:30' ,
            endDate:'2019-20-01 16:30',
            desc:'Programmer',
            uri: 'http://api.muxuni.fi/gaelin/logo3.png'
         },
         {
            id: 6,
            name: 'Filler Thingy',
            employer: 'Muxuni Programmin Co',
            startDate: '2018-31-12 08:30' ,
            endDate:'2019-20-01 16:30',
            desc:'Programmer',
            uri: 'http://api.muxuni.fi/gaelin/logo3.png'
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
