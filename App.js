import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import Iconz from 'react-native-vector-icons/Ionicons';
import gokarna from './assets/gokarna.webp';
import jogfalls from './assets/jogfalls.webp';
import ooty from './assets/ooty.webp';
import goa from './assets/goa.webp';
import gwiii from './assets/gwii.webp';
import { MotiView } from 'moti';

export default function App() {


  const jsonData = [{
    heading: "Gokarna",
    location: "Karnataka, India",
    ratings: "4.6 (1,587)",
    days: "4.5 days",
    price: "₹ 7,000",
    bgColor: "#407BFF",
    img: gokarna
  }, {
    heading: "Goa",
    location: "Goa, India",
    ratings: "4.5 (1,283)",
    days: "6 days",
    price: "₹ 15,000",
    bgColor: "#BA68C8",
    img: goa
  }, {
    heading: "Gateway of India",
    location: "Maharashtra, India",
    ratings: "4.3 (1,947)",
    days: "2 days",
    price: "₹ 3,000",
    bgColor: "#F9A826",
    img: gwiii
  }, {
    heading: "Jog Falls",
    location: "Karnataka, India",
    ratings: "4.7 (1,004)",
    days: "1 day",
    price: "₹ 2,000",
    bgColor: "#00B0FF",
    img: jogfalls
  }, {
    heading: "Ooty",
    location: "Karnataka, India",
    ratings: "4.2 (1,109)",
    days: "3 days",
    price: "₹ 3,500",
    bgColor: "#00BFA6",
    img: ooty
  }]

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ textAlign: 'center', margin: 10, fontSize: 20, color: '#6C63FF', fontWeight: 'bold' }}>{`techtangoo </>`}</Text>
      <View style={{ marginHorizontal: 20, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <TouchableOpacity style={{ marginRight: 5 }}><Iconz name="menu" size={30} /></TouchableOpacity>
        <MotiView
          from={{ opacity: 0, translateX: -30 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ type: 'spring', damping: 5, stiffness: 100, delay: 500 }}
          style={{ flex: 1, flexDirection: 'row', backgroundColor: 'whitesmoke', padding: 5, borderRadius: 20, height: 45, alignItems: 'center' }}>
          <Iconz name="search" size={24} color="gray" />
          <TextInput
            placeholder="Search for places"
            style={styles.inputfield}
          />
        </MotiView>
      </View>
      <ScrollView>
        <View style={styles.cardctn}>
          {jsonData.map((it, ind) => <MotiView key={ind}
            from={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'spring', damping: 5, stiffness: 100, delay: (ind + 1) * 500 }}
          >
            <TouchableOpacity style={{ ...styles.cardbg, backgroundColor: it.bgColor }}>
              <Image source={it.img} style={styles.img} />
              <View style={styles.cnt}>
                <View>
                  <Text style={styles.heading}>{it.heading}</Text>
                  <Text style={styles.location}>{it.location}</Text>
                </View>
                <View style={styles.ratings}>
                  <Icons name="star" size={20} color="white" style={styles.star} />
                  <Icons name="star" size={20} color="white" />
                  <Icons name="star" size={20} color="white" />
                  <Icons name="star" size={20} color="white" />
                  <Icons name="star-half-empty" color="white" size={20} />
                  <Text style={styles.number}>{it.ratings}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={styles.days}>
                    <Text style={{ color: 'white' }}>Days</Text>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>{it.days}</Text>
                  </View>
                  <View style={styles.hor} />
                  <View style={styles.price}>
                    <Text style={{ color: 'white' }}>Price</Text>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>{it.price}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </MotiView>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardctn: {
    alignItems: 'center'
  },
  cardbg: {
    backgroundColor: '#407BFF',
    width: '90%',
    height: 200,
    shadowColor: '#171717',
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 20,
    flexDirection: 'row',
    padding: 15,
    marginTop: 15
  },
  img: {
    width: 150,
    height: 170,
    borderRadius: 20
  },
  cnt: {
    paddingLeft: 20,
    justifyContent: 'space-between'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  location: {
    fontSize: 16,
    color: 'white'
  },
  ratings: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  number: {
    color: 'white',
    marginLeft: 5
  },
  hor: {
    height: '100%',
    borderRightWidth: 1,
    borderColor: 'white'
  }
});
