import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import CommentAdd from "./CommentAdd";

class CommentSection extends React.component {
  constructor(props)   {                      //props because CommentSection is a child to App
  super(props);
  this.state ={                 //the current state of comments props
    comments: props.comments
  };
}

render() {                //move props to the virtual DOM to be rendered to the browser
  return (                // returns the updated state of comments mapped to a new array
    <div>
    {this.state.comments.map()} //holds state because it's a class even though it's a child
  )
}
