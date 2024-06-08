import { usePagesContext } from '@/context/pages.context';
import {
  calculatePagesOne,
  calculatePagesTwo,
  divideBatches,
  fillBlanks,
} from '@/utils/page.utils';
import { Label } from '@radix-ui/react-label';
import React from 'react';
import { PrintQueue } from './PrintQueue';
import { ResultBatch } from './ResultBatch';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';

export const ResultCard = () => {
  const { emptyPage, firstPage, inBatch, isDoubleSided, lastPage } = usePagesContext();

  const result = React.useMemo(() => {
    const filledPages = fillBlanks(firstPage, lastPage, emptyPage);
    const batches = divideBatches(filledPages, inBatch);
    return batches.map((bat) => (isDoubleSided ? calculatePagesTwo(bat) : calculatePagesOne(bat)));
  }, [emptyPage, firstPage, inBatch, isDoubleSided, lastPage]);

  console.log('result', result);

  return (
    <Card className="flex flex-col min-w-96">
      <CardHeader>
        <CardTitle className="text-2xl">Result</CardTitle>
        {result.map((batch) => (
          <ResultBatch batch={batch} />
        ))}
      </CardHeader>
      <CardContent className="grid gap-4"></CardContent>
    </Card>
  );
};
