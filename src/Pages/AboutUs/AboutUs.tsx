import AboutUsCard from '../../Components/AboutUsCard/AboutUsCard'
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Hero from '../../Components/HeroSection/Hero';
import image from "../../assets/service-1.jpg";

export default function AboutUs() {
  return (
    <div>
      <Header />
<Hero title={'About Us'} img={image}/>
     <AboutUsCard title='Custom Clearance' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjLQb895k1bhZ2qLTDKUa0vXEETcIN3Na_Aw&s' description='Customs clearance is the process of inspecting and approving goods for import or export by customs authorities, ensuring compliance with regulations and payment of duties. ' />
     <AboutUsCard title='In Land Transportation' reverse="flex-row-reverse" img='https://media.istockphoto.com/id/1803572745/photo/night-view-of-tianjin-port.jpg?s=612x612&w=0&k=20&c=M8PmHk4lPRC2cXHn2nsG7RKHLtKd37ER8BKTqYo1Dgs=' description='            Inland transportation refers to the movement of goods or passengers by road, rail, or inland waterways within a country. ' />
     <AboutUsCard title='Sea Cargo' img='https://media.istockphoto.com/id/1454531939/photo/aerial-top-view-containers-ship-cargo-business-commercial-trade-logistic-and-transportation.jpg?s=612x612&w=0&k=20&c=7dc26jnLMMs3elOwGXa-04p8qeMRKBNoCVD3aff7kuE=' description='Sea cargo, also known as ocean freight, refers to the transportation of goods via ships across seas and oceans. ' />
     <AboutUsCard title='Custom Clearance' reverse="flex-row-reverse" img='https://media.istockphoto.com/id/1431499957/photo/container-port-aerial-look.jpg?s=1024x1024&w=is&k=20&c=uBLD2kSY3VjGrYyJPTv2MupLKnCvxiQAXRJ8clGv-h4=' description='Customs clearance is the process of inspecting and approving goods for import or export by customs authorities, ensuring compliance with regulations and payment of duties. ' />

      <Footer />
    </div>
  );
}