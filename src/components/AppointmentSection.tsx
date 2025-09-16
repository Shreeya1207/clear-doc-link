import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  MapPin, 
  Stethoscope,
  Heart,
  Brain,
  Eye,
  Baby,
  Pill,
  CheckCircle
} from 'lucide-react';

const AppointmentSection: React.FC = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    phoneNumber: '',
    preferredDate: '',
    preferredTime: '',
    specialty: '',
    symptoms: '',
    familyMember: 'self'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const specialties = [
    { id: 'general', name: 'General Medicine', icon: Stethoscope, available: 'Available Now' },
    { id: 'cardiology', name: 'Cardiology', icon: Heart, available: 'Next: 2 hours' },
    { id: 'neurology', name: 'Neurology', icon: Brain, available: 'Next: 4 hours' },
    { id: 'ophthalmology', name: 'Eye Care', icon: Eye, available: 'Available Now' },
    { id: 'pediatrics', name: 'Child Care', icon: Baby, available: 'Next: 1 hour' },
    { id: 'pharmacy', name: 'Medicine Consultation', icon: Pill, available: 'Available Now' },
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
    '06:00 PM', '07:00 PM'
  ];

  const familyMembers = [
    { id: 'self', name: 'Myself', relation: 'Self' },
    { id: 'spouse', name: 'Spouse', relation: 'Husband/Wife' },
    { id: 'child', name: 'Child', relation: 'Son/Daughter' },
    { id: 'parent', name: 'Parent', relation: 'Mother/Father' },
    { id: 'other', name: 'Other Family Member', relation: 'Other' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Appointment booked:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        patientName: '',
        phoneNumber: '',
        preferredDate: '',
        preferredTime: '',
        specialty: '',
        symptoms: '',
        familyMember: 'self'
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="appointment" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto text-center bg-gradient-to-br from-success/5 to-secondary/5 border-success/20">
            <CardContent className="py-12">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
                  <CheckCircle className="h-8 w-8 text-success" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Appointment Booked Successfully!
              </h3>
              <p className="text-muted-foreground mb-6">
                Your appointment has been scheduled. You will receive an SMS confirmation shortly 
                with your appointment details and video call link.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Booking ID:</strong> TC-{Math.random().toString(36).substr(2, 8).toUpperCase()}</p>
                <p><strong>SMS will be sent to:</strong> {formData.phoneNumber}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <Calendar className="h-4 w-4 mr-2" />
            Book Appointment
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Schedule Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Consultation
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Book an appointment with qualified doctors. Available in multiple languages 
            with SMS confirmations for easy access.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Specialty Selection */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">Select Specialty</h3>
            <div className="space-y-3">
              {specialties.map((specialty) => {
                const IconComponent = specialty.icon;
                return (
                  <Card 
                    key={specialty.id}
                    className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                      formData.specialty === specialty.id 
                        ? 'ring-2 ring-primary border-primary bg-primary/5' 
                        : 'hover:border-primary/50'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, specialty: specialty.id }))}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                          formData.specialty === specialty.id 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-primary/10 text-primary'
                        }`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{specialty.name}</h4>
                          <p className="text-sm text-muted-foreground">{specialty.available}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Appointment Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl">
                  <User className="h-5 w-5 text-primary" />
                  <span>Patient Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Family Member Selection */}
                  <div className="space-y-3">
                    <Label className="text-base font-medium">Appointment for:</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {familyMembers.map((member) => (
                        <Card
                          key={member.id}
                          className={`cursor-pointer transition-all duration-200 ${
                            formData.familyMember === member.id
                              ? 'ring-2 ring-secondary border-secondary bg-secondary/5'
                              : 'hover:border-secondary/50'
                          }`}
                          onClick={() => setFormData(prev => ({ ...prev, familyMember: member.id }))}
                        >
                          <CardContent className="p-3">
                            <div className="text-center">
                              <p className="font-medium text-foreground">{member.name}</p>
                              <p className="text-sm text-muted-foreground">{member.relation}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Patient Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="patientName">Patient Name</Label>
                      <Input
                        id="patientName"
                        name="patientName"
                        value={formData.patientName}
                        onChange={handleInputChange}
                        placeholder="Enter patient name"
                        required
                        className="text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber">Phone Number</Label>
                      <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="+91 98xxx xxxxx"
                        required
                        className="text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferred Date</Label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred Time</Label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Symptoms */}
                  <div className="space-y-2">
                    <Label htmlFor="symptoms">Describe Symptoms (Optional)</Label>
                    <textarea
                      id="symptoms"
                      name="symptoms"
                      value={formData.symptoms}
                      onChange={handleInputChange}
                      placeholder="Briefly describe the health concern or symptoms..."
                      rows={3}
                      className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none text-base"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full btn-medical text-lg py-6"
                    disabled={!formData.specialty || !formData.patientName || !formData.phoneNumber}
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Appointment
                  </Button>

                  <div className="text-center text-sm text-muted-foreground">
                    <p>You will receive SMS confirmation with appointment details</p>
                    <p>No registration required • Available in Hindi, English & Punjabi</p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;