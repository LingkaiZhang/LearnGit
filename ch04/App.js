/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  Dimensions,
  ListView,
  Alert,
  TouchableHighlight,
  StatusBar,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});
const circleSize = 8;
const circleMargin = 5;

type Props = {};
export default class App extends Component<Props> {
  constructor(Props){
    super(Props);
    this.state = {
      searchText: '',
      currentPage:0,
      dataSource: ds.cloneWithRows([
        '商品1',
        '商品2',
        '商品3',
        '商品4',
        '商品5',
        '商品6',
        '商品7',
        '商品8',
        '商品9',
        '商品10',
        '商品11',
      ]),
      advertisements: [
        {
        //  title: '广告1',
        //  backgroundColor: 'gray'
        //url:'https://img.i360mall.com/0cd17c48-153f-4ac5-a6c1-d0f247d7cb14.jpg'
        image: require('./images/0cd17c48-153f-4ac5-a6c1-d0f247d7cb14.jpg')
        },
        {
        //  title: '广告2',
        //  backgroundColor: 'orange'
        //url:'https://img.i360mall.com/59c31f95-a528-488b-a993-ae57ee4cac11.jpg'
        image: require('./images/59c31f95-a528-488b-a993-ae57ee4cac11.jpg')
        },
        {
        //  title: '广告3',
        //  backgroundColor: 'yellow'
        //url:'https://img.i360mall.com/efad8e83-b7f1-45be-96cb-fb8f580ebb5d.jpg'
        image: require('./images/efad8e83-b7f1-45be-96cb-fb8f580ebb5d.jpg')
        },
      ],
    };
  }
  render() {
    //指示器组件大小宽度与位置
    const advertisementCount = this.state.advertisements.length;
    const indicatorWidth = circleSize * advertisementCount + circleMargin * advertisementCount * 2;
    const left = (Dimensions.get('window').width - indicatorWidth) / 2;

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={'blue'}
          barStyle={'default'}
          networkActivityIndicatorVisible={true}
        ></StatusBar>
        <View style={styles.searchbar}>
          <TextInput style={styles.input} placeholder='搜索商品'
                onChangeText={(text) => {
                  this.setState({searchText: text});
                  console.log("输入的内容是 " + this.state.searchText);
                }}>
          </TextInput>
          <Button
            style={styles.button}
            title='搜索'
            onPress={() => Alert.alert("搜索内容" + this.state.searchText, null, null)}></Button>
        </View>
        <View style={styles.advertisement}>
          <ScrollView
            ref="scrollView"
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}>
            {this.state.advertisements.map((advertisement, index) => {
              return (
                <TouchableHighlight key={index} onPress={() => Alert.alert("你单击了轮播图", null, null)}>
                    <Image style={styles.advertisementContent}
                          source={advertisement.image}
                        //    source={{uri: advertisement.url}}
                    ></Image>
                </TouchableHighlight>
              );
            })}
          </ScrollView>
          <View style={[styles.indicator, {
            left: left
          }]}>
            {this.state.advertisements.map((advertisement, index) => {
              return (<View key={index} style={(index === this.state.currentPage) ? styles.circleSelected : styles.circle}></View>);
            })}
          </View>
        </View>
        <View style={styles.products}>
          <ListView dataSource = {this.state.dataSource}
            renderRow = {this._renderRow}/>
        </View>
      </View>
    );
  }
  componentDidMount(){
    this._startTimer();
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  _startTimer(){
    this.interval = setInterval(() => {
      nextPage = this.state.currentPage + 1;
      if (nextPage >= 3) {
        nextPage = 0;
      }
      this.setState({currentPage: nextPage});
      const offSetX = nextPage * Dimensions.get('window').width;
      this.refs.scrollView.scrollResponderScrollTo({x:offSetX, y:0, animated: true});
    }, 2000);
  }
  _renderRow = (rowData, sectionID, rowID) => {
      return (
        <TouchableHighlight onPress={() => Alert.alert("你单击了商品列表", null, null)}>
          <View style={styles.row}>
            <Text>{rowData}</Text>
          </View>
        </TouchableHighlight>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchbar:{
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    height: 40,
    flexDirection:'row'
  },
  input: {
    flex:1,
    borderColor:'gray',
    borderWidth:2,
    borderRadius:10,
  },
  button: {
    flex:1
  },
  advertisement: {
    height:180,
  },
  advertisementContent: {
    width:Dimensions.get('window').width,
    height:180,
  },
  products: {
    flex:1
  },
  row: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  indicator: {
    position: 'absolute',
    top: 160,
    flexDirection: 'row'
  },
  circle: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    backgroundColor: 'gray',
    marginHorizontal: circleMargin
  },
  circleSelected: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    backgroundColor: 'white',
    marginHorizontal: circleMargin
  },
});
