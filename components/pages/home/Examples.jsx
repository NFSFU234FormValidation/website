import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomepageExamples = () => {
  return (
    <section className="examples" id='examples'>

        <div className="heading mb-5">
            examples
        </div>

        <div className="contents">

            <div className="flex flex-col lg:flex-row gap-y-6 gap-x-4 flex-wrap example-cards w-full ">

                <Link href={"https://github.com/NFSFU234FormValidation/examples/tree/main/nfsfu234formvalidation-web-extension-examples/form1"} target='_blank' className="example-card h-[400px] w-full lg:w-[49%] border-2  rounded-lg overflow-hidden">
                    <Image src="/images/68456_6259654.png" className="w-full h-full object-cover object-top rounded-lg" alt="" height={400} width={10000} />
                </Link>

                <Link href={"https://github.com/NFSFU234FormValidation/examples/tree/main/nfsfu234-form-validation-examples/my-vite-app"} target='_blank' className="example-card h-[400px]  w-full lg:w-[49%] border-2  rounded-lg overflow-hidden">
                    <Image src="/images/example-1.png" className="w-full h-full object-cover object-top rounded-lg" alt="" height={400} width={10000} />
                </Link>

                <Link href={"https://github.com/NFSFU234FormValidation/examples/tree/main/nfsfu234-form-validation-examples/my-create-react-app"} target='_blank' className="example-card h-[400px]  w-full lg:w-[49%] border-2  rounded-lg overflow-hidden">
                    <Image src="/images/example-2.png" className="w-full h-full object-cover object-top rounded-lg" alt="" height={400} width={10000} />
                </Link>

                <Link href={"https://github.com/NFSFU234FormValidation/examples/tree/main/nfsfu234-form-validation-examples/example1"} target='_blank' className="example-card h-[400px] w-full lg:w-[49%] border-2  rounded-lg overflow-hidden">
                    <Image src="/images/image.png" className="w-full h-full object-cover rounded-lg" alt="" height={400} width={10000} />
                </Link>

            </div>

        </div>

    </section>
  )
}

export default HomepageExamples