import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './InputItem.module.css';
import Grid from '@material-ui/core/Grid'

class InputItem extends React.Component{

constructor(props) {
 super(props);
 state = {
      inputValue: '',
      helperText: '',
      error: false
    };

}

    onButtonClick = () => {
     if( inputValue !== ''){
         setState({
        inputValue: ''
      });
      props.onClickAdd( inputValue);
    }else
    setState({helperText: 'Тут пусто! Напиши задачу', error: true})
  };
    render() {
      const {onClickAdd} = props;
      return <Grid>
          <TextField
              id="standard-dense"
              label="Добавить задачу"
              margin="dense"
              className={styles.searchInput}
              value={ inputValue}
              onChange ={event => setState({inputValue: event.target.value.toUpperCase(), error: false, helperText: ''})}
              InputLabelProps={{
                          shrink: true
                          }}
              helperText={ helperText}
              error={ error}
          />
          <Button
            variant= 'contained'
            color='primary'
            fillwidth
            onClick={onButtonClick}
            >
          Добавить
          </Button>
      </Grid>
    }
}


export default InputItem;
