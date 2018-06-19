import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar dummyData = {this.state.}/>
        <PostContainer dummyData = {this.state.posts} />
        <CommentSection dummyData= {this.state.comment} />

      </div>
    );
  }
}

export default App;
