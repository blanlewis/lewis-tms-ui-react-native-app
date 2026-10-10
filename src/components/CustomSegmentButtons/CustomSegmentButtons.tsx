import { SegmentedButtons } from 'react-native-paper';

type SegmentOption = {
  value: string;
  label: string;
};

type CustomSegmentButtonsProps = {
  value: string;
  onValueChange: (value: string) => void;
  buttons: SegmentOption[];
};

const CustomSegmentButtons = ({
  value,
  onValueChange,
  buttons,
}: CustomSegmentButtonsProps) => {
  return (
    <SegmentedButtons
      value={value}
      onValueChange={(selectedValue) => {
        onValueChange(
          selectedValue === value ? '' : selectedValue,
        );
      }}
      buttons={buttons}
      style={{
        width: '100%',
      }}
    />
  );
};

export default CustomSegmentButtons;