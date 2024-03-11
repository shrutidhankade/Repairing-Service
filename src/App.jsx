import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'



const App = () => {
  const brands = [
    {
      name: 'LG',
      logoUrl: 'https://www.lg.com/lg5-common/images/common/share/share-default.jpg',
    },
    {
      name: 'Samsung',
      logoUrl: 'https://1000logos.net/wp-content/uploads/2017/06/Samsung_logo.png',
    },
    {
      name: 'IFB',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/49/IFB.png',
    },
  ];


  return (
    <>
      <div className="h-auto relative">
        <div className=" text-white bg-[#267FCA] p-2   rounded shadow-md container">
          <h1 className="text-xl max-sm:text-[4vw] max-sm:pt-3 text-center font-bold font-[bacasime antique regular] tracking-wide mb-4 pt-2">
            We provide the best home appliances services near you
          </h1>
        </div>

        <div className="page2 w-full relative max-sm:overflow-hidden h-auto bg-gray">
          <div className="w-full lg:w-[80%] flex max-sm:flex-col relative h-full py-4 mx-auto">
            <div className="left w-full lg:w-[50%] h-full">
              <div className="logo w-full max-sm:mx-20 h-[15vh]">
                <img
                  className="h-full object-cover"
                  src="https://www.codester.com/static/uploads/items/000/034/34217/preview.jpg"
                  alt=""
                />
              </div>
              <div className="text w-full h-[75vh] ">
                <h1 className="font-bold max-sm:leading-[12vw] max-sm:text-3xl max-sm:text-center text-zinc-800 font-[bacasime antique regular] text-[2.6vw] tracking-[0.1vw] leading-[4vw] pt-10">
                  <span className="text-[#267FCA]">
                    Customer Care Service
                  </span>{' '}
                  centre In Bhopal
                </h1>

                <div className="gola flex max-sm:flex-col gap-8 max-sm:items-center w-full h-[39vh] mt-16 max-sm:bg-zinc-200 max-sm:mt-10 max-sm:rounded-lg max-sm:w-[76%] max-sm:ml-[12.5%] max-sm:h-[84vh]">
                  <div className="circle max-sm:flex max-sm:items-center max-sm:justify-center w-full h-full">
                    <div className="gol w-[9vw] max-sm:w-[30vw] max-sm:h-[30vw] overflow-hidden h-[9vw] rounded-full ">
                      <img
                        className="w-full h-full object-cover"
                        src="https://miro.medium.com/v2/resize:fit:1000/0*h5cgkFjDz5I3OoaA.jpg"
                        alt=""
                      />
                    </div>
                    <h1 className="pl-5 max-sm:text-[3.8vw] font-semibold text-[1.2vw]">
                      Washing Machine <br /> Service
                    </h1>
                  </div>

                  <div className="circle max-sm:flex max-sm:items-center max-sm:justify-center w-full h-full">
                    <div className="gol w-[9vw] max-sm:w-[30vw] max-sm:h-[30vw] overflow-hidden h-[9vw] rounded-full ">
                      <img
                        className="w-full h-full object-cover"
                        src="https://samparkcare.com/wp-content/uploads/2023/02/Male-Technician-With-Screwdriver-Repairing-Refrigerator-in-Kitchen.jpg"
                        alt=""
                      />
                    </div>
                    <h1 className="pl-5 max-sm:text-[3.8vw] max-sm:w-1/2 font-semibold text-[1.2vw]">
                      Refrigerator Repairing<br /> Service
                    </h1>
                  </div>

                  <div className="circle max-sm:flex max-sm:items-center max-sm:justify-center w-full h-full">
                    <div className="gol w-[9vw] max-sm:w-[30vw] max-sm:h-[30vw] overflow-hidden h-[9vw] rounded-full ">
                      <img
                        className="w-full h-full object-cover"
                        src="https://acservicegurgaon.com/wp-content/uploads/2021/02/ac-repair-sushant-lok.jpg"
                        alt=""
                      />
                    </div>
                    <h1 className="pl-5 max-sm:text-[3.8vw] max-sm:w-1/2 font-semibold text-[1.2vw]">
                      AC and Repairing  <br /> Service
                    </h1>
                  </div>

                  <div className="circle max-sm:flex max-sm:items-center max-sm:justify-center w-full h-full">
                    <div className="gol w-[9vw] max-sm:w-[30vw] max-sm:h-[30vw] overflow-hidden h-[9vw] rounded-full ">
                      <img
                        className="w-full h-full object-cover"
                        src="https://5.imimg.com/data5/SELLER/Default/2021/2/EM/YL/UM/20993439/microwave-repairing-service-500x500.jpg"
                        alt=""
                      />
                    </div>
                    <h1 className="pl-5 max-sm:text-[3.8vw] max-sm:w-1/2 font-semibold text-[1.2vw]">
                      Microwave Repairing <br /> Service
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="right w-full lg:w-[50%] h-full relative">
              <div className="call w-full h-[15vh] max-sm:mt-64 max-sm:-ml-20 relative">
                <button
                  className="absolute top-5 right-2 px-5 py-1 lg:px-12 lg:py-2 text-white flex items-center gap-4 rounded-full hover:font-medium lg:mt-5 cursor-pointer hover:translate-y- hover:transition-all hover:ease-linear hover:duration-150 transition-all ease-linear duration-150 transition-all ease-linear duration-150 translate-y-"
                  style={{ backgroundColor: "#267FCA" }}
                >
                  <p className="text-xl lg:text-3xl">✆</p> +91-18003093954
                </button>
              </div>
              <div className="form w-full relative h-[75vh]  max-w-full">
                <div className="w-[70%] h-[60vh] bg-gray-100 relative mt-12 ml-44 max-sm:ml-0 max-sm:mt-0 rounded-[8px] max-sm:w-full">
                  <form className="p-6 border-2 border-[#267FCA] absolute top-5 max-sm:top-5 max-sm:w-[89%] rounded-[8px] left-5 w-[25vw] flex flex-col justify-center">
                    <div className="flex flex-col">
                      <label htmlFor="name" className="hidden">
                        Full Name
                      </label>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        className="w-[100%] mt-2 border-[#267FCA] py-3 px-3 rounded-lg bg-white border text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col mt-2">
                      <label htmlFor="email" className="hidden">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="w-[100%] mt-2 py-3 px-3 rounded-lg bg-white border border-[#267FCA] text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col mt-2">
                      <label htmlFor="tel" className="hidden">
                        Number
                      </label>
                      <input
                        type="tel"
                        name="tel"
                        id="tel"
                        placeholder="Telephone Number"
                        className="w-[100%] mt-2 py-3 px-3 rounded-lg bg-white border border-[#267FCA] text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col mt-2">
                      <label htmlFor="problem" className="hidden">
                        Problem
                      </label>
                      <input
                        type="text"
                        name="problem"
                        id="problem"
                        placeholder="Problem"
                        className="w-[100%] mt-2 py-3 px-3 rounded-lg bg-white border border-[#267FCA] text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="md:w-32 text-white font-bold py-3 px-6 rounded-lg mt-5 transition ease-in-out duration-300"
                      style={{ backgroundColor: "#267FCA" }}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>


          </div>


        </div>

        {/* <div className="page3 w-full lg:w-[80%]  max-sm:flex-col max-sm:items-center relative h-auto mx-auto max-sm:w-full p-8">
          <h1 className="text-4xl font-bold text-center mb-10">Brands We Repair</h1>

          <div className="w-full flex flex-row overflow-hidden whitespace-nowrap">
            <motion.div
              initial={{ x: "0" }}
              animate={{ x: "-100%" }}
              transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
              className="text-9xl flex gap-14 font-semibold leading-none tracking-tight"
            >
              {[...Array(3)].map((_, index) => (
                <React.Fragment key={index}>
                  <div>
                    <img
                      className="h-[35vh] lg:h-[20vh] max-sm:h-[10vh] object-contain"
                      src="https://static.brandirectory.com/logos/lgaa001_lg.png"
                      alt="LG Logo"
                    />
                  </div>
                  <div>
                    <img
                      className="h-[20vh] lg:h-[15vh] max-sm:h-[10vh] object-contain"
                      src="https://1000logos.net/wp-content/uploads/2017/06/Samsung_logo.png"
                      alt="Samsung Logo"
                    />
                  </div>
                  <div>
                    <img
                      className="h-[20vh] lg:h-[15vh] max-sm:h-[10vh] object-contain"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZmWmhnxQb9qqF3GVN1UJyDJpBS4VIpATqXfB-HXYh8QZK0H1jIDXvrix9b1NuBaMALtg&usqp=CAU"
                      alt="IFB Logo"
                    />
                  </div>
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div> */}

        <section className="  w-full lg:w-[80%] max-sm:w-[80%] mx-auto py-5 bg-gray-100 mb-16 -mt-10">
          <div className="container mx-auto">
            <h2 className="text-[2.4vw] font-bold text-center max-sm:text-2xl text-[#267FCA] mb-8">Brands we service and repair</h2>
            <div className="flex flex-wrap gap-10 max-sm:gap-2 justify-center">
              {brands.map((brand, index) => (
                <div key={index} className="m-4 p-2 bg-white rounded-lg shadow-md max-w-sm">
                  <img
                    src={brand.logoUrl}
                    alt={`${brand.name} Logo`}
                    className="w-44 h-16  max-sm:w-24 sm:h-32 mx-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>












        <div className=" services w-full lg:w-[82%]   flex max-sm:flex-col relative h-auto py-4 mx-auto ">
          <div id="services"
            className="section relative lg:w-[100%] pb-8  md:pb-0  "
          >
            <div className="container  mx-auto   max-sm:-mt-14">
              {/* Heading start */}
              {/* <header className="text-center mx-auto mb-12 ">
                <h2 className=" leading-normal mb-2  text-4xl font-bold text-black font-medium">
                  What We Do
                </h2>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 60"
                  style={{ margin: "0 auto", height: 35 }}
                  xmlSpace="preserve"
                >
                  <circle
                    cx="50.1"
                    cy="30.4"
                    r={5}
                    className="stroke-primary"
                    style={{ fill: "transparent", strokeWidth: 2, strokeMiterlimit: 10 }}
                  />
                  <line
                    x1="55.1"
                    y1="30.4"
                    x2={100}
                    y2="30.4"
                    className="stroke-primary"
                    style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
                  />
                  <line
                    x1="45.1"
                    y1="30.4"
                    x2={0}
                    y2="30.4"
                    className="stroke-primary"
                    style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
                  />
                </svg>
                <p className="text-black   text-xl mx-auto -mt-8 -pb-4">
                  "Transform Your Health: Comprehensive Nutritional Services for Your Unique Journey
                </p>
              </header> */}
              {/* End heading */}
              {/* row */}
              <div className="flex flex-wrap flex-row  text-center">
                <div
                  className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                  data-wow-duration="1s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1s",
                    animationName: "fadeInUp"
                  }}
                >



                  {/* service block */}
                  <div className="py-5 px-5 mb-12  border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:cursor-pointer  shadow-md  rounded-lg hover:shadow-md hover:shadow-slate-300 bg-[#267FCA]"  >
                    {/* style={{backgroundColor: "rgb(3 105 161)"}} */}

                    <div className="inline-block text-gray-900  ">
                      {/* icon */}

                      <img src="https://rajurepair.com/wp-content/uploads/2024/02/Untitled-2ce-removebg-preview.png.webp" alt="" className='h-[7rem] w-[7rem] rounded-lg' />

                    </div>
                    <h3 className="text-xl font-bold text-white  leading-normal mb-2 ">
                      Certified Professionals
                    </h3>
                    <p className=" text-left text-white ">
                      Our dedicated team of skilled technicians is devoted to providing high-caliber technical solutions to our clientele. Possessing considerable years of experience within the respective domain, our technicians impart a rich reservoir of understanding and proficiency to each undertaking.
                    </p>
                  </div>
                  {/* end service block */}
                </div>

                <div
                  className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".1s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1s",
                    animationDelay: "0.1s",
                    animationName: "fadeInUp"
                  }}
                >
                  {/* service block */}
                  <div className="py-5 px-5 mb-12 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:cursor-pointer shadow-md  rounded-lg hover:shadow-md hover:shadow-slate-300 bg-[#267FCA]" >

                    <div className="inline-block text-gray-900 -mb-4  rounded-lg ">
                      {/* icon */}


                      <img src="https://rajurepair.com/wp-content/uploads/2024/02/Untitled-1-removebg-preview.png.webp" alt="" className='h-[8rem] w-[8rem]  ' />
                    </div>
                    <h3 className="text-xl text-white font-bold leading-normal mb-4 ">
                      Easy Booking
                    </h3>
                    <p className=" text-left text-white ">
                      Our helpful customer support team is ready to assist you with bookings and answer your questions. Call us anytime! Our team of professionals is dedicated to ensuring that every project we undertake is completed on time and to your satisfaction. and every project we undertake is completed on time
                    </p>
                  </div>
                  {/* end service block */}
                </div>

                <div
                  className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1s",
                    animationDelay: "0.3s",
                    animationName: "fadeInUp"
                  }}
                >
                  {/* service block */}
                  <div className="py-5 px-5 mb-12 bg-[#267FCA] border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:cursor-pointer shadow-md rounded-lg hover:shadow-md hover:shadow-slate-300  " >
                    <div className="inline-block text-gray-900 " >
                      {/* icon */}


                      <img src="https://rajurepair.com/wp-content/uploads/2024/02/Untitled-3-removebg-preview.png.webp" alt="" className='h-[7rem] w-[7rem] rounded-lg  ' />

                    </div>
                    <h3 className="text-xl text-white  leading-normal mb-2 font-bold ">
                      Trustable
                    </h3>
                    <p className="text-left text-white ">
                      Our team ensures timely completion and satisfaction, ensuring work is done punctually and meets your expectations.
                      Affordable Services
                      We provide high-quality repair services at an affordable price.With extensive years of experience in the related field.and expertise to every project.
                    </p>
                  </div>
                  {/* end service block */}
                </div>

              </div>
              {/* end row */}
            </div>
          </div>


        </div>

        <div className="page3 w-full lg:w-[80%]  mt-10 flex gap-20 max-sm:flex-col max-sm:items-center relative h-auto py-4 mx-auto max-sm:w-full ">
          <div className='w-[45%] h-[73.4vh] max-sm:w-[90%] max-sm:h-[50vh] max-sm:-mt-24'>
            <img className='w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1000/0*h5cgkFjDz5I3OoaA.jpg" alt="" />
          </div>
          <div className='w-[55%] text-zinc-800 -mt-3  max-sm:w-[90%] h-full max-sm:-mt-10 '>
            <h1 className='text-[2.6vw]   font-semibold font-[bacasime antique regular] leading-[3.9vw] tracking-[0.1vw] max-sm:text-[4.9vw] max-sm:leading-[8vw]'> Repair  All  <span className='text-[#267FCA]'>Washing Machine , AC , Refrigerator and   Microwave
            </span>  in Bhopal</h1>

            <p className='pt-10 max-sm:text-[3.5vw]'>Get the best washing machine repair and maintenance services in Bhopal from our team of experienced, trained technicians . We service all brands and types of washers – front-loading, top-loading, portable – and handle repairs both minor and major.</p>

            <p className='pt-8 max-sm:text-[3.5vw]'>At our company, customer satisfaction is our top priority. That's why we offer a 30-days warranty on all repairs, ensuring that you get the best value for your money. Contact us today for all your washing machine Ac Refrigerator repair and service needs.</p>

            <p className='pt-8 max-sm:text-[3.5vw]'>Regular maintenance and service are crucial for optimal washing machine performance and cleaner laundry. breakdowns cause major household inconvenience, so we offer prompt, same-day, emergency repairs to get your washer running again ASAP. Our reliable service comes at reasonable, cost-effective pricing.</p>
          </div>
        </div>

        <div className=" emergency w-full lg:w-[80%]  mt-10 flex  gap-20 max-sm:flex-col max-sm:items-center relative  py-4 mx-auto max-sm:w-full max-sm:-mt-4 ">
          <div className='w-full h-[35vh] bg-zinc-100 rounded-[10px] mt-5 text-center'>
            <h1 className='pt-8 tracking-wide font-semibold text-zinc-800 text-[1.3vw] max-sm:text-[3.7vw]'>If you have any emergency, just call us 24 hours.</h1>
            <h1 className='text-[2vw] tracking-wide font-bold text-zinc-800 pt-5 max-sm:text-[4.7vw]'>Quick and Reliable Repair of Washing Machine , AC and  Refrigerator
            </h1>
            <button
              className="absolute bottom-10 left-[40%] px-6 py-1 lg:px-12 lg:py-2 max-sm:left-[20%] max-sm:bottom-14 text-white flex items-center gap-4 rounded-full hover:font-medium lg:mt-5 cursor-pointer hover:translate-y- hover:transition-all hover:ease-linear hover:duration-150 transition-all ease-linear duration-150 transition-all ease-linear duration-150 translate-y-"
              style={{ backgroundColor: "#267FCA" }}
            >
              <p className="text-xl lg:text-4xl">✆</p>+91-18003093954
            </button>
          </div>
        </div>



        <div className='question'>
          <section className="text-gray-700">
            <div className="container px-5 py-24 mx-auto max-sm:py-6">
              <div className="text-center mb-20 max-sm:mb-5">
                <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                  Frequently Asked Question
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                  The most common questions about how our  works and what can do
                  for you.
                </p>
              </div>
              <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div className="w-full lg:w-1/2 px-4 py-2">
                  <details className="mb-4">
                    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                      How often should I have my washing machine serviced?
                    </summary>
                    <span>
                      You should have your washing machine serviced at least once a year to ensure it is running efficiently and to prevent any potential breakdowns. Also one should get washing machine de scaled along with service. This improves the cleanliness in clothes.
                    </span>
                  </details>
                  <details className="mb-4">
                    <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                      How long does washing machine repair usually take?
                    </summary>
                    <span>
                      The time it takes to repair a washing machine depends on the problem and the availability of replacement parts. Basic repairs can take a few hours, while more complex repairs may take several days.
                    </span>
                  </details>
                  <details className="mb-4">
                    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                      How can I troubleshoot my washing machine before calling a professional?
                    </summary>
                    <span>
                      You need to check if the power supply is ok. If water is locked then it could be due to chocked filter which can be cleaned.Also check the door seals and water inlet hoses for leakages.
                    </span>
                  </details>
                </div>
                <div className="w-full lg:w-1/2 px-4 py-2">
                  <details className="mb-4">
                    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                      What should I do if my washing machine breaks down?
                    </summary>
                    <span className="px-4 py-2">
                      If your washing machine breaks down, you should immediately unplug it and call a professional washing machine repair technician to diagnose and fix the problem. Avoid attempting to fix it yourself as it can be dangerous and cause further damage.
                    </span>
                  </details>
                  <details className="mb-4">
                    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                      How long does AC repair usually take?
                    </summary>
                    <span className="px-4 py-2">
                      The time it takes to repair a AC depends on the problem and the availability of replacement parts. Basic repairs can take a few hours, while more complex repairs may take several days.
                    </span>
                  </details>
                  <details className="mb-4">
                    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                      How long does refrigerator repair usually take?
                    </summary>
                    <span className="px-4 py-2">
                      The time it takes to repair a refrigerator depends on the problem and the availability of replacement parts. Basic repairs can take a few hours, while more complex repairs may take several days.
                    </span>
                  </details>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className=" customer w-full lg:w-[80%] flex  gap-20 max-sm:flex-col max-sm:items-center relative  py-4 mx-auto max-sm:w-full max-sm:-mt-4 ">

          <section className="flex items-center justify-center -mt-10  bg-white min-w-screen">
            <div className="px-24 py-4 bg-zinc-100 max-sm:bg-white max-sm:py-4 max-sm:px-8 max-sm:mt-5  rounded-[15px]  ">
              <div className="container flex flex-col items-start mx-auto lg:items-center ">
                <p className="relative pt-4 flex items-start justify-start w-full text-lg font-bold tracking-wider text-[#267FCA] uppercase lg:justify-center lg:items-center max-sm:text-[6vw]">
                  Don't just take our word for it
                </p>
                <h2 className="relative pt-3   flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center max-sm:text-[5vw] max-sm:pt-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-700 lg:inline-block"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  See what others are saying
                </h2>
                <div className="block w-full h-0.5 max-w-lg mt-7 rounded-full" />
                <div className="items-center justify-center w-full mt-12 mb-4 lg:flex">
                  <div className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                    <div className="flex items-center justify-center max-sm:-mt-6">
                      <div className="w-16 h-16 mr-4  overflow-hidden bg-gray-200 rounded-full">
                        <img
                          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center">
                        <h4 className="font-bold text-gray-800">John Doe</h4>
                        <p className="text-gray-600">CEO of Something</p>
                      </div>
                    </div>
                    <blockquote className="mt-8 text-lg text-gray-500">
                      "Thanks for creating this service.
                      If you are looking for the ultimate toolset, this is
                      it!"
                    </blockquote>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                        <img
                          src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2547&q=80"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center">
                        <h4 className="font-bold text-gray-800">Jane Doe</h4>
                        <p className="text-gray-600">CTO of Business</p>
                      </div>
                    </div>
                    <blockquote className="mt-8 text-lg text-gray-500">
                      "Thanks for creating this service. My life is so much easier.
                      Thanks for making such a great product."
                    </blockquote>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                        <img
                          src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1256&q=80"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center">
                        <h4 className="font-bold text-gray-800">John Smith</h4>
                        <p className="text-gray-600">Creator of Stuff</p>
                      </div>
                    </div>
                    <blockquote className="mt-8 text-lg text-gray-500">
                      "Packed with awesome content and exactly what I was looking for. I
                      would highly recommend this to anyone."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>


        <div className='Feedback  w-full lg:w-[80%] max-sm:flex max-sm:flex-col  mt-10  max-sm:items-center relative  py-4 mx-auto max-sm:w-full  '>
          <section className="text-gray-700  h-[70vh] rounded-[15px]   max-sm:flex max-sm:flex-col body-font relative">
            <div className="absolute inset-0 rounded-[15px]  max-sm:h-[55vh] max-sm:opacity-90 max-sm:-mt-16  bg-gray-300">

              <iframe
                width="100%"
                height="100%"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                title="map"
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14654.06221321371!2d79.80552024429957!3d23.333329416231855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b94d1daa2077%3A0xe6463b4949c9b68b!2sKarondi%2C%20Madhya%20Pradesh%20483113!5e0!3m2!1sen!2sin!4v1709634728112!5m2!1sen!2sin"
                style={{ filter: "grayscale(1) contrast(1.2) opacity(0.9) " }}
              />

            </div>
            <div className="container px-5 py-6 mx-auto flex max-sm:mt-[75%]  ">
              <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 max-sm:bg-zinc-200 max-sm:h-full ">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                  Feedback
                </h2>
                <p className="leading-relaxed mb-5 text-gray-600">
                  Your Feedback is important for us share your Experiences with us
                </p>
                <input
                  className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
                  placeholder="Email"
                  type="email"
                />
                <textarea
                  className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
                  placeholder="Message"
                  defaultValue={""}
                />
                <button className="text-white bg-[#267FCA] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  Thanks for give me this services
                </p>
              </div>
            </div>
          </section>
        </div>


        {/* <div className='footer  w-full lg:w-[100%] max-sm:flex max-sm:flex-col  mt-10  max-sm:items-center relative  py-4 mx-auto max-sm:w-full  m max-sm:mt-[87%] '>


          <footer className=" border-y   border-2">
            <div className="mx-auto w-full max-w-screen-xl px-6 py-6 lg:py-8">
              <div className="md:flex gap-36">
                <div className="mb-6 md:mb-0 ">
                  <img className='h-[26vh]' src="https://www.codester.com/static/uploads/items/000/034/34217/preview.jpg" alt="" />
                </div>
                <div className="grid grid-cols-2   gap-10 sm:gap-6 sm:grid-cols-3">
                    <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                      Services
                    </h2>
                    <ul className="text-gray-500 font-medium">
                      <li className="mb-4">
                        Washing Machine Reparing
                      </li>
                      <li className="mb-4">
                        Ac Reparing
                      </li>
                      <li className="mb-4">
                        Refrigerator Reparing
                      </li>
                      
                    </ul>
                  </div>
                  <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                    Options
                    </h2>
                    <ul className="text-gray-500 font-medium">
                      <li className="mb-4">
                       Online Booking Services
                      </li>
                      <li>
                      Booking Through Websites
                      </li>
                      <li className='pt-4'>
                        Direct Booking
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                      Contact Info
                    </h2>
                    <ul className="text-gray-500 font-medium">
                      <li className="mb-4">
                        <p>
                          Bhopal
                        </p>
                      </li>
                      <li className="mb-4">
                        <p>+91 7247629743</p>
                      </li>
                      <li className="mb-4">abcd@gmail.com</li>
                    </ul>
                  </div>
                  
                </div>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
              <div className="sm:flex   bg-[#267FCA]  sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 text-white sm:text-left">
                  Copyright
                  <a href="https://hiteshchoudhary.com/" className="hover:underline">
                    © 2024 babashivbrahmi{' '}
                  </a>
                  <br />
                  Powered by babashivbrahmi . All Rights Reserved.
                </span>
                


                <div className="flex text-white justify-center mt-8 space-x-6">
                  <a href="#" className="text-white hover:text-gray-900">
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-gray-900">
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-gray-900">
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-gray-900">
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="ttext-white hover:text-gray-900">
                    <span className="sr-only">Dribbble</span>
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div> */}



        <div className='footer w-full lg:w-[100%] max-sm:flex max-sm:flex-col mt-10 max-sm:items-center relative py-4 mx-auto max-sm:w-full m max-sm:mt-[87%]'>

          <footer className="border-y border-2">
            <div className="mx-auto w-full max-w-screen-xl px-6 py-6 lg:py-8">
              <div className="md:flex gap-28 justify-between">
                <div className="mb-6 md:mb-0">
                  <img className='h-[26vh] max-w-full' src="https://www.codester.com/static/uploads/items/000/034/34217/preview.jpg" alt="" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-6">

                  <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                      Call Now
                    </h2>
                    <ul className="text-gray-500 font-medium">
                      {/* <li className="mb-4">
                        <p>
                          Bhopal
                        </p>
                      </li> */}
                      <li className="mb-4">
                        <p>+91 18003093954</p>
                      </li>

                      <li className="mb-4">
                        <p>+91 18003093954</p>
                      </li>
                      <li className="mb-4">abcd@gmail.com</li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                      Services
                    </h2>
                    <ul className="text-gray-500 font-medium">
                      <li className="mb-4">
                        Washing Machine
                      </li>
                      <li className="mb-4">
                        Ac  Repairing
                      </li>
                      <li className="mb-4">
                        Refrigerator  Repairing
                      </li>
                      {/* <li className="mb-4">
                        microwave Repairing
                      </li> */}

                    </ul>
                  </div>
                  <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                      Options
                    </h2>
                    <ul className="text-gray-500 font-medium">
                      <li className="mb-4">
                        Online Booking
                      </li>
                      <li>
                        Booking Through Websites
                      </li>
                      <li className='pt-4'>
                        Direct Booking
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                      Contact Info
                    </h2>
                    <ul className="text-gray-500 font-medium">
                      <li className="mb-4">
                        <p>
                          Bhopal
                        </p>
                      </li>
                      <li className="mb-4">
                        <p>+91 18003093954</p>
                      </li>
                      <li className="mb-4">abcd@gmail.com</li>
                    </ul>
                  </div>





                </div>

              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 " />
              <div className="sm:flex bg-[#267FCA] rounded-lg max-sm:rounded-lg max-sm:w-[115%] p-2 max-sm:-ml-6  max-sm:text-center sm:items-center sm:justify-between ">
                <span className="text-sm ml-5 tracking-wider text-white sm:text-left">
                  Copyright
                  <a href="https://hiteshchoudhary.com/" className="hover:underline">
                    © 2024 Repairing Services{' '}
                  </a>
                  {/* <br /> */}
                  All Rights Reserved.
                </span>

                <div className="flex text-white justify-center max-sm:mt-0  space-x-6">
                  <div className="flex text-white justify-center  max-sm:mb-3 space-x-6">
                    <a href="#" className="text-white hover:text-gray-900 ">
                      <span className="sr-only">Facebook</span>
                      <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-gray-900">
                      <span className="sr-only">Instagram</span>
                      <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-gray-900">
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    {/* <a href="#" className="text-white hover:text-gray-900">
                      <span className="sr-only">GitHub</span>
                      <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a> */}
                    <a href="#" className="ttext-white hover:text-gray-900">
                      <span className="sr-only">Dribbble</span>
                      <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>



      </div>
    </>
  );
};

export default App;




{/* <iframe
width="100%"
height="100%"
frameBorder={0}
marginHeight={0}
marginWidth={0}
title="map"
scrolling="no"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14654.06221321371!2d79.80552024429957!3d23.333329416231855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b94d1daa2077%3A0xe6463b4949c9b68b!2sKarondi%2C%20Madhya%20Pradesh%20483113!5e0!3m2!1sen!2sin!4v1709634728112!5m2!1sen!2sin"
style={{ filter: "grayscale(1) contrast(1.2) opacity(0.9) " }}
/> */}


