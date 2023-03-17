import { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassHidden, setIsPassHidden] = useState(true);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);
  const showPassHandler = () => setIsPassHidden(!isPassHidden);

  const onLogin = () => {
    console.log(`Email: ${email}, Password: ${password}`);
    Keyboard.dismiss();
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        style={styles.bgImage}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View
            style={{
              ...styles.wrapper,
              paddingBottom: isKeyboardShown ? 38 : 144,
            }}
          >
            <Text style={styles.heading}>Login</Text>
            <View style={styles.form}>
              <TextInput
                value={email}
                onChangeText={emailHandler}
                placeholder="Email"
                style={{ ...styles.input, marginBottom: 16 }}
                onFocus={() => setIsKeyboardShown(true)}
                onBlur={() => setIsKeyboardShown(false)}
              />

              <View style={{ position: "relative", marginBottom: 43 }}>
                <TextInput
                  value={password}
                  onChangeText={passwordHandler}
                  placeholder="Password"
                  secureTextEntry={isPassHidden}
                  style={styles.input}
                  onFocus={() => setIsKeyboardShown(true)}
                  onBlur={() => setIsKeyboardShown(false)}
                />
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.togglePassword}
                  onPress={showPassHandler}
                >
                  <Text style={styles.toggleText}>
                    {isPassHidden ? "Show" : "Hide"}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.btn}
                onPress={onLogin}
                activeOpacity={0.8}
              >
                <Text style={styles.btnText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                <Text style={styles.signInText}>No account? Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
  wrapper: {
    paddingTop: 32,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  heading: {
    marginBottom: 33,
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,

    color: "#212121",
  },

  form: {
    marginHorizontal: 16,
  },

  input: {
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,

    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
  },

  togglePassword: {
    position: "absolute",
    top: 16,
    right: 18,
  },

  toggleText: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,

    textAlign: "right",
    color: "#1B4371",
  },

  btn: {
    backgroundColor: "#FF6C00",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  btnText: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,

    textAlign: "center",

    color: "#fff",
  },

  signInText: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,

    textAlign: "center",

    color: "#1B4371",
  },
});

// ===============================================================================

// import {
//   StyleSheet,
//   Text,
//   View,
//   ImageBackground,
//   TextInput,
//   KeyboardAvoidingView,
//   Keyboard,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
// } from "react-native";

// import React, { useState } from "react";

// const INITSTATE = {
//   email: "",
//   password: "",
//   isShownKeyboard: false,
//   isShownPassword: false,
// };

// const INPUTS = {
//   email: "email",
//   password: "password",
// };

// export const LoginScreen = () => {
//   const [isShownKeyboard, setIsShownKeyboard] = useState(
//     INITSTATE.isShownKeyboard
//   );
//   const [activeInput, setActiveInput] = useState(null);
//   const [isShownPassword, setIsShownPassword] = useState(
//     INITSTATE.isShownPassword
//   );

//   const [email, setEmail] = useState(INITSTATE.email);
//   const [password, setPassword] = useState(INITSTATE.password);

//   const hideKeyboard = () => {
//     setIsShownKeyboard(false);
//     Keyboard.dismiss();
//   };

//   const resetForm = () => {
//     setEmail(INITSTATE.email);
//     setPassword(INITSTATE.password);
//   };

//   const handleSubmit = () => {
//     hideKeyboard();
//     console.log("Email: ", email, ", Password: ", password);
//     resetForm();
//   };

//   const togglePassword = () => {
//     setIsShownPassword(!isShownPassword);
//   };

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <ImageBackground
//         style={styles.bgImage}
//         source={require("../assets/images/background.jpg")}
//       >
//         <KeyboardAvoidingView
//           behavior={Platform.OS === "ios" ? "padding" : "height"}
//           style={styles.section}
//         >
//           <View
//             style={{
//               ...styles.container,
//               paddingBottom: isShownKeyboard ? 194 : 144,
//             }}
//           >
//             <Text style={styles.formTitle}>Login</Text>

