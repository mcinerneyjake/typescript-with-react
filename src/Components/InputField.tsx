import React from 'react';
import './styles.css';

interface Props {
  toDo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ toDo, setToDo }: Props) => {
  return (
    <form className='input'>
      <input type='input' placeholder='Enter a Task' className='input_box' />
      <button className='input_submit' type='submit'>
        Go
      </button>
    </form>
  );
};

export default InputField;
