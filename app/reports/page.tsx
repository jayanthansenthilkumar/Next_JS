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
import { FileText, Download, Eye, Calendar } from "lucide-react"

export default function ReportsPage() {
  const reports = [
    {
      id: 1,
      title: "Monthly Revenue Report",
      description: "Detailed breakdown of revenue streams and growth metrics",
      date: "November 1, 2024",
      type: "Financial",
      status: "Ready",
      size: "2.4 MB",
    },
    {
      id: 2,
      title: "User Engagement Analytics",
      description: "User behavior patterns and engagement statistics",
      date: "October 28, 2024",
      type: "Analytics",
      status: "Ready",
      size: "1.8 MB",
    },
    {
      id: 3,
      title: "Quarterly Performance Review",
      description: "Q3 2024 performance metrics across all departments",
      date: "October 25, 2024",
      type: "Performance",
      status: "Ready",
      size: "5.2 MB",
    },
    {
      id: 4,
      title: "Sales Pipeline Report",
      description: "Current sales opportunities and conversion rates",
      date: "October 20, 2024",
      type: "Sales",
      status: "Ready",
      size: "3.1 MB",
    },
    {
      id: 5,
      title: "Customer Satisfaction Survey",
      description: "Feedback analysis from customer satisfaction surveys",
      date: "October 15, 2024",
      type: "Customer",
      status: "Ready",
      size: "1.5 MB",
    },
    {
      id: 6,
      title: "Security Audit Report",
      description: "Comprehensive security assessment and recommendations",
      date: "October 10, 2024",
      type: "Security",
      status: "Processing",
      size: "4.7 MB",
    },
  ]

  const stats = [
    { label: "Total Reports", value: "156" },
    { label: "This Month", value: "24" },
    { label: "Downloads", value: "1,247" },
    { label: "Scheduled", value: "8" },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Financial":
        return "bg-green-500 hover:bg-green-600"
      case "Analytics":
        return "bg-blue-500 hover:bg-blue-600"
      case "Performance":
        return "bg-purple-500 hover:bg-purple-600"
      case "Sales":
        return "bg-orange-500 hover:bg-orange-600"
      case "Customer":
        return "bg-pink-500 hover:bg-pink-600"
      case "Security":
        return "bg-red-500 hover:bg-red-600"
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
              <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
              <p className="text-muted-foreground">
                Access and download generated reports
              </p>
            </div>
            <Button>
              <FileText className="mr-2 h-4 w-4" />
              Generate Report
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

          {/* Reports List */}
          <Card>
            <CardHeader>
              <CardTitle>Available Reports</CardTitle>
              <CardDescription>
                Browse and download your generated reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reports.map((report) => (
                  <div
                    key={report.id}
                    className="flex items-start gap-4 rounded-lg border p-4 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold">{report.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {report.description}
                          </p>
                        </div>
                        <Badge
                          variant={report.status === "Ready" ? "default" : "secondary"}
                          className={report.status === "Ready" ? "bg-green-500 hover:bg-green-600" : ""}
                        >
                          {report.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {report.date}
                        </div>
                        <Badge variant="outline" className={getTypeColor(report.type)}>
                          {report.type}
                        </Badge>
                        <span>{report.size}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" disabled={report.status !== "Ready"}>
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Report Categories */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Recent Downloads</CardTitle>
                <CardDescription>Most downloaded reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {reports.slice(0, 3).map((report) => (
                    <div key={report.id} className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium truncate">{report.title}</p>
                        <p className="text-xs text-muted-foreground">{report.date}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">{report.type}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Scheduled Reports</CardTitle>
                <CardDescription>Auto-generated reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Weekly Summary</p>
                      <p className="text-xs text-muted-foreground">Every Monday 9:00 AM</p>
                    </div>
                    <Badge>Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Monthly Revenue</p>
                      <p className="text-xs text-muted-foreground">1st of each month</p>
                    </div>
                    <Badge>Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Quarterly Review</p>
                      <p className="text-xs text-muted-foreground">End of quarter</p>
                    </div>
                    <Badge variant="outline">Paused</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Export Options</CardTitle>
                <CardDescription>Available formats</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Export as PDF
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Export as Excel
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Export as CSV
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
