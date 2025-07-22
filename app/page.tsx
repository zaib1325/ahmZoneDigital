import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Users, TrendingUp, Star, Instagram, Youtube, Music, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Organic Followers",
      description: "Real, engaged followers who genuinely connect with your content",
      platforms: ["Instagram", "TikTok", "YouTube", "Twitter"],
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Authentic Views",
      description: "Boost your content visibility with genuine viewer engagement",
      platforms: ["YouTube", "TikTok", "Instagram Reels"],
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Real Likes",
      description: "Increase engagement with likes from active, real accounts",
      platforms: ["Instagram", "TikTok", "YouTube", "Twitter"],
    },
  ]

  const packages = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for new creators",
      features: [
        "1,000 Organic Followers",
        "5,000 Real Likes",
        "10,000 Authentic Views",
        "Basic Analytics Dashboard",
        "Email Support",
      ],
      popular: false,
    },
    {
      name: "Growth",
      price: "$79",
      period: "/month",
      description: "Ideal for growing brands",
      features: [
        "5,000 Organic Followers",
        "25,000 Real Likes",
        "50,000 Authentic Views",
        "Advanced Analytics",
        "Priority Support",
        "Multi-Platform Support",
      ],
      popular: true,
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "For established businesses",
      features: [
        "15,000 Organic Followers",
        "75,000 Real Likes",
        "150,000 Authentic Views",
        "Custom Strategy Consultation",
        "24/7 Priority Support",
        "All Platforms Included",
        "Monthly Performance Reports",
      ],
      popular: false,
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Fashion Influencer",
      content:
        "My engagement rate increased by 340% in just 2 months. The followers are genuinely interested in my content!",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Marcus Rodriguez",
      role: "Fitness Brand Owner",
      content:
        "Finally found a service that delivers real results. Our brand reach expanded significantly with authentic followers.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Emma Thompson",
      role: "Content Creator",
      content:
        "The transparency and professionalism is unmatched. Every follower feels genuine and engaged with my content.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">OrganicGrow</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="#pricing" className="text-slate-600 hover:text-blue-600 transition-colors">
              Pricing
            </Link>
            <Link href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Badge className="bg-green-100 text-green-800 border-green-200 px-4 py-2">
              <Shield className="h-4 w-4 mr-2" />
              Cybersecurity Verified • 100% Organic
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Boost Your Social Presence with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Organic Growth
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Trusted by cybersecurity experts. Grow your social media reach with 100% organic followers, likes, and
            views. No bots, no fake accounts — just real engagement from genuine users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-8 py-4 text-lg"
            >
              Start Growing Today
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-slate-300 bg-transparent">
              View Success Stories
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">100% Organic</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium">Cybersecurity Supervised</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-purple-500" />
              <span className="text-sm font-medium">No Bots Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Organic Growth Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Tailored solutions for influencers, brands, and businesses looking to grow their reach ethically
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full w-fit">
                    <div className="text-blue-600">{service.icon}</div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.platforms.map((platform) => (
                      <Badge key={platform} variant="secondary" className="text-xs">
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600">Simple, transparent, and effective</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Choose Your Package", description: "Select the perfect growth plan for your needs" },
              { step: "2", title: "Select Platforms", description: "Pick your target social media platforms" },
              { step: "3", title: "Secure Payment", description: "Complete your order with our encrypted checkout" },
              { step: "4", title: "Watch Growth", description: "Monitor your organic growth through our dashboard" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Success Stories</h2>
            <p className="text-xl text-slate-600">See what our clients are saying</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Choose Your Growth Plan</h2>
            <p className="text-xl text-slate-600">Transparent pricing with no hidden fees</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-lg ${pkg.popular ? "ring-2 ring-blue-500 scale-105" : ""} bg-white`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-slate-900">{pkg.name}</CardTitle>
                  <CardDescription className="text-slate-600">{pkg.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-slate-900">{pkg.price}</span>
                    <span className="text-slate-500">{pkg.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </div>
                  ))}
                  <Button
                    className={`w-full mt-6 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                        : "bg-slate-900 hover:bg-slate-800"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Grow Organically?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful creators, brands, and businesses who trust our organic growth services
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600 text-slate-900 font-semibold px-8 py-4 text-lg"
          >
            Start Your Growth Journey
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">OrganicGrow</span>
              </div>
              <p className="text-slate-400">Professional social media growth services with 100% organic engagement.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Instagram Growth
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    TikTok Growth
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    YouTube Growth
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Twitter Growth
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400">© 2024 OrganicGrow. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Music className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
