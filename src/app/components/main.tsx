"use client";
import React from 'react';
// import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// const DynamicSketch = dynamic(() => import('./Sketch'), { ssr: false });

const Main = () => (
  <Parallax pages={2}>
    <ParallaxLayer 
    offset={0}
    speed={1}
    >
      {/* <section className="bg-black dark:bg-black-50 flex-col place-self-center content-center">
        <img id="img2" src="/ddd2.gif" alt="" />
        <img id="img1" src="/ddd.jpg" alt="" />
        <div id="renqon" className="flex justify-center items-center w-auto h-screen text-8xl z-10">
            <h1 className="">renqon</h1>
        </div>
      </section> */}
        <section className="bg-blue text-white h-screen">
          <h1>lol</h1>
        </section>
    </ParallaxLayer>
    <ParallaxLayer 
    offset={1}
    speed={1}
    >
      <section className="bg-white text-black h-screen">
        <h1>Financial Analyst</h1>
      </section>
    </ParallaxLayer>
  </Parallax>
);

export default Main;