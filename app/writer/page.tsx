"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, PenLine, Zap, CheckCircle, FilePlus, Settings, BarChart } from "lucide-react";

export default function WriterPage() {
  const router = useRouter();
  const [isGenerating, setIsGenerating] = useState(false);
  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState("");
  const [generatedArticle, setGeneratedArticle] = useState<string | null>(null);
  const [seoScore, setSeoScore] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    // Simulate AI generation with a timeout
    setTimeout(() => {
      const mockArticle = `
# ${topic}

## Introduction
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl nunc eu nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl nunc eu nisl.

## Why ${topic} Matters
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

## Key Benefits
1. Benefit one with ${keywords.split(',')[0] || 'keyword'} integration
2. Advanced solutions for modern problems
3. Customizable options for every need

## How to Implement ${topic}
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

## Conclusion
At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
      `;

      setGeneratedArticle(mockArticle);
      setSeoScore(Math.floor(Math.random() * 10) + 90); // Random score between 90-99
      setIsGenerating(false);
    }, 3000);
  };

  const handleReset = () => {
    setGeneratedArticle(null);
    setSeoScore(null);
  };

  // Function to convert markdown to HTML for display in the HTML tab
  const markdownToHtml = (markdown: string) => {
    return markdown
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/\*\*(.*)\*\*/gm, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gm, '<em>$1</em>')
      .replace(/\n/gm, '<br>');
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-10">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              AI Article Writer
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              Generate SEO-optimized content in seconds. Just enter your topic and keywords.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Left Sidebar - Article Settings */}
            <div className="md:col-span-1">
              {!generatedArticle ? (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      Article Settings
                    </CardTitle>
                    <CardDescription>Configure your article parameters</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="topic" className="text-sm font-medium">
                          Topic or Title
                        </label>
                        <Input
                          id="topic"
                          placeholder="e.g. Benefits of Meditation"
                          value={topic}
                          onChange={(e) => setTopic(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="keywords" className="text-sm font-medium">
                          Keywords (comma separated)
                        </label>
                        <Input
                          id="keywords"
                          placeholder="e.g. meditation, mindfulness, stress"
                          value={keywords}
                          onChange={(e) => setKeywords(e.target.value)}
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isGenerating || !topic}
                      >
                        {isGenerating ? (
                          "Generating..."
                        ) : (
                          <>
                            Generate Article
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart className="h-5 w-5" />
                      Article Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-sm font-medium">SEO Score</div>
                      <div className="flex items-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white font-bold">
                          {seoScore}
                        </div>
                        <div className="ml-2 text-sm text-gray-600">/100</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Keywords</div>
                      <div className="flex flex-wrap gap-1">
                        {keywords.split(',').map((keyword, i) => (
                          <div
                            key={`keyword-${keyword.trim()}-${i}`}
                            className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                          >
                            {keyword.trim()}
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" onClick={handleReset} className="w-full">
                      Generate New Article
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Main Content Area */}
            <div className="md:col-span-2">
              {!generatedArticle ? (
                <div className="flex h-full items-center justify-center rounded-lg border border-dashed p-10 text-center">
                  <div className="space-y-2">
                    <FilePlus className="mx-auto h-10 w-10 text-gray-400" />
                    <h3 className="text-lg font-medium">No Article Generated Yet</h3>
                    <p className="text-sm text-gray-500">
                      Fill in the form and click &quot;Generate Article&quot; to create content.
                    </p>
                  </div>
                </div>
              ) : (
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>{topic}</CardTitle>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button size="sm">Publish</Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="preview">
                      <TabsList className="mb-4">
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        <TabsTrigger value="markdown">Markdown</TabsTrigger>
                        <TabsTrigger value="html">HTML</TabsTrigger>
                      </TabsList>
                      <TabsContent value="preview" className="prose max-w-none">
                        <ReactMarkdown>{generatedArticle}</ReactMarkdown>
                      </TabsContent>
                      <TabsContent value="markdown">
                        <Textarea
                          className="min-h-[500px] font-mono text-sm"
                          readOnly
                          value={generatedArticle}
                        />
                      </TabsContent>
                      <TabsContent value="html">
                        <Textarea
                          className="min-h-[500px] font-mono text-sm"
                          readOnly
                          value={markdownToHtml(generatedArticle)}
                        />
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                  <CardFooter className="border-t flex justify-between pt-4">
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Ready to publish
                    </div>
                    <Button>
                      Publish to Blog
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
