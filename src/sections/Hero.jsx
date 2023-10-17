import Button from "../components/Button"
import {arrowRight} from "../assets/icons"
import { useState } from "react"
import {shoes, statistics} from "../constants/"
import { bigShoe1, bigShoe2 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"

const Hero = () => {
  return (
    <section id="home"
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
       
       <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28  px-14">
            <p className="text-xl font-montserrat text-sky-400">Our summer Collections</p>
            <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[52px] max-sm:leading-[72px] max-md:text-[62px] max-lg:text-[72px]
            font-bold">
              <span className="xl:bg-white xl: whitespace-nowrap relative z-10 pr-10"
              >The New Arrival</span>
              <br />
              <span className="text-sky-400 inline-block mt-3">MIC </span> Shoes
            </h1>
            <p className="text-lg text-gray-500 mt-6 mb-14 sm:max-w-sm:"> Discover stylish  Miracle arrivals, quality comfort, and innovation for your everyday life</p>
            <Button label="Shop now" iconURL={arrowRight}/>
            
            <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
              {statistics.map((stat) =>(
                <div key={stat.label}>
                  <p className="font-montserrat text-[40px] font-semibold max-sm:text-3xl"> {stat.value} {/*stat.label*/}</p>
                  <p className="leading-7 font-palanquin text-gray-500"> {stat.label} </p>
                </div>
              ))}
            </div>
       </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoe2} 
        alt="shoe collection"
        width={610}
        height={500}
        className="object-contain relative z-10" />
        <div  className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe) =>(
            <div key={shoe}>
              <ShoeCard
              imgURL={shoe}
              changeBigShoeImage={()=>(k)}
              bigShoeImg=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero