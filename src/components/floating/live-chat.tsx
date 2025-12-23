'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { ChatMessage } from '@/lib/types';
import { useToast } from "@/hooks/use-toast"
import { cn } from '@/lib/utils';
import { MessageCircle, X, Phone, Send, Clock, DollarSign, Wrench } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';


const QuickReplyButton = ({ icon: Icon, text, onClick }: { icon: React.ElementType, text: string, onClick: () => void }) => (
    <button onClick={onClick} className="w-full text-left flex items-center gap-2 p-2 rounded-lg bg-background border-2 border-primary/50 text-primary shadow-sm hover:bg-primary hover:text-primary-foreground hover:translate-x-0.5 transition-all duration-200">
        <Icon className="w-4 h-4 flex-shrink-0" />
        <span className="text-sm font-semibold">{text}</span>
    </button>
);

const TypingIndicator = () => (
    <div className="flex items-center space-x-1 p-3 bg-background rounded-lg rounded-bl-sm shadow-sm self-start">
        <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-[typing_1.4s_infinite] [animation-delay:0.2s]"></span>
        <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-[typing_1.4s_infinite] [animation-delay:0.4s]"></span>
        <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-[typing_1.4s_infinite] [animation-delay:0.6s]"></span>
    </div>
);


export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  const consultantAvatar = PlaceHolderImages.find(p => p.id === 'chat-consultant-avatar');
  const chatBodyRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) {
      const timer = setTimeout(() => {
        if (!hasInteracted && !isOpen) {
          setIsOpen(true);
          setHasInteracted(true);
        }
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [isMobile, hasInteracted, isOpen]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 'welcome-1',
          role: 'bot',
          content: "Hi! 👋 Would you like to book a special offer or ask a question about our services? I'm here to help!",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const showAppointmentForm = (userMessageContent: string) => {
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: userMessageContent,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const botMessage: ChatMessage = {
        id: `bot-form-${Date.now()}`,
        role: 'bot',
        content: "Of course! To provide you with the most accurate information, please fill out your details below and we'll get back to you to confirm your appointment.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
    setShowQuickReplies(false);
    setShowForm(true);
    setIsTyping(false);
    setInputValue('');
  }

  const handleSendMessage = async (messageText: string) => {
    if (!messageText.trim()) return;
    
    setIsTyping(true);
    // Simulate bot thinking time
    setTimeout(() => {
        showAppointmentForm(messageText);
    }, 1000);
  };

  const handleQuickReply = (question: string) => {
    setIsTyping(true);
    // Simulate bot thinking time
    setTimeout(() => {
        showAppointmentForm(question);
    }, 1000);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    console.log({name, phone});
    setShowForm(false);
    const successMessage: ChatMessage = {
        id: `bot-success-${Date.now()}`,
        role: 'bot',
        content: `Thanks, ${name}! We've received your request and will call you at ${phone} shortly to confirm your appointment.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages(prev => [...prev, successMessage]);
    toast({ title: "Appointment Requested!", description: "We'll be in touch shortly." });
  };


  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-20 right-4 sm:right-6 z-[9998] w-[calc(100vw-2rem)] max-w-sm"
          >
            <Card className="flex flex-col h-[60vh] max-h-[500px] shadow-2xl border-2">
              <header className="flex items-center gap-3 p-3 primary-gradient text-primary-foreground rounded-t-lg">
                {consultantAvatar && (
                  <Image src={consultantAvatar.imageUrl} width={40} height={40} alt="Sarah Johnson" className="rounded-full border-2 border-white/50" data-ai-hint={consultantAvatar.imageHint} />
                )}
                <div>
                  <p className="font-bold">Sarah Johnson</p>
                  <p className="text-xs opacity-90 flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Online Now
                  </p>
                </div>
                <div className="ml-auto flex items-center">
                    <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-white/20" asChild>
                        <a href="tel:5551234567"><Phone size={18} /></a>
                    </Button>
                    <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-white/20" onClick={() => setIsOpen(false)}>
                        <X size={18} />
                    </Button>
                </div>
              </header>
              
              <div ref={chatBodyRef} className="flex-1 overflow-y-auto p-4 bg-secondary space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={cn('flex items-end gap-2', { 'justify-end': msg.role === 'user' })}>
                    {msg.role === 'bot' && consultantAvatar && (
                      <Image src={consultantAvatar.imageUrl} width={24} height={24} alt="Bot" className="rounded-full self-start" data-ai-hint={consultantAvatar.imageHint}/>
                    )}
                    <div className={cn('max-w-[80%] p-3 rounded-2xl text-sm', {
                      'bg-background shadow-sm rounded-bl-md': msg.role === 'bot',
                      'primary-gradient text-primary-foreground rounded-br-md': msg.role === 'user',
                    })}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isTyping && <TypingIndicator />}
                {showQuickReplies && (
                    <div className="space-y-2 !mt-4">
                        <QuickReplyButton icon={Clock} text="Do you offer 24/7 emergency service?" onClick={() => handleQuickReply("Do you offer 24/7 emergency service?")} />
                        <QuickReplyButton icon={DollarSign} text="How much does it cost?" onClick={() => handleQuickReply("How much does it cost?")} />
                        <QuickReplyButton icon={Wrench} text="Can I schedule an appointment?" onClick={() => handleQuickReply("Can I schedule an appointment?")} />
                    </div>
                )}
                {showForm && (
                     <Card className="bg-background p-4">
                        <form onSubmit={handleFormSubmit} className="space-y-3">
                            <Input name="name" placeholder="Your Name" required className="text-sm"/>
                            <Input name="phone" type="tel" placeholder="Phone Number" required className="text-sm"/>
                            <div className="flex gap-2">
                                <Button type="button" variant="ghost" size="sm" onClick={() => setShowForm(false)}>Cancel</Button>
                                <Button type="submit" size="sm" className="flex-1 primary-gradient">Request Appointment</Button>
                            </div>
                        </form>
                    </Card>
                )}
              </div>

              <footer className="p-2 border-t bg-background rounded-b-lg">
                <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }} className="flex items-center gap-2">
                  <Textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendMessage(inputValue); } }}
                    placeholder="Type a message..."
                    rows={1}
                    className="flex-1 resize-none rounded-full px-4 py-2 min-h-[40px] max-h-24 text-sm"
                  />
                  <Button type="submit" size="icon" className="rounded-full primary-gradient shrink-0" disabled={!inputValue.trim()}>
                    <Send className="w-5 h-5" />
                  </Button>
                </form>
              </footer>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      
      {!isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50">
          <Button
            size="icon"
            onClick={() => { setIsOpen(true); setHasInteracted(true); }}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full primary-gradient shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
            aria-label="Open live chat"
          >
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
          </Button>
          <span className="absolute -top-1 -right-1 flex h-6 w-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-6 w-6 bg-destructive text-xs text-white items-center justify-center">1</span>
          </span>
        </div>
      )}
    </>
  );
}
