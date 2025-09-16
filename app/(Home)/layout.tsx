import Header from "@/components/Header";
import Footer from "@/components/Home/Footer";
export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-suisse">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
