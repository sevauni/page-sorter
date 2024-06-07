import { Label } from '@radix-ui/react-label';
import { PrintQueue } from './PrintQueue';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';

export const ResultBatch = () => {
  return (
    <>
      <h5 className="font-bold">First Batch</h5>

      <PrintQueue label="First side" values={[16, 1, 14, 3, 12, 2]} />
      <PrintQueue label="Second side" values={[16, 1, 14, 3, 12, 2]} />
    </>
  );
};
