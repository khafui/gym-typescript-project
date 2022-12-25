import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";
import OurClasses from "@/scenes/ourClasses";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    // unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const gotoTop = () => {
    window.scrollTo(0, 0);
    setSelectedPage(SelectedPage.Home);
  };

  return (
    <div className="app  bg-gray-50">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
      {!isTopOfPage && (
        <div className="fixed bottom-5 z-30 w-full cursor-pointer">
          <div className="mr-8 flex items-center justify-end md:mr-4">
            <button
              className=" rounded-full bg-secondary-500 px-3 py-3 drop-shadow hover:bg-primary-500 hover:text-white"
              onClick={gotoTop}
            >
              <ChevronDoubleUpIcon className="h-6 w-6 " />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
