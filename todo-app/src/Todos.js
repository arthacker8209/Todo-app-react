import React,{useState} from 'react';
import "./Todo.css";
import { makeStyles } from '@material-ui/core/styles';
import {List, ListItem, ListItemText, ListItemAvatar, Modal, Button} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './firebase';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


function Todo(props) {
    const classes = useStyles();
    const [open, setOpen]=useState(false);
    const handleOpen= () =>{
setOpen=true;
    };

    const handleClose=()=>{
        setOpen=false;
    };

    const [input, setInput]= useState('');

    const updateTodo = () =>{

        db.collection('todos').doc(props.todo.id).set({todo:input},
            {merge:true});
        setOpen(false);
    }


    return (

        <>
        <Modal
        open={open}
        onClose={e=>setOpen(false)}
        >
        <div className={classes.paper}>
            <h1> hiiii</h1>
            <input value={input} onChange={event => setInput(event.target.value)}></input>
            <Button onClick={updateTodo}>Close</Button>
        </div>
        </Modal>
      
      <List className="todo__list">

            <ListItem>
                <ListItemText primary= {props.todo.todo} secondary="Todo">
                <ListItemAvatar>
                </ListItemAvatar>
                </ListItemText>
            </ListItem>
                <button onClick={ e => {setOpen(true)}}> edit </button>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} ></DeleteForeverIcon>
            
        </List>
    </>
    )
}

export default Todo
