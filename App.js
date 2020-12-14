import React from 'react';
import { StyleSheet,View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Avatar, Button, Divider, Text} from '@ui-kitten/components';

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
  </Layout>
);

export default function App() {
  return (
  <ApplicationProvider {...eva} theme={eva.light}>
     <View style={styles.details}>
      <Avatar size='giant' source={require('./assets/icon.png')}/>
      <Text style={styles.title} category='h6'>UI Kitten</Text>
    </View>
    <Divider/>
    <Button style={styles.installButton}>INSTALL</Button>
  </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    margin: 2,
  },
});
