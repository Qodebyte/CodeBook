import React from 'react'
import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import DashboardNavBar from '../../components/DashboardNavBar'
import StudentMgt from './components/StudentMgt'

const page = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
    <DashboardNavBar />
    <StudentMgt/>
    </div>
  </MaxWidthWrapper> 
  )
}

export default page
