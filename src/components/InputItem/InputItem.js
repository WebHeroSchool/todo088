import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './InputItem.module.css';
import Grid from '@material-ui/core/Grid'

class InputItem extends React.Component{
    state = {
      inputValue: ''
        };

    onButtonClick = () => {
      this.setState({
        inputValue: ''
      });
      this.props.onClickAdd(this.state.inputValue);
    }
    render() {
      const {onClickAdd} = this.props;
      return <Grid>
          <TextField
              id="standard-dense"
              label="Добавить задачу"
              margin="dense"
              className={styles.searchInput}
              value={this.state.inputValue}
              onChange ={event => this.setState({inputValue: event.target.value.toUpperCase()})}
            
          />
          <Button
            variant= 'contained'
            color='primary'
            fillwidth
            onClick={this.onButtonClick}
            >
          Добавить
          </Button>
      </Grid>
    }
}


export default InputItem;
