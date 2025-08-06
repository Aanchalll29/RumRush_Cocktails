import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

const About = () => {
useGSAP(() =>{
    const titleSplit = SplitText.create('#about h2',{
       type: 'words' 
    })
        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger:  '#about',
                start: 'top center',

            }
        })
        scrollTimeline
        .from(titleSplit.words, {
            opacity: 0, 
            duration: 1,
            yPercent: 100,
            ease: 'expo.out',
            stagger: 0.02
        })
        .from('.top-grid div, .bottom-grid div',{
            opacity: 0,
            duration: 1,
            ease:'power1.inOut',
            stagger: 0.04,
        }, '-=0.5')
})

  return (
    <div id='about'>
      <div className='md-16 md:px-0 px-5'>
        <div className='content'>
            <div className='md:col-span-8'>
                <p className='badge'>
                    Best Cocktails
                </p>
                <h2>
                    Where every details matters <span className='text-white'>-</span>
                    from middle to garnish
                </h2>
            </div>
            <div className='sub-content'>
                <p>
                    Discover the world of curated cocktail and mocktails, from timeless classics to modern blends. Your one-stop destination for recipies, tips and drink inspiration.
                </p>
                    <div>
                        <p className='md:text-3xl text-xl font-bold'>
                                <span>4.5</span>/5
                        </p>
                        <p className='text-sm text-white-100'>
                                More than +15000 customers
                        </p>
                    </div>
            </div>
        </div>
      </div>

      <div className='top-grid'>
        <div className='md:col-span-3'>
            
            <img src="/public/images/abt1.jpg" alt="grid-img-1" />
        </div>

        <div className='md:col-span-6'>
           
            <img src="/public/images/abt2.jpg" alt="grid-img-2" />
        </div>

        <div className='md:col-span-3'>
            
            <img src="/public/images/abt5.jpg" alt="grid-img-5" />
        </div>
      </div>

      <div className='bottom-grid'>
        <div className='md:col-span-8'>
            
            <img src="/public/images/abt3.png" alt="grid-img-3" />
      </div>

      <div className='md:col-span-4'>
           
            <img src="/public/images/abt4.jpg" alt="grid-img-4" />
      </div>
    </div>
    </div>
  )
}

export default About
