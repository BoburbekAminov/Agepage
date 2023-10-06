import Swipers from '../components/Swipers'
import Computers from '../components/Computers'
import Equipment from '../components/Equipment'
import Banner from '../components/Banner'
import Catalog from '../components/Catalog'
import Brands from '../components/Brands'
import News from '../components/News'
import styles from '../styles/Home.module.scss'
// import {data} from '../mockData/homeData'


export default function Home() {
  return (
    <>
    <Swipers/>
    {/* <Computers innerData={data}/> */}
    <Computers/>
    <Equipment/>
    <Banner/>
    <Catalog/>
    <Brands/>
    <News/>
    </>
  )
}