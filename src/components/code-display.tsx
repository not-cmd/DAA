// src/components/code-display.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CodeDisplayProps {
  pseudocode: string;
  pythonCode: string;
}

export function CodeDisplay({ pseudocode, pythonCode }: CodeDisplayProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Code Examples</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="python" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="pseudocode">Pseudocode</TabsTrigger>
          </TabsList>
          <TabsContent value="python">
            <pre className="p-4 bg-muted rounded-md overflow-x-auto text-sm shadow-inner">
              <code>{pythonCode}</code>
            </pre>
          </TabsContent>
          <TabsContent value="pseudocode">
            <pre className="p-4 bg-muted rounded-md overflow-x-auto text-sm shadow-inner">
              <code>{pseudocode}</code>
            </pre>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
