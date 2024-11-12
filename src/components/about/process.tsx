import { Lightbulb, FileText, Palette, Code, CheckCircle } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: Lightbulb,
      name: "Concept",
      description: "We brainstorm ideas and define project goals.",
    },
    {
      icon: FileText,
      name: "Plan",
      description: "We create a detailed roadmap for project execution.",
    },
    {
      icon: Palette,
      name: "Design",
      description: "We craft visually appealing and user-friendly interfaces.",
    },
    {
      icon: Code,
      name: "Development",
      description: "We bring designs to life with clean, efficient code.",
    },
    {
      icon: CheckCircle,
      name: "Quality Check",
      description: "We rigorously test to ensure a flawless end product.",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Work Process
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step.name}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
                <step.icon
                  className="w-8 h-8 text-primary-foreground"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.name}</h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
              <span className="sr-only">
                , Step {index + 1} of {steps.length}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
