"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Instagram, Youtube, Music, Twitter, CreditCard, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function OrderPage() {

  type Platform = 'instagram' | 'youtube' | 'tiktok' | 'twitter'
  type Service = { id: string; name: string; price: number }

  const [selectedPlatform, setSelectedPlatform] = useState<Platform | "">("")
  const [selectedService, setSelectedService] = useState("")
  const [quantity, setQuantity] = useState("")
  const [targetUrl, setTargetUrl] = useState("")

  const platforms = [
    { id: "instagram", name: "Instagram", icon: <Instagram className="h-4 w-4" /> },
    { id: "youtube", name: "YouTube", icon: <Youtube className="h-4 w-4" /> },
    { id: "tiktok", name: "TikTok", icon: <Music className="h-4 w-4" /> },
    { id: "twitter", name: "Twitter", icon: <Twitter className="h-4 w-4" /> },
  ]

  const services : Record<Platform, Service[]> = {
    instagram: [
      { id: "followers", name: "Followers", price: 0.05 },
      { id: "likes", name: "Likes", price: 0.02 },
      { id: "views", name: "Views", price: 0.01 },
    ],
    youtube: [
      { id: "subscribers", name: "Subscribers", price: 0.08 },
      { id: "views", name: "Views", price: 0.005 },
      { id: "likes", name: "Likes", price: 0.03 },
    ],
    tiktok: [
      { id: "followers", name: "Followers", price: 0.04 },
      { id: "likes", name: "Likes", price: 0.015 },
      { id: "views", name: "Views", price: 0.008 },
    ],
    twitter: [
      { id: "followers", name: "Followers", price: 0.06 },
      { id: "likes", name: "Likes", price: 0.025 },
      { id: "retweets", name: "Retweets", price: 0.04 },
    ],
  }

  const calculatePrice = () => {
    if (!selectedPlatform || !selectedService || !quantity) return 0
    const service = services[selectedPlatform]?.find((s: any) => s.id === selectedService)
    return service ? (Number.parseFloat(quantity) * service.price).toFixed(2) : 0
  }

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
          <Button variant="outline" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Place Your Order</h1>
            <p className="text-slate-600">Configure your organic growth campaign</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Form */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Select Platform</CardTitle>
                  <CardDescription>Choose your target social media platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {platforms.map((platform) => (
                      <button
                        key={platform.id}
                        onClick={() => setSelectedPlatform(platform.id as Platform)}
                        className={`p-4 border rounded-lg flex items-center space-x-3 transition-colors ${selectedPlatform === platform.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-slate-200 hover:border-slate-300"
                          }`}
                      >
                        {platform.icon}
                        <span className="font-medium">{platform.name}</span>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Service Details</CardTitle>
                  <CardDescription>Configure your growth service</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Type</Label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        {selectedPlatform &&
                          services[selectedPlatform]?.map((service) => (
                            <SelectItem key={service.id} value={service.id}>
                              {service.name} - ${service.price} per unit
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      id="quantity"
                      type="number"
                      placeholder="Enter quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      min="100"
                      max="100000"
                    />
                    <p className="text-sm text-slate-500">Minimum: 100, Maximum: 100,000</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="target-url">Target URL</Label>
                    <Input
                      id="target-url"
                      type="url"
                      placeholder="https://..."
                      value={targetUrl}
                      onChange={(e) => setTargetUrl(e.target.value)}
                    />
                    <p className="text-sm text-slate-500">Link to your profile, post, or video</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>Secure payment processing</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5 text-slate-400" />
                    <span className="font-medium">Credit/Debit Card</span>
                    <Badge variant="secondary">Secure</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input id="card-number" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name">Cardholder Name</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the{" "}
                      <Link href="#" className="text-blue-600 hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card className="border-0 shadow-sm sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Platform:</span>
                      <span className="font-medium">
                        {selectedPlatform ? platforms.find((p) => p.id === selectedPlatform)?.name : "-"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Service:</span>
                      <span className="font-medium">
                        {selectedService
                          ? services[selectedPlatform as Platform]?.find((s : any) => s.id === selectedService)?.name
                          : "-"}
                      </span> 
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Quantity:</span>
                      <span className="font-medium">{quantity || "-"}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total:</span>
                      <span>${calculatePrice()}</span>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                    disabled={!selectedPlatform || !selectedService || !quantity || !targetUrl}
                  >
                    Complete Order
                  </Button>

                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-green-500" />
                      <span>SSL Encrypted Payment</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>100% Organic Guarantee</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>24/7 Customer Support</span>
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
