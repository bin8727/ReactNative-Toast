import React, { useState, forwardRef, useImperativeHandle } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
import { FontAwesome5 } from "@expo/vector-icons";

export type ToastType = {
  type: "success" | "danger" | "info" | "warning";
  text: string;
  desc: string;
  timeout?: number;
};
export type ToastRef = {
  show: () => void;
};

const Toast = forwardRef<ToastRef, ToastType>(
  ({ type, text, desc, timeout = 1000 }, ref) => {
    const [hasVisible, setHasVisible] = useState<boolean>(false);

    useImperativeHandle(ref, () => ({
      show() {
        setHasVisible(true);

        const timer = setTimeout(() => {
          setHasVisible(false);
          clearTimeout(timer);
        }, timeout);
      },
    }));

    const TOAST_TYPE = {
      success: {
        backgroundColor: "#2ECC71",
        icon: "check-circle",
      },
      danger: {
        backgroundColor: "#E74C3C",
        icon: "exclamation-circle",
      },
      info: {
        backgroundColor: "#3498DB",
        icon: "info-circle",
      },
      warning: {
        backgroundColor: "#F39C12",
        icon: "exclamation-triangle",
      },
    };
    const backgroundColor = TOAST_TYPE[type].backgroundColor;
    const icon = TOAST_TYPE[type].icon;

    return (
      <>
        {hasVisible && (
          <Animated.View
            style={[s.toast, { backgroundColor: backgroundColor }]}
            entering={FadeInDown.delay(200)}
            exiting={FadeOutDown}
          >
            <FontAwesome5 name={icon} size={40} color={"#FFF"} />

            <View>
              <Text style={s.title}>{text}</Text>
              <Text style={s.desc}>{desc}</Text>
            </View>
          </Animated.View>
        )}
      </>
    );
  }
);

export default Toast;

const s = StyleSheet.create({
  toast: {
    position: "absolute",
    bottom: 50,
    width: "90%",
    height: 100,
    borderRadius: 10,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    gap: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFF",
  },
  desc: {
    fontSize: 16,
    fontWeight: "400",
    color: "#FFF",
  },
});
