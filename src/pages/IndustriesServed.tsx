
import { Building, Factory, Warehouse, MapPin, Wrench, HardHat } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

const IndustriesServed = () => {
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
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-primary text-black animate-fade-in">
          <div className="container pt-24 mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 animate-slide-up">Industries Served</h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 animate-slide-up">
                SPACR Cover Blocks are used in diverse construction projects across India
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {industries.map((industry, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow border border-gray-200">
                    <CardHeader>
                      <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <div className="text-primary">
                          {industry.icon}
                        </div>
                      </div>
                      <CardTitle className="text-base font-semibold">{industry.name}</CardTitle>
                    </CardHeader>
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

export default IndustriesServed;

