import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Calendar, 
  AlertCircle, 
  Heart, 
  Users, 
  MapPin 
} from 'lucide-react';
import heroImage from '@/assets/telemedicine-hero.jpg';
import AISymptomChecker from './AISymptomChecker';

const HeroSection: React.FC = () => {
  const stats = [
    { label: 'Patients Served', value: '10,000+', icon: Users },
    { label: 'Villages Connected', value: '173+', icon: MapPin },
    { label: 'Available 24/7', value: 'Always', icon: Heart },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm">
                <Heart className="h-4 w-4 mr-2" />
                Rural Healthcare Revolution
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-heading-navy leading-tight">
                Healthcare
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  For Everyone
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-foreground max-w-2xl leading-relaxed">
                Connect with qualified doctors from your village. Book appointments, get consultations, 
                and access emergency care - all in your language, even with slow internet.
              </p>
              
              <div className="text-base text-muted-foreground font-medium">
                <span>Available in:</span>
                <span className="ml-2 text-foreground">English • हिंदी • ਪੰਜਾਬੀ</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col xl:flex-row gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white font-bold text-lg px-8 py-4 min-w-[200px]"
                  onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Appointment
                </Button>
                
                <AISymptomChecker />
              </div>
              
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 min-w-[200px] border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Phone className="h-5 w-5 mr-2" />
                Video Call Doctor
              </Button>
            </div>

            {/* Emergency Banner */}
            <div className="bg-gradient-to-r from-emergency/10 to-warning/10 border border-emergency/20 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-6 w-6 text-emergency animate-pulse" />
                </div>
                <div className="flex-1">
                  <p className="text-foreground font-semibold">Medical Emergency?</p>
                  <p className="text-sm text-muted-foreground">Get instant help with one tap. Available 24/7.</p>
                </div>
                <Button
                  className="bg-emergency hover:bg-emergency/90 text-white font-bold animate-pulse"
                  onClick={() => document.getElementById('emergency')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Emergency
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Telemedicine consultation - doctor connecting with rural family through video call"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg glass-effect">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                  <Heart className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">99.9% Uptime</p>
                  <p className="text-sm text-muted-foreground">Always Available</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-lg glass-effect">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">2G Compatible</p>
                  <p className="text-sm text-muted-foreground">Works Everywhere</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;