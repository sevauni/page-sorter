import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';
type ParamInputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const ParamInput = React.forwardRef<HTMLInputElement, ParamInputProps>((props, refer) => {
  const { id, label } = props;
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input {...props} ref={refer} />
    </div>
  );
});
