import logo from '../public/tennoheadlines.png'
import Image from 'next/image';

import VoidTrader from './ui/VoidTrader';
import VoidFissures from './ui/VoidFissures';
import Bounties from './ui/Bounties';
import Alerts from './ui/Alerts';
import Cycles from './ui/Cycles';


export default function Home() {
  return (
    <div className="bg-mainBackground grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen  gap-16  font-[family-name:var(--font-geist-sans)] ">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center w-full">
      
        <Image
          className="dark:invert"
          src={logo}
          alt="website logo"
          width={100}
          height={38}
          priority
        />
        <h1 className='text-[#C4B36E]  font-bold text-xl '>
          Tenno Headlines
        </h1>

        <div className='flex items-center justify-center flex-row w-full gap-16 flex-wrap'>

          <div className='flex items-center flex-col sm: flex-row border-solid border-4 border-[#404040] xl:w-80 h-48 rounded-3xl w-full'>
            <h1 className='text-white font-bold text-2xl p-3'>World Cycles</h1>
            <Cycles/>
          </div>

          <div className='flex items-center flex-col sm: flex-row border-solid border-4 border-[#404040] xl:w-1/3 h-48 rounded-3xl w-full'>
            <h1 className='text-white font-bold text-2xl p-3'>Special Events</h1>

            <h2 className='text-white font-bold text-xl p-3 '>
                Warframe's 12th Anniversary Is Ongoing!
            </h2>

          </div>

          <div className='flex items-center flex-col sm: flex-row border-solid border-4 border-[#404040] xl:w-80 h-48 rounded-3xl w-full'>
            <h1 className='text-white font-bold text-2xl p-3'>Void Trader</h1>
            <VoidTrader />
          </div>
        </div>
        
        <div className='flex  justify-center flex-row w-full gap-16 flex-wrap sm:h-[1000px] '>

          <div className='flex items-center flex-col sm: flex-row border-solid border-4 border-[#404040] sm:w-80 sm:h-[450px] h-80 rounded-3xl w-full'>
            <h1 className='text-white font-bold text-2xl p-3'>Void Fissures</h1>
            <VoidFissures />
          </div>

          <div className='flex items-center flex-col sm: flex-row border-solid border-4 border-[#404040] sm:w-1/3 sm:h-[450px] h-80 rounded-3xl w-full'>
            <h1 className='text-white font-bold text-2xl p-3'>Bounties</h1>
            <Bounties/>
          </div>

          <div className='flex items-center flex-col sm: flex-row border-solid border-4 border-[#404040] sm:w-80 sm:h-[450px] h-80 rounded-3xl w-full'>
            <h1 className='text-white font-bold text-2xl p-3'>Alerts</h1>
            <Alerts />
          </div>

        </div>


      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center h-[100px] bg-mainBackground w-full">
      
          <a 
            href='https://pwang-portfolio.vercel.app/'
          >
            <h1 className='text-white text-xl'>
            My Portfolio
            </h1>
            
          </a>

          <a 
            href='https://github.com/Plukewang'
          >
            <h1 className='text-white text-xl'>
            GitHub
            </h1>
            
          </a>

      </footer>
    </div>
  );
}
