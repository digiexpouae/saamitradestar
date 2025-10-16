import Image from 'next/image'
const section6=({className})=>{
    return (
        <div className={`my-20 md:my-30 lg:my-20 relative w-full flex gap-10 items-center flex-col justify-center ${className}`} >
        <h2 className='text-3xl  md:text-7xl font-semibold text-center'>Our Clients</h2>
        <div>
        <Image src="/assets/section6/1.png" alt="logo" width={900} height={400} className="object-cover"/>
        </div>
        </div>
    )
}
export default section6
