import React, { Component } from 'react';
import { ConfigS } from '../../services'
import MainLayout from '../../layouts/Main';
import SideDrawer from '../../common/components/SideDrawer';
import Header from '../../common/components/Header';
import AppRouter from '../../routes/Routes';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isConfigLoaded: false
    }
  }

  loadConfig = async () => {
    try {
      await ConfigS.setConfiguration()
      this.setState({ isConfigLoaded: true, loadFailed: false })
    } catch (error) {
      this.setState({ loadFailed: true })
    }
  }

  componentDidMount() {
    this.loadConfig()
  }

  render() {
    let { isConfigLoaded, loadFailed } = this.state


    if (loadFailed || !isConfigLoaded) {
      return (
        <div>
          <h1>
            Failed to Load the Page
          </h1>
        </div>
      )
    } else {
      return (
        <MainLayout />
      )
    }

  }
}

export default App;
