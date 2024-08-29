import DocSearchComponent from '@/components/Search2'
import Image from 'next/image'
import React from 'react'

const HomepageHero = () => {
  return (
    <div className="hero-section flex max-md:flex-col items-start h-[500px] bg-gray-40 hidde">

        <div className="left w-1/2 max-md:w-full h-[100%] overflow-hidden">
            <Image src="/images/11917195_7600.jpeg" width={900} height={900} className="w-full h-full object-cover" alt="Banner Image" />
        </div>

        <div className="right md:w-1/2 w-full max-md:mt-4 flex items-center h-[100%] px-3">

            <div className="h-100 w-full text-wrap">
                <div>
                <h1 className="title font-bold text-3xl break-words overflow-hidden">NFSFU234FormValidation Library</h1>
                </div>

                <p className="description mt-2 leading-6 text-balance">
                    NFSFU234FormValidation is a lightweight and user-friendly JavaScript library designed for validating HTML form elements, with a special emphasis on textarea fields. It offers customizable validation messages, comprehensive support for required field checks, seamless inline error displays, and convenient modal error notifications.
                </p>

                <div className="search-form bg-[#ebedf0]">
                    <DocSearchComponent />
                </div>



            </div>

        </div>

    </div>

  )
}

export default HomepageHero