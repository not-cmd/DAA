
// src/components/layout/app-layout.tsx
"use client";

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { SidebarNav } from '@/components/sidebar-nav';
import { AlgorithmView } from '@/components/algorithm-view';
import { ALGORITHM_DATA, getSubTopicByIds, getQuestionByIds } from '@/data/algorithms';
import type { SubTopic, SampleQuestion, Topic as TopicType } from '@/types';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BrainCircuit } from 'lucide-react';

function AppLayoutContent() {
  const searchParams = useSearchParams();
  const selectedTopicId = searchParams.get('topic');
  const selectedSubTopicId = searchParams.get('subtopic');
  const selectedQuestionId = searchParams.get('question');

  const [currentTopic, setCurrentTopic] = useState<TopicType | null>(null);
  const [currentSubTopic, setCurrentSubTopic] = useState<SubTopic | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<SampleQuestion | null>(null);

  React.useEffect(() => {
    if (selectedTopicId) {
      const topic = ALGORITHM_DATA.find(t => t.id === selectedTopicId);
      setCurrentTopic(topic || null);
    } else {
      setCurrentTopic(null);
    }

    if (selectedTopicId && selectedSubTopicId) {
      const subTopic = getSubTopicByIds(selectedTopicId, selectedSubTopicId);
      setCurrentSubTopic(subTopic || null);
      if (subTopic && selectedQuestionId) {
        const question = getQuestionByIds(selectedTopicId, selectedSubTopicId, selectedQuestionId);
        setCurrentQuestion(question || null);
      } else if (subTopic && subTopic.sample_questions.length > 0) {
        // Default to first question if none selected
        setCurrentQuestion(subTopic.sample_questions[0]);
      } else {
        setCurrentQuestion(null);
      }
    } else {
      setCurrentSubTopic(null);
      setCurrentQuestion(null);
    }
  }, [selectedTopicId, selectedSubTopicId, selectedQuestionId]);

  return (
    <SidebarProvider defaultOpen>
      <Sidebar
        side="left"
        variant="sidebar"
        collapsible="icon"
        className="border-r"
      >
        <SidebarHeader className="p-4">
          <div className="flex items-center gap-2">
            <BrainCircuit className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-semibold text-primary group-data-[collapsible=icon]:hidden">
              AlgoSim
            </h1>
          </div>
        </SidebarHeader>
        <ScrollArea className="h-[calc(100vh-80px)]"> {/* Adjust height as needed */}
          <SidebarContent>
            <SidebarNav
              topics={ALGORITHM_DATA}
              selectedTopicId={selectedTopicId}
              selectedSubTopicId={selectedSubTopicId}
              selectedQuestionId={selectedQuestionId}
            />
          </SidebarContent>
        </ScrollArea>
      </Sidebar>
      <SidebarInset className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 lg:h-[60px] lg:px-6">
          <SidebarTrigger className="md:hidden" />
          <h1 className="text-lg font-semibold md:text-xl">
            {currentSubTopic ? currentSubTopic.title : currentTopic ? currentTopic.title : "Welcome to AlgoSim"}
          </h1>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6">
          {currentSubTopic && currentQuestion ? (
            <AlgorithmView
              subTopic={currentSubTopic}
              selectedQuestion={currentQuestion}
              topicId={selectedTopicId!}
              subTopicId={selectedSubTopicId!}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <BrainCircuit className="w-24 h-24 text-muted-foreground mb-4" />
              <h2 className="text-2xl font-semibold text-muted-foreground mb-2">Select an Algorithm</h2>
              <p className="text-muted-foreground">Choose a topic and subtopic from the sidebar to get started.</p>
            </div>
          )}
        </main>
        <footer className="py-4 px-6 border-t bg-background/80 backdrop-blur-sm text-center text-sm text-muted-foreground">
          Made by: not-cmd
        </footer>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default function AppLayout() {
  return (
    <Suspense fallback={<div className="flex h-screen w-screen items-center justify-center text-lg">Loading AlgoSim...</div>}>
      <AppLayoutContent />
    </Suspense>
  );
}
