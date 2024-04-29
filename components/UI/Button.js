import { Children } from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Button() {
  return (
    <Pressable
      style={({ pressed }) => {
        [styles.button, pressed && styles.pressed];
      }}
      onPress={onPress}
    >
      <Text style={styles.text}>{Children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    backgroundColor: Colors.primary500,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    borderRadius: 4,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: Colors.primary50,
  },
});
