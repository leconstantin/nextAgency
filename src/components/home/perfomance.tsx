import { Card, CardContent } from "@/components/ui/card";

import {
  Zap,
  Accessibility,
  Search,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function PerformanceAbout() {
  const metrics = [
    {
      name: "Performance",
      icon: Zap,
      before: 65,
      after: 95,
      color: "text-yellow-500",
    },
    {
      name: "Accessibility",
      icon: Accessibility,
      before: 72,
      after: 98,
      color: "text-blue-500",
    },
    {
      name: "SEO",
      icon: Search,
      before: 70,
      after: 92,
      color: "text-green-500",
    },
    {
      name: "Best Practices",
      icon: CheckCircle,
      before: 80,
      after: 97,
      color: "text-purple-500",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 min-h-screen flex flex-col items-center justify-center text-black">
      <h2 className="text-3xl font-bold text-center py-5">
        Website Performance Improvement
      </h2>

      <div className="text-center py-10 w-full">
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 ">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="ring-1 border-none ring-zinc-200 hover:ring-1 hover:ring-customgreen ease-in duration-500 shadow-xl bg-transparent rotate-2 "
            >
              <CardContent className="pt-6">
                <metric.icon
                  className={`h-8 w-8 ${metric.color} mx-auto mb-2`}
                />
                <h4 className="text-lg font-semibold mb-2">{metric.name}</h4>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-xl font-bold">{metric.before}</span>
                  <ArrowRight className="h-4 w-4" />
                  <span className="text-xl font-bold text-green-500">
                    {metric.after}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {(
                    ((metric.after - metric.before) / metric.before) *
                    100
                  ).toFixed(1)}
                  % increase
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
