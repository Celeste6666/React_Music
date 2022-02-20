import React, { Component, Fragment } from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.scss';
import Home from './views/home';
import Collection from './views/collection';
import Navbar from './compontents/Navbar';
import Sidebar from './compontents/Sidebar';


class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <Navbar/>
        </header>
        <div className="row mt-3">
          <aside className="col-2">
            <Sidebar/>
          </aside>
            <main className="col-10">
              <Routes>
              <Route path="/">
                <Route path="/" element={<Home/>}></Route>
                <Route path="/collection" element={<Collection/>}></Route>
              </Route>
              </Routes>
            </main>
        </div>
      </Fragment>
    )
  }
}

export default App;
