import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

type Props = {};
export default class more extends Component<Props> {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>
          更多页面
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      fontSize: 20
    }
});
