import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { textChange } from '../redux/downSlice';

function LeftTable() {
  const [text1, setText1] = useState('');
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setText1(e.target.value);
    dispatch(textChange({ text1 }))
  }
  return (
    <div>
      <textarea value={text1} onChange={(e) => handleChange(e)} name="area1" id="" cols="50" rows="20">

      </textarea>
    </div>
  )
}

export default LeftTable
