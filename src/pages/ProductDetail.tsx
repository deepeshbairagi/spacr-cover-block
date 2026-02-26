import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import RequestQuoteModal from "@/components/RequestQuoteModal";
import { Star, Award, Shield, CheckCircle, ArrowLeft, Eye, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  const handleBackClick = () => {
    navigate("/?scrollTo=products");
  };
  
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
      specifications: {
        "Common Sizes": "20 mm, 25 mm, 30 mm, 40 mm, 50 mm, 75 mm, 100 mm (custom sizes available)",
        "Concrete Grade": "M60",
        "Typical Use": "Slabs, beams, columns, footings, precast components"
      },
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
        "Concrete Grade": "M60",
        "Typical Use": "Columns, walls, cages, and precast elements"
      },
      specTable: [
        { code: "BSR020", coverSize: "20 MM", thickness: "20 MM", maxRebar: "12 MM", packing: "500" },
        { code: "BSR025", coverSize: "25 MM", thickness: "18 MM", maxRebar: "12 MM", packing: "250" },
        { code: "BSR030", coverSize: "30 MM", thickness: "18 MM", maxRebar: "14 MM", packing: "200" },
        { code: "BSR035", coverSize: "35 MM", thickness: "18 MM", maxRebar: "12 MM", packing: "125" },
        { code: "BSR040", coverSize: "40 MM", thickness: "20 MM", maxRebar: "12 MM", packing: "100" },
        { code: "BSR50A", coverSize: "50 MM", thickness: "20 MM", maxRebar: "12 MM", packing: "90" },
        { code: "BSR50B", coverSize: "50 MM", thickness: "30 MM", maxRebar: "12 MM", packing: "90" },
        { code: "BSR060", coverSize: "60 MM", thickness: "35 MM", maxRebar: "16 MM", packing: "80" },
        { code: "BSR065", coverSize: "65 MM", thickness: "35 MM", maxRebar: "18 MM", packing: "50" },
        { code: "BS075A", coverSize: "75 MM", thickness: "50 MM", maxRebar: "20 MM", packing: "20" },
        { code: "BS075B", coverSize: "75 MM", thickness: "35 MM", maxRebar: "20 MM", packing: "20" },
        { code: "BS075C", coverSize: "75 MM", thickness: "26 MM", maxRebar: "14 MM", packing: "25" },
        { code: "BS100A", coverSize: "100 MM", thickness: "40 MM", maxRebar: "18 MM", packing: "10" }
      ],
      advantages: [
        "360° uniform cover",
        "Stable on uneven surfaces",
        "Minimizes point contact",
        "Safe handling with smooth edges",
        "Easy and quick placement",
        "High load-bearing capacity",
        "Perfect for vertical reinforcement"
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
      applications: [
        "Foundations",
        "Columns",
        "Beams",
        "Industrial RCC Structures"
      ],
      specifications: {
        "Common Sizes": "50 mm, 60 mm, 65 mm, 70 mm, 75 mm, 100 mm (we also manufacture custom sizes as per your project requirement.)",
        "Concrete Grade": "M60",
        "Typical Use": "Foundations, columns, beams, industrial RCC structures",
        "Max. Permissible Rebar Dia.": "40 MM",
        "Packaging per Bag": "100 / 100 / 50 / 50"
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
        "Ideal for congested reinforcement",
        "Accurate cover thickness",
        "Wide & stable base",
        "Excellent bond with concrete",
        "Corrosion resistant"
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
        "Concrete Grade": "M60",
        "Typical Use": "Retaining walls, water tanks, footings, beams, and other RCC structures"
      },
      specTable: [
        { code: "BSDB150", coverSize: "150 MM", crossSec: "30x30", packing: "100" },
        { code: "BSDB200", coverSize: "200 MM", crossSec: "30x30", packing: "100" },
        { code: "BSDB230", coverSize: "230 MM", crossSec: "30x30", packing: "75" },
        { code: "BSDB250", coverSize: "250 MM", crossSec: "30x30", packing: "75" },
        { code: "BSDB300", coverSize: "300 MM", crossSec: "40x40", packing: "50" },
        { code: "BSDB350", coverSize: "350 MM", crossSec: "40x40", packing: "50" },
        { code: "BSDB400", coverSize: "400 MM", crossSec: "40x40", packing: "20" },
        { code: "BSDB450", coverSize: "450 MM", crossSec: "50x50", packing: "20" },
        { code: "BSDB600", coverSize: "600 MM", crossSec: "60x60", packing: "10" }
      ],
      advantages: [
        "Maintains uniform rebar spacing",
        "Accurate dimension control",
        "High strength and rigidity",
        "Prevents rebar displacement during concreting",
        "Fast and easy installation",
        "Improves overall construction quality",
        "Perfect bond with concrete",
        "Custom sizes available"
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
      applications: ["Widely used across RCC work"],
      specifications: {
        "Common Sizes": "20/25 mm, 30/40 mm, 50/60 mm, 20/25/40/50 mm, 30/40/45/50 mm, 90/100 mm (we also manufacture custom sizes as per your project requirement.)",
        "Concrete Grade": "M60"
      },
      specTable: [
        { code: "BS2025B", coverSize: "20/25 MM", shape: "Flip", packing: "700" },
        { code: "BS3040", coverSize: "30/40 MM", shape: "Y Shape", packing: "500" },
        { code: "BS2025A", coverSize: "20/25 MM", shape: "Square", packing: "500" },
        { code: "BS2040", coverSize: "20/25/40/50 MM", shape: "-", packing: "250" },
        { code: "BS3050", coverSize: "30/35/45/50 MM", shape: "-", packing: "200" },
        { code: "BS5060", coverSize: "50/60 MM", shape: "Square", packing: "100" }
      ]
    },

    {
      id: "6",
      name: "Standard Rectangle",
      shape: "Rectangle",
      size: "25mm",
      description: "Versatile rectangular blocks suitable for a wide range of construction applications, offering reliable performance and cost-effectiveness.",
      grade: "M45",
      image: "/product-image/Distance%20BarCover%20Kanda.jpg",
      features: ["Versatile rectangular design", "Standard industry dimensions", "Reliable performance across applications", "Cost-effective solution for most projects"],
      applications: ["General construction projects", "Residential building work", "Standard commercial applications", "Routine reinforcement needs"],
      specifications: {
        "Compressive Strength": "45+ N/mm²",
        "Water Absorption": "< 5%",
        "Dimension Tolerance": "±1mm",
        "Weight": "15-18g per piece"
      },
      advantages: ["Versatile application", "Standard dimensions", "Reliable quality", "Cost-effective pricing"]
    }
  ];

  const product = products.find(p => p.id === id);
  
  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const relatedProducts = products.filter(p => p.id !== id).slice(0, 3);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Breadcrumb / Back Button */}
        <section className="py-6 bg-white border-b animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <button 
                onClick={handleBackClick}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Products
              </button>
            </div>
          </div>
        </section>

        {/* Product Detail - Left Content, Right Image Layout */}
        <section className="py-12 animate-fade-in">
          <div className="container mx-auto ">
            <div className="max-w-8xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Left Side - Content */}
                <div className="space-y-6">
                  {/* Back Button */}
                  <button 
                    onClick={handleBackClick}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium mb-4"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Products
                  </button>

                  {/* Title */}
                  <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-300 tracking-wide mb-3">
                      {product.name.toUpperCase()}
                    </h1>
                    {/* Yellow underline */}
                    <div className="w-24 h-1 bg-yellow-400 rounded mb-6"></div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {product.description}
                  </p>

                  {/* Specifications table */}
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                    <div className="bg-yellow-400 text-black font-semibold text-sm md:text-base px-4 py-3 border-b border-gray-200">
                      <div className={`grid ${product.id === "2" ? "grid-cols-5" : "grid-cols-4"} gap-2 md:gap-4 text-xs md:text-sm`}>
                        <div>Product Code</div>
                        <div>Cover Size</div>
                        {product.id === "2" && <div>Thickness</div>}
                        <div>
                          {product.id === "5" ? "Shape" : product.id === "4" ? "Cross Sec." : "Max. Permissible Rebar Dia."}
                        </div>
                        <div>Packaging per Bag</div>
                      </div>
                    </div>

                    <div className="p-4 overflow-x-auto">
                      <table className="w-full text-sm md:text-base">
                        <tbody>
                          {Array.isArray(product.specTable)
                            ? product.specTable.map((row: any, idx: number) => (
                                <tr key={idx} className={`border-b last:border-b-0 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                  <td className="py-3 px-2 md:px-3 font-medium">{row.code}</td>
                                  <td className="py-3 px-2 md:px-3">{row.coverSize}</td>
                                  {product.id === "2" && <td className="py-3 px-2 md:px-3">{row.thickness}</td>}
                                  <td className="py-3 px-2 md:px-3">
                                    {product.id === "5" ? row.shape : product.id === "4" ? row.crossSec : row.maxRebar}
                                  </td>
                                  <td className="py-3 px-2 md:px-3">{row.packing}</td>
                                </tr>
                              ))
                            : (
                              <tr className="border-b last:border-b-0 bg-gray-50">
                                <td className="py-3 px-3">{`AS${product.size?.replace(/[^0-9]/g, '') || product.id}`}</td>
                                <td className="py-3 px-3">{product.size}</td>
                                {product.id === "2" && <td className="py-3 px-3">-</td>}
                                <td className="py-3 px-3">
                                  {product.id === "5" ? "-" : product.id === "4" ? "-" : product.specifications?.['Max. Permissible Rebar Dia.'] || '-'}
                                </td>
                                <td className="py-3 px-3">{product.specifications?.['Packaging per Bag'] || '-'}</td>
                              </tr>
                            )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Common Sizes */}
                  <div className="pt-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Common Sizes</h3>
                    <p className="text-gray-600 mb-6">
                      {product.specifications?.['Common Sizes'] || '20 mm, 25 mm, 30 mm, 40 mm, 50 mm, 75 mm, 100 mm (we also manufacture custom sizes as per your project requirement.)'}
                    </p>
                  </div>

                  {/* Applications */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Applications</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                      {Array.isArray(product.applications) && product.applications.map((app, idx) => (
                        <li key={idx}>{app}</li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3 pt-4">
                    <RequestQuoteModal productName={product.name}>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-black border-none text-lg py-6 transition-all duration-300 hover:shadow-lg">
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        Request Quote
                      </Button>
                    </RequestQuoteModal>
                    <Button variant="outline" size="lg" className="w-full border-primary/30 text-primary hover:bg-primary/10 py-6">
                      <Eye className="h-5 w-5 inline-block mr-2" /> Preview
                    </Button>
                  </div>
                </div>

                {/* Right Side - Large Product Image */}
                <div className="sticky top-24 lg:block">
                  <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-200">
                    <div className="aspect-square w-full max-w-lg mx-auto">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                    {/* Product Grade Badge */}
                    <div className="mt-4 text-center">
                      <Badge className="bg-primary text-black border-none font-semibold text-base px-4 py-2">
                        {product.grade}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Products */}
              {/* {relatedProducts.length > 0 && (
                <div className="mt-16 animate-fade-in">
                  <h2 className="text-3xl font-bold text-primary text-center mb-12">Related Products</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {relatedProducts.map((relatedProduct) => (
                      <Card key={relatedProduct.id} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                        <CardContent className="p-0">
                          <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg overflow-hidden">
                            <img 
                              src={relatedProduct.image} 
                              alt={relatedProduct.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-semibold text-primary mb-2">{relatedProduct.name}</h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedProduct.description}</p>
                            <div className="flex gap-2 mb-4">
                              <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                                {relatedProduct.shape}
                              </Badge>
                              <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                                {relatedProduct.size}
                              </Badge>
                            </div>
                            <Link to={`/products/${relatedProduct.id}`}>
                              <Button className="w-full bg-primary hover:bg-primary/90 text-black border-none">
                                View Details
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProductDetail;