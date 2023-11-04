import Image from 'next/image'
import heroImage from '@/public/Hero.png'

const Hero = () => {
  return (
    <div className="bg-background py-10">
        <div className="w-[89%] m-auto grid lg:grid-cols-2 grid-cols-1 items-center max-w-[1400px] gap-20">
            <div>
                <h1 className="text-5xl font-bold text-dark">Welcome To East Idaho Airsoft</h1>
                <p className='mt-5 text-secondary'>East Idaho Airsoft (EIA) is an open airsoft community located in Eastern Idaho that encourages all players to participate in airsoft events near the Rexburg, Idaho Falls, and Pocatello area.</p>
                <div className="flex gap-5 mt-8">
                    <button className="bg-primary py-2 px-5 rounded-xl text-white">What Is Airsoft?</button>
                    <button className="bg-secondary py-2 px-5 rounded-xl text-white">Where Can I Play?</button>
                </div>
            </div>
            <div className='flex lg:justify-end justify-center items-center'>
                <Image src={heroImage} width={400} height={400} alt="hero"></Image>
            </div>
        </div>
    </div>
  )
}

export default Hero