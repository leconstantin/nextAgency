import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  User,
  Mail,
  Briefcase,
  MessageSquare,
  Send,
  FileText,
  Phone,
} from "lucide-react";

export default function ContactForm() {
  //   const [contentTitle, setContentTitle] = useState("");

  return (
    <Card className="w-full max-w-md mx-auto my-10 ">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Get in Touch
        </CardTitle>
        <CardDescription className="text-center">
          Fill out the form below to contact us
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
              <Input
                id="firstName"
                placeholder="First Name"
                className="pl-10"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
              <Input id="lastName" placeholder="Last Name" className="pl-10" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="pl-10"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telephone Number</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              className="pl-10"
            />
          </div>
        </div>
        <div className="text-sm text-gray-500 italic">
          Provide your phone number if you'd like us to call you directly.
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">Your Role</Label>
          <div className="relative">
            <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              id="role"
              placeholder="e.g. Developer, Designer, Manager"
              className="pl-10"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="contentTitle">Content Title</Label>
          <div className="relative">
            <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4 z-10" />
            <Select>
              {/* value={contentTitle} onValueChange={setContentTitle} */}
              <SelectTrigger id="contentTitle" className="pl-10">
                <SelectValue placeholder="Select content title" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="web-design">Web design</SelectItem>
                <SelectItem value="web-hosting">Web Hosting</SelectItem>
                <SelectItem value="web-maintenance">Web Maintenance</SelectItem>
                <SelectItem value="search-ranking">Search Ranking</SelectItem>
                <SelectItem value="on-page-seo">On page seo</SelectItem>
                <SelectItem value="analytics">Analytics</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-gray-500 h-4 w-4" />
            <Textarea
              id="message"
              placeholder="Your message here..."
              className="pl-10 min-h-[100px]"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Send className="mr-2 h-4 w-4" /> Send Message
        </Button>
      </CardFooter>
    </Card>
  );
}
