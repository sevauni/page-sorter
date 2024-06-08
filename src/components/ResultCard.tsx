import { usePagesContext } from '@/context/pages.context';
import {
  calculatePagesOne,
  calculatePagesTwo,
  divideBatches,
  fillBlanks,
} from '@/utils/page.utils';
import React from 'react';
import { ResultBatch } from './ResultBatch';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ScrollArea } from './ui/scroll-area';

export const ResultCard = () => {
  const { emptyPage, firstPage, inBatch, isDoubleSided, lastPage } = usePagesContext();

  const result = React.useMemo(() => {
    const filledPages = fillBlanks(firstPage, lastPage, emptyPage);
    const batches = divideBatches(filledPages, inBatch);
    return batches.map((bat) => (isDoubleSided ? calculatePagesTwo(bat) : calculatePagesOne(bat)));
  }, [emptyPage, firstPage, inBatch, isDoubleSided, lastPage]);

  return (
    <Card className="flex flex-1 flex-col min-w-96 mt-12">
      <ScrollArea>
        <CardHeader>
          <CardTitle className="text-2xl">Result</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <ul>
            {result.map((batch, index) => (
              <ResultBatch batch={batch} index={index + 1} key={index} />
            ))}
          </ul>
        </CardContent>
      </ScrollArea>
    </Card>
  );
};
