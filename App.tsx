import {View, Text, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';




const App = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confPass: '',
        mobile: '',
      }}>
      {({values, errors, touched, handleSubmit}) => (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <StatusBar barStyle={'light-content'} />
          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                backgroundColor: 'gray',
                paddingHorizontal: 25,
                paddingVertical: 15,
                borderRadius: 10,
                textAlign: 'center',
              }}>
              Sign up
            </Text>
            <TextInput
              style={{
                fontSize: 17,
                backgroundColor: 'skyblue',
                paddingHorizontal: 55,
                marginTop: 20,
              }}
              placeholder="Full name"
            />
            <TextInput
              style={{
                fontSize: 17,
                backgroundColor: 'skyblue',
                paddingHorizontal: 55,
                marginTop: 20,
              }}
              placeholder="Email"
            />
            <TextInput
              style={{
                fontSize: 17,
                backgroundColor: 'skyblue',
                paddingHorizontal: 55,
                marginTop: 20,
              }}
              placeholder="Password"
            />
            <TextInput
              style={{
                fontSize: 17,
                backgroundColor: 'skyblue',
                paddingHorizontal: 55,
                marginTop: 20,
              }}
              placeholder="Confirm Password"
            />
            <TextInput
              style={{
                fontSize: 17,
                backgroundColor: 'skyblue',
                paddingHorizontal: 55,
                marginTop: 20,
              }}
              placeholder="Mobile No."
            />
          </View>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: 'black',
              marginTop: 30,
              borderRadius: 10,
              elevation: 8,
            }}
            activeOpacity={0.6}>
            <Text
              style={{
                color: '#fff',
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default App;
