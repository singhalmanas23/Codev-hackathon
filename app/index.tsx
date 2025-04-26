import {
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View style={styles.content}>
        {/* Astronaut illustration */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/768.jpg")}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.orbitCircle} />
        </View>

        {/* Title Section */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleGreen}>ChatBot -</Text>
          <Text style={styles.titleLight}> Your AI</Text>
          <Text style={styles.titleGreen}>Language Partner</Text>
          <Text style={styles.subtitle}>
            Unlock the potential of smart conversation with your companion.
          </Text>
        </View>

        {/* Login Form */}
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Username or Email"
              placeholderTextColor="#6e6e6e"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#6e6e6e"
              secureTextEntry={true}
            />
            <View style={styles.passwordToggle}>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </View>
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          {/* Create Account */}
          <TouchableOpacity style={styles.createAccountButton}>
            <Text style={styles.createAccountText}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  timeText: {
    color: "#ffffff",
    fontSize: 14,
    alignSelf: "flex-end",
    marginRight: 10,
    marginTop: 5,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    position: "relative",
  },
  image: {
    width: 150,
    height: 150,
    zIndex: 2,
    borderRadius: 75,
  },
  orbitCircle: {
    position: "absolute",
    width: 200,
    height: 180,
    borderRadius: 90,
    borderWidth: 1,
    borderColor: "#00C896",
    borderStyle: "dashed",
  },
  titleContainer: {
    marginTop: 40,
    paddingHorizontal: 10,
  },
  titleGreen: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#00C896",
  },
  titleLight: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: 14,
    color: "#9e9e9e",
    marginTop: 10,
    lineHeight: 22,
  },
  formContainer: {
    marginTop: 40,
  },
  inputContainer: {
    marginVertical: 10,
    position: "relative",
  },
  input: {
    backgroundColor: "#1E1E1E",
    borderRadius: 8,
    padding: 15,
    color: "#ffffff",
    fontSize: 16,
  },
  passwordToggle: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  forgotText: {
    color: "#00C896",
    fontSize: 12,
  },
  loginButton: {
    backgroundColor: "#00C896",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  createAccountButton: {
    padding: 15,
    alignItems: "center",
    marginTop: 10,
  },
  createAccountText: {
    color: "#00C896",
    fontSize: 16,
  },
});
