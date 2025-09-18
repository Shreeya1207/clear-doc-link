import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, Mic, Send, AlertTriangle, Stethoscope } from 'lucide-react';

const AISymptomChecker: React.FC = () => {
  const [symptoms, setSymptoms] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [isListening, setIsListening] = useState(false);

  const analyzeSymptoms = async () => {
    if (!symptoms.trim()) return;
    
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setResults({
        possibleConditions: [
          { name: 'Common Cold', probability: 'High', description: 'Viral infection affecting nose and throat' },
          { name: 'Seasonal Allergy', probability: 'Medium', description: 'Allergic reaction to environmental triggers' },
          { name: 'Flu', probability: 'Low', description: 'Influenza viral infection' }
        ],
        recommendations: [
          'Rest and stay hydrated',
          'Monitor temperature regularly',
          'Consult doctor if symptoms worsen'
        ],
        urgency: 'low'
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const startVoiceInput = () => {
    setIsListening(true);
    // Simulate voice input
    setTimeout(() => {
      setSymptoms('I have a headache and runny nose for the past 2 days');
      setIsListening(false);
    }, 3000);
  };

  const resetChecker = () => {
    setSymptoms('');
    setResults(null);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          size="lg"
          className="bg-symptom-checker hover:bg-symptom-checker/90 text-symptom-checker-foreground text-lg px-8 py-4 min-w-[200px] font-bold"
        >
          <Bot className="h-5 w-5 mr-2" />
          Check Symptoms 🤖
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-heading-navy text-xl">
            <Bot className="h-6 w-6 mr-2 text-symptom-checker" />
            AI Symptom Checker
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 p-4">
          {/* Disclaimer */}
          <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-foreground">Important Disclaimer</p>
                <p className="text-foreground/80">
                  This is for informational purposes only. Always consult a qualified healthcare professional for proper diagnosis and treatment.
                </p>
              </div>
            </div>
          </div>

          {/* Symptom Input */}
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-heading-navy">
              Describe your symptoms:
            </label>
            <div className="space-y-3">
              <Textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="e.g., I have a headache and fever for 2 days..."
                className="min-h-[100px] text-foreground"
                disabled={isAnalyzing}
              />
              <div className="flex gap-3">
                <Button
                  onClick={startVoiceInput}
                  variant="outline"
                  disabled={isListening || isAnalyzing}
                  className="flex-1"
                >
                  <Mic className={`h-4 w-4 mr-2 ${isListening ? 'animate-pulse text-emergency' : ''}`} />
                  {isListening ? 'Listening...' : 'Voice Input'}
                </Button>
                <Button
                  onClick={analyzeSymptoms}
                  disabled={!symptoms.trim() || isAnalyzing}
                  className="flex-1 bg-symptom-checker hover:bg-symptom-checker/90"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isAnalyzing ? 'Analyzing...' : 'Analyze'}
                </Button>
              </div>
            </div>
          </div>

          {/* Results */}
          {results && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-heading-navy">Analysis Results</h3>
                <Button variant="outline" size="sm" onClick={resetChecker}>
                  New Check
                </Button>
              </div>
              
              {/* Possible Conditions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base text-heading-green">Possible Conditions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {results.possibleConditions.map((condition: any, index: number) => (
                    <div key={index} className="flex items-start justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Stethoscope className="h-4 w-4 text-primary" />
                          <span className="font-medium text-foreground">{condition.name}</span>
                          <Badge 
                            variant={condition.probability === 'High' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {condition.probability}
                          </Badge>
                        </div>
                        <p className="text-sm text-foreground/70">{condition.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base text-heading-green">Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {results.recommendations.map((rec: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-foreground text-sm">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <p className="text-sm font-semibold text-heading-navy mb-2">Next Steps:</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button 
                    className="flex-1"
                    onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Book Appointment
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Video Consultation
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AISymptomChecker;