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
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bell, Lock, User, Palette, Globe, Shield } from "lucide-react"

export default function SettingsPage() {
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
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
            <p className="text-muted-foreground">
              Manage your account settings and preferences
            </p>
          </div>

          {/* Settings Grid */}
          <div className="grid gap-6">
            {/* Profile Settings */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <CardTitle>Profile Settings</CardTitle>
                </div>
                <CardDescription>
                  Update your personal information and profile details
                </CardDescription>
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
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" placeholder="John Doe" defaultValue="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      defaultValue="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" placeholder="@johndoe" defaultValue="@johndoe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <textarea
                    id="bio"
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us about yourself"
                    defaultValue="Software developer and designer passionate about creating beautiful user experiences."
                  />
                </div>
                <div className="flex gap-2">
                  <Button>Save Changes</Button>
                  <Button variant="outline">Cancel</Button>
                </div>
              </CardContent>
            </Card>

            {/* Security Settings */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  <CardTitle>Security Settings</CardTitle>
                </div>
                <CardDescription>
                  Manage your password and security preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" placeholder="••••••••" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" placeholder="••••••••" />
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Badge variant="outline">Disabled</Badge>
                  </div>
                  <Button variant="outline">Enable 2FA</Button>
                </div>
                <Separator />
                <div className="space-y-4">
                  <p className="text-sm font-medium">Active Sessions</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-lg border p-3">
                      <div>
                        <p className="text-sm font-medium">Windows - Chrome</p>
                        <p className="text-xs text-muted-foreground">
                          New York, USA • Active now
                        </p>
                      </div>
                      <Badge>Current</Badge>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border p-3">
                      <div>
                        <p className="text-sm font-medium">iPhone - Safari</p>
                        <p className="text-xs text-muted-foreground">
                          Los Angeles, USA • 2 hours ago
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        Revoke
                      </Button>
                    </div>
                  </div>
                </div>
                <Button>Update Password</Button>
              </CardContent>
            </Card>

            {/* Notifications & Preferences */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Notifications */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    <CardTitle>Notifications</CardTitle>
                  </div>
                  <CardDescription>
                    Configure how you receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Email Notifications</p>
                      <p className="text-xs text-muted-foreground">
                        Receive updates via email
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      On
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Push Notifications</p>
                      <p className="text-xs text-muted-foreground">
                        Get browser notifications
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Off
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Weekly Digest</p>
                      <p className="text-xs text-muted-foreground">
                        Weekly summary of activity
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      On
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Marketing Emails</p>
                      <p className="text-xs text-muted-foreground">
                        Promotional content
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Off
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Appearance */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Palette className="h-5 w-5" />
                    <CardTitle>Appearance</CardTitle>
                  </div>
                  <CardDescription>Customize the look and feel</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Theme</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="outline" className="justify-start">
                        Light
                      </Button>
                      <Button variant="outline" className="justify-start">
                        Dark
                      </Button>
                      <Button variant="default" className="justify-start">
                        System
                      </Button>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label>Font Size</Label>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Small
                      </Button>
                      <Button variant="default" size="sm">
                        Medium
                      </Button>
                      <Button variant="outline" size="sm">
                        Large
                      </Button>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label>Accent Color</Label>
                    <div className="flex gap-2">
                      <div className="h-8 w-8 rounded-md bg-blue-500 border-2 border-primary" />
                      <div className="h-8 w-8 rounded-md bg-green-500" />
                      <div className="h-8 w-8 rounded-md bg-purple-500" />
                      <div className="h-8 w-8 rounded-md bg-orange-500" />
                      <div className="h-8 w-8 rounded-md bg-pink-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Privacy & Other Settings */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    <CardTitle>Privacy</CardTitle>
                  </div>
                  <CardDescription>Control your privacy settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Profile Visibility</p>
                      <p className="text-xs text-muted-foreground">
                        Who can see your profile
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Public
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Activity Status</p>
                      <p className="text-xs text-muted-foreground">
                        Show when you&apos;re active
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      On
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Search Visibility</p>
                      <p className="text-xs text-muted-foreground">
                        Allow search engines to find you
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      On
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    <CardTitle>Language & Region</CardTitle>
                  </div>
                  <CardDescription>Set your language preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Language</Label>
                    <Button variant="outline" className="w-full justify-start">
                      English (US)
                    </Button>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label>Timezone</Label>
                    <Button variant="outline" className="w-full justify-start">
                      (UTC-05:00) Eastern Time
                    </Button>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label>Date Format</Label>
                    <Button variant="outline" className="w-full justify-start">
                      MM/DD/YYYY
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Danger Zone */}
            <Card className="border-destructive">
              <CardHeader>
                <CardTitle className="text-destructive">Danger Zone</CardTitle>
                <CardDescription>
                  Irreversible actions that affect your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border border-destructive/50 p-4">
                  <div>
                    <p className="text-sm font-medium">Delete Account</p>
                    <p className="text-sm text-muted-foreground">
                      Permanently delete your account and all data
                    </p>
                  </div>
                  <Button variant="destructive">Delete</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
