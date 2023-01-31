import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./navigation/RootNavigation";
import { Asset } from "expo-asset";
import images from "./constants/images";

const imageAssets = [
  images.home_icon,
  images.home_black,
  images.heart_icon,
  images.calendar_icon,
  images.chat_icon,
  images.view_icon,
  images.dine_icon,
  images.dine_black,
  images.plane_icon,
  images.plane_black,
  images.bulliPicnic,
  images.jazzonBulli,
];
const cacheImages = async (images) => {
  return await images.map((image) => Asset.fromModule(image).downloadAsync());
};

export default function App() {
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        cacheImages(imageAssets);
      } catch (e) {
        console.log(e);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
