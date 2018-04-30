import React, {Component} from 'react';
import {TabBarIOS} from 'react-native';

import Home from './home';
import More from './more';

type Props = {};
export default class main extends Component<Props> {
  constructor(Props) {
    super(Props);
    this.state = {
      selectedTab: 'home'
    }
  }
  render() {
    return(
      <TabBarIOS unselectedTintColor="gray"
        tintColor="white"
        barTintColor="orange">
        <TabBarIOS.Item title="首页"
          icon={require('./images/icon-home')}
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
            this.setState({selectedTab: 'home'});
          }}>
          <Home navigator={this.props.navigator}></Home>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="more"
          badge={2}
          selected={this.state.selectedTab === 'more'}
          onPress={() => {
            this.setState({selectedTab: 'more'});
          }}>
          <More navigator={this.props.navigator}></More>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
