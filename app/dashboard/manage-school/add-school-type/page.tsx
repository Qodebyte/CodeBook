import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import React from 'react'
import DashboardNavBar from '../../components/DashboardNavBar'
import DashboardHeader from '../../components/DashboardHeader'
import AddSchoolTypeForms from './components/AddSchoolTypeForms'

const AddSchoolType = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
    <DashboardNavBar />
    <div className="flex-1 md:p-8 overflow-hidden ">
    <DashboardHeader /> 
    <div className='flex flex-col gap-5 w-full '>
    <h3  className='mb-2 text-xl font-bold'>Add School Type</h3>
    <AddSchoolTypeForms/>
    </div>       
    </div>
    
    </div>
</MaxWidthWrapper>
  )
}

export default AddSchoolType
