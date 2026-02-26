
import { Shield, Award, Target, Heart, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

const About = () => {
  const values = [
    {
      letter: "S",
      word: "Strength",
      description: "High compressive strength for structural reliability."
    },
    {
      letter: "P",
      word: "Precision",
      description: "Accurate dimensions as per IS standards."
    },
    {
      letter: "A",
      word: "Assurance",
      description: "Consistency in every batch."
    },
    {
      letter: "C",
      word: "Commitment",
      description: "On-time supply and customer satisfaction."
    },
    {
      letter: "R",
      word: "Reliability",
      description: "Long-term performance and durability."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-primary text-black animate-fade-in">
          <div className="container pt-24 mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 animate-slide-up">About Us</h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 animate-slide-up">
                SPACR Cover Block — Specialized manufacturer of high-quality concrete spacers
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-primary">Who We Are</h2>
              <div className="prose prose-lg mx-auto text-gray-600 space-y-6">
                <p className="text-center text-lg">
                  SPACR Cover Block is a specialized manufacturer of high-quality concrete spacers designed to deliver perfect concrete cover in every structure.
                </p>
                <p className="text-center text-lg">
                  With a commitment to engineering precision, SPACR ensures each product meets strict IS standards, offering excellent strength, dimensional accuracy, and long-term durability.
                </p>
                <p className="text-center text-lg">
                  Our manufacturing process uses controlled batching, vibration technology, and systematic curing to ensure consistency in every piece.
                </p>
                <p className="text-center text-lg">
                  From residential to high-rise, infrastructure to industrial projects, SPACR supports builders, contractors, and engineers with reliable and timely supply.
                </p>
                <p className="text-center text-lg font-semibold text-gray-900">
                  At SPACR, we don't just make cover blocks — we strengthen the foundation of India's future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Target className="h-8 w-8 text-black" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-primary">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-lg">
                      To be India's leading brand in concrete spacers — trusted for quality and engineering excellence.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-primary">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-lg">
                      To supply strong, accurate, and certified cover blocks that ensure perfect concrete cover and long-term durability in every project.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values - SPACR */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-primary">Core Values</h2>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-primary/20">
                    <CardHeader>
                      <div className="text-6xl font-extrabold text-primary mb-2">{value.letter}</div>
                      <CardTitle className="text-xl font-bold mb-2">{value.word}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-black" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Commitment</h2>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                We deliver consistency, strength, and trust — in every single cover block.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
