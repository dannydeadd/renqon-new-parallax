"use client";
import React, { useEffect } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
const Sketch = () => {
  return (
       <div>
            <Parallax pages={4}>
                <ParallaxLayer offset={0}
                style={{
                    background: "blue",
                }}
                speed={1}
                sticky={{ start: 0, end: 0 }}
                >
                <section className="bg-black dark:bg-black-50 flex-col place-self-center content-center">
                    <img id="img2" src="/ddd2.gif" alt="" />
                    <img id="img1" src="/ddd.jpg" alt="" />
                    <div id="renqon" className="flex justify-center items-center w-auto h-screen text-8xl z-10">
                        <h1 className="">renqon</h1>
                    </div>
                </section>    
                </ParallaxLayer>
                <ParallaxLayer offset={1}
                style={{
                    backgroundImage: "url(./fin.png)",
                    backgroundSize: "cover",
                }}
                sticky={{ start: 1, end: 1.3 }}
                speed={2}
                >
                </ParallaxLayer>
                <ParallaxLayer offset={1.5}
                style={{
                    background: "white",
                }}
                sticky={{ start: 1.7, end: 2.5 }}

                >
                {/* <section id="finance" className="flex-col  content-center text-black 
                flex justify-center items-center w-auto h-screen text-6xl z-10">
                    <h1 className="text-black z-11">Financial Analyst</h1>
                </section> */}
                <section className="bg-white">
                    <div className="grid max-w-screen-xl mx-auto lg:gap-16 xl:gap-0 lg:grid-cols-12 py-48">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black">
                                Payments tool for software companies</h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                                Lorem ipsum dolor sit, amet consectetur adipisicing quas around the world use renqon to simplify their financial database.</p>
                                <div id="input-group">
                                    <input type="email" id="input-hero" name="Email" placeholder="renqon news and more" autocomplete="off"/>
                                    <input id="button--submit" value="Subscribe" type="submit"/>
                                </div>
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/search-mockup-dark.png" alt="mockup" />
                        </div>        
                    </div>       
                </section>
                </ParallaxLayer>
                <ParallaxLayer offset={2}
                style={{
                    background: "white",
                }}
                >

                </ParallaxLayer>
                <ParallaxLayer offset={3}
                style={{
                    background: "white",
                }}
                >

                </ParallaxLayer>
            </Parallax>
       </div>
  )
}

export default Sketch