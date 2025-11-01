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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, Activity } from "lucide-react"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const visitorData = [
  { month: "January", visitors: 4200 },
  { month: "February", visitors: 3800 },
  { month: "March", visitors: 5100 },
  { month: "April", visitors: 4600 },
  { month: "May", visitors: 5800 },
  { month: "June", visitors: 6200 },
]

const trafficData = [
  { source: "Organic", value: 450 },
  { source: "Direct", value: 250 },
  { source: "Social", value: 180 },
  { source: "Referral", value: 80 },
]

const visitorConfig = {
  visitors: {
    label: "Visitors",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const trafficConfig = {
  value: {
    label: "Traffic",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export default function AnalyticsPage() {
  const metrics = [
    {
      title: "Page Views",
      value: "1,234,567",
      change: "+12.5%",
      trend: "up",
      period: "vs last month",
    },
    {
      title: "Bounce Rate",
      value: "42.3%",
      change: "-3.2%",
      trend: "down",
      period: "vs last month",
    },
    {
      title: "Avg. Session Duration",
      value: "3m 24s",
      change: "+8.1%",
      trend: "up",
      period: "vs last month",
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "+0.5%",
      trend: "up",
      period: "vs last month",
    },
  ]

  const topPages = [
    { page: "/dashboard", views: 45231, visitors: 32145 },
    { page: "/products", views: 38921, visitors: 28432 },
    { page: "/analytics", views: 29384, visitors: 21938 },
    { page: "/settings", views: 18293, visitors: 14823 },
    { page: "/users", views: 15482, visitors: 12394 },
  ]

  const trafficSources = [
    { source: "Organic Search", percentage: 45, visitors: 145230 },
    { source: "Direct", percentage: 25, visitors: 80645 },
    { source: "Social Media", percentage: 18, visitors: 58103 },
    { source: "Referral", percentage: 8, visitors: 25826 },
    { source: "Email", percentage: 4, visitors: 12913 },
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
              <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
              <p className="text-muted-foreground">
                Detailed insights and performance metrics
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Last 7 days</Button>
              <Button variant="outline">Last 30 days</Button>
              <Button>Custom Range</Button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <Card key={metric.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                  {metric.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-600" />
                  )}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <span
                      className={
                        metric.trend === "up" ? "text-green-600" : "text-red-600"
                      }
                    >
                      {metric.change}
                    </span>
                    <span>{metric.period}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid gap-4 md:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Visitor Trends</CardTitle>
                <CardDescription>Daily visitors over the past 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={visitorConfig} className="h-[300px] w-full">
                  <AreaChart
                    accessibilityLayer
                    data={visitorData}
                    margin={{
                      left: 12,
                      right: 12,
                    }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                    <defs>
                      <linearGradient id="fillVisitors" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="var(--color-visitors)"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="var(--color-visitors)"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      dataKey="visitors"
                      type="natural"
                      fill="url(#fillVisitors)"
                      fillOpacity={0.4}
                      stroke="var(--color-visitors)"
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
              <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2 font-medium leading-none">
                      Trending up by 12.5% this month <TrendingUp className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
                <CardDescription>Where your visitors come from</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trafficSources.map((source) => (
                    <div key={source.source} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{source.source}</span>
                        <span className="text-muted-foreground">
                          {source.percentage}%
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 flex-1 rounded-full bg-muted">
                          <div
                            className="h-2 rounded-full bg-primary"
                            style={{ width: `${source.percentage}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground w-16 text-right">
                          {source.visitors.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Pages Table */}
          <Card>
            <CardHeader>
              <CardTitle>Top Pages</CardTitle>
              <CardDescription>Most visited pages this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-sm font-medium text-muted-foreground pb-2 border-b">
                  <div>Page</div>
                  <div className="text-right">Page Views</div>
                  <div className="text-right">Unique Visitors</div>
                </div>
                {topPages.map((page, index) => (
                  <div
                    key={page.page}
                    className="grid grid-cols-3 gap-4 text-sm items-center"
                  >
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="font-mono">
                        {index + 1}
                      </Badge>
                      <code className="text-sm">{page.page}</code>
                    </div>
                    <div className="text-right font-medium">
                      {page.views.toLocaleString()}
                    </div>
                    <div className="text-right font-medium">
                      {page.visitors.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Additional Metrics */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Device Breakdown</CardTitle>
                <CardDescription>Visitor devices</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Desktop</span>
                  <Badge>62%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Mobile</span>
                  <Badge>32%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Tablet</span>
                  <Badge>6%</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Browser Stats</CardTitle>
                <CardDescription>Top browsers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Chrome</span>
                  <Badge>65%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Safari</span>
                  <Badge>20%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Firefox</span>
                  <Badge>10%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Others</span>
                  <Badge>5%</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Geographic Data</CardTitle>
                <CardDescription>Top countries</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">United States</span>
                  <Badge>45%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">United Kingdom</span>
                  <Badge>18%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Canada</span>
                  <Badge>12%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Others</span>
                  <Badge>25%</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
