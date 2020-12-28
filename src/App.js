import React from 'react';
import Header from './component/Header';
import LeftMenu from './component/LeftMenu';
import Main from './component/Main';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <LeftMenu/>
        <Main/>
      </div>
    )
  }
}

export default App;
