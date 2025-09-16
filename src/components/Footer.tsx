import React from 'react';
import { 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Shield, 
  Clock, 
  Users,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Book Appointment', href: '#appointment' },
    { name: 'Video Consultation', href: '#consultation' },
    { name: 'Emergency Care', href: '#emergency' },
    { name: 'Health Records', href: '#services' },
  ];

  const emergencyContacts = [
    { name: 'Medical Emergency', number: '102' },
    { name: 'Ambulance', number: '108' },
    { name: 'TeleCare Support', number: '+91 98765 43210' },
  ];

  const languages = [
    { name: 'English', native: 'English' },
    { name: 'Hindi', native: 'हिंदी' },
    { name: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Youtube, href: '#', name: 'YouTube' },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Mission */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-secondary">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">TeleCare</h3>
                  <p className="text-sm text-muted-foreground">Rural Healthcare</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Bridging the healthcare gap in rural India with accessible, 
                multilingual telemedicine services. Quality healthcare for everyone, everywhere.
              </p>
              
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="h-4 w-4 text-success" />
                <span className="text-success font-medium">Certified & Secure</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">Quick Access</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Available 24/7</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                  <Users className="h-4 w-4" />
                  <span>10,000+ Patients Served</span>
                </div>
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">Emergency Contacts</h4>
              <div className="space-y-3">
                {emergencyContacts.map((contact) => (
                  <div key={contact.name} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{contact.name}</span>
                    <a
                      href={`tel:${contact.number}`}
                      className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      {contact.number}
                    </a>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-emergency/10 to-warning/10 border border-emergency/20 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="h-4 w-4 text-emergency" />
                  <span className="text-sm font-semibold text-foreground">Emergency SOS</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Press and hold the emergency button for instant help with automatic location sharing.
                </p>
              </div>
            </div>

            {/* Languages & Support */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">Language Support</h4>
              <div className="space-y-2">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{lang.name}</span>
                    <span className="text-foreground font-medium">{lang.native}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>support@telecare.in</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Serving 173+ Villages in Punjab</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Globe className="h-4 w-4" />
                  <span>Works on 2G Networks</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-3 pt-2">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={social.name}
                    >
                      <IconComponent className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>&copy; 2024 TeleCare. All rights reserved.</span>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Healthcare Guidelines</a>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                <span className="text-muted-foreground">System Status: </span>
                <span className="text-success font-medium">All Services Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Notice */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="h-3 w-3" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-3 w-3" />
                <span>WHO Guidelines</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-3 w-3" />
                <span>Digital India Initiative</span>
              </div>
            </div>
            
            <div className="text-xs text-muted-foreground">
              <span>Supporting SDG 3: Good Health and Well-being</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;