import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  Phone, 
  PhoneOff, 
  Monitor, 
  Users,
  Clock,
  Signal,
  Wifi,
  WifiOff,
  Camera,
  FileText
} from 'lucide-react';
import communityHealthcare from '@/assets/community-healthcare.jpg';

const ConsultationSection: React.FC = () => {
  const [isVideoCall, setIsVideoCall] = useState(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [connectionQuality, setConnectionQuality] = useState<'good' | 'medium' | 'poor'>('good');

  const activeDoctors = [
    { name: 'Dr. Rajesh Kumar', specialty: 'General Medicine', status: 'Available Now', experience: '15+ years' },
    { name: 'Dr. Priya Sharma', specialty: 'Pediatrics', status: 'Available Now', experience: '12+ years' },
    { name: 'Dr. Amit Singh', specialty: 'Cardiology', status: 'Available in 15 min', experience: '20+ years' },
    { name: 'Dr. Sunita Patel', specialty: 'Gynecology', status: 'Available Now', experience: '18+ years' },
  ];

  const consultationFeatures = [
    { icon: Video, title: 'HD Video Call', description: 'Clear video consultation with automatic quality adjustment' },
    { icon: Mic, title: 'Audio Fallback', description: 'Seamless switch to audio-only on poor connection' },
    { icon: Monitor, title: 'Screen Share', description: 'Doctor can view and share medical reports' },
    { icon: FileText, title: 'Digital Prescription', description: 'Receive prescriptions via SMS and email' },
  ];

  const startVideoCall = () => {
    setIsVideoCall(true);
    // Simulate connection quality changes
    setTimeout(() => setConnectionQuality('medium'), 3000);
    setTimeout(() => setConnectionQuality('poor'), 6000);
  };

  const endVideoCall = () => {
    setIsVideoCall(false);
    setConnectionQuality('good');
    setIsVideoEnabled(true);
    setIsAudioEnabled(true);
  };

  if (isVideoCall) {
    return (
      <section id="consultation" className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto bg-black/90 border-0 shadow-2xl">
            <CardContent className="p-0">
              {/* Video Call Interface */}
              <div className="relative bg-black rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
                {/* Doctor's Video */}
                <div className="absolute inset-0">
                  <img
                    src={communityHealthcare}
                    alt="Doctor in video consultation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-white font-semibold">Dr. Rajesh Kumar</p>
                    <p className="text-white/80 text-sm">General Medicine</p>
                  </div>
                </div>

                {/* Patient's Video (Picture-in-Picture) */}
                <div className="absolute top-4 right-4 w-32 h-24 bg-gray-800 rounded-lg border-2 border-white/20 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    {isVideoEnabled ? (
                      <Camera className="h-8 w-8 text-white/60" />
                    ) : (
                      <VideoOff className="h-8 w-8 text-white/60" />
                    )}
                  </div>
                </div>

                {/* Connection Quality Indicator */}
                <div className="absolute top-4 left-4">
                  <div className={`flex items-center space-x-2 px-3 py-2 rounded-full ${
                    connectionQuality === 'good' ? 'bg-success/80' :
                    connectionQuality === 'medium' ? 'bg-warning/80' : 'bg-destructive/80'
                  } backdrop-blur-sm`}>
                    {connectionQuality === 'poor' ? (
                      <WifiOff className="h-4 w-4 text-white" />
                    ) : (
                      <Wifi className="h-4 w-4 text-white" />
                    )}
                    <span className="text-white text-sm font-medium capitalize">
                      {connectionQuality} Connection
                    </span>
                  </div>
                </div>

                {/* Call Duration */}
                <div className="absolute top-4 right-40">
                  <div className="flex items-center space-x-2 bg-black/70 backdrop-blur-sm rounded-full px-3 py-2">
                    <Clock className="h-4 w-4 text-white" />
                    <span className="text-white text-sm font-medium">05:23</span>
                  </div>
                </div>

                {/* Call Controls */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center space-x-4 bg-black/80 backdrop-blur-sm rounded-full px-6 py-3">
                    <Button
                      size="sm"
                      variant={isAudioEnabled ? "secondary" : "destructive"}
                      className="rounded-full h-12 w-12"
                      onClick={() => setIsAudioEnabled(!isAudioEnabled)}
                    >
                      {isAudioEnabled ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
                    </Button>

                    <Button
                      size="sm"
                      variant={isVideoEnabled ? "secondary" : "destructive"}
                      className="rounded-full h-12 w-12"
                      onClick={() => setIsVideoEnabled(!isVideoEnabled)}
                    >
                      {isVideoEnabled ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
                    </Button>

                    <Button
                      size="sm"
                      className="bg-destructive hover:bg-destructive/90 rounded-full h-12 w-12"
                      onClick={endVideoCall}
                    >
                      <PhoneOff className="h-5 w-5" />
                    </Button>

                    <Button
                      size="sm"
                      variant="secondary"
                      className="rounded-full h-12 w-12"
                    >
                      <Monitor className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Poor Connection Alert */}
                {connectionQuality === 'poor' && (
                  <div className="absolute inset-x-4 bottom-24">
                    <div className="bg-warning/90 backdrop-blur-sm border border-warning rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <Signal className="h-5 w-5 text-warning-foreground" />
                        <div>
                          <p className="font-semibold text-warning-foreground">Poor Connection Detected</p>
                          <p className="text-sm text-warning-foreground/90">
                            Switching to audio-only mode for better quality
                          </p>
                        </div>
                        <Button size="sm" variant="outline" className="ml-auto">
                          Switch Now
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Chat/Notes Panel */}
          <Card className="max-w-4xl mx-auto mt-6 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Consultation Notes</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">• Patient reports mild fever and cough</p>
                    <p className="text-muted-foreground">• Symptoms started 2 days ago</p>
                    <p className="text-muted-foreground">• No difficulty breathing</p>
                    <p className="text-muted-foreground">• Temperature: 99.2°F</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Prescription</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">• Paracetamol 500mg - Twice daily</p>
                    <p className="text-muted-foreground">• Cough syrup - As needed</p>
                    <p className="text-muted-foreground">• Rest and plenty of fluids</p>
                    <p className="text-success font-medium">✓ Will be sent via SMS</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="consultation" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-6">
            <Video className="h-4 w-4 mr-2" />
            Video Consultation
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Connect With
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Qualified Doctors
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            High-quality video consultations optimized for rural internet. 
            Automatic fallback to audio ensures you're always connected.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Available Doctors */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Available Doctors</h3>
            
            <div className="space-y-4">
              {activeDoctors.map((doctor, index) => (
                <Card key={index} className="card-hover shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{doctor.name}</h4>
                          <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                          <p className="text-xs text-muted-foreground">{doctor.experience}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          doctor.status.includes('Now') 
                            ? 'bg-success/10 text-success' 
                            : 'bg-warning/10 text-warning'
                        }`}>
                          <div className={`h-2 w-2 rounded-full mr-2 ${
                            doctor.status.includes('Now') ? 'bg-success' : 'bg-warning'
                          }`} />
                          {doctor.status}
                        </div>
                        <Button
                          size="sm"
                          className="mt-2"
                          onClick={startVideoCall}
                          disabled={!doctor.status.includes('Now')}
                        >
                          <Video className="h-4 w-4 mr-2" />
                          Consult
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-foreground mb-2">Need a Specialist?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with specialists from major cities for complex conditions
                </p>
                <Button variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  Request Specialist
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Consultation Features */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Consultation Features</h3>
            
            <div className="space-y-4">
              {consultationFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                          <IconComponent className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Demo Video Call */}
            <Card className="bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">Try Demo Consultation</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="relative">
                  <img
                    src={communityHealthcare}
                    alt="Demo video consultation interface"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
                    <Button
                      className="btn-medical"
                      onClick={startVideoCall}
                    >
                      <Video className="h-5 w-5 mr-2" />
                      Start Demo Call
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Works on 2G/3G networks</p>
                  <p>• Automatic quality adjustment</p>
                  <p>• Multi-language support</p>
                  <p>• No app download required</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;