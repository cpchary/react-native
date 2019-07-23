import React,{Component} from 'react';
import { StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigation from './navigation';
import * as theme from './theme';

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider theme={theme.config}>
        <Navigation/>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});
