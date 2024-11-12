export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen relative flex flex-col ">{children}</div>;
}
// px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12
