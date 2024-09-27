import React, { useState, useEffect } from "react";
import { supabase } from "./utils/supabase";
import Auth from "./components/Auth";
import Account from "./components/Account";
import { View } from "react-native";
import { Session } from "@supabase/supabase-js";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image } from "react-native";

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textos}>BuildSync</Text>
      <Image
        source={require("./assets/logo1.png")}
        style={{ width: 200, height: 200 }}
      />
      <StatusBar style="auto" />
      {session && session.user ? (
        <Account key={session.user.id} session={session} />
      ) : (
        <Auth />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  textos: {
    color: "#fff",
    fontSize: 20,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
