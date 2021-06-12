import '../../styles/global-styles.css';
import {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Wallpaper from '../../components/Wallpaper';
import SectionTwo from '../../components/SectionTwo';
import SectionThree from '../../components/SectionThree';
import SectionFour from '../../components/SectionFour';
import SectionFive from '../../components/SectionFive';
import SectionSix from '../../components/SectionSix';

class Home extends Component{
    render(){

        return(      
            
            <>
            <Header />
            <Wallpaper />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <Footer/>
            </>            
        )
    }
}


export default Home;