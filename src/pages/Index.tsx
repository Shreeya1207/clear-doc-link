import TelemedicineHeader from '../components/TelemedicineHeader';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AppointmentSection from '../components/AppointmentSection';
import ConsultationSection from '../components/ConsultationSection';
import EmergencySection from '../components/EmergencySection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TelemedicineHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <AppointmentSection />
        <ConsultationSection />
        <EmergencySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
