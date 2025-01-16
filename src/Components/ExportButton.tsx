import domtoimage from 'dom-to-image-more';
import { saveAs } from 'file-saver';
import { useSettings } from '../state/useSettings';

export const ExportButton = (props) => {
  const { width, height } = useSettings();
  const { month } = props;

  return (
    <button
      onClick={() => {
        domtoimage.toBlob(
          document.getElementById(`calendar-${month.name}`),
          { width: width, height: height, bgcolor: 'white' }

        ).then(function (blob) {
          saveAs(blob, `${month.name}.png`);
        });
      }}
      style={{ marginBottom: 20 }}
    >
      Export!
    </button>
  );
};
