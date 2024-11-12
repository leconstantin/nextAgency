import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaHeartbeat } from "react-icons/fa";
export default function CtaAbout() {
  return (
    <main className="ring-1 ring-customgreen rounde bg-neutral-950 py-4">
      <Card className="bg-transparent text-primary-foreground flex flex-col items-center justify-center py-6 border-none ">
        <CardHeader>
          <h1 className="text-xl font-semibold md:text-[25px] space-x-1 tracking-tight  text-center py-5">
            <span>Flash</span>
            <span className="font-serif text-customgreen">er</span>
          </h1>
          <CardTitle className="text-2xl ">
            Ready to Start Your Project?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base md:text-lg text-zinc-200 text-center max-w-2xl mx-auto">
            Let&apos;s turn your digital dreams into reality. Our team is ready
            to bring your vision to life with creativity, expertise, and
            passion.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center group">
          <Button
            size="lg"
            className="mt-2 md:mt-4 text-white bg-customgreen hover:bg-green-300"
          >
            <FaHeartbeat className="mr-2 h-4 w-4 group-hover:text-red-600" />{" "}
            Get in Touch
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
