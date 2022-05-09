import { VideoLabelRounded } from '@material-ui/icons'
import React from 'react'
import {Answer} from './index'
// ↑エントリポイントから呼び出している/indexディレクトリの{Answer}↑


const AnswersList = (props) => {
  return(
    <div className="c-grid__answer">
      {props.answers.map((value, index) => {
        return <Answer content={value.content} nextId={value.nextId} key={index.toString()} select={props.select}/>
        // Answerから受け取ったcontentのpropsを取得mapメソッドで繰り返し処理で一覧で表示させる処理
      })}
    </div>
  )
}

export default AnswersList