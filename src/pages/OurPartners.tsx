import { Card, CardContent } from "@/components/ui/card";
import { Handshake } from "lucide-react";

const partners = [
  { name: "L&T Construction", logo: "/our-partners/engineering.jpeg" },
  { name: "Tata Projects", logo: "/our-partners/jagran-social.jpeg" },
  { name: "Shapoorji Pallonji", logo: "/our-partners/padmanabh.jpeg" },
  { name: "DLF", logo: "/our-partners/sagar-group.jpeg" },
  { name: "Adani Realty", logo: "/our-partners/transrail.jpeg" },
  { name: "Apex", logo: "/our-partners/apex.jpg" },
  { name: "IJMC", logo: "/our-partners/IJMCPL.jpg" },
  { name: "je", logo: "/our-partners/je.jpg" },
  { name: "rcc", logo: "/our-partners/rcc.jpg" },
  { name: "RIPL", logo: "/our-partners/RIPL.jpg" },
];

const OurPartners = () => {
  // 👇 duplicate for infinite loop
  const loopPartners = [...partners, ...partners];

  return (
    <section id="partners" className="py-24 bg-gray-50 scroll-mt-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2.5 mb-6 border border-primary/20">
            <Handshake className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide">
              Our clients
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
            Trusted By Industry Leaders
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            SPACR Cover Blocks are proudly used in residential, commercial,
            and infrastructure projects by leading construction companies
            across India.
          </p>
        </div>

        {/* ✅ Auto Moving Slider */}
        <div className="overflow-hidden relative">
          <div className="flex gap-6 w-max animate-partner-scroll">

            {loopPartners.map((partner, index) => (
              <Card
                key={index}
                className="min-w-[200px] sm:min-w-[220px] lg:min-w-[240px] bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 flex-shrink-0"
              >
                <CardContent className="flex items-center justify-center p-6 h-48">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </CardContent>
              </Card>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default OurPartners;
