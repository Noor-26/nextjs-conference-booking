import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Navber from './components/Navber'
import BookRoom from './components/BookRoom'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
 <div className=''>
  <Navber/>
  <BookRoom/>
 </div>
  )
}
