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
import { Search, MoreVertical, UserPlus } from "lucide-react"

export default function UsersPage() {
  const users = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      role: "Admin",
      status: "Active",
      initials: "AJ",
      joinDate: "Jan 2024",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob.smith@example.com",
      role: "Editor",
      status: "Active",
      initials: "BS",
      joinDate: "Feb 2024",
    },
    {
      id: 3,
      name: "Carol Williams",
      email: "carol.williams@example.com",
      role: "Viewer",
      status: "Active",
      initials: "CW",
      joinDate: "Mar 2024",
    },
    {
      id: 4,
      name: "David Brown",
      email: "david.brown@example.com",
      role: "Editor",
      status: "Inactive",
      initials: "DB",
      joinDate: "Jan 2024",
    },
    {
      id: 5,
      name: "Emma Davis",
      email: "emma.davis@example.com",
      role: "Viewer",
      status: "Active",
      initials: "ED",
      joinDate: "Apr 2024",
    },
    {
      id: 6,
      name: "Frank Miller",
      email: "frank.miller@example.com",
      role: "Admin",
      status: "Active",
      initials: "FM",
      joinDate: "Feb 2024",
    },
    {
      id: 7,
      name: "Grace Wilson",
      email: "grace.wilson@example.com",
      role: "Editor",
      status: "Active",
      initials: "GW",
      joinDate: "Mar 2024",
    },
    {
      id: 8,
      name: "Henry Moore",
      email: "henry.moore@example.com",
      role: "Viewer",
      status: "Active",
      initials: "HM",
      joinDate: "Apr 2024",
    },
  ]

  const stats = [
    { label: "Total Users", value: "2,459" },
    { label: "Active Users", value: "2,187" },
    { label: "New This Month", value: "+156" },
    { label: "Admin Users", value: "12" },
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
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Users</h1>
              <p className="text-muted-foreground">
                Manage your team members and their permissions
              </p>
            </div>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Add User
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

          {/* Users Table */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Team Members</CardTitle>
                  <CardDescription>
                    View and manage all users in your organization
                  </CardDescription>
                </div>
                <div className="relative w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search users..." className="pl-8" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Table Header */}
                <div className="grid grid-cols-5 gap-4 text-sm font-medium text-muted-foreground pb-2 border-b">
                  <div className="col-span-2">User</div>
                  <div>Role</div>
                  <div>Status</div>
                  <div className="text-right">Actions</div>
                </div>

                {/* Table Rows */}
                {users.map((user) => (
                  <div
                    key={user.id}
                    className="grid grid-cols-5 gap-4 items-center py-2"
                  >
                    <div className="col-span-2 flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>{user.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">{user.name}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <div>
                      <Badge
                        variant={
                          user.role === "Admin"
                            ? "default"
                            : user.role === "Editor"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {user.role}
                      </Badge>
                    </div>
                    <div>
                      <Badge
                        variant={user.status === "Active" ? "default" : "outline"}
                        className={
                          user.status === "Active"
                            ? "bg-green-500 hover:bg-green-600"
                            : ""
                        }
                      >
                        {user.status}
                      </Badge>
                    </div>
                    <div className="flex justify-end">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit User</DropdownMenuItem>
                          <DropdownMenuItem>Change Role</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            Remove User
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Signups</CardTitle>
                <CardDescription>New users in the last 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.slice(0, 4).map((user) => (
                    <div key={user.id} className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">
                          {user.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.joinDate}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {user.role}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Role Distribution</CardTitle>
                <CardDescription>User roles breakdown</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Admin</span>
                    <span className="font-medium">12 users (5%)</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-2 w-[5%] rounded-full bg-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Editor</span>
                    <span className="font-medium">89 users (36%)</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-2 w-[36%] rounded-full bg-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Viewer</span>
                    <span className="font-medium">145 users (59%)</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-2 w-[59%] rounded-full bg-primary" />
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
