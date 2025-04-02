"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Calendar, Clock, RefreshCw, Settings, Link as LinkIcon, Plus } from "lucide-react";

export default function AutoBlogPage() {
  const [frequency, setFrequency] = useState("weekly");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    if (websiteUrl && apiKey) {
      setIsConnected(true);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-10">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              AutoBlog
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              Automatically generate and publish blog posts to your website on a schedule.
            </p>
          </div>

          <Tabs defaultValue="setup" className="space-y-6">
            <TabsList>
              <TabsTrigger value="setup">Setup</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="setup" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LinkIcon className="h-5 w-5" />
                    Connect Your Blog
                  </CardTitle>
                  <CardDescription>
                    Connect to your WordPress, Medium, or other CMS platform.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {!isConnected ? (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="website" className="text-sm font-medium">
                          Website URL
                        </label>
                        <Input
                          id="website"
                          placeholder="https://yourblog.com"
                          value={websiteUrl}
                          onChange={(e) => setWebsiteUrl(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="platform" className="text-sm font-medium">
                          Platform
                        </label>
                        <Select defaultValue="wordpress">
                          <SelectTrigger>
                            <SelectValue placeholder="Select platform" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wordpress">WordPress</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="ghost">Ghost</SelectItem>
                            <SelectItem value="webflow">Webflow</SelectItem>
                            <SelectItem value="custom">Custom API</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="api-key" className="text-sm font-medium">
                          API Key / Token
                        </label>
                        <Input
                          id="api-key"
                          type="password"
                          placeholder="Enter your API key"
                          value={apiKey}
                          onChange={(e) => setApiKey(e.target.value)}
                        />
                      </div>
                      <Button
                        onClick={handleConnect}
                        disabled={!websiteUrl || !apiKey}
                        className="w-full"
                      >
                        Connect Blog
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="rounded-md bg-green-50 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-green-800">Connected Successfully</h3>
                            <div className="mt-2 text-sm text-green-700">
                              <p>{websiteUrl} is now connected to AI Journalist.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <Button variant="outline" onClick={() => setIsConnected(false)}>
                          Disconnect
                        </Button>
                        <Button variant="outline">
                          Test Connection
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {isConnected && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      Publishing Settings
                    </CardTitle>
                    <CardDescription>
                      Configure how your articles will be published.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="draft" />
                        <label
                          htmlFor="draft"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Publish as draft (requires manual approval)
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="featured-image" defaultChecked />
                        <label
                          htmlFor="featured-image"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Generate featured images
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="seo" defaultChecked />
                        <label
                          htmlFor="seo"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Include SEO metadata
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="social" defaultChecked />
                        <label
                          htmlFor="social"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Auto-share to social media
                        </label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="categories" className="text-sm font-medium">
                        Default Categories
                      </label>
                      <Input
                        id="categories"
                        placeholder="e.g. Marketing, Technology"
                      />
                    </div>
                    <Button className="w-full">
                      Save Settings
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="schedule" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Publishing Schedule
                  </CardTitle>
                  <CardDescription>
                    Set when your articles will be automatically published.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="frequency" className="text-sm font-medium">
                      Publishing Frequency
                    </label>
                    <Select
                      value={frequency}
                      onValueChange={setFrequency}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="biweekly">Bi-Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {frequency === "weekly" && (
                    <div className="space-y-2">
                      <label htmlFor="weekdays" className="text-sm font-medium">
                        Publish on
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                          <div
                            key={day}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox id={day.toLowerCase()} defaultChecked={day === "Monday"} />
                            <label
                              htmlFor={day.toLowerCase()}
                              className="text-sm font-medium leading-none"
                            >
                              {day.substring(0, 3)}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label htmlFor="time" className="text-sm font-medium">
                      Publishing Time
                    </label>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <Select defaultValue="9">
                        <SelectTrigger className="w-24">
                          <SelectValue placeholder="Hour" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 24 }, (_, i) => (
                            <SelectItem key={i} value={i.toString()}>
                              {i.toString().padStart(2, '0')}:00
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <span className="text-sm text-gray-500">UTC</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Save Schedule
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <RefreshCw className="h-5 w-5" />
                    Content Topics
                  </CardTitle>
                  <CardDescription>
                    Define the topics for auto-generated content.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-md border p-4">
                    <div className="font-medium">Digital Marketing</div>
                    <div className="mt-1 text-sm text-gray-500">
                      Keywords: SEO, content marketing, social media
                    </div>
                  </div>
                  <div className="rounded-md border p-4">
                    <div className="font-medium">AI Technology</div>
                    <div className="mt-1 text-sm text-gray-500">
                      Keywords: machine learning, neural networks, NLP
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Topic
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Publishing Statistics</CardTitle>
                  <CardDescription>
                    Overview of your automated content publishing.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg border p-4">
                      <div className="text-sm font-medium text-gray-500">Articles Published</div>
                      <div className="mt-1 text-3xl font-bold">17</div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="text-sm font-medium text-gray-500">Average SEO Score</div>
                      <div className="mt-1 text-3xl font-bold">93</div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="text-sm font-medium text-gray-500">Next Publish</div>
                      <div className="mt-1 text-xl font-bold">Monday, 11:00 UTC</div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="text-lg font-medium mb-4">Recent Publications</div>
                    <div className="space-y-2">
                      {[
                        "10 SEO Tips for 2024",
                        "How AI is Transforming Content Creation",
                        "The Ultimate Guide to Digital Marketing"
                      ].map((title, i) => (
                        <div key={`pub-${i}`} className="flex justify-between rounded-md border p-3">
                          <div>{title}</div>
                          <div className="text-sm text-gray-500">
                            {i === 0 ? "Today" : i === 1 ? "3 days ago" : "1 week ago"}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
