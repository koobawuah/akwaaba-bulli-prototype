import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants";

const BookingScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.secondary, flex: 1 }}>
      <View style={{ flex: 1, paddingVertical: 15, paddingHorizontal: 25 }}>
        <Text style={styles.mainHeader}>My Bookings</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerLine1: {
    letterSpacing: 2,
    fontSize: 36,
    fontWeight: "300",
    color: COLORS.primary,
  },
  mainHeader: {
    fontSize: 36,
    fontWeight: "700",
    color: COLORS.primary,
  },
  menu: {
    flex: 1,
    marginHorizontal: 15,
  },
});

export default BookingScreen;
