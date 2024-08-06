import HeroSection from './components/HeroSection'
import Footer from './components/Footer';
import Header from './components/Header';
import AdmissionAndInfo from './components/AdmissionsAndInfo';
import AboutUsSection from './components/AboutUsSection';
import ProgrammesSection from './components/ProgrammesSection';
import HowToApplySection from './components/HowToApplySection';
import TestimonialsSection from './components/TestimonialsSection';
import AcademicCalenderSection from './components/AcademicCalendarSection';
import EventsSection from './components/EventsSection';
import NewsSection from './components/NewsSection';



function App() {
  return (
    <div>
    
        <Header/>
        <HeroSection/>
        <AdmissionAndInfo/>
        <AboutUsSection/>
        <ProgrammesSection/>
        <HowToApplySection/>
        <TestimonialsSection/>
        <AcademicCalenderSection/>
        <EventsSection/>
        <NewsSection/>
       

        <Footer/>
        
    </div>
  );
}

export default App;
