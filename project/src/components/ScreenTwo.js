import React from "react";
import { StyleSheet } from "react-nativescript";

export function ScreenTwo({ navigation, route }) {
  return (
    <flexboxLayout style={styles.container}>
      <label style={styles.text}>
        You're viewing screen two!
      </label>
      <label style={styles.text}>
        Message: {route.params.message}
      </label>
      <button
        style={styles.button}
        onTap={() => navigation.goBack()}
      >
        Go back
      </button>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "yellow",
  },
  text: {
    textAlignment: "center",
    fontSize: 24,
    color: "black",
  },
  button: {
    fontSize: 24,
    color: "#2e6ddf",
  },
});
