/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'
import Main from './main';

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <Navigator
        //定义初始化启动页面
        initialRoute={{
          name: 'main',
          component: Main
        }}
        //定义跳转动画
        configureScene={(route) => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        renderScene={(route, navigator) => {
          const Component = route.component;
          return <Component {...route.params} navigator={navigator}/>
        }}/>
    );
  }
}
