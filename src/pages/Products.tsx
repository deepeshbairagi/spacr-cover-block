
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Eye, Star, Award, Shield, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import RequestQuoteModal from "@/components/RequestQuoteModal";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedShape, setSelectedShape] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");

  const products = [
    {
      id: "1",
      name: "Single Cover Block/Spacers",
      shape: "Various",
      size: "15mm-100mm",
      description: "Single Size Cover Block/Spacers - A Single Size Cover Block is a precision-moulded concrete spacer designed to provide a uniform and accurate cover for reinforcement bars. Each block offers one fixed cover thickness, ensuring consistent spacing between rebar and formwork. Ideal for slabs, beams, columns, footings, and precast elements.",
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
        "Concrete Grade": "M60",
        "Typical Use": "Foundations, columns, beams, industrial RCC structures"
      },
      specTable: [
        { code: "BS50HD", coverSize: "50 MM", maxRebar: "40 MM", minBreaking: "-", packing: "100" },
        { code: "BS60HD", coverSize: "60 MM", maxRebar: "40 MM", minBreaking: "-", packing: "100" },
        { code: "BS70HD", coverSize: "70 MM", maxRebar: "40 MM", minBreaking: "-", packing: "50" },
        { code: "BS75HD", coverSize: "75 MM", maxRebar: "40 MM", minBreaking: "-", packing: "50" }
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
      ]
    },
    { 
      id: "5",
      name: "Multisize Cover Block/Spacers",
      shape: "Various",
      size: "Multiple",
      description: "SPACR’s Multisize Cover Block is a versatile concrete spacer designed to provide multiple cover thickness options within a single block. With carefully designed grooves or stepped profiles, it allows contractors to achieve different cover sizes using just one product, making it highly efficient and cost-effective on construction sites.",
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
      specTable: [
        { code: "BS2025B", coverSize: "20/25 MM", maxRebar: "-", minBreaking: "-", packing: "700" },
        { code: "BS3040", coverSize: "30/40 MM", maxRebar: "-", minBreaking: "-", packing: "500" },
        { code: "BS2025A", coverSize: "20/25 MM", maxRebar: "-", minBreaking: "-", packing: "500" },
        { code: "BS2040", coverSize: "20/25/40/50 MM", maxRebar: "-", minBreaking: "-", packing: "250" },
        { code: "BS3050", coverSize: "30/35/45/50 MM", maxRebar: "-", minBreaking: "-", packing: "200" },
        { code: "BS5060", coverSize: "50/60 MM", maxRebar: "-", minBreaking: "-", packing: "100" }
      ]
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesShape = selectedShape === "all" || product.shape.toLowerCase() === selectedShape.toLowerCase();
    const matchesSize = selectedSize === "all" || product.size === selectedSize;
    
    return matchesSearch && matchesShape && matchesSize;
  });

  const shapes = [...new Set(products.map(p => p.shape))];
  const sizes = [...new Set(products.map(p => p.size))];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-primary text-black animate-fade-in">
          <div className="container mx-auto px-4 pt-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6 animate-slide-up">Concrete Cover Blocks</h1>
              <p className="text-xl text-white/90 animate-slide-up">
                High-quality concrete spacers designed to deliver perfect concrete cover in every structure
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-white border-b animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center w-full">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full border-primary/20 focus:border-primary"
                  />
                </div>
                
                <div className="flex gap-2 md:gap-4 w-full md:w-auto">
                  <Select value={selectedShape} onValueChange={setSelectedShape}>
                    <SelectTrigger className="flex-1 md:w-40 border-primary/20 focus:border-primary">
                      <SelectValue placeholder="Shape" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Shapes</SelectItem>
                      {shapes.map(shape => (
                        <SelectItem key={shape} value={shape.toLowerCase()}>{shape}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger className="flex-1 md:w-40 border-primary/20 focus:border-primary">
                      <SelectValue placeholder="Size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sizes</SelectItem>
                      {sizes.map(size => (
                        <SelectItem key={size} value={size}>{size}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <Card key={product.id} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in group">
                    <CardHeader className="p-0">
                      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl text-primary">{product.name}</CardTitle>
                          <Badge className="bg-primary text-black border-none">{product.grade}</Badge>
                        </div>
                        <CardDescription className="text-gray-600 mb-4">{product.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                            {product.shape}
                          </Badge>
                          <Badge variant="outline" className="border-primary/30 text-primary">
                            {product.size}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-2 text-gray-700">Key Features:</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {product.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <Star className="h-3 w-3 text-primary mr-1" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex gap-2">
                        <RequestQuoteModal productName={product.name}>
                          <Button className="flex-1 bg-primary hover:bg-primary/90 text-black border-none">
                            Request Quote
                          </Button>
                        </RequestQuoteModal>
                        <Link to={`/products/${product.id}`}>
                          <Button variant="outline" size="icon" className="border-primary/30 text-primary hover:bg-primary/10">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12 animate-fade-in">
                  <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                  <Button 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedShape("all");
                      setSelectedSize("all");
                    }}
                    className="mt-4 bg-primary hover:bg-primary/90 text-black"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Product Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-primary">Product Features</h2>
              <div className="grid md:grid-cols-5 gap-6">
                {[
                  { icon: <Award className="h-8 w-8" />, title: "High Compressive Strength" },
                  { icon: <Calculator className="h-8 w-8" />, title: "Dimension Accuracy" },
                  { icon: <Shield className="h-8 w-8" />, title: "Crack-Free & Durable" },
                  { icon: <Eye className="h-8 w-8" />, title: "Water & Weather Resistant" },
                  { icon: <Award className="h-8 w-8" />, title: "IS Code Compliant" }
                ].map((feature, index) => (
                  <div key={index} className="text-center animate-fade-in">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                      <div className="text-black">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-base font-semibold">{feature.title}</h3>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <p className="text-gray-600 text-lg">
                  All sizes (15mm to 100mm) available for each type of cover block
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Products;
