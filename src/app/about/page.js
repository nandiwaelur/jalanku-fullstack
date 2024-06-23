import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
export default function Profile() {
  return (
    <>
      <div className="bg-[url('/img/bg-image.jpg')] bg-cover bg-top relative">
        <div className="flex justify-center bg-gradient-to-b from-[#0D8292]/60 to-transparent bg-cover bg-center">
          <NavigationBar />
        </div>
        <div className="w-full h-screen ">
          <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-10 p-5">
    
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
