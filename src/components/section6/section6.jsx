import Image from 'next/image'
const section6=({className})=>{
    return (
        <div className={`h-[100vh] relative w-full flex gap-10 items-center flex-col justify-center ${className}`} >
        <h2 className='text-5xl font-semibold text-center'>Clients We Worked With</h2>
        <div>
        <Image src="/assets/section6/1.png" alt="logo" width={900} height={400} className="object-cover"/>
        </div>
        </div>
    )
}
export default section6
