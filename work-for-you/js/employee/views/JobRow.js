import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 50,
    width: 50,
    borderRadius: 0,
  },
});
  //{`${props.id} ${props.name}`}
    // <Image source={{ uri: props.picture.large}} style={styles.photo} />
const JobRow = ({props}) => (
  <View style={styles.container}>
  <Image source={{ uri: props.uri}} style={styles.photo} />
    <Text style={styles.text}>
      {props.name}
    </Text>


  </View>
);

export default JobRow;
