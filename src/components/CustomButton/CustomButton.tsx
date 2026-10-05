import { Button } from "react-native-paper";

interface CustomButtonProps {
  readonly buttonText: string;
  readonly buttonTextColor?: string;
  readonly icon?: string;
  readonly isButtonDisabled?: boolean;
  readonly onButtonClicked: () => void;

  readonly buttonMinWidth?: number;
  readonly buttonHeight?: number;
  readonly buttonFontSize?: number;
  readonly buttonFontWeight?: "400" | "500" | "600" | "700";

  readonly buttonBackgroundColor?: string;
  readonly buttonBorderColor?: string;
  readonly buttonBorderWidth?: number;
  readonly buttonBorderRadius?: number;

  readonly buttonPaddingHorizontal?: number;
  readonly buttonPaddingVertical?: number;

  readonly buttonElevation?: number;

  readonly buttonDisabledBackgroundColor?: string;
  readonly buttonDisabledTextColor?: string;
  readonly buttonDisabledBorderColor?: string;

  readonly uppercase?: boolean;
}

const CustomButton = ({
  buttonText,
  buttonTextColor = "#FFFFFF",
  icon,
  isButtonDisabled = false,
  onButtonClicked,

  buttonMinWidth = 100,
  buttonHeight = 40,
  buttonFontSize = 16,
  buttonFontWeight = "600",

  buttonBackgroundColor = "#1976D2",
  buttonBorderColor = "#1976D2",
  buttonBorderWidth = 1,
  buttonBorderRadius = 6,

  buttonPaddingHorizontal = 16,
  buttonPaddingVertical = 0,

  buttonElevation = 0,

  buttonDisabledBackgroundColor = "#E0E0E0",
  buttonDisabledTextColor = "#9E9E9E",
  buttonDisabledBorderColor = "#E0E0E0",

  uppercase = false,
}: CustomButtonProps) => {
  const isDisabled = isButtonDisabled;

  return (
    <Button
      mode="contained"
      icon={icon}
      disabled={isDisabled}
      onPress={onButtonClicked}
      uppercase={uppercase}
      textColor={
        isDisabled
          ? buttonDisabledTextColor
          : buttonTextColor
      }
      buttonColor={
        isDisabled
          ? buttonDisabledBackgroundColor
          : buttonBackgroundColor
      }
      style={{
        minWidth: buttonMinWidth,
        height: buttonHeight,
        borderRadius: buttonBorderRadius,
        borderWidth: buttonBorderWidth,
        borderColor: isDisabled
          ? buttonDisabledBorderColor
          : buttonBorderColor,
        elevation: buttonElevation,
        justifyContent: "center",
      }}
      contentStyle={{
        minHeight: buttonHeight,
        paddingHorizontal: buttonPaddingHorizontal,
        paddingVertical: buttonPaddingVertical,
      }}
      labelStyle={{
        fontSize: buttonFontSize,
        fontWeight: buttonFontWeight,
      }}
    >
      {buttonText}
    </Button>
  );
};

export default CustomButton;
