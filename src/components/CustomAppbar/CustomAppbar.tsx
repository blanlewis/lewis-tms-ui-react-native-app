import { Appbar } from "react-native-paper";

type IconType =
  | "calendar"
  | "magnify"
  | "dots-vertical"
  | "account"
  | "account-circle"
  | "bell"
  | "bell-outline"
  | "settings"
  | "menu"
  | "plus"
  | "minus"
  | "delete"
  | "pencil"
  | "check"
  | "close"
  | "arrow-left"
  | "arrow-right"
  | "chevron-down"
  | "chevron-up"
  | "filter"
  | "map"
  | "map-marker"
  | "truck"
  | "car"
  | "clock"
  | "calendar-month"
  | "refresh"
  | "download"
  | "upload"
  | "eye"
  | "eye-off"
  | "information"
  | "help-circle"
  | "logout"
  | "login";

interface CustomAppbarProps {
  appBarBackAction: {
    onPress: () => void;
  };

  appBarContent: {
    title: string;
  };

  appBarAction: {
    icon: IconType;
    onPress: () => void;
  }[];
}

const CustomAppbar = ({
  appBarBackAction,
  appBarContent,
  appBarAction,
}: CustomAppbarProps) => (
  <Appbar.Header>
    <Appbar.BackAction onPress={appBarBackAction.onPress} />
    <Appbar.Content title={appBarContent.title} />
    {appBarAction.map((action, index) => (
      <Appbar.Action
        key={index}
        icon={action.icon}
        onPress={action.onPress}
      />
    ))}
  </Appbar.Header>
);

export default CustomAppbar;

export type { CustomAppbarProps };
