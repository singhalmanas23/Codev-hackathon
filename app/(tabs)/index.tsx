import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [log, setLog] = useState<string[]>([]);
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://your-server-url-here'); // Replace with real server URL

    ws.current.onopen = () => {
      console.log('Connected to WebSocket');
    };

    ws.current.onmessage = (e: WebSocketMessageEvent) => {
      setLog((prev) => [...prev, e.data]);
    };

    // ws.current.onerror = (e: WebSocketErrorEvent) => {
    //   console.error('WebSocket error:', e.message);
    // };

    return () => {
      ws.current?.close();
    };
  }, []);

  const send = (msg: string) => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(msg);
    }
  };

  return (
    <View style={styles.container}>
    <Text>Hello</Text>
      <Button title="Toggle LED" onPress={() => send('toggle-led')} />
      <Text style={styles.title}>Messages:</Text>
      {log.map((line, i) => (
        <Text key={i}>{line}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginVertical: 10 },
});
