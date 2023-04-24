import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from '../Layer/Main'
import Hero from '../components/Home/Hero/Hero'
import Recent from '../components/Home/Recent/Recent'
import Popular from '../components/Home/Popular/Popular'
import Categories from '../components/Home/Categories/Categories'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 
  return (
    <Main title={'Home'}>
      <div>
        <Hero />
      </div>
      <div className='w-full md:flex gap-2'>
        <div className='md:w-3/12 border'>
          <Popular />
        </div>
        <div className='md:w-6/12'>
        <Recent />
        </div>
        <div className='md:w-3/12 border'>
          <Categories />
        </div>
      </div>
      <div></div>
      <div></div>
    </Main>
    )
}
