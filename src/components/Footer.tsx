
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/uplode/spacer-new.png" 
              alt="SPACR Logo" 
              className="h-16 md:h-20 w-auto"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              SPACR Cover Block is a dedicated concrete spacer manufacturing brand committed to improving construction quality, safety, and structural life. We provide dimensionally accurate, high-strength, and durable cover blocks that guarantee perfect concrete cover in every structure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" onClick={(e) => { e.preventDefault(); const el = document.getElementById('home'); el?.scrollIntoView({ behavior: 'smooth' }); }} className="block text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer">Home</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); const el = document.getElementById('about'); el?.scrollIntoView({ behavior: 'smooth' }); }} className="block text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer">About Us</a>
              <a href="#products" onClick={(e) => { e.preventDefault(); const el = document.getElementById('products'); el?.scrollIntoView({ behavior: 'smooth' }); }} className="block text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer">Products</a>
              <a href="#why-choose-us" onClick={(e) => { e.preventDefault(); const el = document.getElementById('why-choose-us'); el?.scrollIntoView({ behavior: 'smooth' }); }} className="block text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer">Why Choose Us</a>
              <a href="#industries-served" onClick={(e) => { e.preventDefault(); const el = document.getElementById('industries-served'); el?.scrollIntoView({ behavior: 'smooth' }); }} className="block text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer">Industries Served</a>
              <a href="#quality" onClick={(e) => { e.preventDefault(); const el = document.getElementById('quality'); el?.scrollIntoView({ behavior: 'smooth' }); }} className="block text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer">Quality Control</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); const el = document.getElementById('contact'); el?.scrollIntoView({ behavior: 'smooth' }); }} className="block text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer">Contact Us</a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <a href="#products" onClick={(e) => { e.preventDefault(); const el = document.getElementById('products'); el?.scrollIntoView({ behavior: 'smooth' }); }} className="block hover:text-yellow-400 transition-colors cursor-pointer">Single Cover Block/Spacers</a>
              <a href="#products" onClick={(e) => { e.preventDefault(); const el = document.getElementById('products'); el?.scrollIntoView({ behavior: 'smooth' }); }} className="block hover:text-yellow-400 transition-colors cursor-pointer">Round Cover Block</a>
              <a href="#products" onClick={(e) => { e.preventDefault(); const el = document.getElementById('products'); el?.scrollIntoView({ behavior: 'smooth' }); }} className="block hover:text-yellow-400 transition-colors cursor-pointer">Multisize Cover Block</a>
              <a href="#products" onClick={(e) => { e.preventDefault(); const el = document.getElementById('products'); el?.scrollIntoView({ behavior: 'smooth' }); }} className="block hover:text-yellow-400 transition-colors cursor-pointer">Distance Bar/ Cover Kanda</a>
              <a href="#products" onClick={(e) => { e.preventDefault(); const el = document.getElementById('products'); el?.scrollIntoView({ behavior: 'smooth' }); }} className="block hover:text-yellow-400 transition-colors cursor-pointer">Special Cover Block</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <div className="text-gray-400 text-sm">
                  <div>+91 95759 35161</div>
                  <div>+91 79997 35161</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-gray-400 text-sm">sales@spacrconcrete.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span className="text-gray-400 text-sm">289/14, Chhatarpura, Dist Sehore, Madhya Pradesh, 466665, India</span>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <a 
                  href="https://www.instagram.com/spacrconcrete/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.facebook.com/blurstonegroup" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/spacr-concrete-310a13398/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 SPACR Cover Block. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
