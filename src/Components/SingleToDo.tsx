import React from 'react';
import { ToDo } from '../model';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './styles.css';
import ToDoList from './ToDoList';

type Props = {
  toDo: ToDo;
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
};

const SingleToDo: React.FC<Props> = ({ toDo, toDos, setToDos }) => {
  const handleDone = (id: number) => {
    setToDos(toDos.map((toDo) => (toDo.id === id ? { ...toDo, isDone: !toDo.isDone } : toDo)));
  };

  return (
    <form className='toDos_single'>
      {toDo.isDone ? (
        <s className='toDos_single--text'>{toDo.toDo}</s>
      ) : (
        <span className='toDos_single--text'>{toDo.toDo}</span>
      )}

      <div>
        <span className='icon'>
          <AiFillEdit />
        </span>
        <span className='icon'>
          <AiFillDelete />
        </span>
        <span className='icon' onClick={() => handleDone(toDo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleToDo;
