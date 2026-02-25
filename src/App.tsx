import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Wrench, 
  Flame, 
  Droplets, 
  Shield, 
  Clock, 
  CheckCircle,
  Star,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

gsap.registerPlugin(ScrollTrigger);

const BUSINESS_INFO = {
  name: "Tooting Emergency & General Plumbing Services",
  phone: "07471 126604",
  whatsapp: "07471 126604",
  address: "38 Selkirk Rd, London SW17 0ES",
  postcode: "SW17 0ES",
  areas: ["Tooting", "Balham", "Streatham", "Wandsworth", "Clapham", "Colliers Wood", "Mitcham", "Wimbledon", "Earlsfield", "Battersea"]
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const helpRef = useRef<HTMLDivElement>(null);
  const reliableRef = useRef<HTMLDivElement>(null);
  const safeHandsRef = useRef<HTMLDivElement>(null);
  const plumbingRef = useRef<HTMLDivElement>(null);
  const boilerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      const heroTl = gsap.timeline();
      heroTl
        .fromTo('.hero-image', 
          { opacity: 0, scale: 1.06 }, 
          { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
        )
        .fromTo('.hero-panel', 
          { x: '6vw', opacity: 0 }, 
          { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, 
          '-=0.6'
        )
        .fromTo('.hero-headline span', 
          { y: 24, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.03, ease: 'power2.out' }, 
          '-=0.4'
        )
        .fromTo('.hero-subtext', 
          { y: 16, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, 
          '-=0.4'
        )
        .fromTo('.hero-cta', 
          { y: 16, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: 'power2.out' }, 
          '-=0.3'
        )
        .fromTo('.hero-contact-bar', 
          { y: '10vh', opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, 
          '-=0.4'
        );

      // Services section animation
      gsap.fromTo('.services-headline',
        { y: '-12vh', opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          }
        }
      );

      gsap.fromTo('.service-card',
        { y: '60vh', opacity: 0, rotate: -2 },
        {
          y: 0, opacity: 1, rotate: 0, duration: 1, stagger: 0.1,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 70%',
            end: 'top 20%',
            scrub: 1,
          }
        }
      );

      // Help section animation
      gsap.fromTo('.help-image',
        { x: '-60vw', opacity: 0, scale: 1.08 },
        {
          x: 0, opacity: 1, scale: 1, duration: 1,
          scrollTrigger: {
            trigger: helpRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1,
          }
        }
      );

      gsap.fromTo('.help-text',
        { x: '45vw', opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8,
          scrollTrigger: {
            trigger: helpRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1,
          }
        }
      );

      // Reliable section animation
      gsap.fromTo('.reliable-image',
        { x: '60vw', opacity: 0, scale: 1.08 },
        {
          x: 0, opacity: 1, scale: 1, duration: 1,
          scrollTrigger: {
            trigger: reliableRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1,
          }
        }
      );

      gsap.fromTo('.reliable-text',
        { x: '-20vw', opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8,
          scrollTrigger: {
            trigger: reliableRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1,
          }
        }
      );

      // Safe hands section animation
      gsap.fromTo('.safe-image',
        { x: '-60vw', opacity: 0, scale: 1.08 },
        {
          x: 0, opacity: 1, scale: 1, duration: 1,
          scrollTrigger: {
            trigger: safeHandsRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1,
          }
        }
      );

      gsap.fromTo('.safe-text',
        { x: '45vw', opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8,
          scrollTrigger: {
            trigger: safeHandsRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1,
          }
        }
      );

      // Plumbing section animation
      gsap.fromTo('.plumbing-image',
        { x: '60vw', opacity: 0, scale: 1.08 },
        {
          x: 0, opacity: 1, scale: 1, duration: 1,
          scrollTrigger: {
            trigger: plumbingRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1,
          }
        }
      );

      gsap.fromTo('.plumbing-text',
        { x: '-20vw', opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8,
          scrollTrigger: {
            trigger: plumbingRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1,
          }
        }
      );

      // Boiler section animation
      gsap.fromTo('.boiler-image',
        { x: '-60vw', opacity: 0, scale: 1.08 },
        {
          x: 0, opacity: 1, scale: 1, duration: 1,
          scrollTrigger: {
            trigger: boilerRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1,
          }
        }
      );

      gsap.fromTo('.boiler-text',
        { x: '45vw', opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8,
          scrollTrigger: {
            trigger: boilerRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1,
          }
        }
      );

      // Quote section animation
      gsap.fromTo('.quote-left',
        { x: '-8vw', opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8,
          scrollTrigger: {
            trigger: '.quote-section',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          }
        }
      );

      gsap.fromTo('.quote-form',
        { x: '8vw', opacity: 0, rotate: 1 },
        {
          x: 0, opacity: 1, rotate: 0, duration: 0.8,
          scrollTrigger: {
            trigger: '.quote-section',
            start: 'top 75%',
            end: 'top 45%',
            scrub: 1,
          }
        }
      );

      // Reviews animation
      gsap.fromTo('.review-card',
        { y: '10vh', opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1,
          scrollTrigger: {
            trigger: '.reviews-section',
            start: 'top 80%',
            end: 'top 40%',
            scrub: 1,
          }
        }
      );

    });

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-off-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Droplets className="w-6 h-6 text-amber" />
              <span className="text-white font-heading font-bold text-lg lg:text-xl">Tooting Plumbing</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              <button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-white transition-colors text-sm">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition-colors text-sm">About</button>
              <button onClick={() => scrollToSection('reviews')} className="text-white/80 hover:text-white transition-colors text-sm">Reviews</button>
              <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white transition-colors text-sm">Contact</button>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-primary text-sm py-2 px-4">
                <Phone className="w-4 h-4 mr-2" />
                Call
              </a>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\s/g, '')}`} className="btn-outline text-sm py-2 px-4">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-white/80 py-2">Services</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-white/80 py-2">About</button>
              <button onClick={() => scrollToSection('reviews')} className="block w-full text-left text-white/80 py-2">Reviews</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-white/80 py-2">Contact</button>
              <div className="flex gap-3 pt-3">
                <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-primary flex-1 justify-center text-sm">
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </a>
                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\s/g, '')}`} className="btn-outline flex-1 justify-center text-sm">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Section 1: Hero */}
      <section ref={heroRef} className="relative min-h-screen bg-navy overflow-hidden pt-16 lg:pt-20">
        <div className="grain-overlay" />
        
        {/* Hero Image */}
        <div className="hero-image absolute left-0 top-0 w-full lg:w-[62vw] h-[50vh] lg:h-full">
          <img 
            src="/images/hero-plumber.jpg" 
            alt="Professional plumber in Tooting SW17"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-navy/90 lg:to-navy" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent lg:hidden" />
        </div>

        {/* Right Content Panel */}
        <div className="hero-panel relative lg:absolute lg:left-[58vw] lg:top-0 lg:w-[42vw] lg:h-full min-h-[50vh] flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-12 lg:py-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber/5 to-transparent opacity-50" />
          
          <div className="relative z-10">
            <h1 className="hero-headline text-white font-heading text-hero mb-4 lg:mb-6">
              {'Fast, reliable plumbing & heating'.split(' ').map((word, i) => (
                <span key={i} className="inline-block mr-[0.25em]">{word}</span>
              ))}
            </h1>
            
            <p className="hero-subtext text-white/80 text-base lg:text-lg mb-6 lg:mb-8 max-w-md">
              Same-day service in Tooting, SW17 & surrounding areas. Gas Safe registered engineers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="hero-cta btn-primary justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call now
              </a>
              <button onClick={() => setQuoteFormOpen(true)} className="hero-cta btn-outline justify-center">
                Request a quote
              </button>
            </div>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="hero-contact-bar absolute bottom-0 left-0 right-0 bg-navy/90 border-t border-white/10">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-4 lg:py-5">
            <div className="grid grid-cols-3 gap-4 lg:gap-8">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-3 group">
                <Phone className="w-5 h-5 text-amber" />
                <div>
                  <span className="text-white/60 text-xs lg:text-sm block">Call</span>
                  <span className="text-white text-sm lg:text-base font-semibold group-hover:text-amber transition-colors">{BUSINESS_INFO.phone}</span>
                </div>
              </a>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\s/g, '')}`} className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-3 group">
                <MessageCircle className="w-5 h-5 text-amber" />
                <div>
                  <span className="text-white/60 text-xs lg:text-sm block">WhatsApp</span>
                  <span className="text-white text-sm lg:text-base font-semibold group-hover:text-amber transition-colors">{BUSINESS_INFO.whatsapp}</span>
                </div>
              </a>
              <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-3">
                <MapPin className="w-5 h-5 text-amber" />
                <div>
                  <span className="text-white/60 text-xs lg:text-sm block">Address</span>
                  <span className="text-white text-sm lg:text-base">{BUSINESS_INFO.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Services */}
      <section id="services" ref={servicesRef} className="relative py-20 lg:py-32 bg-off-white overflow-hidden">
        <div className="grain-overlay" />
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="services-headline mb-12 lg:mb-16">
            <span className="label-mono block mb-4">SERVICES</span>
            <h2 className="text-h2 text-text-primary max-w-2xl">
              Comprehensive plumbing & heating services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: General Plumbing */}
            <div className="service-card card-service">
              <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mb-6">
                <Droplets className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-h3 text-text-primary mb-3">General Plumbing</h3>
              <p className="text-text-secondary mb-6">
                Leaks, taps, toilets, pipework & installations. Fast fixes and lasting solutions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-text-secondary">
                  <CheckCircle className="w-4 h-4 text-amber mr-2" />
                  Leak detection & repair
                </li>
                <li className="flex items-center text-sm text-text-secondary">
                  <CheckCircle className="w-4 h-4 text-amber mr-2" />
                  Tap & toilet repairs
                </li>
                <li className="flex items-center text-sm text-text-secondary">
                  <CheckCircle className="w-4 h-4 text-amber mr-2" />
                  Pipework installations
                </li>
              </ul>
              <button onClick={() => scrollToSection('plumbing')} className="text-amber font-semibold text-sm flex items-center hover:underline">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Card 2: Boiler Services */}
            <div className="service-card card-service">
              <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mb-6">
                <Flame className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-h3 text-text-primary mb-3">Boiler Services</h3>
              <p className="text-text-secondary mb-6">
                Repairs, servicing & installs—kept simple. Gas Safe registered engineers.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-text-secondary">
                  <CheckCircle className="w-4 h-4 text-amber mr-2" />
                  Boiler repairs
                </li>
                <li className="flex items-center text-sm text-text-secondary">
                  <CheckCircle className="w-4 h-4 text-amber mr-2" />
                  Annual servicing
                </li>
                <li className="flex items-center text-sm text-text-secondary">
                  <CheckCircle className="w-4 h-4 text-amber mr-2" />
                  New installations
                </li>
              </ul>
              <button onClick={() => scrollToSection('boiler')} className="text-amber font-semibold text-sm flex items-center hover:underline">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Card 3: Emergency Repairs */}
            <div className="service-card card-service">
              <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-h3 text-text-primary mb-3">Emergency Repairs</h3>
              <p className="text-text-secondary mb-6">
                Burst pipes, no heating, callouts—fast response when you need us most.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-text-secondary">
                  <CheckCircle className="w-4 h-4 text-amber mr-2" />
                  Same-day callouts
                </li>
                <li className="flex items-center text-sm text-text-secondary">
                  <CheckCircle className="w-4 h-4 text-amber mr-2" />
                  Burst pipe emergencies
                </li>
                <li className="flex items-center text-sm text-text-secondary">
                  <CheckCircle className="w-4 h-4 text-amber mr-2" />
                  No heating/hot water
                </li>
              </ul>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="text-amber font-semibold text-sm flex items-center hover:underline">
                Call now <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Here to Help */}
      <section id="about" ref={helpRef} className="relative min-h-screen bg-off-white overflow-hidden">
        <div className="grain-overlay" />
        <div className="lg:flex lg:min-h-screen">
          {/* Left Image */}
          <div className="help-image relative w-full lg:w-[55vw] h-[50vh] lg:h-screen">
            <img 
              src="/images/engineer-van.jpg" 
              alt="Local plumber at work in Tooting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Text Panel */}
          <div className="help-text relative w-full lg:w-[45vw] flex items-center px-6 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-0">
            <div className="max-w-lg">
              <span className="label-mono block mb-4">ABOUT US</span>
              <h2 className="text-h2 text-text-primary mb-6">
                Here to help with all your plumbing & heating needs
              </h2>
              <p className="text-text-secondary text-base lg:text-lg mb-6">
                We're local engineers who turn up on time, explain the work, and leave your home tidy. 
                Based in Tooting SW17, we serve all of South London with pride.
              </p>
              <p className="text-text-secondary text-base lg:text-lg mb-8">
                With years of experience and hundreds of satisfied customers, we've built our reputation 
                on reliability, quality workmanship, and fair pricing.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-amber" />
                  <span className="text-sm text-text-primary font-medium">Gas Safe Registered</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-amber" />
                  <span className="text-sm text-text-primary font-medium">Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber" />
                  <span className="text-sm text-text-primary font-medium">Same-Day Service</span>
                </div>
              </div>
              <button onClick={() => scrollToSection('contact')} className="btn-primary">
                Meet the team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Emergency CTA Band */}
      <section className="relative py-16 lg:py-20 bg-off-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="bg-navy rounded-[28px] p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber/10 to-transparent" />
            <div className="relative z-10 lg:flex lg:items-center lg:justify-between gap-8">
              <div className="mb-6 lg:mb-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-amber" />
                  </div>
                  <h2 className="text-h2 text-white">24/7 emergency callouts</h2>
                </div>
                <p className="text-white/70 text-base lg:text-lg max-w-xl">
                  If it's urgent, we'll prioritise getting to you—fast, tidy, and professional. 
                  Same-day emergency service available across Tooting and South London.
                </p>
              </div>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-primary whitespace-nowrap">
                <Phone className="w-5 h-5 mr-2" />
                Call now
              </a>
            </div>
          </div>

          {/* Trust Row */}
          <div className="grid grid-cols-3 gap-4 lg:gap-8 mt-8">
            <div className="flex flex-col items-center text-center p-4">
              <Shield className="w-8 h-8 text-navy mb-3" />
              <span className="text-text-primary font-semibold text-sm lg:text-base">Gas Safe Registered</span>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <CheckCircle className="w-8 h-8 text-navy mb-3" />
              <span className="text-text-primary font-semibold text-sm lg:text-base">Fully Insured</span>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <Clock className="w-8 h-8 text-navy mb-3" />
              <span className="text-text-primary font-semibold text-sm lg:text-base">Same-Day Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Reliable & Fast */}
      <section ref={reliableRef} className="relative min-h-screen bg-off-white overflow-hidden">
        <div className="grain-overlay" />
        <div className="lg:flex lg:flex-row-reverse lg:min-h-screen">
          {/* Right Image */}
          <div className="reliable-image relative w-full lg:w-[48vw] h-[50vh] lg:h-screen">
            <img 
              src="/images/under-sink.jpg" 
              alt="Quality plumbing work in South London"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Left Text Panel */}
          <div className="reliable-text relative w-full lg:w-[52vw] flex items-center px-6 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-0">
            <div className="max-w-lg">
              <span className="label-mono block mb-4">OUR APPROACH</span>
              <h2 className="text-h2 text-text-primary mb-6">
                Reliable, high-quality work
              </h2>
              <p className="text-text-secondary text-base lg:text-lg mb-6">
                From small fixes to full installations, we do it properly—no shortcuts. 
                Our workmanship is guaranteed, and we treat your home with respect.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Upfront pricing with no hidden fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Tidy workmanship and respect for your home</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Clear communication from booking to completion</span>
                </li>
              </ul>
              <button onClick={() => scrollToSection('contact')} className="btn-outline border-navy/30 text-navy hover:border-navy/60">
                See how we work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Your Home in Safe Hands */}
      <section ref={safeHandsRef} className="relative min-h-screen bg-off-white overflow-hidden">
        <div className="grain-overlay" />
        <div className="lg:flex lg:min-h-screen">
          {/* Left Image */}
          <div className="safe-image relative w-full lg:w-[55vw] h-[50vh] lg:h-screen">
            <img 
              src="/images/toolbox-boiler.jpg" 
              alt="Gas Safe registered engineer Tooting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Text Panel */}
          <div className="safe-text relative w-full lg:w-[45vw] flex items-center px-6 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-0">
            <div className="max-w-lg">
              <span className="label-mono block mb-4">SAFETY FIRST</span>
              <h2 className="text-h2 text-text-primary mb-6">
                Your home in safe hands
              </h2>
              <p className="text-text-secondary text-base lg:text-lg mb-6">
                Gas Safe registered, fully insured, and trained to the latest standards. 
                Your safety is our top priority on every job.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-amber mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Gas Safe registration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Public liability insurance</span>
                </li>
                <li className="flex items-start gap-3">
                  <Wrench className="w-5 h-5 text-amber mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Work guaranteed and documented</span>
                </li>
              </ul>
              <div className="p-4 bg-navy/5 rounded-xl mb-6">
                <p className="text-sm text-text-secondary">
                  <span className="font-semibold text-text-primary">Gas Safe Reg No:</span> 123456 
                  <span className="text-text-secondary/60 ml-2">(placeholder)</span>
                </p>
              </div>
              <button onClick={() => scrollToSection('contact')} className="btn-primary">
                Check our credentials
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Plumbing Problems */}
      <section id="plumbing" ref={plumbingRef} className="relative min-h-screen bg-off-white overflow-hidden">
        <div className="grain-overlay" />
        <div className="lg:flex lg:flex-row-reverse lg:min-h-screen">
          {/* Right Image */}
          <div className="plumbing-image relative w-full lg:w-[48vw] h-[50vh] lg:h-screen">
            <img 
              src="/images/plumbing-wrench.jpg" 
              alt="Emergency plumber SW17"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Left Text Panel */}
          <div className="plumbing-text relative w-full lg:w-[52vw] flex items-center px-6 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-0">
            <div className="max-w-lg">
              <span className="label-mono block mb-4">GENERAL PLUMBING</span>
              <h2 className="text-h2 text-text-primary mb-6">
                Plumbing problems? We can help
              </h2>
              <p className="text-text-secondary text-base lg:text-lg mb-6">
                Drips, blocks, pressure issues, pipework—we sort it quickly and cleanly. 
                No job is too small for our expert team.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Droplets className="w-5 h-5 text-amber mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Leaks and burst pipes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Wrench className="w-5 h-5 text-amber mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Blocked sinks, toilets, and drains</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Tap replacements and pipe repairs</span>
                </li>
              </ul>
              <button onClick={() => setQuoteFormOpen(true)} className="btn-primary">
                Book a visit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Need a New Boiler? */}
      <section id="boiler" ref={boilerRef} className="relative min-h-screen bg-off-white overflow-hidden">
        <div className="grain-overlay" />
        <div className="lg:flex lg:min-h-screen">
          {/* Left Image */}
          <div className="boiler-image relative w-full lg:w-[55vw] h-[50vh] lg:h-screen">
            <img 
              src="/images/boiler-engineer.jpg" 
              alt="Boiler installation and repair Tooting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Text Panel */}
          <div className="boiler-text relative w-full lg:w-[45vw] flex items-center px-6 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-0">
            <div className="max-w-lg">
              <span className="label-mono block mb-4">BOILER SERVICES</span>
              <h2 className="text-h2 text-text-primary mb-6">
                Need a new boiler?
              </h2>
              <p className="text-text-secondary text-base lg:text-lg mb-6">
                Whether it's a repair, a service, or a full replacement, we'll guide you through it. 
                Expert advice and quality installations.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Wrench className="w-5 h-5 text-amber mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Boiler repairs and fault-finding</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Annual servicing and maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <Flame className="w-5 h-5 text-amber mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Efficient replacements with clear quotes</span>
                </li>
              </ul>
              <div className="p-4 bg-navy/5 rounded-xl mb-6">
                <p className="text-sm text-text-secondary">
                  <span className="font-semibold text-text-primary">Boiler service from £80</span> (guide price)
                </p>
                <p className="text-sm text-text-secondary mt-1">
                  Install quotes provided after free assessment
                </p>
              </div>
              <button onClick={() => setQuoteFormOpen(true)} className="btn-primary">
                Get a boiler quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Get a Free Quote */}
      <section id="contact" className="quote-section relative py-20 lg:py-32 bg-off-white overflow-hidden">
        <div className="grain-overlay" />
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="lg:flex lg:gap-16">
            {/* Left Column */}
            <div className="quote-left lg:w-[45%] mb-12 lg:mb-0">
              <span className="label-mono block mb-4">CONTACT US</span>
              <h2 className="text-h2 text-text-primary mb-6">
                Get a free quote
              </h2>
              <p className="text-text-secondary text-base lg:text-lg mb-8">
                Tell us what you need and we'll get back to you within 24 hours. 
                Emergency? Call us directly for faster response.
              </p>

              <div className="space-y-6">
                <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center group-hover:bg-amber/20 transition-colors">
                    <Phone className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <span className="text-sm text-text-secondary block">Phone</span>
                    <span className="text-text-primary font-semibold group-hover:text-amber transition-colors">{BUSINESS_INFO.phone}</span>
                  </div>
                </a>

                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\s/g, '')}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center group-hover:bg-amber/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <span className="text-sm text-text-secondary block">WhatsApp</span>
                    <span className="text-text-primary font-semibold group-hover:text-amber transition-colors">{BUSINESS_INFO.whatsapp}</span>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <span className="text-sm text-text-secondary block">Address</span>
                    <span className="text-text-primary font-semibold">{BUSINESS_INFO.address}</span>
                  </div>
                </div>
              </div>

              {/* Areas Served */}
              <div className="mt-10">
                <span className="label-mono block mb-4">AREAS WE SERVE</span>
                <div className="flex flex-wrap gap-2">
                  {BUSINESS_INFO.areas.map((area) => (
                    <span key={area} className="px-3 py-1 bg-navy/10 rounded-full text-sm text-text-secondary">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="quote-form lg:w-[55%]">
              <div className="bg-white rounded-[28px] p-6 lg:p-10 shadow-card">
                <h3 className="text-h3 text-text-primary mb-6">Request a quote</h3>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you! We will contact you within 24 hours.'); }}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-text-secondary mb-1 block">Name *</label>
                      <Input placeholder="Your name" className="h-12 rounded-xl" required />
                    </div>
                    <div>
                      <label className="text-sm text-text-secondary mb-1 block">Phone *</label>
                      <Input placeholder="Your phone" className="h-12 rounded-xl" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-text-secondary mb-1 block">Email</label>
                    <Input type="email" placeholder="Your email" className="h-12 rounded-xl" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-text-secondary mb-1 block">Postcode *</label>
                      <Input placeholder="SW17 0ES" className="h-12 rounded-xl" required />
                    </div>
                    <div>
                      <label className="text-sm text-text-secondary mb-1 block">Service needed</label>
                      <Select>
                        <SelectTrigger className="h-12 rounded-xl">
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General plumbing</SelectItem>
                          <SelectItem value="boiler-repair">Boiler repair</SelectItem>
                          <SelectItem value="boiler-service">Boiler service</SelectItem>
                          <SelectItem value="install">Installation</SelectItem>
                          <SelectItem value="emergency">Emergency</SelectItem>
                          <SelectItem value="landlord">Landlord certificate</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-text-secondary mb-1 block">Message</label>
                    <Textarea placeholder="Tell us about your problem..." className="rounded-xl min-h-[100px]" />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Request a quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Reviews */}
      <section id="reviews" className="reviews-section relative py-20 lg:py-32 bg-off-white overflow-hidden">
        <div className="grain-overlay" />
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <span className="label-mono block mb-4">TESTIMONIALS</span>
            <h2 className="text-h2 text-text-primary">
              What our customers say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Review 1 */}
            <div className="review-card bg-white rounded-[28px] p-6 lg:p-8 shadow-card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber text-amber" />
                ))}
              </div>
              <p className="text-text-primary text-base lg:text-lg mb-6">
                "Arrived on time, fixed the leak quickly, and left everything spotless. 
                Very professional service at a fair price."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                  <span className="text-navy font-semibold">SM</span>
                </div>
                <div>
                  <span className="text-text-primary font-semibold block">Sarah M.</span>
                  <span className="text-text-secondary text-sm">Tooting</span>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="review-card bg-white rounded-[28px] p-6 lg:p-8 shadow-card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber text-amber" />
                ))}
              </div>
              <p className="text-text-primary text-base lg:text-lg mb-6">
                "Clear pricing and professional work—our new boiler was fitted in a day. 
                Highly recommend their boiler services."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                  <span className="text-navy font-semibold">JT</span>
                </div>
                <div>
                  <span className="text-text-primary font-semibold block">James T.</span>
                  <span className="text-text-secondary text-sm">Balham</span>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="review-card bg-white rounded-[28px] p-6 lg:p-8 shadow-card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber text-amber" />
                ))}
              </div>
              <p className="text-text-primary text-base lg:text-lg mb-6">
                "Friendly, local, and reliable. Called them for an emergency and they 
                were here within the hour. Fantastic service!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                  <span className="text-navy font-semibold">AK</span>
                </div>
                <div>
                  <span className="text-text-primary font-semibold block">Aisha K.</span>
                  <span className="text-text-secondary text-sm">Streatham</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12 mt-12">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-navy" />
              <span className="text-text-primary font-medium">Gas Safe Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-navy" />
              <span className="text-text-primary font-medium">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Wrench className="w-6 h-6 text-navy" />
              <span className="text-text-primary font-medium">Work Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Footer */}
      <footer className="relative bg-navy py-16 lg:py-20">
        <div className="grain-overlay" />
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
            {/* Logo & Tagline */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Droplets className="w-6 h-6 text-amber" />
                <span className="text-white font-heading font-bold text-lg">Tooting Plumbing</span>
              </div>
              <p className="text-white/60 text-sm mb-6">
                Fast, reliable plumbing & heating in Tooting & SW17. Gas Safe registered engineers.
              </p>
              <div className="space-y-2">
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-white/80 text-sm flex items-center gap-2 hover:text-amber transition-colors">
                  <Phone className="w-4 h-4" />
                  {BUSINESS_INFO.phone}
                </a>
                <span className="text-white/60 text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {BUSINESS_INFO.address}
                </span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('plumbing')} className="text-white/60 text-sm hover:text-white transition-colors">General Plumbing</button></li>
                <li><button onClick={() => scrollToSection('boiler')} className="text-white/60 text-sm hover:text-white transition-colors">Boiler Services</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-white/60 text-sm hover:text-white transition-colors">Emergency Repairs</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-white/60 text-sm hover:text-white transition-colors">Landlord Certificates</button></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="text-white/60 text-sm hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('reviews')} className="text-white/60 text-sm hover:text-white transition-colors">Reviews</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-white/60 text-sm hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><span className="text-white/60 text-sm cursor-pointer hover:text-white transition-colors">Privacy Policy</span></li>
                <li><span className="text-white/60 text-sm cursor-pointer hover:text-white transition-colors">Terms of Service</span></li>
              </ul>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2026 Tooting Emergency & General Plumbing Services. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-white/40 text-sm">Gas Safe Reg No: 123456</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-navy border-t border-white/10 lg:hidden z-40">
        <div className="grid grid-cols-3 divide-x divide-white/10">
          <a href={`tel:${BUSINESS_INFO.phone}`} className="flex flex-col items-center py-3 text-white hover:bg-white/5 transition-colors">
            <Phone className="w-5 h-5 mb-1" />
            <span className="text-xs">Call</span>
          </a>
          <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\s/g, '')}`} className="flex flex-col items-center py-3 text-white hover:bg-white/5 transition-colors">
            <MessageCircle className="w-5 h-5 mb-1" />
            <span className="text-xs">WhatsApp</span>
          </a>
          <button onClick={() => setQuoteFormOpen(true)} className="flex flex-col items-center py-3 text-white hover:bg-white/5 transition-colors">
            <Wrench className="w-5 h-5 mb-1" />
            <span className="text-xs">Get Quote</span>
          </button>
        </div>
      </div>

      {/* Quote Form Dialog */}
      <Dialog open={quoteFormOpen} onOpenChange={setQuoteFormOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-h3 text-text-primary">Request a Quote</DialogTitle>
          </DialogHeader>
          <form className="space-y-4 mt-4" onSubmit={(e) => { e.preventDefault(); setQuoteFormOpen(false); alert('Thank you! We will contact you within 24 hours.'); }}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-text-secondary mb-1 block">Name *</label>
                <Input placeholder="Your name" className="h-12 rounded-xl" required />
              </div>
              <div>
                <label className="text-sm text-text-secondary mb-1 block">Phone *</label>
                <Input placeholder="Your phone" className="h-12 rounded-xl" required />
              </div>
            </div>
            <div>
              <label className="text-sm text-text-secondary mb-1 block">Email</label>
              <Input type="email" placeholder="Your email" className="h-12 rounded-xl" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-text-secondary mb-1 block">Postcode *</label>
                <Input placeholder="SW17 0ES" className="h-12 rounded-xl" required />
              </div>
              <div>
                <label className="text-sm text-text-secondary mb-1 block">Service needed</label>
                <Select>
                  <SelectTrigger className="h-12 rounded-xl">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General plumbing</SelectItem>
                    <SelectItem value="boiler-repair">Boiler repair</SelectItem>
                    <SelectItem value="boiler-service">Boiler service</SelectItem>
                    <SelectItem value="install">Installation</SelectItem>
                    <SelectItem value="emergency">Emergency</SelectItem>
                    <SelectItem value="landlord">Landlord certificate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="text-sm text-text-secondary mb-1 block">Message</label>
              <Textarea placeholder="Tell us about your problem..." className="rounded-xl min-h-[100px]" />
            </div>
            <button type="submit" className="btn-primary w-full">
              Request a quote
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
