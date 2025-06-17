import React from 'react'
import { Outlet } from 'react-router-dom'
import NavLayout from '../components/navLayout'
function AppLayout() {
  return (
    <div className= 'flex'>
      <div >
        <NavLayout/>
      </div>
        <main className='w-screen px-2 sm:px-4'>
            <Outlet/>
        </main>
    </div>
  )
}

export default AppLayout