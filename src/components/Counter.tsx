import React from 'react'
import type { RootState } from '../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/CounterSlice'

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='flex justify-between items-center'>
        <button aria-label="Increment value" onClick={() => dispatch(decrement())} className='text-4xl text-gray-500 font-semibold'>-</button>
        <span className='text-2xl text-gray-500 font-semibold'>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(increment())} className='text-4xl text-gray-500 font-semibold'>+</button>
      </div>
    </div>
  )
}