
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Award, FlaskConical, FileCheck2, Scale } from "lucide-react";

const Quality = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero */}
        <section className="py-20 bg-primary text-black">
          <div className="container pt-24 mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1 mb-4">
                <Badge className="bg-white text-primary border-none">ISO 9001:2015</Badge>
                <span className="text-white/90 text-sm">Certified Quality Management System</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Quality Control</h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 px-4">Our consistent QC process ensures durability in every batch.</p>
            </div>
          </div>
        </section>

        {/* Material Selection */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Material Selection</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">
                      <FlaskConical className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>High-grade cement</CardTitle>
                  </CardHeader>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">
                      <Scale className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Screened fine & coarse aggregates</CardTitle>
                  </CardHeader>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Controlled water-cement ratio</CardTitle>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Production Checks */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Production Checks</h2>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  "Dimension accuracy",
                  "Compressive strength",
                  "Surface finish",
                  "Mix consistency",
                  "Curing duration"
                ].map((check, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                    <CardHeader>
                      <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                      <CardTitle className="text-base">{check}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Post-Production Checks */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Post-Production Checks</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">
                      <FileCheck2 className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Random sampling</CardTitle>
                  </CardHeader>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Crack inspection</CardTitle>
                  </CardHeader>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Packing and stacking quality</CardTitle>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl md:text-2xl text-gray-300">
                Our consistent QC process ensures durability in every batch.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Quality;
