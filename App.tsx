import {View, Text, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short')
    .max(50, 'Too long for password')
    .required('Required'),
  email: Yup.string().email('Invalid Email').required('Enter your email address'),
});

const App = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confPass: '',
        mobile: '',
      }}
      validationSchema={SignupSchema}>
      {({values, errors, touched, handleSubmit, handleChange, isValid}) => (
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
              value={values.name}
              placeholder="Full name"
              onChangeText={handleChange('name')}
            />
            {errors.name&&(
              <Text style={{color:'red'}}>{errors.name}</Text>
            )}
            <TextInput
              style={{
                fontSize: 17,
                backgroundColor: 'skyblue',
                paddingHorizontal: 55,
                marginTop: 20,
              }}
              value={values.email}
              placeholder="Email"
              onChangeText={handleChange}
            />
            <TextInput
              style={{
                fontSize: 17,
                backgroundColor: 'skyblue',
                paddingHorizontal: 55,
                marginTop: 20,
              }}
              value={values.password}
              placeholder="Password"
              onChangeText={handleChange}
            />
            <TextInput
              style={{
                fontSize: 17,
                backgroundColor: 'skyblue',
                paddingHorizontal: 55,
                marginTop: 20,
              }}
              onChangeText={handleChange}
              value={values.confPass}
              placeholder="Confirm Password"
            />
            <TextInput
              style={{
                fontSize: 17,
                backgroundColor: 'skyblue',
                paddingHorizontal: 55,
                marginTop: 20,
              }}
              onChangeText={handleChange}
              value={values.mobile}
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
