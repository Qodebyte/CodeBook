import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import React from 'react'
import DashboardNavBar from '../../components/DashboardNavBar'
import BudgetingMgt from './components/BudgetingMgt'

const page = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-1  text-gray-950 overflow-hidden'>
    <DashboardNavBar />
    <BudgetingMgt/>
    </div>
  </MaxWidthWrapper> 
  )
}

export default page
