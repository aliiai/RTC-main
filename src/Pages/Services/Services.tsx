import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/HeroSection/Hero";
import PageServicesCard from '../../Components/PageServicesCard/PageServicesCard';
import image from '../../assets/service-2.jpg'
export default function Services() {
  return (
    <>
<Header/>
<Hero title={'Services'} img={image}/>

<PageServicesCard/>



<Footer/>
    </>
  )
}
