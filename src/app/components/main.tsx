import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
// const DynamicSketch = dynamic(() => import('./Sketch'), { ssr: false });

const Main = () => (
  <section className="bg-black dark:bg-black-50 flex-col place-self-center content-center">
    <img class="img2" src="/ddd2.gif" alt="" />
    <img class="img1" src="/ddd.jpg" alt="" />
    <div id="renqon" className="flex justify-center items-center w-auto h-screen text-8xl z-10">
        <h1 className="">renqon</h1>
    </div>
    {/* <div id="glow" className="flex justify-center items-center w-auto h-screen text-8xl flex-col">
        <h1 id="major">renqon</h1>
    </div> */}
  </section>
);

export default Main;