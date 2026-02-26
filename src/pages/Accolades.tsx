import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award, Globe2, Medal, FileText, Building2 } from "lucide-react";

const Accolades = () => {
  const recognitions = [
    { icon: <Award className="h-6 w-6 text-white" />, title: "ISO 9001:2015", desc: "Certified Quality Management System" },
    { icon: <Medal className="h-6 w-6 text-white" />, title: "Preferred Vendor", desc: "Approved supplier to leading EPCs and contractors" },
    { icon: <FileText className="h-6 w-6 text-white" />, title: "Lab Validations", desc: "Third‑party test reports for strength and absorption" },
    { icon: <Globe2 className="h-6 w-6 text-white" />, title: "Global Footprint", desc: "Supplying projects across multiple countries" },
  ];

  const projects = [
    { name: "Metro Rail Infrastructure", detail: "Use of heavy duty spacers in elevated corridors" },
    { name: "Power Plant Cooling Towers", detail: "Special spacers for complex precast moulds" },
    { name: "Bridges & Flyovers", detail: "High strength, low absorption cover blocks" },
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero */}
        <section className="py-20 bg-primary text-black">
          <div className="container pt-24 mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Accolades & Approvals</h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 px-4">Chosen for quality. Trusted for performance.</p>
            </div>
          </div>
        </section>

        {/* Recognition tiles */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
              {recognitions.map((r) => (
                <Card key={r.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">{r.icon}</div>
                    <CardTitle className="text-lg">{r.title}</CardTitle>
                    <CardDescription>{r.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured projects */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10 text-primary px-4">Featured Applications</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {projects.map((p) => (
                  <Card key={p.name} className="hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                        <Building2 className="h-6 w-6 text-white" />
                      </div>
                      <div className="font-semibold text-gray-900 mb-1">{p.name}</div>
                      <div className="text-gray-600 text-sm">{p.detail}</div>
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

export default Accolades;


