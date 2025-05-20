// src/components/algorithm-view.tsx
"use client";

import React, { useState, useEffect, useMemo } from 'react';
import type { SubTopic, SampleQuestion, SimulationStep } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CodeDisplay } from '@/components/code-display';
import { SimulationArea } from '@/components/simulation/simulation-area';
import { generateDynamicQuestion } from '@/ai/flows/dynamic-question-generation';
import { useToast } from "@/hooks/use-toast";
import { Lightbulb, ChevronLeft, ChevronRight, Loader2, RefreshCw } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

interface AlgorithmViewProps {
  subTopic: SubTopic;
  selectedQuestion: SampleQuestion;
  topicId: string;
  subTopicId: string;
}

export function AlgorithmView({ subTopic, selectedQuestion, topicId, subTopicId }: AlgorithmViewProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const [currentQuestionText, setCurrentQuestionText] = useState(selectedQuestion.question);
  const [currentSimulationStep, setCurrentSimulationStep] = useState(0);
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [currentSimulationData, setCurrentSimulationData] = useState(selectedQuestion.simulation_data);

  useEffect(() => {
    setCurrentQuestionText(selectedQuestion.question);
    setCurrentSimulationStep(0);
    setCurrentSimulationData(selectedQuestion.simulation_data);
  }, [selectedQuestion]);

  const totalSteps = useMemo(() => currentSimulationData.steps.length, [currentSimulationData]);
  const currentStepDetails = useMemo(() => currentSimulationData.steps[currentSimulationStep], [currentSimulationData, currentSimulationStep]);

  const handleNextStep = () => {
    setCurrentSimulationStep((prev) => Math.min(prev + 1, totalSteps - 1));
  };

  const handlePrevStep = () => {
    setCurrentSimulationStep((prev) => Math.max(prev - 1, 0));
  };

  const handleResetSimulation = () => {
    setCurrentSimulationStep(0);
  }

  const handleGenerateQuestion = async () => {
    setIsLoadingAI(true);
    try {
      const result = await generateDynamicQuestion({
        algorithmName: subTopic.title,
        originalQuestion: currentQuestionText,
      });
      if (result.newQuestion) {
        setCurrentQuestionText(result.newQuestion);
        // Potentially reset simulation or adapt it if inputs change significantly
        // For now, just updates the question text
        toast({ title: "New Question Generated!", description: "The sample question has been updated." });
      } else {
        toast({ title: "Failed to Generate Question", variant: "destructive" });
      }
    } catch (error) {
      console.error("Error generating dynamic question:", error);
      toast({ title: "Error", description: "Could not generate a new question.", variant: "destructive" });
    }
    setIsLoadingAI(false);
  };

  const handleQuestionChange = (questionId: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('question', questionId);
    router.push(`${pathname}?${newParams.toString()}`);
  };


  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{subTopic.title}</CardTitle>
          {subTopic.brief_explanation && <CardDescription>{subTopic.brief_explanation}</CardDescription>}
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Sample Question</CardTitle>
            {subTopic.sample_questions.length > 1 && (
               <Select value={selectedQuestion.id} onValueChange={handleQuestionChange}>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Select a question" />
                </SelectTrigger>
                <SelectContent>
                  {subTopic.sample_questions.map((q, idx) => (
                    <SelectItem key={q.id} value={q.id}>
                      Question {idx + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
          <p className="text-lg mt-2 p-4 bg-muted rounded-md shadow-inner min-h-[60px]">{currentQuestionText}</p>
        </CardHeader>
        <CardContent>
          <Button onClick={handleGenerateQuestion} disabled={isLoadingAI} variant="outline">
            {isLoadingAI ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Lightbulb className="mr-2 h-4 w-4" />}
            Generate New Question with AI
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Interactive Simulation</CardTitle>
          {currentStepDetails?.action && <CardDescription>Step {currentSimulationStep + 1}/{totalSteps}: {currentStepDetails.action}</CardDescription>}
        </CardHeader>
        <CardContent>
          <SimulationArea
            simulationData={currentSimulationData}
            currentStep={currentSimulationStep}
          />
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div className="flex gap-2">
            <Button onClick={handlePrevStep} disabled={currentSimulationStep === 0} variant="outline">
              <ChevronLeft className="h-4 w-4 mr-2" /> Previous
            </Button>
            <Button onClick={handleNextStep} disabled={currentSimulationStep === totalSteps - 1} variant="outline">
              Next <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
          <Button onClick={handleResetSimulation} variant="ghost">
            <RefreshCw className="h-4 w-4 mr-2" /> Reset
          </Button>
        </CardFooter>
         {selectedQuestion.solution_steps && selectedQuestion.solution_steps[currentSimulationStep] && (
            <div className="p-4 mt-4 border-t">
              <h4 className="font-semibold mb-2">Explanation for this step:</h4>
              <p className="text-sm text-muted-foreground">{selectedQuestion.solution_steps[currentSimulationStep]}</p>
            </div>
          )}
      </Card>

      <CodeDisplay
        pseudocode={subTopic.pseudocode || "Pseudocode not available."}
        pythonCode={subTopic.python_code || "Python code not available."}
      />
    </div>
  );
}
