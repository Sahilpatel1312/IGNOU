import Header from "@/components/Header";
import CourseListing from "@/components/CourseListing";
import CounsellingForm from "@/components/CounsellingForm";
import Footer from "@/components/Footer"; // Import the new Footer component

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header /> {/* Include the Header component */}

      <header className="py-12 bg-blue-600 text-white text-center shadow-md">
        <h1 className="text-5xl font-extrabold mb-2">Online Course & Counselling Hub</h1>
        <p className="text-xl">Your gateway to higher education and personalized guidance.</p>
      </header>

      <main className="flex-grow">
        <section id="courses"> {/* Add ID for navigation */}
          <CourseListing />
        </section>
        <section id="counselling"> {/* Add ID for navigation */}
          <CounsellingForm />
        </section>
      </main>

      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default Index;