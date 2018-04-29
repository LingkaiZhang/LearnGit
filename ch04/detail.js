import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

type Props = {};
export default class detail extends Component<Props> {
    render() {
      return(
        <View style={styles.container}>
          <Text style={styles.text}>
            详情页面
          </Text>
        </View>
      );
    }
}

  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
      },
      text: {
        fontSize: 20
      }
  });
