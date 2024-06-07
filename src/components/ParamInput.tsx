import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';
type ParamInputProps = {
  label: string;
  id: string;
};

export const ParamInput = React.forwardRef<HTMLInputElement, ParamInputProps>((props, ref) => {
  const { label, id, ...rest } = props;
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input {...props} ref={ref} type="number" placeholder="1" required />
    </div>
  );
});