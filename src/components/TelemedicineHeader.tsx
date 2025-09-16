import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  Phone, 
  Menu, 
  X, 
  Heart, 
  AlertCircle 
} from 'lucide-react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' }
];

const TelemedicineHeader: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home', icon: Heart },
    { name: 'Book Appointment', href: '#appointment', icon: Phone },
    { name: 'Emergency', href: '#emergency', icon: AlertCircle },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-secondary">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">TeleCare</h1>
              <p className="text-sm text-muted-foreground">Rural Healthcare</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="font-medium">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Language Selector & Emergency Button */}
          <div className="flex items-center space-x-3">
            {/* Language Dropdown */}
            <div className="relative hidden sm:block">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 min-w-[120px]"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm">{currentLanguage.nativeName}</span>
              </Button>

              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        setCurrentLanguage(language);
                        setIsLanguageOpen(false);
                      }}
                      className="w-full px-4 py-3 text-left hover:bg-accent hover:text-accent-foreground transition-colors flex justify-between items-center"
                    >
                      <span>{language.nativeName}</span>
                      <span className="text-sm text-muted-foreground">{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Emergency Button - Always Visible */}
            <Button
              className="bg-emergency hover:bg-emergency/90 text-emergency-foreground font-semibold animate-pulse"
              onClick={() => document.getElementById('emergency')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <AlertCircle className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Emergency</span>
              <span className="sm:hidden">SOS</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-md">
            <div className="py-4 space-y-2">
              {navigation.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="font-medium">{item.name}</span>
                  </a>
                );
              })}
              
              {/* Mobile Language Selector */}
              <div className="px-4 pt-4 border-t border-border">
                <p className="text-sm font-medium text-muted-foreground mb-2">Language / भाषा / ਭਾਸ਼ਾ</p>
                <div className="space-y-1">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        setCurrentLanguage(language);
                        setIsMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        currentLanguage.code === language.code
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-accent hover:text-accent-foreground'
                      }`}
                    >
                      <span className="font-medium">{language.nativeName}</span>
                      <span className="text-sm opacity-75 ml-2">({language.name})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default TelemedicineHeader;