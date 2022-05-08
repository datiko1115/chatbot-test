import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// マテリアルUIのスタイルを決める記述
const useStyles = makeStyles((theme) => ({
  root: {

  },
}));
// マテリアルUIのスタイルを決める記述


const Answer = (props) => {
    // マテリアルUIを埋め込む記述
    // const classes = useStyles();  
    // マテリアルUIを埋め込む記述

    return (
      // マテリアルUIを埋め込む記述button
      <Button variant="contained" color="primary" onClick={() => props.select(props.content, props.nextId)}>
        {props.content}
      </Button>  
      // マテリアルUIを埋め込む記述button
    )
}

export default Answer