import * as React from 'react';
import { List } from 'react-native-paper';

type CustomAccordionProps = {
  title: React.ReactNode;
  left?: (props: { color: string; style?: object }) => React.ReactNode;
  children?: React.ReactNode;
  expanded: boolean;
  onPress: () => void;
  style?: object;
};

const CustomAccordion = ({
  title,
  left,
  children,
  expanded,
  onPress,
  style,
}: CustomAccordionProps) => {
  return (
    <List.Accordion
      title={title}
      left={left}
      expanded={expanded}
      onPress={onPress}
      style={style}
    >
      {children}
    </List.Accordion>
  );
};

export default CustomAccordion;