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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Mail, Phone, MapPin, Briefcase, Award, Clock } from "lucide-react"

export default function ProfilePage() {
  const activities = [
    {
      id: 1,
      action: "Completed",
      item: "Website Redesign project",
      date: "2 hours ago",
    },
    {
      id: 2,
      action: "Updated",
      item: "User profile settings",
      date: "5 hours ago",
    },
    {
      id: 3,
      action: "Joined",
      item: "Marketing Campaign project",
      date: "1 day ago",
    },
    {
      id: 4,
      action: "Created",
      item: "Q4 Sales Report",
      date: "2 days ago",
    },
  ]

  const achievements = [
    { title: "Early Adopter", description: "Joined in the first month", icon: "🌟" },
    { title: "Team Player", description: "Collaborated on 50+ projects", icon: "🤝" },
    { title: "Top Contributor", description: "Most active this quarter", icon: "🏆" },
    { title: "Problem Solver", description: "Resolved 100+ issues", icon: "💡" },
  ]

  const projects = [
    {
      name: "Website Redesign",
      role: "Lead Developer",
      status: "Completed",
      progress: 100,
    },
    {
      name: "Mobile App v2.0",
      role: "Developer",
      status: "In Progress",
      progress: 65,
    },
    {
      name: "API Integration",
      role: "Backend Developer",
      status: "In Progress",
      progress: 80,
    },
  ]

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
          {/* Profile Header */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarFallback className="text-3xl">JD</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h1 className="text-3xl font-bold">John Doe</h1>
                      <p className="text-lg text-muted-foreground">Senior Software Engineer</p>
                    </div>
                    <Button>Edit Profile</Button>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">john.doe@example.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Joined Jan 2024</span>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Badge>Engineering</Badge>
                    <Badge variant="secondary">Full-time</Badge>
                    <Badge variant="outline">Remote</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs Section */}
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="edit">Edit Profile</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>About</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Bio</h4>
                      <p className="text-sm text-muted-foreground">
                        Passionate software engineer with 5+ years of experience in full-stack development. 
                        Specialized in React, Node.js, and cloud architecture. Love building scalable 
                        applications and mentoring junior developers.
                      </p>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Engineering Department</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Employee ID: #12345</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Timezone: PST (UTC-8)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Achievements</CardTitle>
                    <CardDescription>Your accomplishments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="text-2xl">{achievement.icon}</span>
                          <div>
                            <p className="font-medium">{achievement.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Active Projects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      +3 from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Completed Tasks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">248</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      +24 from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Team Rating</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">4.8/5</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Based on 32 reviews
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Activity Tab */}
            <TabsContent value="activity" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest actions and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activities.map((activity) => (
                      <div key={activity.id} className="flex items-start gap-4 pb-4 border-b last:border-0">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">{activity.action}</span>{" "}
                            {activity.item}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {activity.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>My Projects</CardTitle>
                  <CardDescription>Projects you&apos;re currently working on</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {projects.map((project, idx) => (
                      <div key={idx} className="space-y-2 pb-4 border-b last:border-0">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{project.name}</p>
                            <p className="text-sm text-muted-foreground">{project.role}</p>
                          </div>
                          <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                            {project.status}
                          </Badge>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">{project.progress}%</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div
                              className="h-2 rounded-full bg-primary"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Edit Profile Tab */}
            <TabsContent value="edit" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Edit Profile</CardTitle>
                  <CardDescription>Update your personal information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-6">
                    <Avatar className="h-20 w-20">
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <Button variant="outline">Change Avatar</Button>
                      <p className="text-sm text-muted-foreground">
                        JPG, GIF or PNG. Max size 2MB
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="john.doe@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" defaultValue="+1 (555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Job Title</Label>
                      <Input id="title" defaultValue="Senior Software Engineer" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Input id="department" defaultValue="Engineering" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <textarea
                      id="bio"
                      className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      defaultValue="Passionate software engineer with 5+ years of experience in full-stack development."
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button>Save Changes</Button>
                    <Button variant="outline">Cancel</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
