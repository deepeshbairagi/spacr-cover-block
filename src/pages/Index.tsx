import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Zap, Users, Phone, Mail, Calculator, Eye, CheckCircle, XCircle, Building, Award, Truck, Factory, Warehouse, MapPin, Wrench, HardHat, Target, Heart, FlaskConical, FileCheck2, Scale, Send, Clock, Star, Gauge, Ruler, PackageCheck, Handshake, TrendingUp, Sparkles, Gem, Layers, Hammer, Construction, Sparkle, Rocket, ThumbsUp, Globe, CheckCircle2, BarChart3, Activity, Cpu, Settings, Wrench as WrenchIcon, Cog, Sparkles as SparklesIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import OurPartners from "./OurPartners";
const Index = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    inquiryType: "",
    message: ""
  });

  const products = [
    {
      id: "1",
      name: "Single Cover Block/Spacers",
      shape: "Various",
      size: "15mm-100mm",
      description: `Single Size Cover Block/Spacers - A Single Size Cover Block is a precision-moulded concrete spacer designed to provide a uniform and accurate cover for reinforcement bars. Each block offers one fixed cover thickness, ensuring consistent spacing between rebar and formwork. Ideal for slabs, beams, columns, footings, and precast elements.`,
      grade: "M60",
      image: "/product-image/Single%20Cover%20BlockSpacers.jpg",
      features: [
        "Provides one dedicated cover size for perfect accuracy",
        "Maintains concrete cover as per IS standards",
        "High compressive strength and load-bearing capacity",
        "Ensures proper alignment of reinforcement",
        "Prevents corrosion by maintaining correct rebar distance",
        "Suitable for vertical and horizontal reinforcement"
      ],
      applications: ["RCC slabs", "Columns", "Beams", "Walls", "Footings", "Precast components"],
      specTable: [
        { code: "BS0015", coverSize: "15 MM", maxRebar: "14 MM", packing: "1000" },
        { code: "BS0020", coverSize: "20 MM", maxRebar: "16 MM", packing: "750" },
        { code: "BS0025", coverSize: "25 MM", maxRebar: "16 MM", packing: "750" },
        { code: "BS0030", coverSize: "30 MM", maxRebar: "26 MM", packing: "500" },
        { code: "BS0035", coverSize: "35 MM", maxRebar: "26 MM", packing: "400" },
        { code: "BS0040", coverSize: "40 MM", maxRebar: "30 MM", packing: "300" },
        { code: "BS050A", coverSize: "50 MM", maxRebar: "40 MM", packing: "150" },
        { code: "BS0060", coverSize: "60 MM", maxRebar: "40 MM", packing: "125" },
        { code: "BS0065", coverSize: "65 MM", maxRebar: "40 MM", packing: "125" },
        { code: "BS075A", coverSize: "75 MM", maxRebar: "40 MM", packing: "100" },
        { code: "BS0100", coverSize: "100 MM", maxRebar: "40 MM", packing: "80" }
      ],
      specifications: {
        "Common Sizes": "20 mm, 25 mm, 30 mm, 40 mm, 50 mm, 75 mm, 100 mm (custom sizes available)",
        "Concrete Grade": "M60",
        "Typical Use": "Slabs, beams, columns, footings, precast components"
      },
      advantages: [
        "Most commonly used",
        "Simple design",
        "Very strong",
        "Versatile application"
      ]
    },

    {
      id: "5",
      name: "Multisize Cover Block/Spacers",
      shape: "Various",
      size: "Multiple",
      description: `SPACR’s Multisize Cover Block is a versatile concrete spacer designed to provide multiple cover thickness options within a single block. With carefully designed grooves or stepped profiles, it allows contractors to achieve different cover sizes using just one product, making it highly efficient and cost-effective on construction sites.`,
      grade: "M60",
      image: "/product-image/Multisize%20Cover%20BlockSpacers.jpg",
      features: [
        "Multiple Cover Options in One Block",
        "Cost-Effective & Space-Saving",
        "Accurate & Easy Identification",
        "High Load-Bearing Strength",
        "Improved Site Efficiency",
        "Perfect Bond With RCC",
        "Weather & Moisture Resistant",
        "Stable & Slip-Resistant Design"
      ],
      applications: ["RCC work", "Multisize applications", "Modern construction"],
      specifications: {
        "Common Sizes": "20/25 mm, 30/40 mm, 50/60 mm, 20/25/40/50 mm, 30/40/45/50 mm, 90/100 mm (custom sizes available)",
        "Concrete Grade": "M60"
      },
      specTable: [
        { code: "BS2025B", coverSize: "20/25 MM", maxRebar: "-", minBreaking: "-", packing: "700", shape: "Flip" },
        { code: "BS3040", coverSize: "30/40 MM", maxRebar: "-", minBreaking: "-", packing: "500", shape: "Y Shape" },
        { code: "BS2025A", coverSize: "20/25 MM", maxRebar: "-", minBreaking: "-", packing: "500", shape: "Square" },
        { code: "BS2040", coverSize: "20/25/40/50 MM", maxRebar: "-", minBreaking: "-", packing: "250", shape: "Various" },
        { code: "BS3050", coverSize: "30/35/45/50 MM", maxRebar: "-", minBreaking: "-", packing: "200", shape: "Various" },
        { code: "BS5060", coverSize: "50/60 MM", maxRebar: "-", minBreaking: "-", packing: "100", shape: "Square" }
      ],
      advantages: [
        "One block serves 3–4 different cover sizes",
        "Saves cost and reduces material handling",
        "Perfect for heavy reinforcement",
        "Easy to place, stable during vibration and concreting",
        "Reduces need for multiple types of cover blocks at site"
      ]
    },

    {
      id: "3",
      name: "Heavy Duty Cover Block/Spacers",
      shape: "Various",
      size: "50mm-75mm",
      description: `Heavy Duty Cover Block/Spacers - SPACR’s Heavy Duty Cover Block is a high-strength concrete spacer engineered to provide reliable and accurate cover in heavily reinforced RCC structures. Designed for demanding construction environments, it supports large-diameter rebars and heavy reinforcement cages without deformation. Its robust material composition, wide base, and precise dimensions ensure long-lasting performance, excellent stability, and superior protection for reinforcement steel.`,
      grade: "M60",
      image: "/product-image/Heavy%20Duty%20Cover%20BlockSpacers.jpg",
      features: [
        "High Load-Bearing Capacity",
        "Superior Compressive Strength",
        "Accurate Cover Thickness",
        "Wide & Stable Base",
        "Excellent Bond With Concrete",
        "Corrosion Protection",
        "Chemical Resistant",
        "Impact & Crack Resistant",
        "Perfect for Heavy RCC Structures"
      ],
      applications: ["Foundations", "Columns", "Beams", "Industrial RCC Structures"],
      specifications: {
        "Common Sizes": "50 mm, 60 mm, 65 mm, 70 mm, 75 mm, 100 mm (we also manufacture custom sizes as per your project requirement.)",
        "Concrete Grade": "M60"
      },
      specTable: [
        { code: "BS50HD", coverSize: "50 MM", maxRebar: "40 MM", minBreaking: "-", packing: "100" },
        { code: "BS60HD", coverSize: "60 MM", maxRebar: "40 MM", minBreaking: "-", packing: "100" },
        { code: "BS70HD", coverSize: "70 MM", maxRebar: "40 MM", minBreaking: "-", packing: "50" },
        { code: "BS75HD", coverSize: "75 MM", maxRebar: "40 MM", minBreaking: "-", packing: "50" }
      ],
      advantages: [
        "Very high load-bearing capacity",
        "Excellent durability in aggressive environments",
        "Maintains cover under heavy construction loads",
        "Ideal for congested reinforcement"
      ]
    },

    {
      id: "2",
      name: "Round/Circular Cover Block/Spacers",
      shape: "Round",
      size: "20mm-100mm",
      description: `Round/Circular Cover Block/Spacers - SPACR's Round Cover Block is a circular concrete spacer designed to provide uniform cover around reinforcement bars, especially where rotational freedom and smooth edges are required. Its round shape ensures stable placement on uneven surfaces and minimizes point contact, making it ideal for columns, walls, cages, and precast elements.`,
      grade: "M60",
      image: "/product-image/RoundCircular%20Cover%20BlockSpacers.jpg",
      features: [
        "360° Uniform Cover",
        "Stable on Uneven Surfaces",
        "High Compressive Strength",
        "Corrosion Protection",
        "Perfect for Vertical Reinforcement",
        "Perfect Bond with RCC",
        "Easy & Quick Placement"
      ],
      applications: ["Columns", "Walls", "Cages", "Precast elements"],
      specifications: {
        "Common Sizes": "20 mm, 25 mm, 30 mm, 40 mm, 50 mm, 75 mm, 100 mm (we also manufacture custom sizes as per your project requirement.)",
        "Concrete Grade": "M60"
      },
      specTable: [
        { code: "BSR020", coverSize: "20 MM", maxRebar: "12 MM", minBreaking: "20 MM", packing: "500" },
        { code: "BSR025", coverSize: "25 MM", maxRebar: "12 MM", minBreaking: "18 MM", packing: "250" },
        { code: "BSR030", coverSize: "30 MM", maxRebar: "14 MM", minBreaking: "18 MM", packing: "200" },
        { code: "BSR035", coverSize: "35 MM", maxRebar: "12 MM", minBreaking: "18 MM", packing: "125" },
        { code: "BSR040", coverSize: "40 MM", maxRebar: "12 MM", minBreaking: "20 MM", packing: "100" },
        { code: "BSR50A", coverSize: "50 MM", maxRebar: "12 MM", minBreaking: "20 MM", packing: "90" },
        { code: "BSR50B", coverSize: "50 MM", maxRebar: "12 MM", minBreaking: "30 MM", packing: "90" },
        { code: "BSR060", coverSize: "60 MM", maxRebar: "16 MM", minBreaking: "35 MM", packing: "80" },
        { code: "BSR065", coverSize: "65 MM", maxRebar: "18 MM", minBreaking: "35 MM", packing: "50" },
        { code: "BS075A", coverSize: "75 MM", maxRebar: "20 MM", minBreaking: "50 MM", packing: "20" },
        { code: "BS075B", coverSize: "75 MM", maxRebar: "20 MM", minBreaking: "35 MM", packing: "20" },
        { code: "BS075C", coverSize: "75 MM", maxRebar: "14 MM", minBreaking: "26 MM", packing: "25" },
        { code: "BS100A", coverSize: "100 MM", maxRebar: "18 MM", minBreaking: "40 MM", packing: "10" }
      ],
      advantages: [
        "360° uniform cover",
        "Stable on uneven surfaces",
        "Minimizes point contact",
        "Safe handling with smooth edges",
        "Easy and quick placement",
        "High load-bearing capacity"
      ]
    },

    {
      id: "4",
      name: "Distance Bar/Cover Kanda",
      shape: "Bar",
      size: "150mm-600mm",
      description: `Distance Bar/Cover Kanda - A Distance Bar (also called rebar spacer bar or rebar alignment bar or Cover Kanda) is a specially designed reinforcement accessory used to maintain uniform spacing between two layers of reinforcement in RCC slabs, beams, walls, and footings. It ensures that the top and bottom rebar mats remain at the correct distance during concreting, preventing displacement and maintaining structural integrity.`,
      grade: "M60",
      image: "/product-image/Distance%20BarCover%20Kanda.jpg",
      features: [
        "Uniform Rebar Spacing",
        "Accurate Dimension Control",
        "High Strength & Rigidity",
        "Enhances Structural Integrity",
        "Fast & Easy Installation",
        "Improves Construction Quality",
        "Perfect Bond With Concrete"
      ],
      applications: ["Retaining Walls & Shear Walls", "Water Tanks & Reservoirs", "Footings & Pile Caps", "Beams"],
      specifications: {
        "Common Sizes": "125 mm, 150 mm, 200 mm, 250 mm, 270 mm, 300 mm, 350 mm, 450 mm, 600 mm (we also manufacture custom sizes as per your project requirement.)",
        "Concrete Grade": "M60"
      },
      specTable: [
        { code: "BSDB150", coverSize: "150 MM", maxRebar: "30x30", minBreaking: "-", packing: "100" },
        { code: "BSDB200", coverSize: "200 MM", maxRebar: "30x30", minBreaking: "-", packing: "100" },
        { code: "BSDB230", coverSize: "230 MM", maxRebar: "30x30", minBreaking: "-", packing: "75" },
        { code: "BSDB250", coverSize: "250 MM", maxRebar: "30x30", minBreaking: "-", packing: "75" },
        { code: "BSDB300", coverSize: "300 MM", maxRebar: "40x40", minBreaking: "-", packing: "50" },
        { code: "BSDB350", coverSize: "350 MM", maxRebar: "40x40", minBreaking: "-", packing: "50" },
        { code: "BSDB400", coverSize: "400 MM", maxRebar: "40x40", minBreaking: "-", packing: "20" },
        { code: "BSDB450", coverSize: "450 MM", maxRebar: "50x50", minBreaking: "-", packing: "20" },
        { code: "BSDB600", coverSize: "600 MM", maxRebar: "60x60", minBreaking: "-", packing: "10" }
      ],
      advantages: [
        "Maintains uniform rebar spacing",
        "Accurate dimension control",
        "High strength and rigidity",
        "Prevents rebar displacement during concreting",
        "Fast and easy installation",
        "Improves overall construction quality",
        "Perfect bond with concrete"
      ]
    }
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    toast({ title: 'Request sent', description: 'We will contact you shortly.' });
    setFormData({ name: "", email: "", phone: "", company: "", address: "", inquiryType: "", message: "" });
  };

  const values = [
    { letter: "S", word: "Strength", description: "High compressive strength for structural reliability.", icon: <Shield className="h-8 w-8" /> },
    { letter: "P", word: "Precision", description: "Accurate dimensions as per IS standards.", icon: <Ruler className="h-8 w-8" /> },
    { letter: "A", word: "Assurance", description: "Consistency in every batch.", icon: <PackageCheck className="h-8 w-8" /> },
    { letter: "C", word: "Commitment", description: "On-time supply and customer satisfaction.", icon: <Handshake className="h-8 w-8" /> },
    { letter: "R", word: "Reliability", description: "Long-term performance and durability.", icon: <TrendingUp className="h-8 w-8" /> }
  ];

  const reasons = [
    { icon: <Shield className="h-12 w-12" />, title: "IS-Standard Quality", description: "We follow strict testing protocols for strength, accuracy, and finishing.", gradient: "from-yellow-400 to-yellow-500" },
    { icon: <Factory className="h-12 w-12" />, title: "Modern Manufacturing", description: "Vibration technology + controlled batching = premium-quality finish.", gradient: "from-yellow-400 to-yellow-600" },
    { icon: <Award className="h-12 w-12" />, title: "Durable & Strong", description: "Blocks designed for long-term protection of reinforcement steel.", gradient: "from-yellow-400 to-yellow-500" },
    { icon: <Zap className="h-12 w-12" />, title: "Faster Construction", description: "Uniform dimensions reduce alignment issues and improve casting speed.", gradient: "from-yellow-400 to-yellow-600" },
    { icon: <Truck className="h-12 w-12" />, title: "Reliable Bulk Supply", description: "Trusted by contractors and infrastructure companies across India.", gradient: "from-yellow-400 to-yellow-500" },
    { icon: <Users className="h-12 w-12" />, title: "Customer-First Service", description: "Timely delivery + continuous support for project requirements.", gradient: "from-yellow-400 to-yellow-600" }
  ];

  const industries = [
    { name: "Residential Buildings", icon: <Building className="h-8 w-8" /> },
    { name: "Commercial Projects", icon: <Building className="h-8 w-8" /> },
    { name: "High-Rise Towers", icon: <Building className="h-8 w-8" /> },
    { name: "Roads & Bridges", icon: <MapPin className="h-8 w-8" /> },
    { name: "Infrastructure Projects", icon: <HardHat className="h-8 w-8" /> },
    { name: "Industrial Buildings", icon: <Factory className="h-8 w-8" /> },
    { name: "Warehouses & Factories", icon: <Warehouse className="h-8 w-8" /> },
    { name: "Water Retaining Structures", icon: <Wrench className="h-8 w-8" /> },
    { name: "Pile Foundations", icon: <HardHat className="h-8 w-8" /> },
    { name: "Government Projects", icon: <Building className="h-8 w-8" /> }
  ];

  return (
    <Layout>
      {/* Mobile Hero Section */}
      <section id="home" className="relative min-h-screen md:hidden w-full flex flex-col items-center justify-center overflow-hidden pt-20 pb-12">
        {/* Mobile Background Image */}
        <img
          src="/uplode/HERO%20SECTION%20BG.png"
          alt="Construction Background"
          className="fixed inset-0 w-full h-full object-cover -z-10 opacity-100"
        />
        
        {/* Black Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
          <div className="relative z-10 w-full px-4 flex flex-col items-center justify-center text-center">
          <div className="animate-fade-in max-w-md w-full">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-3 sm:mb-4 leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              <span className="pt-16 block text-white animate-slide-up" style={{animationDelay: '0ms'}}>
                Seamless <span className="text-yellow-400">Space</span>
              </span>
             
              <span className="block text-white animate-slide-up" style={{animationDelay: '240ms'}}>
              Superior Safety
              </span>
            
            </h1>

            {/* Description */}
            <p className="text-sm text-white/95 leading-relaxed mb-6 px-2 animate-fade-in" style={{animationDelay: '400ms'}}>
              High-strength, dimensionally accurate concrete cover blocks engineered for long-lasting and safe construction.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 mb-6 animate-fade-in" style={{animationDelay: '450ms'}}>
              <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-primary text-black hover:bg-yellow-300 font-bold w-full">
                Get a Quote
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 w-full">
                <a href="/uplode/SPACR%20Cover%20Block%20Jan%202025.pdf" download="SPACR Cover Block Jan 2025.pdf" rel="noopener noreferrer">Download Catalogue</a>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Desktop Hero Section */}
      <section className="relative h-[100vh] lg:h-[108vh] hidden md:flex items-center justify-center overflow-hidden">
        {/* Desktop Background Image */}
        <img
          src="/uplode/HERO SECTION BG.png"
          alt="Construction Background"
          className="fixed inset-0 w-full h-full object-cover -z-10 opacity-100"
        />
        
        {/* Black Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
              <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1 mb-4">
                <span className="text-xs font-semibold bg-white text-primary rounded-full px-2 py-0.5">ISO 9001:2015</span>
                <span className="text-white/90 text-xs">Certified Quality Management System</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-3 sm:mb-4 leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                <span className="block animate-slide-up" style={{animationDelay: '0ms'}}>
                Seamless <span className="text-yellow-400">Space</span>
                </span>
                <span className="block animate-slide-up" style={{animationDelay: '120ms'}}>
                Superior Safety
                </span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-center leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] animate-fade-in" style={{animationDelay: '360ms'}}>
                High-strength, dimensionally accurate concrete cover blocks engineered for long-lasting and safe construction.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3 animate-fade-in" style={{animationDelay: '420ms'}}>
                <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-primary text-black hover:bg-yellow-300 font-bold">
                  Get a Quote
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10">
                  <a href="/uplode/SPACR%20Cover%20Block%20Jan%202025.pdf" download="SPACR Cover Block Jan 2025.pdf" rel="noopener noreferrer">Download Catalogue</a>
                </Button>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-2 animate-fade-in" style={{animationDelay: '480ms'}}>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm">M60 Grade Strength</span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm">Fiber Reinforced</span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm">High-quality concrete</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative chevrons */}
        <div className="pointer-events-none absolute top-24 right-6 hidden lg:flex flex-col gap-3">
          <span className="w-2.5 h-2.5 bg-yellow-400 rotate-45 opacity-80 animate-float"></span>
          <span className="w-2.5 h-2.5 bg-white/70 rotate-45 opacity-80 animate-float" style={{animationDelay:'120ms'}}></span>
          <span className="w-2.5 h-2.5 bg-black rotate-45 opacity-80 animate-float" style={{animationDelay:'240ms'}}></span>
        </div>
      </section>

      {/* Key Highlights Section */}
 

      {/* About Us Section */}
      <section id="about" className="py-24 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 mb-6 border border-gray-200 shadow-sm">
                <Building className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-gray-700 tracking-wide">About SPACR</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
                Who We Are
              </h2>
            </div>
            <Card className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="p-8 md:p-12">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  SPACR Cover Block is a specialized manufacturer of high-quality concrete spacers designed to deliver perfect concrete cover in every structure. With a commitment to engineering precision, SPACR ensures each product meets strict IS standards, offering excellent strength, dimensional accuracy, and long-term durability.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  Our manufacturing process uses controlled batching, vibration technology, and systematic curing to ensure consistency in every piece. From residential to high-rise, infrastructure to industrial projects, SPACR supports builders, contractors, and engineers with reliable and timely supply.
                </p>
                <p className="text-lg md:text-xl font-semibold text-gray-900 leading-relaxed">
                  At SPACR, we don't just make cover blocks — we strengthen the foundation of India's future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-5 py-2.5 mb-6 border border-white/20">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary tracking-wide">Our Foundation</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Vision & Mission
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-black" />
          </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-primary mb-4">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">
                    To be India's leading brand in concrete spacers — trusted for quality and engineering excellence.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                    <Award className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-primary mb-4">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">
                    To supply strong, accurate, and certified cover blocks that ensure perfect concrete cover and long-term durability in every project.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - SPACR */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
                Core Values
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-primary/40 hover:-translate-y-1 bg-white group">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <div className="text-primary">
                        {value.icon}
                      </div>
                    </div>
                    <div className="text-6xl font-extrabold text-primary mb-3">{value.letter}</div>
                    <CardTitle className="text-lg font-semibold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                      {value.word}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary rounded-xl flex items-center justify-center mx-auto mb-8">
              <Heart className="h-10 w-10 text-black" />
                </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary tracking-tight">
              Our Commitment
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              We deliver consistency, strength, and trust — in every single cover block.
                  </p>
                </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-gray-50 scroll-mt-20">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2.5 mb-6 border border-primary/20">
              <PackageCheck className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary tracking-wide">Our Products</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
              Concrete Cover Blocks
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              High-quality concrete spacers designed to deliver perfect concrete cover in every structure
            </p>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mb-16 px-2">
              {products.map((product) => (
                <Link key={product.id} to={`/products/${product.id}`} className="no-underline">
                  <Card className="bg-white border border-gray-200 hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 group overflow-hidden h-full cursor-pointer">
                    <CardHeader className="p-0">
                      <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-5 pb-3">
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight">{product.name}</CardTitle>
                          <Badge className="bg-primary text-black border-none font-semibold text-xs">{product.grade}</Badge>
                        </div>
                        <CardDescription className="text-gray-600 text-xs leading-relaxed">
                          {product.description.length > 30 
                            ? `${product.description.substring(0, 30)}...` 
                            : product.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 px-5 pb-5">
                      <div className="flex gap-2 mb-3 flex-wrap">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20 text-xs">
                          {product.shape}
                        </Badge>
                        <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                          {product.size}
                        </Badge>
                      </div>
                      <Button onClick={() => scrollToSection('contact')} className="w-full bg-primary hover:bg-primary/90 text-black font-semibold shadow-sm hover:shadow-md transition-all duration-300 text-sm py-2">
                        Request Quote
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
                </div>

           
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2.5 mb-6 border border-primary/20">
              <ThumbsUp className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary tracking-wide">Why SPACR</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
              Why Choose Us
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Six reasons why SPACR is the trusted choice for concrete cover blocks
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-primary/40 hover:-translate-y-1 bg-white group">
                  <CardHeader className="pb-4">
                    <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <div className="text-primary">
                        {reason.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {reason.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section id="industries-served" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2.5 mb-6 border border-primary/20">
              <Building className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary tracking-wide">Industries</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
              Industries Served
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              SPACR Cover Blocks are used in diverse construction projects across India
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {industries.map((industry, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-primary/40 hover:-translate-y-1 bg-white group">
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <div className="text-primary">
                        {industry.icon}
                      </div>
                    </div>
                    <CardTitle className="text-sm md:text-base font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {industry.name}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <OurPartners />
      
      {/* Quality Control Section */}
      <section id="quality" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6 border border-primary/20">
              <span className="text-sm font-semibold text-primary">ISO 9001:2015</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
              Quality Control
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Our consistent QC process ensures durability in every batch.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">Material Selection</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FlaskConical className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-base md:text-lg font-semibold text-gray-900">High-grade cement</CardTitle>
                </CardHeader>
              </Card>
              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Scale className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-base md:text-lg font-semibold text-gray-900">Screened fine & coarse aggregates</CardTitle>
                </CardHeader>
              </Card>
              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-base md:text-lg font-semibold text-gray-900">Controlled water-cement ratio</CardTitle>
                </CardHeader>
              </Card>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">Production Checks</h3>
            <div className="grid md:grid-cols-5 gap-4 mb-16">
              {[
                "Dimension accuracy",
                "Compressive strength",
                "Surface finish",
                "Mix consistency",
                "Curing duration"
              ].map((check, index) => (
                <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-sm md:text-base font-semibold text-gray-900">{check}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">Post-Production Checks</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FileCheck2 className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-base md:text-lg font-semibold text-gray-900">Random sampling</CardTitle>
                </CardHeader>
              </Card>
              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-base md:text-lg font-semibold text-gray-900">Crack inspection</CardTitle>
                </CardHeader>
              </Card>
              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-base md:text-lg font-semibold text-gray-900">Packing and stacking quality</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-24 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2.5 mb-6 border border-primary/20">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary tracking-wide">Contact Us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
              Get in Touch
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              For enquiries, quotations, or bulk supply
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-white border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-primary text-black rounded-t-lg">
                  <CardTitle className="text-black font-bold text-xl">Send us a Message</CardTitle>
                  <CardDescription className="text-black/80">
                    Fill out the form below and we'll respond within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                  <div className="space-y-4">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      This external form can't be embedded on this site (iframe blocked by the provider). Use the button below to open it.
                    </p>
                    <Button
                      type="button"
                      size="lg"
                      onClick={() =>
                        window.open(
                          "https://blurstone.m.frappe.cloud/lead-form-for-website-/new",
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                      className="w-full bg-primary hover:bg-primary/90 text-black border-none"
                    >
                      Open Contact Form
                    </Button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 hidden">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        className="border-primary/20 focus:border-primary mt-2"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                        className="border-primary/20 focus:border-primary mt-2"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="border-primary/20 focus:border-primary mt-2"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <Label htmlFor="address" className="text-gray-700 font-medium">Address *</Label>
                      <Input
                        id="address"
                        value={formData.address || ""}
                        onChange={(e) => handleChange("address", e.target.value)}
                        required
                        className="border-primary/20 focus:border-primary mt-2"
                        placeholder="Your Address"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-gray-700 font-medium">Your Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        className="border-primary/20 focus:border-primary mt-2"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <Label htmlFor="inquiryType" className="text-gray-700 font-medium">Inquiry Type</Label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleChange("inquiryType", value)}>
                        <SelectTrigger className="border-primary/20 focus:border-primary mt-2">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bulk-buyer">Bulk Buyer (Project)</SelectItem>
                          <SelectItem value="dealership">Dealership</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-700 font-medium">Message *</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tell us about your project requirements, quantities needed, or any questions you have..."
                        required
                        className="border-primary/20 focus:border-primary mt-2"
                      />
                    </div>

                      <div className="space-y-3">
                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-black font-semibold shadow-sm hover:shadow-md transition-all duration-300">
                          <Send className="mr-2 h-4 w-4" />
                          Request a Quote
                        </Button>
                        <div className="grid grid-cols-2 gap-3">
                          
            </div>
          </div>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-gray-900 font-bold text-xl">Get In Touch</CardTitle>
                    <CardDescription className="text-gray-600">
                      Multiple ways to reach our team
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1.5 text-gray-900">Phone</h3>
                        <p className="text-gray-700 font-medium">+91 95759 35161</p>
                        <p className="text-gray-700 font-medium">+91 79997 35161</p>
                        <p className="text-sm text-gray-500 mt-1">Mon-Sat: 9:00 AM - 6:00 PM</p>
                      </div>
        </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1.5 text-gray-900">Email</h3>
                        <p className="text-gray-700">sales@spacrconcrete.com</p>
                        <p className="text-sm text-gray-500 mt-1">Response within 4 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1.5 text-gray-900">Address</h3>
                        <p className="text-gray-700 leading-relaxed">
                          289/14, Chhatarpura, Dist Sehore, Madhya Pradesh, 466665, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-black" />
                </div>
                      <div>
                        <h3 className="font-semibold mb-1.5 text-gray-900">Working Hours</h3>
                        <p className="text-gray-700">
                          Mon–Sat | 9:00 AM – 6:00 PM
                        </p>
              </div>
                </div>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
