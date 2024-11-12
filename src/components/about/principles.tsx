import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Heart, Target, Zap } from "lucide-react";
export default function Principles() {
  return (
    <section className="pb-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Principles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            To empower businesses with innovative web solutions that drive
            growth and enhance user experiences.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            To be the leading force in shaping the digital landscape, setting
            new standards in web development and design.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Our Values
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Innovation</li>
              <li>Integrity</li>
              <li>Collaboration</li>
              <li>Excellence</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Our Approach
            </CardTitle>
          </CardHeader>
          <CardContent>
            We combine cutting-edge technology with creative design to deliver
            tailored solutions that exceed expectations.
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
