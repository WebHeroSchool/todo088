import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './InputItem.module.css';
import Grid from '@material-ui/core/Grid'

class InputItem extends React.Component{

  constructor(props) {
   super(props);
   this.state = {
        inputValue: '',
        helperText: '',
        error: false
      };
  }

      onButtonClick = () => {
       if(this.state.inputValue !== ''){
           this.setState({
          inputValue: ''
        });
        this.props.onClickAdd(this.state.inputValue);
      }else
      this.setState({helperText: 'Тут пусто! Напиши задачу', error: true})
    };
      render() {
        return <Grid>
            <TextField
                id="standard-dense"
                label="Добавить задачу"
                margin="dense"
                className={styles.searchInput}
                value={this.state.inputValue}
                onChange ={event => this.setState({inputValue: event.target.value.toUpperCase(), error: false, helperText: ''})}
                InputLabelProps={{
                            shrink: true
                            }}
                helperText={this.state.helperText}
                error={this.state.error}
            />
            <Button
              variant= 'contained'
              color='primary'
            fillwidth='true'
              onClick={this.onButtonClick}
              >
            Добавить
            </Button>
        </Grid>
      }
  }
  export default InputItem;