//             <View style={styles.form}>
//               <View style={styles.inputsWrapper}>
//                 <TextInput
//                   style={{
//                     ...styles.input,
//                     marginTop: 33,
//                     backgroundColor:
//                       activeInput === INPUTS.email ? "#ffffff" : "#f6f6f6",
//                     borderColor:
//                       activeInput === INPUTS.email ? "#ff6c00" : "#e8e8e8",
//                   }}
//                   inputMode="email"
//                   value={email}
//                   placeholder="Email address..."
//                   placeholderTextColor="#bdbdbd"
//                   require
//                   autoFocus={true}
//                   textAlign="left"
//                   autoCapitalize="none"
//                   onChangeText={setEmail}
//                   onFocus={() => {
//                     setIsShownKeyboard(true);
//                     setActiveInput(INPUTS.email);
//                   }}
//                   onBlur={() => {
//                     setIsShownKeyboard(false);
//                     setActiveInput(null);
//                   }}
//                 />

//                 <TextInput
//                   style={{
//                     ...styles.input,
//                     backgroundColor:
//                       activeInput === INPUTS.password ? "#ffffff" : "#f6f6f6",
//                     borderColor:
//                       activeInput === INPUTS.password ? "#ff6c00" : "#e8e8e8",
//                   }}
//                   inputMode="text"
//                   value={password}
//                   placeholder="Password..."
//                   placeholderTextColor="#bdbdbd"
//                   require
//                   textAlign="left"
//                   //   secureTextEntry={isShownPassword ? "false" : "true"}
//                   autoCapitalize="none"
//                   onChangeText={setPassword}
//                   onFocus={() => {
//                     setIsShownKeyboard(true);
//                     setActiveInput(INPUTS.password);
//                   }}
//                   onBlur={() => {
//                     setIsShownKeyboard(false);
//                     setActiveInput(null);
//                   }}
//                 />

//                 <TouchableOpacity
//                   activeOpacity={0.8}
//                   style={styles.togglePassword}
//                   onPress={togglePassword}
//                 >
//                   <Text style={styles.text}>
//                     {isShownPassword ? "Hide" : "Show"}
//                   </Text>
//                 </TouchableOpacity>
//               </View>

//               <TouchableOpacity
//                 activeOpacity={0.8}
//                 style={styles.submitBtn}
//                 onPress={handleSubmit}
//               >
//                 <Text style={styles.btnTitle}>Login</Text>
//               </TouchableOpacity>
//               <TouchableOpacity activeOpacity={0.8} style={styles.loginRef}>
//                 <Text style={styles.text}>Don't have an account? Register</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </KeyboardAvoidingView>
//       </ImageBackground>
//     </TouchableWithoutFeedback>
//   );
// };

// const styles = StyleSheet.create({
//   bgImage: {
//     flex: 1,
//     justifyContent: "flex-end",
//     width: "100%",
//     resizeMode: "cover",
//   },

//   section: {
//     flex: 1,
//     justifyContent: "flex-end",
//   },

//   container: {
//     justifyContent: "flex-start",
//     width: "100%",
//     backgroundColor: "#ffffff",
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//   },

//   formTitle: {
//     textAlign: "center",
//     marginTop: 32,
//     fontSize: 30,
//     fontWeight: "500",
//     lineHeight: 35,
//     color: "#212121",
//   },
//   form: {
//     marginHorizontal: 16,
//   },

//   input: {
//     marginTop: 16,
//     // backgroundColor: '#f6f6f6',
//     borderRadius: 8,
//     // borderColor: '#e8e8e8',
//     borderWidth: 1,
//     padding: 16,
//     color: "#212121",
//     fontSize: 16,
//     lineHeight: 19,
//   },
//   submitBtn: {
//     backgroundColor: "#ff6c00",
//     marginHorizontal: 16,
//     padding: 16,
//     marginTop: 43,
//     borderRadius: 25,
//   },
//   btnTitle: {
//     color: "#ffffff",
//     textAlign: "center",
//     fontSize: 16,
//     lineHeight: 19,
//   },
//   text: {
//     textAlign: "center",
//     fontSize: 16,
//     lineHeight: 19,
//     color: "#1B4371",
//   },
//   loginRef: {
//     marginTop: 16,
//   },
//   togglePassword: {
//     position: "absolute",
//     right: 16,
//     bottom: 16,
//   },
//   inputsWrapper: {
//     position: "relative",
//   },
// });
