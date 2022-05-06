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
         detaset: defaultDataset,
         open: false
    }
  }

  initAnswer = () => {
    const initDataset = this.state.detaset[this.state.currentId]
    const initAnswers = initDataset.answers;

    this.setState({
      answers: initAnswers
    })
  }

  componentDidMount() {
    this.initAnswer()
  }
  
  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats />
          <AnswersList answers={this.state.answers} />
        </div>

      </section>
    );
  }
}

