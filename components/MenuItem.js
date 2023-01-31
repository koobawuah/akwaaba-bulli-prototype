import { View, Text, Image, StyleSheet } from "react-native";
import { COLORS } from "../constants";

const MenuItem = ({ icon, menu, active }) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: active ? COLORS.primary : "#fff" },
      ]}
    >
      <Image source={icon} style={styles.menuIcon} />
      <Text
        style={{
          fontSize: 18,
          fontWeight: "400",
          color: active ? COLORS.secondary : COLORS.primary,
        }}
      >
        {menu}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    height: 60,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 20,
  },
  menuIcon: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
});

export default MenuItem;
