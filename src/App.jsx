import React from 'react'
import SideBar from './Component/SideBar'
import Player from './Component/Player'
import Display from './Component/Display'

const App = () => {
  return (
    <div className='h-screen bg-black'>
        <div className='h-[90%] flex'>
            <SideBar />
            <Display />
        </div>
        <Player />
      
    </div>
  )
}

export default App
