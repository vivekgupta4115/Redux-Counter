import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/slices/CounterSlice';

const Counter = () => {

    const count = useSelector((state) => state.counter.value );
    const dispatch = useDispatch();

  return (
    <div className=' w-full h-screen flex flex-col justify-center items-center'>
      <button
      onClick={() => dispatch(increment())}
      className='text-xl font-bold border px-5 py-2 bg-green-400 rounded-md'
      >
        Increment
      </button>
      <br/>
      <br/>

      <div className='text-xl font-bold border px-5 py-2 bg-yellow-300 rounded-md'>{count}</div>

      <br/>
      <br/>

      <button
      onClick={() => dispatch(decrement())}
      className='text-xl font-bold border px-5 py-2 bg-green-400 rounded-md'
      >
        Decrement
      </button>
    </div>
  )
}

export default Counter
