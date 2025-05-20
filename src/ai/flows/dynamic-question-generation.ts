// src/ai/flows/dynamic-question-generation.ts
'use server';

/**
 * @fileOverview Dynamically generates new questions based on a given sample question.
 *
 * - generateDynamicQuestion - A function to generate a dynamic question.
 * - GenerateDynamicQuestionInput - The input type for the generateDynamicQuestion function.
 * - GenerateDynamicQuestionOutput - The return type for the generateDynamicQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDynamicQuestionInputSchema = z.object({
  algorithmName: z.string().describe('The name of the algorithm.'),
  originalQuestion: z.string().describe('The original sample question.'),
});
export type GenerateDynamicQuestionInput = z.infer<typeof GenerateDynamicQuestionInputSchema>;

const GenerateDynamicQuestionOutputSchema = z.object({
  newQuestion: z.string().describe('The dynamically generated question.'),
});
export type GenerateDynamicQuestionOutput = z.infer<typeof GenerateDynamicQuestionOutputSchema>;

export async function generateDynamicQuestion(
  input: GenerateDynamicQuestionInput
): Promise<GenerateDynamicQuestionOutput> {
  return generateDynamicQuestionFlow(input);
}

const dynamicQuestionPrompt = ai.definePrompt({
  name: 'dynamicQuestionPrompt',
  input: {schema: GenerateDynamicQuestionInputSchema},
  output: {schema: GenerateDynamicQuestionOutputSchema},
  prompt: `You are an expert in creating new questions for algorithm learning.
  Given the original question for the algorithm "{{algorithmName}}", create a new question with different inputs or scenarios, but testing the same underlying concept.
  Original Question: "{{originalQuestion}}"
  New Question:`,
});

const generateDynamicQuestionFlow = ai.defineFlow(
  {
    name: 'generateDynamicQuestionFlow',
    inputSchema: GenerateDynamicQuestionInputSchema,
    outputSchema: GenerateDynamicQuestionOutputSchema,
  },
  async input => {
    const {output} = await dynamicQuestionPrompt(input);
    return output!;
  }
);
