import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { showSuccess } from '@/utils/toast';
import { courses } from '@/data/courses';
import { indianStates } from '@/data/states';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  contactNumber: z.string().regex(/^\d{10}$/, { message: 'Contact number must be 10 digits.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  course: z.string().min(1, { message: 'Please select a course.' }),
  state: z.string().min(1, { message: 'Please select your state.' }),
});

const CounsellingForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      contactNumber: '',
      email: '',
      course: '',
      state: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('Counselling Form Submitted:', values);
    showSuccess('Your counselling request has been submitted successfully!');
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Request Counselling</h3>
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 dark:text-gray-300">Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 dark:text-gray-300">Contact Number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="9876543210" {...field} className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 dark:text-gray-300">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john.doe@example.com" {...field} className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="course"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 dark:text-gray-300">Select Course</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600">
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600">
                  {courses.map((course) => (
                    <SelectItem key={course.id} value={course.name}>
                      {course.name} ({course.type})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 dark:text-gray-300">State</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600">
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600">
                  {indianStates.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800">
          Submit Request
        </Button>
      </form>
    </Form>
  );
};

export default CounsellingForm;