import { MadeWithDyad } from "@/components/made-with-dyad";
import CourseListing from "@/components/CourseListing";
import CounsellingForm from "@/components/CounsellingForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <header className="py-8 bg-blue-600 text-white text-center shadow-md">
        <h1 className="text-5xl font-extrabold mb-2">Online Course & Counselling Hub</h1>
        <p className="text-xl">Your gateway to higher education and personalized guidance.</p>
      </header>

      <main>
        <CourseListing />
        <CounsellingForm />
      </main>

      <MadeWithDyad />
    </div>
  );
};

export default Index;