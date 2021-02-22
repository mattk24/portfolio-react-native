import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Card } from 'react-native-elements';
import { StyleSheet, Linking, Text, View, Button, Dimensions } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Profiler } from 'react';
import { ScrollView } from 'react-native';

export const portfolio = [
  {
        id: 0,
        name: "Main Site",
        subtitle: "HTML and CSS",
        image: "/assets/imgs/Main Site.jpg",
        featured: false,
        description: 'This website was made by me with just HTML and CSS I use this as my main site although that may change.',
        url: 'https://mattk24.github.io/Main-Site/'
  }
]

const Home = () => (
  <View style={{ backgroundColor: 'yellow' }}>
    <LinearGradient 
colors={['#323eed', '#4d089a', '#4d084a', 'gold']}
style={styles.background}
end={{x: 0.6, y: 1.5}}
/>
<Text style={{color: 'yellow', textAlign: 'center', marginTop: 30, fontSize: 18}}>Matthew's Web Development LLC</Text>
<Image
  source={require('./assets/imgs/profile.jpg')}
  style={{ width: 250, height: 300, position: 'relative', left: 70, top: 20 }}
/>
<View>
<Text style={styles.text}>Matthew Koukios</Text>
</View>
  </View>
);

const Portfolio = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]}>
    <ScrollView>
    <LinearGradient 
colors={['#323eed', '#4d089a', '#4d084a', 'gold']}
style={styles.background}
end={{x: 0.6, y: 1.5}}
/>
<Text style={{color: 'yellow', textAlign: 'center', marginTop: 30, fontSize: 18}}>Portfolio</Text>
<Card>
  <Card.Title style={styles.cardtext}>Main Site</Card.Title>
  <Text style={styles.cardtext}>HTML and CSS</Text>
  <Image 
  source={require('./assets/imgs/Main-Site.jpg')}
  style={{ width: 250, height: 200, position: 'relative', left: 40, top: 20 }}
  />
    <Text style={styles.cardtext, {top: -90}}>
    This website was made by me with just HTML and CSS I use this as my main site although that may change.
    </Text>
    <Button
    onPress={() => Linking.openURL('https://mattk24.github.io/Main-Site/')}
    title='Main Site'
    />
</Card>

<Card>
  <Card.Title style={styles.cardtext}>Basic Site</Card.Title>
  <Text style={styles.cardtext}>HTML and CSS</Text>
  <Image 
  source={require('./assets/imgs/Basic-website.jpg')}
  style={{ width: 250, height: 200, position: 'relative', left: 40, top: 20  }}
  />
    <Text style={styles.cardtext, {top: -90}}>
    This one is also HTML and CSS which is not that all impressive but still worth a look.
    </Text>
    <Button
    onPress={() => Linking.openURL('https://mattk24.github.io/lightning-4/')}
    title='Basic Site'
    />
</Card>
</ScrollView>
  </View>
);

const ContactMe = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]}>
    <LinearGradient 
colors={['#323eed', '#4d089a', '#4d084a', 'gold']}
style={styles.background}
end={{x: 0.6, y: 1.5}}
/>
  </View>
);

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home' },
    { key: 'portfolio', title: 'Portfolio' },
    { key: 'contactme', title: 'Contact Me'}
  ]);

  const renderScene = SceneMap({
    home: Home,
    portfolio: Portfolio,
    contactme: ContactMe,
  });

  return (
    
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
  text: {
  color: 'yellow',
  textAlign: 'center',
  alignItems: 'center',
  marginTop: -80,
  padding: -50,
  margin: -80,
  bottom: 150,
  fontSize: 20
  },
  cardtext: {
  textAlign: 'center',
  alignItems: 'center',
  fontSize: 17,
  },
  scene: {
    flex: 1
  },
});
