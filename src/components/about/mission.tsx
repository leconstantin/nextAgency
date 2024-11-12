import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Award, Globe, Coffee, Heart } from "lucide-react";

export default function AboutMission() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-12 md:space-y-16">
      <section className="space-y-6 md:space-y-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {[
            {
              icon: Award,
              title: "Award-Winning Designs",
              description:
                "Our work has been recognized in multiple design competitions, showcasing our commitment to excellence.",
            },
            {
              icon: Globe,
              title: "Global Reach",
              description:
                "We've successfully delivered projects for clients across various industries and countries, bringing a wealth of diverse experience.",
            },
            {
              icon: Coffee,
              title: "Client-Centric Approach",
              description:
                "We believe in building lasting relationships. Our team is dedicated to understanding and meeting your unique needs.",
            },
          ].map((item, index) => (
            <Card key={index}>
              <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                <item.icon className="h-10 w-10 md:h-12 md:w-12 text-primary" />
                <h3 className="text-lg md:text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center space-y-4 md:space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Ready to Start Your Project?
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Let&apos;s turn your digital dreams into reality. Our team is ready to
          bring your vision to life with creativity, expertise, and passion.
        </p>
        <Button size="lg" className="mt-2 md:mt-4">
          <Heart className="mr-2 h-4 w-4" /> Get in Touch
        </Button>
      </section>
    </div>
  );
}
