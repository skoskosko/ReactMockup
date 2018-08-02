import React, { Component } from 'react';
import { StyleSheet, ListView, View ,TouchableOpacity, Text} from 'react-native';
import JobRow from './rows/PeopleRow';


class PeopleList extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Ben Carson',
            status: 'Free for your listings',
            desc:'Programmer',
            uri: 'http://api.muxuni.fi/gaelin/face1.jpg'
         },
         {
            id: 1,
            name: 'Esko Takku',
            status: 'Discussable',
            desc:'Cleaning human',
            uri: 'http://api.muxuni.fi/gaelin/face1.jpg'
         },
         {
            id: 2,
            name: 'Template Machoman',
            status: 'Worked for you before',
            desc:'Machoman',
            uri: 'http://api.muxuni.fi/gaelin/face1.jpg'
         },

      ]
   }

   alertItemName = (item) => {
      //alert(item.name)
      alert("This Opens employees profile");
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
export default PeopleList

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
