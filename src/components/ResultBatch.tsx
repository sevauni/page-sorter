import { PageSorterResult } from '@/utils/page.utils';
import { PrintQueue } from './PrintQueue';

type ResultBatchProps = { batch: PageSorterResult; index: number };

export const ResultBatch: React.FC<ResultBatchProps> = ({ batch, index }) => {
  const { firstSide, secondSide } = batch;
  const firstSideName = !!secondSide ? 'Pages' : 'First side';

  return (
    <>
      {!!index && <h5 className="font-bold">Batch №{index}</h5>}
      <PrintQueue label={firstSideName} values={firstSide} />
      {!!secondSide && <PrintQueue label="Second side" values={secondSide} />}
    </>
  );
};
