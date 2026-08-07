import React from 'react'

function SectionTitle({sectionTitle = "your section title" , classstyle = "text-xl" , classs = ""}) {
  return (
    <div className={`max-w-6xl md:mx-auto flex flex-col items-left justify-center mt-6 mx-6 ${classs}`}>

        <div>
        <h2 className={`${classstyle} mb-4 md:text-3xl font-semibold text-left inline rounded-full outline outline-1 outline-blue-500 px-4 py-2 `}>  
        {sectionTitle}
      </h2>

        </div>

    </div>
  )
}

export default SectionTitle