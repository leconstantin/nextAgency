import { GiArchiveResearch } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import { IoGlobeOutline } from "react-icons/io5";
import { FaSearchengin } from "react-icons/fa6";
import { IoIosVideocam } from "react-icons/io";
import { GrHostMaintenance } from "react-icons/gr";
import { TbSeo } from "react-icons/tb";
import { IoAnalyticsOutline } from "react-icons/io5";
import { CheckCircle, Code, Paintbrush, Rocket, Users } from "lucide-react";
const services = [
  {
    icon: <IoGlobeOutline className="w-6 h-6 text-customgreen" />,
    title: "Web Hosting",
    description:
      "Reliable and secure hosting solutions to keep your website accessible 24/7. We offer scalable options to meet your growing needs.",
  },
  {
    icon: <CgWebsite className="w-6 h-6 text-customgreen" />,
    title: "Web Development",
    description:
      "Custom web applications tailored to your business requirements. We use cutting-edge technologies to deliver high-performance solutions.",
  },
  {
    icon: <FaSearchengin className="w-6 h-6 text-customgreen" />,
    title: "Search Ranking",
    description:
      "Boost your online visibility with our SEO expertise. We optimize your website to rank higher in search engine results pages.",
  },
  {
    icon: <IoIosVideocam className="w-6 h-6 text-customgreen" />,
    title: "Drone Videos",
    description:
      "Capture stunning aerial footage for your projects. Our drone video services add a unique perspective to your visual content.",
  },
  {
    icon: <Paintbrush className="w-6 h-6 text-customgreen" />,
    title: "Web Design",
    description:
      "Create visually appealing and user-friendly websites. Our designs are not just beautiful, but also focused on converting visitors into customers.",
  },
  {
    icon: <GrHostMaintenance className="w-6 h-6 text-customgreen" />,
    title: "Web Maintenance",
    description:
      "Keep your website up-to-date and running smoothly. Our maintenance services ensure your site remains secure, fast, and bug-free.",
  },
  {
    icon: <TbSeo className="w-6 h-6 text-customgreen" />,
    title: "On-page SEO",
    description:
      "We audit and optimize your website to make it ultra-rankable for search engines.",
  },
  {
    icon: <IoAnalyticsOutline className="w-6 h-6 text-customgreen" />,
    title: "Analytics",
    description:
      " We track your site's performance using Google Analytics and other incredible tools.",
  },
];
export default function DoAbout() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-black">
      <div className="py-20">
        <h1 className="text-center text-6xl font-semibold tracking-tight">
          What we do best
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 w-full mx-auto max-w-5xl pb-20">
        {services.map((service, i) => (
          <div key={i}>
            <div className="py-3 flex gap-2">
              <div>{service.icon}</div>
              <h1 className="font-bold text-lg tracking-tighter">
                {service.title}
              </h1>
            </div>
            <div>
              <p className="text-zinc-800 tracking-tight max-w-60 text-balance">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
