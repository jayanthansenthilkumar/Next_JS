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
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, MoreVertical, Plus, FolderOpen } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      name: "Website Redesign",
      description: "Complete overhaul of company website with modern design",
      status: "In Progress",
      progress: 65,
      team: ["AJ", "BS", "CW"],
      dueDate: "Dec 15, 2024",
      priority: "High",
    },
    {
      id: 2,
      name: "Mobile App v2.0",
      description: "Next generation mobile application with new features",
      status: "Planning",
      progress: 25,
      team: ["DB", "ED"],
      dueDate: "Jan 30, 2025",
      priority: "Medium",
    },
    {
      id: 3,
      name: "API Integration",
      description: "Integrate third-party APIs for enhanced functionality",
      status: "In Progress",
      progress: 80,
      team: ["FM", "GW", "HM"],
      dueDate: "Nov 20, 2024",
      priority: "Urgent",
    },
    {
      id: 4,
      name: "Database Migration",
      description: "Migrate legacy database to new cloud infrastructure",
      status: "Completed",
      progress: 100,
      team: ["AJ", "FM"],
      dueDate: "Oct 30, 2024",
      priority: "High",
    },
    {
      id: 5,
      name: "Security Audit",
      description: "Comprehensive security review and vulnerability assessment",
      status: "In Progress",
      progress: 45,
      team: ["BS", "DB", "ED"],
      dueDate: "Dec 01, 2024",
      priority: "High",
    },
    {
      id: 6,
      name: "Marketing Campaign",
      description: "Q4 marketing campaign with multi-channel strategy",
      status: "Planning",
      progress: 15,
      team: ["CW", "GW"],
      dueDate: "Nov 25, 2024",
      priority: "Medium",
    },
  ]

  const stats = [
    { label: "Total Projects", value: "24" },
    { label: "Active", value: "12" },
    { label: "Completed", value: "8" },
    { label: "On Hold", value: "4" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500 hover:bg-green-600"
      case "In Progress":
        return "bg-blue-500 hover:bg-blue-600"
      case "Planning":
        return "bg-yellow-500 hover:bg-yellow-600"
      default:
        return ""
    }
  }

  const getPriorityVariant = (priority: string) => {
    switch (priority) {
      case "Urgent":
        return "destructive"
      case "High":
        return "default"
      case "Medium":
        return "secondary"
      default:
        return "outline"
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
              <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
              <p className="text-muted-foreground">
                Manage and track all your projects
              </p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Project
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

          {/* Search and Filter */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Projects</CardTitle>
                  <CardDescription>
                    View and manage your project portfolio
                  </CardDescription>
                </div>
                <div className="relative w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search projects..." className="pl-8" />
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Projects Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <FolderOpen className="h-5 w-5 text-muted-foreground" />
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Project</DropdownMenuItem>
                        <DropdownMenuItem>Add Member</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Archive Project
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted">
                      <div
                        className="h-2 rounded-full bg-primary transition-all"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge
                        className={getStatusColor(project.status)}
                      >
                        {project.status}
                      </Badge>
                      <Badge variant={getPriorityVariant(project.priority) as any}>
                        {project.priority}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex -space-x-2">
                      {project.team.map((member, idx) => (
                        <Avatar key={idx} className="h-8 w-8 border-2 border-background">
                          <AvatarFallback className="text-xs">{member}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Due {project.dueDate}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Project Stats */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Project Timeline</CardTitle>
                <CardDescription>Upcoming deadlines this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects
                    .filter((p) => p.status !== "Completed")
                    .slice(0, 4)
                    .map((project) => (
                      <div key={project.id} className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-medium">{project.name}</p>
                          <p className="text-xs text-muted-foreground">
                            Due {project.dueDate}
                          </p>
                        </div>
                        <Badge variant="outline">{project.status}</Badge>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Priority Distribution</CardTitle>
                <CardDescription>Projects by priority level</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Urgent</span>
                    <span className="font-medium">3 projects (12.5%)</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-2 w-[12.5%] rounded-full bg-destructive" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>High</span>
                    <span className="font-medium">9 projects (37.5%)</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-2 w-[37.5%] rounded-full bg-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Medium</span>
                    <span className="font-medium">12 projects (50%)</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-2 w-[50%] rounded-full bg-primary" />
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
