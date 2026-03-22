
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Users, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const Contact = () => {
  const { toast } = useToast();
  const externalLeadFormUrl = "https://blurstone.m.frappe.cloud/lead-form-for-website-/new";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }

    // Using Web3Forms API - Simple and free email service
    // Get your access key from: https://web3forms.com/
    // Just enter your email (sales@spacrconcrete.com) and get the access key
    
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE';

    const formDataToSend = {
      access_key: accessKey,
      subject: `New Contact Form Submission from ${formData.name}`,
      from_name: formData.name,
      email: formData.email,
      phone: formData.phone || 'Not provided',
      company: formData.company || 'Not provided',
      inquiry_type: formData.inquiryType || 'Not specified',
      message: formData.message,
      // This will send email to sales@spacrconcrete.com
      to: 'sales@spacrconcrete.com',
    };

    try {
      // If access key is not configured, show helpful message
      if (accessKey === 'YOUR_ACCESS_KEY_HERE') {
        toast({
          title: "Email Service Not Configured",
          description: "Please configure Web3Forms access key. Check console for setup instructions.",
          variant: "destructive"
        });
        console.error('Web3Forms not configured!');
        console.log('To fix this:');
        console.log('1. Go to https://web3forms.com/');
        console.log('2. Enter your email: sales@spacrconcrete.com');
        console.log('3. Get your access key');
        console.log('4. Add to .env file: VITE_WEB3FORMS_ACCESS_KEY=your_access_key');
        return;
      }

      // Send email using Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formDataToSend)
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          inquiryType: "",
          message: ""
        });
      } else {
        throw new Error(result.message || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact us directly at sales@spacrconcrete.com",
        variant: "destructive"
      });
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-primary text-black animate-fade-in">
          <div className="container pt-24 mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6 animate-slide-up">Get in Touch</h1>
              <p className="text-xl text-white/90 animate-slide-up">
                For enquiries, quotations, or bulk supply
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="bg-primary text-black">
                    <CardTitle className="text-black">Send us a Message</CardTitle>
                    <CardDescription className="text-black/80">
                      Fill out the form below and we'll respond within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 md:p-8">
                    <div className="space-y-4">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        This external form can&apos;t be embedded on this site (iframe blocked by the provider). Use the button below to open it in a new tab.
                      </p>
                      <Button
                        type="button"
                        size="lg"
                        onClick={() =>
                          window.open(externalLeadFormUrl, "_blank", "noopener,noreferrer")
                        }
                        className="w-full bg-primary hover:bg-primary/90 text-black border-none"
                      >
                        Open Contact Form
                      </Button>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6 hidden">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            required
                            className="border-primary/20 focus:border-primary mt-2"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-gray-700 font-medium">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            required
                            className="border-primary/20 focus:border-primary mt-2"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            className="border-primary/20 focus:border-primary mt-2"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company" className="text-gray-700 font-medium">Company Name</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleChange("company", e.target.value)}
                            className="border-primary/20 focus:border-primary mt-2"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="inquiryType" className="text-gray-700 font-medium">Inquiry Type</Label>
                        <Select value={formData.inquiryType} onValueChange={(value) => handleChange("inquiryType", value)}>
                          <SelectTrigger className="border-primary/20 focus:border-primary mt-2">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="quote">Product Quote</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="bulk">Bulk Order</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
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
                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-black border-none">
                          <Send className="mr-2 h-4 w-4" />
                          Request a Quote
                        </Button>
                        <div className="grid grid-cols-2 gap-3">
                          <Button type="button" size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                            <Phone className="mr-2 h-4 w-4" />
                            Call Now
                          </Button>
                          <Button type="button" size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                            WhatsApp Chat
                          </Button>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 animate-fade-in">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-primary">Get In Touch</CardTitle>
                    <CardDescription>
                      Multiple ways to reach our team
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-gray-800">Phone</h3>
                        <p className="text-gray-600 font-medium">+91 95759 35161</p>
                        <p className="text-gray-600 font-medium">+91 79997 35161</p>
                        <p className="text-sm text-gray-500">Mon-Sat: 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-gray-800">Email</h3>
                        <p className="text-gray-600">sales@spacrconcrete.com</p>
                        <p className="text-sm text-gray-500">Response within 4 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-gray-800">Address</h3>
                        <p className="text-gray-600">
                          289/14, Chhatarpura, Dist Sehore, Madhya Pradesh, 466665, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-gray-800">Working Hours</h3>
                        <p className="text-gray-600">
                          Mon–Sat | 9:00 AM – 6:00 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary/10 border-primary/20 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-black flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      Quick Response Promise
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center">
                        <Award className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm">Email inquiries: Within 4 hours</span>
                      </li>
                      <li className="flex items-center">
                        <Award className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm">Quote requests: Within 24 hours</span>
                      </li>
                      <li className="flex items-center">
                        <Award className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm">Technical support: Within 2 hours</span>
                      </li>
                      <li className="flex items-center">
                        <Award className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm">Bulk orders: Same day response</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-black hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-black flex items-center">
                      <Users className="mr-2 h-5 w-5" />
                      Visit Our Facility
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black/80 mb-4">
                      See our manufacturing process firsthand. Schedule a facility tour to understand 
                      our quality standards and production capabilities.
                    </p>
                    <Button variant="outline" className="w-full bg-black text-yellow-400 hover:bg-black/90 border-yellow-400">
                      Schedule Facility Tour
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
