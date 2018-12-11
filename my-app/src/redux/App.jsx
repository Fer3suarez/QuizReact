import React, { Component } from 'react';
import '../assets/styles/App.css';
import { connect } from 'react-redux';
import Game from './Game.jsx';
import Navbar from './Navbar.jsx';
import {questionAnswer, changeQuestion, submit, initQuestions} from '../reducers/actions';


const URL = 'https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=c4df4b1db46e9d2e419b';

class App extends Component {
  constructor(props) {
    super(props);
    this.appOnAnswer = this.appOnAnswer.bind(this);
    this.onClick = this.onClick.bind(this);
    this.download = this.download.bind(this);
    this.final = this.final.bind(this);
  }
  componentDidMount() {
      this.download();
  }
  download() {
    fetch(URL)
      .then(res => res.json())
        .then((questions) => {
        this.props.dispatch(initQuestions(questions));
      })
  }

  appOnAnswer(answer) {
    this.props.dispatch(questionAnswer(this.props.currentQuestion, answer));
  }
  onClick(buttonName){
    if (buttonName === "Submit"){
       this.props.dispatch(submit(this.props.questions));
    }
    if (buttonName === "Play Again"){
       
       this.download();
    }
    if (buttonName === "Next") {
      this.props.dispatch(changeQuestion(buttonName));
    } else if (buttonName === "Previous") {
      this.props.dispatch(changeQuestion(buttonName));
    }
  }  
  final(finalTime) {
    if (finalTime === true) {
      this.props.dispatch(submit(this.props.questions));
    }
  }

  render() {
    return ( 
      <div id="app">
          <Navbar/>
          <Game question = {this.props.questions[this.props.currentQuestion]}
                appOnAnswer = {this.appOnAnswer}
                onClick = {this.onClick}
                currentQuestion = {this.props.currentQuestion}
                score = {this.props.score}
                finished = {this.props.finished}
                final = {this.final}/>
                
      </div>
      
    );
  }
}
function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps) (App);