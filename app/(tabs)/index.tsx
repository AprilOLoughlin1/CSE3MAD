import { Image, StyleSheet, Platform, Button, Alert, View, TextInput } from 'react-native';
import * as SMS from 'expo-sms';
import {Link} from 'expo-router';
import React from 'react';

export default function HomeScreen() {
  
const id = ['0123456789', '9876543210']; //need to change tf
const [text,onChangeText] = React.useState("Hello: I am the best")

function askToSend() {
  Alert.alert('SMS Send', 'Send: ' + id, [
    {
      text: 'Cancel', 
    },
    {
      text: 'OK', onPress:()=> _handlePressButtonAsync()
    }
  ]);
}

  async function _handlePressButtonAsync(){
  const { result } = await SMS.sendSMSAsync(
    id,
    text,
    {
      attachments: {
        uri: 'https://lms.latrobe.edu.au/theme/image.php/latrobe/theme_latrobe/1744093452/logo-white',
        mimeType: 'image/png',
        filename: 'myfile.png',
      },
    }
  );
}
  
  return (
    <View style = {styles.header}>
      <View style = {styles.containerRow}>
        <Button
        title = "Send SMS"
        onPress={()=>askToSend()}
        />
        <Link href="./contacts" asChild>
        <Button title="Contacts"></Button>
        </Link>
      </View>
      <TextInput 
      onChangeText = {onChangeText}
      value={text}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  header: {
    padding: 40
  },
  containerRow:  {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8.
  }

  });
