
import { Shield, Factory, Award, Zap, Truck, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: "IS-Standard Quality",
      description: "We follow strict testing protocols for strength, accuracy, and finishing."
    },
    {
      icon: <Factory className="h-12 w-12" />,
      title: "Modern Manufacturing",
      description: "Vibration technology + controlled batching = premium-quality finish."
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "Durable & Strong",
      description: "Blocks designed for long-term protection of reinforcement steel."
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Faster Construction",
      description: "Uniform dimensions reduce alignment issues and improve casting speed."
    },
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Reliable Bulk Supply",
      description: "Trusted by contractors and infrastructure companies across India."
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Customer-First Service",
      description: "Timely delivery + continuous support for project requirements."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-primary text-black animate-fade-in">
          <div className="container pt-24 mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 animate-slide-up">Why Choose Us</h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 animate-slide-up">
                Six reasons why SPACR is the trusted choice for concrete cover blocks
              </p>
            </div>
          </div>
        </section>

        {/* Reasons Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {reasons.map((reason, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow border border-gray-200">
                    <CardHeader>
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <div className="text-primary">
                          {reason.icon}
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-primary">{reason.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{reason.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WhyChooseUs;

