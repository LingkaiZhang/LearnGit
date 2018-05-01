import React, {Component} from 'react';
import {StyleSheet, View, Text, ActivityIndicator, Slider, Switch, WebView, Dimensions} from 'react-native';

type Props = {};
export default class more extends Component<Props> {
  constructor(Props){
    super(Props);
    this.state = {
      sliderValue: 5,
      isOn: false
    }
  }
  render() {
    return(
      <View style={styles.container}>
        <Slider
           minimumValue={0}
           style={{width: 200}}
           step={1}
           maximumTrackTintColor='red'
           minimumTrackTintColor='blue'
           maximumValue={10}
           value={this.state.sliderValue}
           onValueChange={
             (value) => this.setState({sliderValue: value})
           }>
        </Slider>
        <Text>Slider值： {this.state.sliderValue}</Text>
        <ActivityIndicator color = "purple" size="large"/>
        <Text style={styles.text}>
          更多页面
        </Text>
        <Switch onTintColor='blue'
          thumbTintColor='green'
          tintColor='black'
          onValueChange={() => this.setState({
            isOn: !this.state.isOn
          })}
          value={this.state.isOn === true}
        />
      <WebView source={
          {
            uri: 'https://sina.cn/'
          }
        } style={styles.web}></WebView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 18,
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    text: {
      fontSize: 20
    },
    web: {
      width: Dimensions.get('window').width,
      height: 200
    }
});
