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
      gsap.set(ref1.current, { y: 0 })
      gsap.set(sections.map((ref) => ref.current), {
        yPercent: 500,
        ease: 'power2.out',
      })

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
      allSections.forEach((ref) => {
        const el = ref.current
        tl.to(el, { yPercent: 0, duration: 2, ease: 'power2.out' })
          .to({}, { duration: 4 }) // hold
          .to(el, { yPercent: -400, duration: 3, ease: 'power2.in' })
      })

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
        className="relative md:!h-[100vh] !min-h-screen w-full flex items-center justify-center"
        ref={container}
        style={{ minHeight: '100vh' }}
      >
        <div className="flex flex-col items-center justify-center h-full w-full">
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
