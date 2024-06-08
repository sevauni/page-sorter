import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { usePageForm } from '@/hooks/use-page-form.hook';
import { Controller } from 'react-hook-form';
import { FormError } from './FormError';
import { ParamInput } from './ParamInput';
import { Label } from './ui/label';
export const PagesForm = () => {
  const { control, emptyPage, firstPage, inBatch, lastPage, isDoubleSided, errors } = usePageForm();

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
          <Controller
            control={control}
            name="isDoubleSided"
            render={({ field: { onChange, onBlur, value, name, ref } }) => {
              return (
                <div className="flex items-center space-x-2">
                  <Label htmlFor={name}>{!!value ? 'Double Side' : 'One Side'}</Label>
                  <Switch onBlur={onBlur} onCheckedChange={onChange} checked={value} ref={ref} />
                </div>
              );
            }}
          />
        </CardContent>
      </Card>
    </>
  );
};
