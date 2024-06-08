import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { usePageForm } from '@/hooks/use-page-form.hook';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FormError } from './FormError';
import { ModeToggle } from './ModeToggle';
import { ParamInput } from './ParamInput';

export const PagesForm = () => {
  const { emptyPage, firstPage, inBatch, lastPage, errors } = usePageForm();

  return (
    <>
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="text-2xl">Page sorter</CardTitle>
          <CardDescription>
            Enter the params of the document so you could print it like a book
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <ParamInput label="First Page Number" {...firstPage} />
          <FormError err={errors.firstPage} />
          <ParamInput label="Last Page Number" {...lastPage} />
          <FormError err={errors.lastPage} />
          <ParamInput label="Pages In a Batch" {...inBatch} />
          <FormError err={errors.inBatch} />
          <ParamInput label="Empty Page Number" {...emptyPage} />
          <FormError err={errors.emptyPage} />
        </CardContent>
      </Card>
    </>
  );
};
