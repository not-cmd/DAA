// src/components/sidebar-nav.tsx
"use client";

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from "@/components/ui/sidebar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { AlgorithmData, Topic, SubTopic as SubTopicType, SampleQuestion } from '@/types';
import { cn } from '@/lib/utils';

interface SidebarNavProps {
  topics: AlgorithmData;
  selectedTopicId: string | null;
  selectedSubTopicId: string | null;
  selectedQuestionId: string | null;
}

export function SidebarNav({ topics, selectedTopicId, selectedSubTopicId, selectedQuestionId }: SidebarNavProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = (params: Record<string, string | null>): string => {
    const newParams = new URLSearchParams(searchParams.toString());
    Object.entries(params).forEach(([key, value]) => {
      if (value === null) {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
    });
    return newParams.toString();
  };


  return (
    <Accordion type="multiple" defaultValue={selectedTopicId ? [selectedTopicId] : []} className="w-full px-2">
      {topics.map((topic) => (
        <AccordionItem value={topic.id} key={topic.id}>
          <AccordionTrigger className="hover:no-underline hover:bg-sidebar-accent rounded-md px-2 py-1.5 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
            <div className="flex items-center gap-2">
              {topic.icon && <topic.icon className="h-5 w-5" />}
              <span className="group-data-[collapsible=icon]:hidden">{topic.title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="group-data-[collapsible=icon]:hidden">
            <SidebarMenu className="pl-4 border-l border-sidebar-border ml-2">
              {topic.subtopics.map((subTopic) => (
                <SidebarMenuItem key={subTopic.id}>
                  <SidebarMenuButton
                    asChild
                    isActive={subTopic.id === selectedSubTopicId}
                    tooltip={{ children: subTopic.title, className: "ml-2" }}
                    className={cn(
                      "justify-start w-full",
                       subTopic.id === selectedSubTopicId && "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                    )}
                  >
                    <Link href={`${pathname}?${createQueryString({ topic: topic.id, subtopic: subTopic.id, question: subTopic.sample_questions[0]?.id || null })}`}>
                      {subTopic.title}
                    </Link>
                  </SidebarMenuButton>
                   {subTopic.id === selectedSubTopicId && subTopic.sample_questions.length > 1 && (
                     <SidebarMenuSub className="ml-2">
                       {subTopic.sample_questions.map((question) => (
                         <SidebarMenuSubItem key={question.id}>
                           <SidebarMenuSubButton
                            asChild
                            isActive={question.id === selectedQuestionId}
                            className={cn(
                                question.id === selectedQuestionId && "bg-sidebar-accent text-sidebar-accent-foreground"
                            )}
                           >
                             <Link href={`${pathname}?${createQueryString({ topic: topic.id, subtopic: subTopic.id, question: question.id })}`}>
                               {`Q: ${question.question.substring(0, 20)}...`}
                             </Link>
                           </SidebarMenuSubButton>
                         </SidebarMenuSubItem>
                       ))}
                     </SidebarMenuSub>
                   )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
