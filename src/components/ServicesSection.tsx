import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Video, 
  Calendar, 
  Pill, 
  Users, 
  AlertCircle, 
  FileText, 
  Shield, 
  Clock,
  Stethoscope,
  Heart
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Video,
      title: 'Video Consultation',
      description: 'Connect with qualified doctors via video call. Works on 2G networks with audio fallback.',
      features: ['HD Video Quality', '2G Compatible', 'Audio Backup', 'Screen Share'],
      color: 'primary',
    },
    {
      icon: Calendar,
      title: 'Easy Appointment',
      description: 'Book appointments with local and specialist doctors. Simple scheduling in your language.',
      features: ['Multiple Languages', 'Flexible Timing', 'SMS Reminders', 'Family Booking'],
      color: 'secondary',
    },
    {
      icon: Pill,
      title: 'Medicine Tracker',
      description: 'Check medicine availability at local pharmacies. Real-time stock updates.',
      features: ['Live Stock Check', 'Price Comparison', 'Generic Options', 'Delivery Available'],
      color: 'success',
    },
    {
      icon: AlertCircle,
      title: 'Emergency Care',
      description: '24/7 emergency assistance with one-tap SOS. Instant ambulance and location sharing.',
      features: ['One-Tap SOS', 'GPS Location', 'Ambulance Call', '24/7 Available'],
      color: 'emergency',
    },
    {
      icon: FileText,
      title: 'Health Records',
      description: 'Digital health records for your entire family. Access offline, sync when connected.',
      features: ['Offline Access', 'Family Profiles', 'QR Code ID', 'Secure Storage'],
      color: 'primary',
    },
    {
      icon: Users,
      title: 'Community Health',
      description: 'Local health workers assist with consultations and basic health monitoring.',
      features: ['Local Support', 'Vital Monitoring', 'Health Education', 'Kiosk Access'],
      color: 'secondary',
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: 'bg-primary/10 text-primary',
      secondary: 'bg-secondary/10 text-secondary',
      success: 'bg-success/10 text-success',
      emergency: 'bg-emergency/10 text-emergency',
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-primary/10 text-primary';
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <Stethoscope className="h-4 w-4 mr-2" />
            Healthcare Services
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Healthcare
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              At Your Fingertips
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            From routine check-ups to emergency care, we provide comprehensive healthcare services 
            designed specifically for rural communities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="card-hover border-0 shadow-lg bg-card/80 backdrop-blur-sm">
                <CardHeader className="space-y-4">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${getColorClasses(service.color)}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className={`h-1.5 w-1.5 rounded-full ${getColorClasses(service.color).split(' ')[0]}`} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    className="w-full"
                    variant="outline"
                    onClick={() => {
                      if (service.title.includes('Emergency')) {
                        document.getElementById('emergency')?.scrollIntoView({ behavior: 'smooth' });
                      } else if (service.title.includes('Appointment')) {
                        document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Need immediate assistance?</p>
              <p className="text-sm text-muted-foreground">Our support team is available 24/7</p>
            </div>
            <Button className="btn-medical">
              <Clock className="h-4 w-4 mr-2" />
              Get Help Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;