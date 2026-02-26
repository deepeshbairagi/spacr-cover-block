
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator as CalcIcon, Info, CheckCircle, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const Calculator = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [rebarSpacing, setRebarSpacing] = useState("150");
  const [coverThickness, setCoverThickness] = useState("25");
  const [blockType, setBlockType] = useState("round");
  const [result, setResult] = useState(null);

  const calculateBlocks = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const spacing = parseFloat(rebarSpacing) / 1000; // Convert mm to m
    const cover = parseFloat(coverThickness);

    if (!l || !w || l <= 0 || w <= 0) {
      return;
    }

    // Calculate number of rebars in each direction
    const rebarsLength = Math.ceil(w / spacing) + 1;
    const rebarsWidth = Math.ceil(l / spacing) + 1;
    
    // Calculate intersection points (where cover blocks are needed)
    const intersections = rebarsLength * rebarsWidth;
    
    // Add some extra blocks for perimeter and safety factor
    const safetyFactor = 1.1;
    const totalBlocks = Math.ceil(intersections * safetyFactor);

    setResult({
      totalBlocks,
      rebarsLength,
      rebarsWidth,
      intersections,
      area: l * w,
      coverage: cover
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-16 bg-primary text-black animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-black/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                <CalcIcon className="h-10 w-10 text-black" />
              </div>
              <h1 className="text-4xl font-bold mb-4 animate-slide-up">Cover Block Calculator</h1>
              <p className="text-xl text-black/80 animate-slide-up">
                Calculate the exact number of cover blocks needed for your construction project
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Calculator Form */}
              <Card className="animate-fade-in hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-primary text-black">
                  <CardTitle className="text-black">Project Details</CardTitle>
                  <CardDescription className="text-black/80">
                    Enter your slab dimensions and rebar specifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="length" className="text-gray-700 font-medium">Slab Length (m)</Label>
                      <Input
                        id="length"
                        type="number"
                        step="0.1"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        placeholder="e.g., 10.5"
                        className="border-primary/20 focus:border-primary mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="width" className="text-gray-700 font-medium">Slab Width (m)</Label>
                      <Input
                        id="width"
                        type="number"
                        step="0.1"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        placeholder="e.g., 8.0"
                        className="border-primary/20 focus:border-primary mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="spacing" className="text-gray-700 font-medium">Rebar Spacing (mm)</Label>
                    <Select value={rebarSpacing} onValueChange={setRebarSpacing}>
                      <SelectTrigger className="border-primary/20 focus:border-primary mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="100">100mm - Dense spacing</SelectItem>
                        <SelectItem value="125">125mm - Close spacing</SelectItem>
                        <SelectItem value="150">150mm - Standard spacing</SelectItem>
                        <SelectItem value="200">200mm - Wide spacing</SelectItem>
                        <SelectItem value="250">250mm - Extra wide</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="cover" className="text-gray-700 font-medium">Cover Thickness (mm)</Label>
                    <Select value={coverThickness} onValueChange={setCoverThickness}>
                      <SelectTrigger className="border-primary/20 focus:border-primary mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="20">20mm - Minimum cover</SelectItem>
                        <SelectItem value="25">25mm - Standard cover</SelectItem>
                        <SelectItem value="30">30mm - Enhanced cover</SelectItem>
                        <SelectItem value="40">40mm - Heavy duty</SelectItem>
                        <SelectItem value="50">50mm - Maximum cover</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="blockType" className="text-gray-700 font-medium">Block Type</Label>
                    <Select value={blockType} onValueChange={setBlockType}>
                      <SelectTrigger className="border-primary/20 focus:border-primary mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="round">Round Block - General use</SelectItem>
                        <SelectItem value="square">Square Block - Enhanced stability</SelectItem>
                        <SelectItem value="rectangle">Rectangle Block - Continuous coverage</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button onClick={calculateBlocks} className="w-full bg-primary hover:bg-primary/90 text-black border-none" size="lg">
                    <CalcIcon className="mr-2 h-4 w-4" />
                    Calculate Required Blocks
                  </Button>
                </CardContent>
              </Card>

              {/* Results & Information */}
              <div className="space-y-6">
                {result && (
                  <Card className="animate-fade-in hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="bg-primary/10 border-b border-primary/20">
                      <CardTitle className="text-black flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        Calculation Results
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="text-center mb-6">
                        <div className="text-5xl font-bold text-primary mb-2 animate-bounce-slow">
                          {result.totalBlocks}
                        </div>
                        <div className="text-lg text-gray-600">Cover Blocks Required</div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                        <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-600">Slab Area:</span>
                          <span className="font-semibold">{result.area.toFixed(1)} m²</span>
                        </div>
                        <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-600">Cover Thickness:</span>
                          <span className="font-semibold">{result.coverage}mm</span>
                        </div>
                        <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-600">Rebars (Length):</span>
                          <span className="font-semibold">{result.rebarsLength}</span>
                        </div>
                        <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-600">Rebars (Width):</span>
                          <span className="font-semibold">{result.rebarsWidth}</span>
                        </div>
                        <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-600">Intersections:</span>
                          <span className="font-semibold">{result.intersections}</span>
                        </div>
                        <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-600">Safety Factor:</span>
                          <span className="font-semibold">10%</span>
                        </div>
                      </div>

                      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                        <Badge className="bg-primary text-black border-none mb-2">Professional Recommendation</Badge>
                        <p className="text-sm text-black">
                          Based on your specifications, you'll need <strong>{result.totalBlocks} cover blocks</strong> 
                          for proper rebar spacing and concrete cover protection. This includes a 10% safety margin for optimal coverage.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card className="animate-fade-in hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="bg-primary/10 border-b border-primary/20">
                    <CardTitle className="flex items-center text-black">
                      <Info className="mr-2 h-5 w-5" />
                      How It Works
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4 text-sm text-gray-600">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-1">Rebar Grid Calculation</h4>
                          <p>We calculate the number of rebars in each direction based on your specified spacing requirements.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-1">Intersection Points</h4>
                          <p>Cover blocks are placed at rebar intersections to maintain proper spacing and structural integrity.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-1">Safety Factor</h4>
                          <p>We add 10% extra blocks to ensure complete coverage and account for any adjustments needed on-site.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">4</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-1">Cover Protection</h4>
                          <p>Blocks ensure the specified concrete cover thickness is maintained for corrosion protection.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-yellow-50 border-yellow-200 animate-fade-in hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-yellow-800 flex items-center">
                      <AlertCircle className="mr-2 h-5 w-5" />
                      Need Expert Help?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-yellow-700 text-sm mb-4">
                      Our technical team can help you with complex calculations, custom requirements, or project-specific recommendations.
                    </p>
                    <div className="flex gap-2">
                      <Button className="bg-primary hover:bg-primary/90 text-black border-none">
                        Contact Technical Support
                      </Button>
                      <Button variant="outline" className="border-yellow-300 text-yellow-700 hover:bg-yellow-50">
                        Request Site Visit
                      </Button>
                    </div>
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

export default Calculator;
