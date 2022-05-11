import React from 'react';
import defaultDataset from "./dataset";
import './assets/styles/style.css'
import {AnswersList, Chats} from "./components/index";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
         answers: [],
         chats: [],
         currentId: "init",
        //  datasetのinitからデータを取得
         dataset: defaultDataset,
         open: false
    }
    this.selectAnswer = this.selectAnswer.bind(this)
  }

// selectAnswerから取得されたデータを表示するメソッド
  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: 'question'
    })
    console.log(nextQuestionId)

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId
    })
  }

  // 渡されたnextQuestionIdじゃない時、つまり返信を取得するメソッド
  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true) {
      case (nextQuestionId === 'init'):
        this.displayNextQuestion(nextQuestionId)
        break;
      default:
        const chats = this.state.chats;
        chats.push({
          text: selectedAnswer,
          type: 'answer'
        })

        this.setState({
          chats: chats
        })

        this.displayNextQuestion(nextQuestionId)
        break;
    }
  }

  componentDidMount() {
    const initAnswer = "";
    this.selectAnswer(initAnswer, this.state.currentId)
  }
  
  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats} />
          <AnswersList answers={this.state.answers} select={this.selectAnswer} />
        </div>

      </section>
    );
  }
}

