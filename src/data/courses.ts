export interface Course {
  id: string;
  name: string;
  type: 'Bachelor' | 'Master';
  description: string;
}

export const courses: Course[] = [
  {
    id: 'bachelor-cs',
    name: 'Bachelor of Computer Science',
    type: 'Bachelor',
    description: 'A comprehensive program covering fundamental computer science concepts and programming.',
  },
  {
    id: 'master-mba',
    name: 'Master of Business Administration (MBA)',
    type: 'Master',
    description: 'An advanced degree focusing on business management, leadership, and strategic thinking.',
  },
  {
    id: 'bachelor-arts',
    name: 'Bachelor of Arts in English',
    type: 'Bachelor',
    description: 'Explore literature, critical thinking, and communication skills.',
  },
  {
    id: 'master-psychology',
    name: 'Master of Science in Psychology',
    type: 'Master',
    description: 'Advanced study in psychological theories, research, and practice.',
  },
  {
    id: 'bachelor-commerce',
    name: 'Bachelor of Commerce',
    type: 'Bachelor',
    description: 'Foundational knowledge in accounting, finance, and business principles.',
  },
  {
    id: 'master-data-science',
    name: 'Master of Science in Data Science',
    type: 'Master',
    description: 'Learn to analyze large datasets, build predictive models, and extract insights.',
  },
];