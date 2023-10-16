import React from "react";
import Card from "components/card";
import BlogsLayout from "./blogsLayout";

const Blogs = () => {


  const products = [
    {
    title: "Porsche 911 992 MG1 Aurix Multimap!",
    description: "World’s first! Porsche 911 Carrera 3.0/3.8 custom code including map-switch and rolling LC now available,",
    link: "https://tangentmotorsport.com/?p=853"
  },
  {
    title: "EGS52 CAN message reversing",
    description: "So a tuner and long time map switch partner asked us if we could reverse the CAN messages and modify the message bytes on his EGS52 gearbox on W203 Mercedes",
    link: "https://tangentmotorsport.com/?p=651"
  },
  {
    title: "MEDC17 UDS Flashing Exploit",
    description: "Just finished writing the backbone of my flashtool last week. Can flash any MEDC17(presently only UDS based). Here’s a snippet of a EDC17C46 being flashed on bench:",
    link: "https://tangentmotorsport.com/?p=278"
  },
  {
    title: "Mclaren 720s multimap",
    description: "Switch upto 9 map sets of unlimited number of maps(flash storage is the only limit!)",
    link: "https://tangentmotorsport.com/?p=288"
  },
  {
    title: "ECU hacking classes",
    description: "We get a lot of emails requesting classes on hacking ECUs to modify code and add custom functionality.",
    link: "https://tangentmotorsport.com/?p=811"
  }

]


  return (
    <Card extra={"mt-3 w-full !z-5 overflow-auto xl:h-140"}>
      <div className="mb-8 w-full">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white m-4">
          Our Blogs
        </h4>
        <p className="mt-2 text-base text-gray-600 mx-4">
          Here you can find more details about our products.
        </p>
      </div>
 
      {/* <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <img className="h-[83px] w-[83px] rounded-lg" src={image1} alt="" />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 dark:text-white">
              Technology behind the Blockchain
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Project #1 .
              <a
                className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                See product details
              </a>
            </p>
          </div>
        </div>
        <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
          <MdModeEditOutline />
        </div>
      </div> */}
      {/* Project 1 */}
      {/* <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <img className="h-[83px] w-[83px] rounded-lg" src={image3} alt="" />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 dark:text-white">
              Technology behind the Blockchain
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Project #1 .
              <a
                className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                See product details
              </a>
            </p>
          </div>
        </div>
        <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
          <MdModeEditOutline />
        </div>
      </div> */}
      {/* Project 1 */}
      {/* <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <img className="h-[83px] w-[83px] rounded-lg" src={image2} alt="" />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 dark:text-white">
              Technology behind the Blockchain
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Project #1 .
              <a
                className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                See product details
              </a>
            </p>
          </div>
        </div>
        <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
          <MdModeEditOutline />
        </div>
      </div> */}

      {products.map((items,id) => {
        return <BlogsLayout key= {id} title={items.title} description={items.description} link={items.link} />  
      })}
    </Card>
  );
};

export default Blogs;
