import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

type ButtonType = {
  type: "success" | "danger" | "info" | "warning";
  text: string;
  onPress: () => void;
};

const Button = ({ type, text, onPress }: ButtonType) => {
  const BUTTON_TYPE = {
    success: {
      backgroundColor: "#2ECC71",
    },
    danger: {
      backgroundColor: "#E74C3C",
    },
    info: {
      backgroundColor: "#3498DB",
    },
    warning: {
      backgroundColor: "#F39C12",
    },
  };
  const backgroundColor = BUTTON_TYPE[type].backgroundColor;

  return (
    <TouchableOpacity
      style={[s.button, { backgroundColor: backgroundColor }]}
      onPress={onPress}
    >
      <Text style={s.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const s = StyleSheet.create({
  button: {
    width: 250,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "700",
  },
});
