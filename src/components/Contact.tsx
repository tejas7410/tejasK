
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-cream dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 heading-highlight dark:text-white">Contact Me</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">Let's talk about your project or opportunities</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-md dark:bg-gray-800">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    className="w-full min-h-[150px] dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-skyBlue hover:bg-sky-600 text-white"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="flex flex-col justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8 mb-8">
              <h3 className="text-xl font-bold mb-6 dark:text-white">Connect With Me</h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:tejaskangule@example.com" 
                  className="flex items-center gap-4 text-gray-800 dark:text-gray-200 hover:text-skyBlue transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-900 flex items-center justify-center">
                    <Mail size={20} className="text-skyBlue" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">tejaskangule@example.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://linkedin.com/in/tejaskangule" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-800 dark:text-gray-200 hover:text-skyBlue transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-900 flex items-center justify-center">
                    <Linkedin size={20} className="text-skyBlue" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">linkedin.com/in/tejaskangule</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/tejaskangule" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-800 dark:text-gray-200 hover:text-skyBlue transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-900 flex items-center justify-center">
                    <Github size={20} className="text-skyBlue" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">github.com/tejaskangule</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
