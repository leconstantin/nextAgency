import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Check,
  X,
  Globe,
  Palette,
  Zap,
  Users,
  Search,
  BarChart,
  Rocket,
  Cog,
  Briefcase,
  BookOpen,
  Target,
} from "lucide-react";

const ServiceIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "Custom Web Solutions":
      return <Globe className="h-5 w-5 mr-2 text-primary" />;
    case "Innovative Design Approaches":
      return <Palette className="h-5 w-5 mr-2 text-primary" />;
    case "Cutting-edge Technology":
      return <Zap className="h-5 w-5 mr-2 text-primary" />;
    case "Comprehensive Services":
      return <Target className="h-5 w-5 mr-2 text-primary" />;
    case "User-Centric UX":
      return <Users className="h-5 w-5 mr-2 text-primary" />;
    case "Transparent Management":
      return <Search className="h-5 w-5 mr-2 text-primary" />;
    case "Robust Support":
      return <Cog className="h-5 w-5 mr-2 text-primary" />;
    case "Performance Optimization":
      return <Rocket className="h-5 w-5 mr-2 text-primary" />;
    case "Conversion Rate Optimization":
      return <BarChart className="h-5 w-5 mr-2 text-primary" />;
    case "Client Education":
      return <BookOpen className="h-5 w-5 mr-2 text-primary" />;
    case "Niche Specialization":
      return <Briefcase className="h-5 w-5 mr-2 text-primary" />;
    default:
      return null;
  }
};

export default function ServiceComparison() {
  const services = [
    { name: "Custom Web Solutions", us: true, others: false },
    { name: "Innovative Design Approaches", us: true, others: false },
    { name: "Cutting-edge Technology", us: true, others: true },
    { name: "Comprehensive Services", us: true, others: false },
    { name: "User-Centric UX", us: true, others: false },
    { name: "Transparent Management", us: true, others: true },
    { name: "Robust Support", us: true, others: false },
    { name: "Performance Optimization", us: true, others: true },
    { name: "Conversion Rate Optimization", us: true, others: false },
    { name: "Client Education", us: true, others: false },
    { name: "Niche Specialization", us: true, others: false },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="flex flex-col h-full">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-primary">
              Our Agency
            </CardTitle>
            <CardDescription className="text-lg">
              Comprehensive web solutions tailored to your needs
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center">
                  <ServiceIcon name={service.name} />
                  {service.us ? (
                    <Check
                      className="h-5 w-5 mr-2 text-green-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <X
                      className="h-5 w-5 mr-2 text-red-500"
                      aria-hidden="true"
                    />
                  )}
                  <span>{service.name}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="flex flex-col h-full">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-muted-foreground">
              Other Agencies
            </CardTitle>
            <CardDescription className="text-lg">
              Limited services and generic solutions
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center">
                  <ServiceIcon name={service.name} />
                  {service.others ? (
                    <Check
                      className="h-5 w-5 mr-2 text-green-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <X
                      className="h-5 w-5 mr-2 text-red-500"
                      aria-hidden="true"
                    />
                  )}
                  <span>{service.name}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
