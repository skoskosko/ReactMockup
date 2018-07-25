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
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});
  //{`${props.id} ${props.name}`}
    // <Image source={{ uri: props.picture.large}} style={styles.photo} />
const JobRow = (props) => (
  <View style={styles.container}>

    <Text style={styles.text}>
      "TEST TET"
    </Text>


  </View>
);

export default JobRow;
