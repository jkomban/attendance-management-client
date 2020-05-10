import React, { Component } from 'react';
import { SideDrawer } from '../../common/components/SideDrawer';
import Header from '../../common/components/Header';
import AppRouter from '../../routes/Routes';
import { ConfigS } from '../../services'
// import './App.css';


class App extends Component {

  constructor() {
    super()
    this.state = {
      isDrawerOpen: false,
      title: 'Attendance Management System',
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


  toggleDrawer = (isCurrentlyOpen, newTitle) => {
    console.log(`App.js->toggleDrawer()-> ${this.state.isDrawerOpen} ${isCurrentlyOpen}`)
    this.setState({ isDrawerOpen: isCurrentlyOpen, title: newTitle });
    // state.isDrawerOpen = isCurrentlyOpen;
    console.log(`App.js->toggleDrawer() after-> ${this.state.isDrawerOpen} ${isCurrentlyOpen}`)
  }

  headerHandler = (newTitle) => {
    console.log(newTitle)
  }

  render() {
    let { isConfigLoaded, loadFailed } = this.state


    if (loadFailed) {
      return (
        <div>
          <h1>
            Failed to Load the Page
          </h1>
        </div>
      )
    } else {
      return (
        <div>
          <Header title={this.state.title} toggleDrawer={this.toggleDrawer}></Header>
          <SideDrawer open={this.state.isDrawerOpen} toggleDrawer={this.toggleDrawer}></SideDrawer>
          <AppRouter headerHandler={this.headerHandler}></AppRouter>
        </div >
      )
    }

  }
}

export default App;
