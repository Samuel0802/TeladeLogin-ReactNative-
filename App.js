import React, { useState, useEffect } from "react";
import {
    KeyboardAvoidingView,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    Animated,
    Keyboard,
    TouchableWithoutFeedback
} from "react-native";


export default function App() {

    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
    const [opacity] = useState(new Animated.Value(0));
    const [logo] = useState(new Animated.ValueXY({ x: 130, y: 155 }));

    useEffect(() => {

        keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                bounciness: 20,
                useNativeDriver: true,

                
                
                
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
                
                
            
            })
        ]).start();

    }, []);

    function keyboardDidShow() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 55,
                duration: 100,
                useNativeDriver: true,
               
            }),

            Animated.timing(logo.y, {
                toValue: 65,
                duration: 100,
                useNativeDriver: true,
            
            }),

        ]).start();
    }

    function keyboardDidHide() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 130,
                duration: 100,
                useNativeDriver: true,
               
            }),

            Animated.timing(logo.y, {
                toValue: 155,
                duration: 100,
                useNativeDriver: true,
            }),

        ]).start();
    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={styles.backgroud}>
                <View style={styles.containerLogo}>
                    <Animated.Image
                        style={{
                            width: logo.x,
                            height: logo.y,
                           
                        }}
                        source={require('./src/assets/logo.png')
                        } />
                </View>

                <Animated.View style={[
                    styles.container,
                    {
                        opacity: opacity,
                        transform: [
                            {
                                translateY: offset.y,
                                

                            }
                        ]
                    }

                ]}
                >
                    <TextInput style={styles.input}
                        placeholder="Email"
                        autoCorrect={false}
                        autoCapitalize="words"
                        onChangeText={() => { }}
                    />

                    <TextInput style={styles.input}
                        placeholder="Senha"
                        autoCorrect={false}
                        autoCapitalize="words"
                        onChangeText={() => { }}
                    />

                    <TouchableOpacity style={styles.btnSubmit}>
                        <Text style={styles.submitText}>Acessar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnRegister} >
                        <Text style={styles.RegisterText} >Criar Conta</Text>
                    </TouchableOpacity>
                </Animated.View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    backgroud: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#191919'
    },

    containerLogo: {
        flex: 1,
        justifyContent: 'center',
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 50
    },

    input: {
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 6,
        padding: 10

    },

    btnSubmit: {
        backgroundColor: '#21bd96',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
    },

    submitText: {
        color: '#FFF',
        fontSize: 18
    },

    btnRegister: {
        marginTop: 10,
    },

    RegisterText: {
        color: '#FFF'
    }

});