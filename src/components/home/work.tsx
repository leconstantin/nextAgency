import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Github,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "E-commerce Platform Redesign",
    description:
      "A complete overhaul of a major e-commerce platform, focusing on user experience and conversion optimization.",
    image: "/academie.png",
    type: "Web Development",
    icon: <Globe className="h-5 w-5" />,
    liveUrl: "",
  },
  {
    title: "Mobile Banking App",
    description:
      "A secure and user-friendly mobile banking application with advanced features and biometric authentication.",
    image: "/mine.png",
    type: "Mobile App",
    icon: <Smartphone className="h-5 w-5" />,
    liveUrl: "",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description:
      "A sophisticated analytics dashboard leveraging AI to provide actionable insights for business intelligence.",
    image: "/wire.png",
    type: "Web Application",
    icon: <Code className="h-5 w-5" />,
    liveUrl: "",
  },
  {
    title: "Sustainable Energy Website",
    description:
      "An informative and visually striking website for a renewable energy company, showcasing their initiatives and impact.",
    image: "/diagram.png",
    type: "Web Design",
    icon: <Palette className="h-5 w-5" />,
    liveUrl: "",
  },
];

export default function LatestWorkShowcase() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-gray-900 font-bold text-center mb-12">
          Our Latest Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h- object-cover"
              />
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {project.icon}
                  {project.title}
                </CardTitle>
                <CardDescription>{project.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
