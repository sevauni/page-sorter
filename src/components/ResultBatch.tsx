import { PageSorterResult } from '@/utils/page.utils';
import { Label } from '@radix-ui/react-label';
import { PrintQueue } from './PrintQueue';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';

type ResultBatchProps = { batch: PageSorterResult };

export const ResultBatch: React.FC<ResultBatchProps> = ({ batch }) => {
  const { firstSide, secondSide } = batch;
  const firstSideName = !!secondSide ? 'Pages' : 'First side';

  return (
    <>
      <h5 className="font-bold">First Batch</h5>

      <PrintQueue label={firstSideName} values={firstSide} />
      {!!secondSide && <PrintQueue label="Second side" values={secondSide} />}
    </>
  );
};
