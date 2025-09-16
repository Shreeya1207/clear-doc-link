import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  AlertTriangle, 
  Phone, 
  MapPin, 
  Clock, 
  Ambulance, 
  Heart, 
  Zap,
  Users,
  Shield
} from 'lucide-react';

const EmergencySection: React.FC = () => {
  const [emergencyActive, setEmergencyActive] = useState(false);
  const [locationShared, setLocationShared] = useState(false);

  const emergencyContacts = [
    { name: 'Ambulance', number: '108', icon: Ambulance, color: 'emergency' },
    { name: 'Fire Services', number: '101', icon: Zap, color: 'warning' },
    { name: 'Police', number: '100', icon: Shield, color: 'primary' },
    { name: 'Medical Emergency', number: '102', icon: Heart, color: 'success' },
  ];

  const nearbyHospitals = [
    { name: 'Nabha Civil Hospital', distance: '2.3 km', available: true },
    { name: 'Regional Medical Center', distance: '5.1 km', available: true },
    { name: 'Emergency Care Unit', distance: '1.8 km', available: false },
  ];

  const handleEmergencyCall = () => {
    setEmergencyActive(true);
    
    // Simulate location sharing
    navigator.geolocation?.getCurrentPosition(
      (position) => {
        setLocationShared(true);
        console.log('Location shared:', position.coords);
      },
      (error) => {
        console.log('Location error:', error);
      }
    );

    // Reset after 10 seconds for demo
    setTimeout(() => {
      setEmergencyActive(false);
      setLocationShared(false);
    }, 10000);
  };

  if (emergencyActive) {
    return (
      <section id="emergency" className="py-16 lg:py-24 bg-gradient-to-br from-emergency/5 to-warning/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-emergency/10 to-warning/10 border-emergency/20">
            <CardContent className="py-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emergency animate-pulse">
                  <AlertTriangle className="h-10 w-10 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Emergency Activated
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center space-x-2 text-success">
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold">Calling Emergency Services...</span>
                </div>
                
                {locationShared && (
                  <div className="flex items-center justify-center space-x-2 text-success">
                    <MapPin className="h-5 w-5" />
                    <span className="font-semibold">Location Shared Successfully</span>
                  </div>
                )}
              </div>

              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 space-y-3">
                <p className="font-semibold text-foreground">Emergency Response Team Notified</p>
                <p className="text-sm text-muted-foreground">
                  Help is on the way. Stay calm and follow the instructions you receive.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p><strong>Response ID:</strong> EMG-{Math.random().toString(36).substr(2, 6).toUpperCase()}</p>
                  <p><strong>Estimated Arrival:</strong> 8-12 minutes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="emergency" className="py-16 lg:py-24 bg-gradient-to-br from-emergency/5 to-warning/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emergency/10 text-emergency font-medium text-sm mb-6 animate-pulse">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Emergency Services
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Emergency
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emergency to-warning">
              Help Available 24/7
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            One-tap emergency assistance with automatic location sharing. 
            Get help immediately when every second counts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Emergency SOS Button */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-emergency/10 to-warning/10 border-emergency/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold text-foreground">
                  Emergency SOS
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="flex justify-center">
                  <Button
                    onClick={handleEmergencyCall}
                    className="btn-emergency text-2xl font-bold px-16 py-8 rounded-full shadow-2xl transform hover:scale-105 active:scale-95"
                  >
                    <AlertTriangle className="h-8 w-8 mr-3" />
                    EMERGENCY
                  </Button>
                </div>
                
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>Instant response • 24/7 availability</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Automatic location sharing</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>Direct connection to emergency services</span>
                  </div>
                </div>

                <div className="bg-card/50 border border-border rounded-lg p-4">
                  <p className="text-sm text-foreground font-semibold mb-2">
                    Press and hold for 3 seconds to activate
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Your location will be automatically shared with emergency responders. 
                    SMS alerts will be sent to your emergency contacts.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contacts */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Emergency Contacts</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {emergencyContacts.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        className="h-auto p-4 flex flex-col items-center space-y-2 hover:border-primary"
                        onClick={() => window.open(`tel:${contact.number}`)}
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div className="text-center">
                          <p className="font-semibold text-sm">{contact.name}</p>
                          <p className="text-lg font-bold text-primary">{contact.number}</p>
                        </div>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Nearby Hospitals */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <span>Nearby Hospitals</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {nearbyHospitals.map((hospital, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-muted/30 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`h-3 w-3 rounded-full ${
                          hospital.available ? 'bg-success' : 'bg-destructive'
                        }`} />
                        <div>
                          <p className="font-semibold text-foreground">{hospital.name}</p>
                          <p className="text-sm text-muted-foreground">{hospital.distance} away</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-sm font-semibold ${
                          hospital.available ? 'text-success' : 'text-destructive'
                        }`}>
                          {hospital.available ? 'Available' : 'Full'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-4" variant="outline">
                  <MapPin className="h-4 w-4 mr-2" />
                  View All Hospitals
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Instructions */}
            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Emergency Guidelines</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                        1
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Stay Calm</p>
                        <p className="text-sm text-muted-foreground">Take deep breaths and assess the situation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-xs font-bold">
                        2
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Call for Help</p>
                        <p className="text-sm text-muted-foreground">Use the emergency button or call directly</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success text-success-foreground text-xs font-bold">
                        3
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Share Location</p>
                        <p className="text-sm text-muted-foreground">Allow location access for faster response</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-warning text-warning-foreground text-xs font-bold">
                        4
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Follow Instructions</p>
                        <p className="text-sm text-muted-foreground">Listen to emergency operator guidance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;