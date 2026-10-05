import { View } from 'react-native';
import type { CustomAppbarProps } from '../CustomAppbar';
import CustomAppbar from '../CustomAppbar';

const HomePageLayout = ()=>{
    const appTopBar: CustomAppbarProps = {
        appBarBackAction: {
            onPress: () => {
            console.log("Back clicked");
            },
        },
        appBarContent: {
            title: "Lewis TMS",
        },
        appBarAction: [
            {
            icon: "calendar",
            onPress: () => console.log("Calendar clicked"),
            },
            {
            icon: "magnify",
            onPress: () => console.log("Search clicked"),
            },
        ],
    };
    return (
           <View
              style={{
                flex: 1,
                width: "100%",
              }}
            >
              <CustomAppbar
                appBarBackAction={appTopBar.appBarBackAction}
                appBarContent={appTopBar.appBarContent}
                appBarAction={appTopBar.appBarAction}
              />
           </View>
    );
}

export default HomePageLayout;