import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ClientsCard from '../Components/ClientsCard/ClientsCard'
import Hero from "../Components/HeroSection/Hero";
import image from '../assets/shape.svg'
export default function AboutUs() {
  return (
    <>
<Header/>
<Hero title={'Clients'} img={image}/>
<ClientsCard/>
<Footer/>
    </>
  )
}
