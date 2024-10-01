import React from 'react';

export default function Home() {
  return (
    <main className='flex flex-col  min-h-[100dvh] space-y-10'>
    <div className="flex justify-center items-center top-0  ">
      <div className="flex cursor-pointer justify-center gap-x-5 items-center text-xl font-bold font-mono w-[20rem] h-12 rounded-full text-white border border-white bg-black/50">
       <img src='/github-outline.svg' ></img>
       <img src='/linkedin.svg' ></img>
       <div className='rounded-full bg-white'>
       <img src='/twitter.png' width='32' height='32'  className='p-1'></img>
       </div> 
      </div>


    </div>

    <section id='hero'>
      <div className='mx-auto w-full max-w-2xl space-y-8'>
        <div className='gap-2 flex justify-between'>
          <div className='flex-col flex flex-1 space-y-1.5'>
            <div className='flex'>
            <span
    className='text-white inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'
    style={{ opacity: 1, filter: 'blur(0px)', transform: 'translateY(-8px) translateZ(0px)' }}
  >
    Hi, Im Dillion 👋
  </span>
            </div>
            <div className='flex
            '> <span className='inline-block text-white max-w-[600px] md:text-xl' style={{ opacity: 1, filter: 'blur(0px)', transform: 'translateY(-8px) translateZ(0px)' }}> Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.</span></div>
          </div>
        </div>
      </div>
    </section>
    <section id='about'>
      <div style={{ opacity: 1, filter: 'blur(0px)', transform: 'translateY(-6px) translateZ(0px)' }}>
        <h2 className='text-xl font-bold`'>About</h2> </div>
    </section>
    </main>
  );
}
