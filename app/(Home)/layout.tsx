import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className=" mx-auto font-suisse">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
