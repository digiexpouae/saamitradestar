import { useEffect, useRef } from 'react'
import Section2 from '../../common/service2'
import Section3 from '../../common/service3'
import Section from './section4'
import Section5 from './section5'
import Service1 from './section6'
import Service2 from './section7'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

const Scroll = () => {
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const ref5 = useRef()
  const ref6 = useRef()
  const container = useRef()
  const wrapper=useRef()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.normalizeScroll(true)

    if (!container.current) return

    // ✅ Set consistent layout before ScrollTrigger measures anything
    gsap.set(container.current, {
      minHeight: window.innerHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    })

    // ✅ Refresh after all assets (especially images) have loaded
    const refreshOnLoad = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener('load', refreshOnLoad)

    // Small delay for dynamic layout shifts (Next.js, image loading, etc.)
    setTimeout(() => ScrollTrigger.refresh(), 600)

    const mm = ScrollTrigger.matchMedia()

    mm.add('(min-width: 768px)', () => {
      const sections = [ref2, ref3, ref4, ref5, ref6]
      const allSections = [ref1, ref2, ref3, ref4, ref5, ref6]

      // ✅ Set initial positions
      // gsap.set(ref1.current, { y: 0 })
      // gsap.set(sections.map((ref) => ref.current), {
      //   yPercent: 500,
      //   ease: 'power2.out',
      // })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          scrub: true,
          pinSpacing: true,
          start: 'top top',
          end: '+=' + window.innerHeight * allSections.length * 1.2, // dynamic scroll distance
          anticipatePin: 1,
          // markers: true,
          onRefreshInit: () => {
            // ✅ Re-center when ScrollTrigger recalculates
            gsap.set(container.current, {
              alignItems: 'center',
              justifyContent: 'center',
            })
          },
        },
      })

      // ✅ Animate each section
      allSections.forEach((ref, i) => {
        const el = ref.current;
        const isFirst = i === 0;
      const lastref = i===5
        if (!isFirst) gsap.set(el, { opacity:0 })
          // gsap.set(el,{opacity:0})




      // if(isFirst){
      //   tl.to(el, { opacity: 1,  duration: 2, ease: 'power2.in' }, "+=0");

      // }
      // else{
        tl.to(el, { opacity: 1, duration: 6, ease: 'power2.out' },) 
       
       if(!lastref){ tl.to(el,{opacity:0,duration:10,ease:'power2.out'})}
        // enter slightly later
          tl.to({}, { duration: 3 }) // hold
          if(!lastref){

         
          tl.to(el, { opacity: 0, duration: 2, ease: 'power2.in' }, "+=0");}
      });
      

      return () => {
        tl.kill()
        ScrollTrigger.getAll().forEach((t) => t.kill())
      }
    })

    // Cleanup
    return () => {
      window.removeEventListener('load', refreshOnLoad)
      mm.revert()
    }
  }, [])

  return (
    <div className="relative w-full py-20 md:px-10 overflow-hidden">
      <div
        className="relative md:!h-[100vh]  max-w-5xl mx-auto !min-h-screen w-full flex md:gap-[30px]  items-center md:justify-between justify-center"
        ref={container}
        style={{ minHeight: '100vh' }}
      >
<div className='hidden md:block space-y-4 md:w-1/3'>
<h2 className='text-6xl font-semibold '>Our<br /><span className='text-[#ED3039]'> Services</span>  </h2>
<p className='text-gray-500 text-base'>Find The Right Service For You</p>
<div className='flex lg:flex-row flex-col gap-4 lg:gap-2'>
 <button className=" cursor-pointer hover:bg-red-600 px-4 lg:px-6 bg-[#ED3039] py-2 rounded-full  text-white">
 Get in Touch
  </button>
 <button className="cursor-pointer hover:bg-red-100  px-4 lg:px-6 py-2 rounded-full  bg-white text-black border-1 border-[#ED3039]" >
   View All Services
  </button>
</div>
</div>
        <div className="flex flex-col w-full md:w-[60%] relative items-center justify-center h-full ">
          <Section2
            btn={true}
            ref={ref1}
            heading={'Freight Forwarding'}
            className={'md:absolute inset-0'}
            text={`For over 20 years, we've delivered on our service commitments.`}
            img={'/assets/services/service-1.png'}
          />
          <Section3
            btn={true}
            ref={ref2}
            heading={<>Warehousing & Distribution</>}
            className={'md:absolute inset-0'}
            text={`One of the most important elements of supply chain management is warehousing.`}
            img={'/assets/services/s-2.png'}
          />
          <Section
            btn={true}
            ref={ref3}
            heading={'Transportation Services'}
            text={`With advancements in technology and the global trading, we now have faster `}
            className={'md:absolute inset-0'}
            img={'/assets/services/s-3.png'}
          />
          <Section5
            btn={true}
            ref={ref4}
            heading={'Sparepart Logistics'}
            className={'md:absolute inset-0'}
            text={`Without the speedy installation of spare parts and timely maintenance on the ground.`}
            img={'/assets/services/s-4.png'}
          />
          <Service1
            btn={true}
            ref={ref5}
            heading={'Custom Clearance'}
            className={'md:absolute inset-0'}
            text={`The major activities of the Organization cover various disciplines of material handling.`}
            img={'/assets/services/s-5.png'}
          />
          <Service2
            btn={true}
            ref={ref6}
            heading={'IT Support'}
            className={'md:absolute inset-0'}
            text={`We have invested in world-class technology to manage your supply chain.`}
            img={'/assets/services/s-6.png'}
          />
        </div>
      </div>
    </div>
  )
}

export default Scroll
