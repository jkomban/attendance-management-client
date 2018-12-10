import React, { Component } from 'react';
import { SideDrawer } from './components/SideDrawer';
import Header from './components/Header';
import AppRouter from './routes/Routes';
// import './App.css';

// class App extends Component {
//   loginResponse(resp) {
//     console.log(resp)
//   }

//   render() {
//     // console.log();
//     return (

//     );
//   }
// }

class App extends Component {
  state = {
    isDrawerOpen: false,
    title: 'Attendance Management System'
  }


  toggleDrawer = (isCurrentlyOpen, newTitle) => {
    console.log(`App.js->toggleDrawer()-> ${this.state.isDrawerOpen} ${isCurrentlyOpen}`)
    this.setState({ isDrawerOpen: isCurrentlyOpen, title: newTitle });
    // state.isDrawerOpen = isCurrentlyOpen;
    console.log(`App.js->toggleDrawer() after-> ${this.state.isDrawerOpen} ${isCurrentlyOpen}`)
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} toggleDrawer={this.toggleDrawer}></Header>
        <SideDrawer open={this.state.isDrawerOpen} toggleDrawer={this.toggleDrawer}></SideDrawer>
        <AppRouter></AppRouter>
      </div >
    )
  }
}

export default App;
