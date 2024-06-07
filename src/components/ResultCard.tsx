import { Label } from '@radix-ui/react-label';
import { PrintQueue } from './PrintQueue';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { ResultBatch } from './ResultBatch';

export const ResultCard = () => {
  return (
    <Card className="flex flex-col min-w-96">
      <CardHeader>
        <CardTitle className="text-2xl">Result</CardTitle>
        <ResultBatch/>
      </CardHeader>
      <CardContent className="grid gap-4"></CardContent>
    </Card>
  );
};
