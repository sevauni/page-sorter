import { FieldError } from "react-hook-form";

type FormErrorProps = {
  err?: FieldError;
};

export const FormError: React.FC<FormErrorProps> = ({ err }) => {
  if (!err) {
    return null;
  }
  
  return <div className="text-red-500 text-sm">asd{err?.message}</div>;
};
