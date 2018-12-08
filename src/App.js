import React from 'react';
import AppTheme from './theme/theme';
import AppRoutes from './routes/Routes';

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

export const App = (props) => (
  <AppTheme>
    <AppRoutes></AppRoutes>
  </AppTheme>
)
// export default App;
