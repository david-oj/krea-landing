import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideBar from "@/components/Home/SideBar";
import { SidebarProvider } from "@/components/SidebarProvider";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className=" mx-auto font-suisse">
      <SidebarProvider>
        <Header />
        <SideBar />
        {children}
        <Footer />
      </SidebarProvider>
    </main>
  );
}
