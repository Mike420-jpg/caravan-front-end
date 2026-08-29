import { useFonts } from "expo-font";
import { Text } from "react-native";

export default function Homepage() {
  const [fontsLoaded] = useFonts({
    MyFontBold: require("./Fonts/EncodeSans_SC/src/app/Fonts/EncodeSans_SC/EncodeSansSC_Condensed-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text style={{ fontFamily: "MyFontBold", fontSize: 20 }}>Custom Font</Text>
  );
}
