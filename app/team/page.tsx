"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Mail, Phone, MapPin, UserPlus } from "lucide-react"

export default function TeamPage() {
  const departments = [
    {
      name: "Engineering",
      members: 12,
      lead: "Alice Johnson",
      color: "bg-blue-500",
    },
    {
      name: "Product",
      members: 8,
      lead: "Bob Smith",
      color: "bg-purple-500",
    },
    {
      name: "Design",
      members: 6,
      lead: "Carol Williams",
      color: "bg-pink-500",
    },
    {
      name: "Marketing",
      members: 10,
      lead: "David Brown",
      color: "bg-orange-500",
    },
  ]

  const teamMembers = [
    {
      id: 1,
      name: "Alice Johnson",
      role: "Engineering Lead",
      department: "Engineering",
      email: "alice.j@company.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      initials: "AJ",
      status: "Available",
      projects: 3,
    },
    {
      id: 2,
      name: "Bob Smith",
      role: "Product Manager",
      department: "Product",
      email: "bob.s@company.com",
      phone: "+1 (555) 234-5678",
      location: "New York, NY",
      initials: "BS",
      status: "In Meeting",
      projects: 5,
    },
    {
      id: 3,
      name: "Carol Williams",
      role: "Senior Designer",
      department: "Design",
      email: "carol.w@company.com",
      phone: "+1 (555) 345-6789",
      location: "Los Angeles, CA",
      initials: "CW",
      status: "Available",
      projects: 4,
    },
    {
      id: 4,
      name: "David Brown",
      role: "Marketing Director",
      department: "Marketing",
      email: "david.b@company.com",
      phone: "+1 (555) 456-7890",
      location: "Chicago, IL",
      initials: "DB",
      status: "Away",
      projects: 2,
    },
    {
      id: 5,
      name: "Emma Davis",
      role: "Software Engineer",
      department: "Engineering",
      email: "emma.d@company.com",
      phone: "+1 (555) 567-8901",
      location: "Austin, TX",
      initials: "ED",
      status: "Available",
      projects: 6,
    },
    {
      id: 6,
      name: "Frank Miller",
      role: "UX Researcher",
      department: "Design",
      email: "frank.m@company.com",
      phone: "+1 (555) 678-9012",
      location: "Seattle, WA",
      initials: "FM",
      status: "Available",
      projects: 2,
    },
  ]

  const stats = [
    { label: "Total Team Members", value: "42" },
    { label: "Departments", value: "6" },
    { label: "Active Projects", value: "18" },
    { label: "New This Month", value: "3" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-500 hover:bg-green-600"
      case "In Meeting":
        return "bg-yellow-500 hover:bg-yellow-600"
      case "Away":
        return "bg-gray-500 hover:bg-gray-600"
      default:
        return ""
    }
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Team</h1>
              <p className="text-muted-foreground">
                Meet your team members and collaborate
              </p>
            </div>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Invite Member
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label}>
                <CardHeader className="pb-2">
                  <CardDescription>{stat.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Departments */}
          <Card>
            <CardHeader>
              <CardTitle>Departments</CardTitle>
              <CardDescription>Organization structure overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {departments.map((dept) => (
                  <div
                    key={dept.name}
                    className="flex items-center gap-3 rounded-lg border p-4"
                  >
                    <div className={`h-12 w-12 rounded-full ${dept.color} flex items-center justify-center text-white font-semibold`}>
                      {dept.members}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{dept.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Lead: {dept.lead}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Team Members */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.id}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarFallback className="text-lg">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                      <div className="mt-2">
                        <Badge
                          variant="outline"
                          className={getStatusColor(member.status)}
                        >
                          {member.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground truncate">
                      {member.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{member.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{member.location}</span>
                  </div>
                  <div className="pt-3 border-t">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Department</span>
                      <Badge variant="secondary">{member.department}</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-2">
                      <span className="text-muted-foreground">Active Projects</span>
                      <span className="font-medium">{member.projects}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" className="flex-1" size="sm">
                      Message
                    </Button>
                    <Button variant="outline" className="flex-1" size="sm">
                      Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Team Activity */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest team updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs">AJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Alice Johnson completed API Integration</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs">BS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Bob Smith added new project requirements</p>
                      <p className="text-xs text-muted-foreground">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs">CW</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Carol Williams updated design mockups</p>
                      <p className="text-xs text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team Performance</CardTitle>
                <CardDescription>This month&apos;s metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Projects Completed</span>
                    <span className="font-medium">18</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-2 w-[75%] rounded-full bg-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Collaboration Score</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-2 w-[92%] rounded-full bg-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Response Time</span>
                    <span className="font-medium">Excellent</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-2 w-[95%] rounded-full bg-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
