import {  CircularProgress } from '@mui/material'
import "../../assets/css/Loading/Loading.css"
import React from 'react'

const Loading = () => {
  return (
    <div className='spinner'>
        <CircularProgress />
    </div>
  )
}

export default Loading