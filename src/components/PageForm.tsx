import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { usePageForm } from '@/hooks/use-page-form.hook';
import { FormError } from './FormError';
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
