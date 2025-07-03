import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection"; // Import the new HeroSection
import CourseListing from "@/components/CourseListing";
import WhyChooseUs from "@/components/WhyChooseUs"; // Import the new WhyChooseUs component
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />

      <main className="flex-grow">
        <HeroSection /> {/* Use the new HeroSection */}

        <section id="courses">
          <CourseListing />
        </section>

        <WhyChooseUs /> {/* Include the WhyChooseUs component */}

        {/* The counselling form is now part of the HeroSection, so this section is removed */}
      </main>

      <Footer />
    </div>
  );
};

export default Index;