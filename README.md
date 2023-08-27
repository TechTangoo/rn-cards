# React Native Cards Animation using Moti

Moti Docs - 

 ## 1. Introduction

* This is a `React Native` application that displays a list of cards with information about different tourist destinations in India. The app is built using the Expo framework and uses the `Moti` library for animations. [RN-Docs](https://reactnative.dev/docs/getting-started)

* This application is demo of displaying cards with spring like animation.

### 2. Prerequisites

To run this app, you will need to have the following installed:

* Node.js - [Refer](https://nodejs.org/en)
* Expo CLI - [Docs](https://docs.expo.dev/archive/classic-updates/building-standalone-apps/)
* A React Native development environment (such as Visual Studio Code or Xcode)
* Moti - [Docs](https://moti.fyi/)

  ### 3. Installation

To install the app, clone the repository and run the following commands:

```
npm install
npx expo start
```

### 4. Code Overview

1. Code for Search bar
```javascript
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
```

2. Code for Cards
```javascript
        <MotiView key={ind}
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
```

## Output
![output-image](https://github.com/TechTangoo/rn-cards/assets/103273242/9a60d8c5-e81b-4439-b00a-bf67273f4071)

### Thankyou!