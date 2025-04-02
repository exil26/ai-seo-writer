"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Card, CardContent, CardHeader, CardTitle, CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Trash2, Plus, PenLine, FilePlus } from "lucide-react";

export default function BulkWriterPage() {
  const [topics, setTopics] = useState<string[]>([""]);
  const [articles, setArticles] = useState<{ topic: string, content: string, status?: string }[]>([]);
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);
  const [length, setLength] = useState(1000);
  const [keywords, setKeywords] = useState("");
  const [tone, setTone] = useState("Professional");

  const handleTopicChange = (index: number, value: string) => {
    const updated = [...topics];
    updated[index] = value;
    setTopics(updated);
  };

  const addTopic = () => setTopics([...topics, ""]);
  const removeTopic = (index: number) => {
    const updated = [...topics];
    updated.splice(index, 1);
    setTopics(updated.length ? updated : [""]);
  };

  const generateArticle = async (topic: string, index: number) => {
    setLoadingIndex(index);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, keywords, tone, length }),
      });

      const data = await res.json();
      if (res.ok) {
        const updated = [...articles];
        updated[index] = { topic, content: data.content };
        setArticles(updated);
      } else {
        alert("Error generating article: " + data.error);
      }
    } catch (err) {
      alert("Failed to generate article.");
    } finally {
      setLoadingIndex(null);
    }
  };

  const publishArticle = async (index: number) => {
    const article = articles[index];
    if (!article || !article.content) return;

    const title = article.topic;
    try {
      const res = await fetch("/api/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content: article.content }),
      });

      const data = await res.json();
      if (res.ok) {
        const updated = [...articles];
        updated[index].status = "Published";
        setArticles(updated);
        alert("Article published successfully.");
      } else {
        alert("Error publishing: " + data.error);
      }
    } catch (err) {
      alert("Failed to publish article.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-10">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold">Bulk Article Writer</h1>
            <p className="mt-2 text-gray-600">
              Generate and publish multiple SEO articles with AI.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Writer Settings</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Input
                type="number"
                min={300}
                max={3000}
                value={length}
                onChange={(e) => setLength(parseInt(e.target.value))}
                placeholder="Word Count (e.g. 1000)"
              />
              <Textarea
                placeholder="Primary Keywords (comma separated)"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
              />
              <Input
                placeholder="Tone of Voice (e.g. Professional)"
                value={tone}
                onChange={(e) => setTone(e.target.value)}
              />
            </CardContent>
          </Card>

          {topics.map((topic, index) => (
            <Card key={index} className="mb-6">
              <CardHeader>
                <CardTitle>Topic {index + 1}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    value={topic}
                    onChange={(e) => handleTopicChange(index, e.target.value)}
                    placeholder="Enter topic"
                  />
                  <Button
                    variant="ghost"
                    onClick={() => removeTopic(index)}
                    disabled={topics.length === 1}
                  >
                    <Trash2 />
                  </Button>
                </div>

                <Button
                  onClick={() => generateArticle(topic, index)}
                  disabled={!topic.trim() || loadingIndex === index}
                >
                  {loadingIndex === index ? "Generating..." : "Generate Article"}
                </Button>

                {articles[index]?.content && (
                  <div className="mt-4">
                    <h2 className="text-lg font-semibold">Generated Article</h2>
                    <div className="whitespace-pre-wrap border p-4 mt-2 rounded-md bg-gray-50 text-sm">
                      {articles[index].content}
                    </div>
                    <Button className="mt-4" onClick={() => publishArticle(index)}>
                      Publish to WordPress
                    </Button>
                    {articles[index].status && (
                      <p className="text-green-600 mt-2">{articles[index].status}</p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}

          <div className="flex justify-between items-center gap-4 mt-6">
            <Button onClick={addTopic}>
              <Plus className="mr-2 h-4 w-4" />
              Add Another Topic
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
