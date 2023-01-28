
import './App.css';
import './components/NavBar';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Router,
  Switch,
  Routes,
  BrowserRouter,
  Link,
} from "react-router-dom";
export default class App extends Component {
  
  state={
    progress:0
  }
   setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar color='#f11946'  progress={this.state.progress}/>
          <Routes>
            <Route path="/" element={<News  setProgress={this.setProgress} country="in" category="general" />} />
            <Route path="/business" element={<News  setProgress={this.setProgress} country="in" category="business" />} />
            <Route path="/entertainment" element={<News  setProgress={this.setProgress} country="in" category="entertainment" />} />
            <Route path="/health" element={<News setProgress={this.setProgress} country="in" category="health" />} />
            <Route path="/science" element={<News  setProgress={this.setProgress} country="in" category="science" />} />
            <Route path="/sports" element={<News  setProgress={this.setProgress} country="in" category="sports" />} />
            <Route path="/technology" element={<News  setProgress={this.setProgress} country="in" category="technology" />} />
          </Routes>
          </BrowserRouter>
      </div>
    )
  }
}




