import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, GraduationCap, Users, Award } from 'lucide-react';

const features = [
  {
    icon: <Lightbulb className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: 'Expert Guidance',
    description: 'Receive personalized advice from experienced education counsellors.',
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: 'Wide Course Selection',
    description: 'Access a diverse range of online courses from top institutions.',
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: 'Community Support',
    description: 'Join a vibrant community of learners and mentors.',
  },
  {
    icon: <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: 'Career Advancement',
    description: 'Gain skills and qualifications to boost your professional journey.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">Why Choose EduConnect?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-50 dark:bg-gray-900">
              <CardHeader className="flex flex-col items-center justify-center p-0 mb-4">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-200">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;