type PrintQueueProps = {
  label: string;
  values: number[];
};

export const PrintQueue: React.FC<PrintQueueProps> = ({ label, values }) => {
  const pages = values.join(', ');
  return (
    <div className="flex gap-2">
      <h6 className="font-semibold whitespace-nowrap mb-1 min-w-24">{label}</h6>
      <span>{pages}</span>
    </div>
  );
};
