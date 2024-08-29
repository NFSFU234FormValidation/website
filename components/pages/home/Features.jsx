import React from 'react'

const HomepageFeatures = () => {
  return (
    <section className="hidde" id='features'>

        <div className="heading">
            features
        </div>

        <div className="contents">

            <div className="flex flex-wrap max-sm:flex-col max-sm:text-center mt-4 w-100" >

                <div className="features-card w-full lg:w-[32%] py-6 hidden">
                    <div className="icon"><i className="fa fa-check" aria-hidden="true"></i></div>
                    <div className="title">simple APIs</div>
                    <div className="text">Just call submit() on your form</div>
                </div>

                <div className="features-card w-full lg:w-[32%] py-6">
                    <div className="icon"><i className="fa fa-check" aria-hidden="true"></i></div>
                    <div className="title">simple API</div>
                    <div className="text">Just call submit() on your form</div>
                </div>

                <div className="features-card w-full lg:w-[32%] py-6">
                    <div className="icon"><i className="fa fa-check" aria-hidden="true"></i></div>
                    <div className="title">flexible</div>
                    <div className="text">use the built-in validators messages or write your own</div>
                </div>

                <div className="features-card w-full lg:w-[32%] py-6">
                    <div className="icon"><i className="fa fa-check" aria-hidden="true"></i></div>
                    <div className="title">built-in validators</div>
                    <div className="text">email, URL, required, etc.</div>
                </div>

                {/* <div className="features-card w-full lg:w-[32%] py-6">
                    <div className="icon"><i className="fa fa-check" aria-hidden="true"></i></div>
                    <div className="title">custom validators <small className="bg-orange-500 text-white p-1 rounded-lg text-[8px]">coming soon</small> </div>
                    <div className="text">write functions that return error message</div>
                </div> */}

                <div className="features-card w-full lg:w-[32%] py-6">
                    <div className="icon"><i className="fa fa-check" aria-hidden="true"></i></div>
                    <div className="title">Versitle  </div>
                    <div className="text">works with HTML 5, Node JS, React JS, Vite JS, etc..</div>
                </div>
                
                <div className="features-card w-full lg:w-[32%] py-6">
                    <div className="icon"><i className="fa fa-check" aria-hidden="true"></i></div>
                    <div className="title">controlled or uncontrolled</div>
                    <div className="text">works with controlled or uncontrolled components</div>
                </div>
                
                <div className="features-card w-full lg:w-[32%] py-6">
                    <div className="icon"><i className="fa fa-check" aria-hidden="true"></i></div>
                    <div className="title">little dependencies</div>
                    <div className="text">NFSFU234FormValidation is all you need</div>
                </div>

            </div>
            

        </div>

    </section>
  )
}

export default HomepageFeatures