import React from 'react'

const HomepageWhyUse = () => {
  return (
    <section className="why-use">

        <div className="heading leading-normal">
            why use NFSFU234FormValidation?
        </div>

        <div className="contents">

            <div className="flex flex-wra max-md:flex-col max-sm:text-center mt-4 w-100" >

                <div className="features-card w-full md:w-1/3 ">
                    <div className="icon"><i className="fa fa-check" aria-hidden="true"></i></div>
                    <div className="title">simple</div>
                    <div className="text">It&apos;s designed to be easy to use with minimal boilerplate</div>
                </div>

                <div className="features-card w-full md:w-1/3 ">
                    <div className="icon"><i className="fa fa-check" aria-hidden="true"></i></div>
                    <div className="title">flexible</div>
                    <div className="text">use the built-in validators messages or write your own</div>
                </div>

                <div className="features-card w-full md:w-1/3 ">
                    <div className="icon"><i className="fa fa-check" aria-hidden="true"></i></div>
                    <div className="title">lightweight</div>
                    <div className="text">It&apos;s roughly around 1.5kb gzipped, so it won&apos;t bloat your bundle</div>
                </div>

            </div>
            

        </div>

    </section>
  )
}

export default HomepageWhyUse