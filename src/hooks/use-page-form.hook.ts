import { LocalStorageKeys } from '@/consts';
import { usePagesContext } from '@/context/pages.context';
import { getItem, setItem } from '@/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { z } from 'zod';

const options = { valueAsNumber: true };
const SortSchema = z
  .object({
    firstPage: z
      .number({ message: 'Not a valid number' })
      .nonnegative({ message: 'Number must be positive' })
      .max(4000, { message: 'Number must be less than 4000' }),
    lastPage: z
      .number({ message: 'Not a valid number' })
      .nonnegative({ message: 'Number must be positive' })
      .max(4000, { message: 'Number must be less than 4000' }),
    inBatch: z
      .number({ message: 'Not a valid number' })
      .nonnegative({ message: 'Number must be positive' })
      .max(200, { message: 'Number must be less than 200' })
      .refine((num) => num % 4 === 0, {
        message: 'Number must be divisible by 4',
      }),
    emptyPage: z.number().nonnegative(),
    isDoubleSided: z.boolean(),
  })
  .strict()
  .refine((data) => data.firstPage <= data.lastPage, {
    path: ['lastPage'],
    message: 'First page must be less or equal the last page',
  })
  .refine((data) => data.firstPage <= data.lastPage, {
    path: ['firstPage'],
    message: 'First page must be less or equal the last page',
  });

type SignUpSchemaType = z.infer<typeof SortSchema>;
export type PageFormErrors = FieldErrors<SignUpSchemaType>;

const defaultValues = getItem<SignUpSchemaType>(LocalStorageKeys.PageSettings, {
  firstPage: 1,
  lastPage: 16,
  inBatch: 16,
  emptyPage: 1,
  isDoubleSided: false,
});

export const usePageForm = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SortSchema),
    mode: 'onChange',
    defaultValues,
  });

  const { setValues } = usePagesContext();

  const firstPage = register('firstPage', options);
  const lastPage = register('lastPage', options);
  const inBatch = register('inBatch', options);
  const emptyPage = register('emptyPage', options);
  const isDoubleSided = register('isDoubleSided');

  React.useEffect(() => {
    const subscription = watch((value) => {
      if (!!Object.keys(errors).length) {
        return;
      }

      const isParsed = SortSchema.safeParse(value);
      const newValues = isParsed.data;

      if (newValues) {
        setItem(LocalStorageKeys.PageSettings, newValues);
        setValues(newValues);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, errors]);

  return {
    control,
    firstPage,
    lastPage,
    inBatch,
    emptyPage,
    isDoubleSided,
    errors,
    handleSubmit,
  };
};
