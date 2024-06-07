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
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ModeToggle } from './ModeToggle';
import { ParamInput } from './ParamInput';

const SortSchema = z
  .object({
    firstPage: z.number().nonnegative(),
    lastPage: z.number().nonnegative(),
    inBatch: z
      .number()
      .nonnegative()
      .refine((num) => num % 4 === 0, {
        message: 'Number must be divisible by 4',
      }),
    emptyPage: z.number().nonnegative(),
  })
  .refine((data) => data.firstPage <= data.lastPage, {
    message: 'First page must be less or equal the last page',
  });

type SignUpSchemaType = z.infer<typeof SortSchema>;

export const PagesForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SortSchema) });
  console.log(errors)
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
          <ParamInput id="firstPage" label="First Page Number" {...register('firstPage')} />
          <ParamInput id="lastPage" label="Last Page Number" {...register('lastPage')} />
          <ParamInput id="inBatch" label="Pages in a batch" {...register('inBatch')} />
          <ParamInput id="emptyPage" label="Any Empty Page" {...register('emptyPage')} />
        </CardContent>
        <CardFooter>
          <Button className="w-full" onSubmit={handleSubmit}>Generate</Button>
        </CardFooter>
      </Card>
    </>
  );
};
