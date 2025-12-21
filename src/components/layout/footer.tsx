'use client';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, { message: "Пожалуйста, заполните это поле." }),
  phone: z.string().min(10, { message: "Пожалуйста, заполните это поле." }),
  email: z.string().email({ message: "Неверный email." }).optional().or(z.literal('')),
  message: z.string().min(10, { message: "Сообщение должно быть не менее 10 символов." }),
})

type FooterProps = {
  onFormSubmit: (data: z.infer<typeof formSchema>) => void;
};

export default function Footer({ onFormSubmit }: FooterProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    onFormSubmit(values);
    toast({
      title: "Сообщение отправлено!",
      description: "Наша команда скоро свяжется с вами.",
    });
    form.reset();
  }

  return (
    <footer id="contact" className="bg-secondary border-t pt-16 sm:pt-20 pb-8">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8">
          {/* Form Column */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-2">Contact Us</h3>
            <p className="text-muted-foreground mb-8">Leave your contact details and our team will reach out today to provide a free, no-obligation quote.</p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="bg-background shadow-card"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Your Phone Number" {...field} className="bg-background shadow-card"/>
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
                      <FormLabel>Email <span className="text-muted-foreground font-normal text-sm">(not required)</span></FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Your Email Address" {...field} className="bg-background shadow-card"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="How can we help?" {...field} rows={4} className="bg-background shadow-card"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full primary-gradient shadow-button-primary hover:shadow-button-primary-hover animate-pulse-glow" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Info & Map Column */}
          <div className="flex flex-col gap-8">
            <div>
              <h4 className="text-3xl font-bold text-foreground mb-4">ProFlow Plumbing</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:5551234567" className="text-muted-foreground hover:text-primary transition-colors">(555) 123-4567</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:info@proflow.com" className="text-muted-foreground hover:text-primary transition-colors">info@proflow.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">123 Main Street, Your City, ST 12345</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">24/7 Emergency Service</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 flex flex-col min-h-[300px]">
              <h4 className="text-xl font-bold text-foreground mb-4">Location</h4>
              <div className="relative flex-1 rounded-lg overflow-hidden group">
                 <a href="https://www.google.com/maps/search/?api=1&query=Empire+State+Building" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10">
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col text-white">
                        <MapPin className="h-8 w-8 mb-2" />
                        <p className="font-semibold">Click to open in Google Maps</p>
                    </div>
                </a>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.342938836531!2d-73.9879208247924!3d40.75443313432778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9a44c7621%3A0x9a8a25b331004144!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ProFlow Plumbing Location"
                  className="grayscale-[50%] contrast-125"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
          <p className="text-sm text-muted-foreground">© 2025 ProFlow Plumbing. All rights reserved.</p>
          <div className="flex gap-8 text-sm">
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
