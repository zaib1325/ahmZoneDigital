"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  TrendingUp,
  Users,
  Heart,
  Eye,
  Instagram,
  Youtube,
  Music,
  Twitter,
  BarChart3,
  Settings,
  Bell,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [activeOrders] = useState([
    {
      id: "ORD-001",
      service: "Instagram Followers",
      target: 5000,
      current: 3250,
      status: "active",
      platform: "instagram",
      startDate: "2024-01-15",
      estimatedCompletion: "2024-02-15",
    },
    {
      id: "ORD-002",
      service: "YouTube Views",
      target: 25000,
      current: 18500,
      status: "active",
      platform: "youtube",
      startDate: "2024-01-10",
      estimatedCompletion: "2024-02-10",
    },
    {
      id: "ORD-003",
      service: "TikTok Likes",
      target: 10000,
      current: 10000,
      status: "completed",
      platform: "tiktok",
      startDate: "2024-01-01",
      estimatedCompletion: "2024-01-20",
    },
  ])

  const stats = [
    {
      title: "Total Followers Gained",
      value: "12,450",
      change: "+23%",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Total Likes Received",
      value: "45,230",
      change: "+18%",
      icon: <Heart className="h-5 w-5" />,
    },
    {
      title: "Total Views Generated",
      value: "128,900",
      change: "+31%",
      icon: <Eye className="h-5 w-5" />,
    },
    {
      title: "Active Campaigns",
      value: "3",
      change: "2 completing soon",
      icon: <BarChart3 className="h-5 w-5" />,
    },
  ]

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return <Instagram className="h-4 w-4" />
      case "youtube":
        return <Youtube className="h-4 w-4" />
      case "tiktok":
        return <Music className="h-4 w-4" />
      case "twitter":
        return <Twitter className="h-4 w-4" />
      default:
        return <TrendingUp className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-blue-100 text-blue-800"
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
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
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <div className="h-8 w-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Dashboard</h1>
          <p className="text-slate-600">Track your organic growth progress</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    <p className="text-sm text-green-600">{stat.change}</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-full text-blue-600">{stat.icon}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList>
            <TabsTrigger value="orders">Active Orders</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Your Active Campaigns</CardTitle>
                <CardDescription>Monitor the progress of your organic growth campaigns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {activeOrders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-6 bg-white">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-slate-100 rounded-lg">{getPlatformIcon(order.platform)}</div>
                          <div>
                            <h3 className="font-semibold text-slate-900">{order.service}</h3>
                            <p className="text-sm text-slate-600">Order #{order.id}</p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Progress</span>
                          <span className="font-medium">
                            {order.current.toLocaleString()} / {order.target.toLocaleString()}
                          </span>
                        </div>
                        <Progress value={(order.current / order.target) * 100} className="h-2" />
                        <div className="flex justify-between text-sm text-slate-600">
                          <span>Started: {order.startDate}</span>
                          <span>Est. Completion: {order.estimatedCompletion}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Growth Analytics</CardTitle>
                <CardDescription>Detailed insights into your social media growth</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-slate-500">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Analytics dashboard coming soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Billing & Payments</CardTitle>
                <CardDescription>Manage your subscription and payment methods</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">Growth Plan</h3>
                      <p className="text-sm text-slate-600">$79/month • Next billing: Feb 15, 2024</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline">Update Payment Method</Button>
                    <Button variant="outline">View Invoices</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
