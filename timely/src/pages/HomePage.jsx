import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider';
import Service from '../Components/Service';
import About from '../Components/About';
import Product from '../Components/Product';
import Feature from '../Components/Feature';
import NewArrival from '../Components/NewArrival';
import Banner from '../Components/Banner';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

function HomePage() {
    return (
        <>

            <Navbar />
            <Slider />
            <Service />
            <About />
            <Product />
            <Feature />
            <NewArrival />
            <Banner />
            <Contact />
            <Footer />

        </>
    );
}

export default HomePage;
