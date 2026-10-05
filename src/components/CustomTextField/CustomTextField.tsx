import type { ComponentProps } from "react";
import { TextInput } from "react-native-paper";

type CustomTextFieldProps = ComponentProps<typeof TextInput>;

const CustomTextField = ({
	...textInputProps
}: CustomTextFieldProps) => (
	<TextInput {...textInputProps} />
);

export default CustomTextField;
