import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

      paddingLeft: 10,
      paddingTop: 5
  },
  companyBox:{
    paddingLeft: 10,
    paddingTop: 5
  },
  BottomBox:{
    flexDirection: 'row',
    paddingLeft: 10,
    paddingBottom: 5
  },
  text: {
    paddingLeft: 10,
    color: 'grey'
  },
  companyName: {
    paddingLeft: 10,
    color: 'black'
  },
  Thin: {
    paddingLeft: 10,
    paddingTop: 10,
    fontSize:10,
    color: 'gray',
    bottom:10
  },
  photo: {
    height: 50,
    width: 50
  },
  photoEnd: {
    flex: 1,
   flexDirection: 'row',
   justifyContent: 'flex-end',
   alignItems: 'center',
  },

});
  //{`${props.id} ${props.name}`}
    // <Image source={{ uri: props.picture.large}} style={styles.photo} />
    // <View style={styles.timeBox}>
    //
    // </View>
const JobRow = ({props}) => (
  <View style={styles.container}>
  <Image source={{ uri: props.uri}} style={styles.photo} />
  <View style={styles.companyBox}>
    <Text style={styles.companyName}>
      {props.employer}
    </Text>
    <Text style={styles.Thin}>
      {`${props.startDate} - ${props.endDate}`}
    </Text>
    <Text style={styles.Thin}>
      Contacnt:  {props.name}
    </Text>
  </View>
  <View style={styles.photoEnd}>
  <Image
    source={require('../../assets/arrow.png')}
    style={styles.photo}
  />
  </View>

  </View>
);

export default JobRow;
