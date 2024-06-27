import React from 'react'

const AboutJob = () => {
  return (
    <div className='text-[#3D3D3D] flex flex-col justify-center items-start font-medium'>
        <p className='text-[#6E6D6D] mb-2'>About the job</p>

        <ol className='list-decimal ml-4'>
            <li>Handle the UI/UX research design</li>
            <li>Work on reseaching on latest web application designs and trends</li>
            <li>Work on conceptualizing and visualizing</li>
            <li>Work on creating graphics content and other graphics related works</li>
        </ol>

        <p className='mt-2 mb-1'>Benefits:</p>
        <ul className='list-disc ml-4'>
          <li>Health insurance</li>
          <li>Provident Fund</li>
        </ul>

        <p className='mt-2 mb-1'>Schedule:</p>
        <ul className='list-disc ml-4'>
          <li>Day shift</li>
        </ul>

        <p className='mt-2 mb-1'>Supplemental pay types:</p>
        <ul className='list-disc ml-4'>
          <li>Performance bonus</li>
          <li>Yearly bonus</li>
        </ul>

        <p className='mt-2'>Work location: In person</p>
    </div>
  )
}

export default AboutJob