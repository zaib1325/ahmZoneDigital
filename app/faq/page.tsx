import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { TrendingUp, Mail, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const faqs = [
    {
      question: "How do you ensure all engagement is 100% organic?",
      answer:
        "We work with a network of real, active social media users who genuinely engage with content. Our cybersecurity team monitors all activities to ensure no bots or fake accounts are involved. Every follower, like, and view comes from authentic accounts with real activity histories.",
    },
    {
      question: "Is this service legal and safe for my account?",
      answer:
        "Yes, absolutely. Our services operate within the terms of service of all major social media platforms. We use organic growth methods that comply with platform guidelines. Our operations are supervised by certified cybersecurity professionals to ensure complete safety and transparency.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Results typically begin within 24-48 hours of order placement. The delivery timeline depends on the service and quantity ordered. Most orders are completed within 7-30 days to maintain natural growth patterns that won't trigger platform algorithms.",
    },
    {
      question: "What platforms do you support?",
      answer:
        "We currently support Instagram, TikTok, YouTube, and Twitter. Each platform has specific services available including followers, likes, views, and engagement. We're constantly expanding our platform support based on client demand.",
    },
    {
      question: "Can I track my order progress?",
      answer:
        "Yes! Every client gets access to a personal dashboard where you can monitor your order progress in real-time. You'll see detailed analytics, completion percentages, and estimated delivery times for all active campaigns.",
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer:
        "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with the quality of engagement, we'll either provide additional services or offer a full refund. Our goal is your complete satisfaction and success.",
    },
    {
      question: "Do you offer custom packages?",
      answer:
        "Yes, we can create custom packages for larger businesses and influencers with specific needs. Contact our team to discuss your requirements, and we'll design a tailored growth strategy that fits your goals and budget.",
    },
    {
      question: "How do you maintain account security?",
      answer:
        "We never require your account passwords or login credentials. All services are delivered using public URLs only. Our cybersecurity team uses advanced encryption and security protocols to protect all client data and ensure complete privacy.",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">OrganicGrow</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#services" className="text-slate-600 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="/#pricing" className="text-slate-600 hover:text-blue-600 transition-colors">
              Pricing
            </Link>
            <Link href="/faq" className="text-blue-600 font-medium">
              FAQ
            </Link>
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
              Get Started
            </Button>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-slate-600">Everything you need to know about our organic growth services</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Common Questions</CardTitle>
                  <CardDescription>
                    Find answers to the most frequently asked questions about our services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-slate-600">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Still Have Questions?</CardTitle>
                  <CardDescription>Get in touch with our support team</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="How can we help you?" className="min-h-[100px]" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Email Support</p>
                      <p className="text-sm text-slate-600">support@organicgrow.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Live Chat</p>
                      <p className="text-sm text-slate-600">Available 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Phone Support</p>
                      <p className="text-sm text-slate-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
