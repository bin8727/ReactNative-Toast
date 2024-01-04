import React, { useRef, useState } from "react";
import { View, StyleSheet } from "react-native";

import Button from "./components/Button";
import Toast, { ToastRef } from "./components/Toast";

const App = () => {
  const toastRef = useRef<ToastRef | null>(null);
  const [toastType, setToastType] = useState<
    "success" | "danger" | "info" | "warning"
  >("success");

  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };

  return (
    <View style={styles.container}>
      <Button
        type="success"
        text="Success"
        onPress={() => {
          handleShowToast(), setToastType("success");
        }}
      />
      <Button
        type="danger"
        text="Danger"
        onPress={() => {
          handleShowToast(), setToastType("danger");
        }}
      />
      <Button
        type="info"
        text="Info"
        onPress={() => {
          handleShowToast(), setToastType("info");
        }}
      />
      <Button
        type="warning"
        text="Warning"
        onPress={() => {
          handleShowToast(), setToastType("warning");
        }}
      />

      <Toast type={toastType} text="Title" desc="Description" ref={toastRef} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
});
