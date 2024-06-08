type PrintQueueProps = {
  label: string;
  values: number[];
};

export const PrintQueue: React.FC<PrintQueueProps> = ({ label, values }) => {
  //format as a list
  const pages = values.join(', ');
  return (
    <div className="flex gap-2">
      <h6 className="font-semibold">{label}</h6>
      <span>{pages}</span>
    </div>
  );
};
