/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
  View,
  Text,
  ActivityIndicator,
  Image,
  PermissionsAndroid
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {sampleData} from './data';

// import ImagePicker from 'react-native-image-picker';

// import * as Permissions from 'expo-permissions';

import ImagePicker from 'react-native-image-crop-picker';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

function renderItems(arg, arg1) {
  const items = [];

  if (!arg) return;

  arg.forEach(obj => {
    if (arg1 == 0)
      items.push(
        <Text style={styles.sectionDescription}>
          {new Array(arg1 + 1).join('*') + obj.title}
        </Text>,
      );
    else items.push(<Text>{new Array(arg1 + 1).join('*') + obj.title}</Text>);

    if (obj.nodes) items.push(renderItems(obj.nodes, arg1 + 1));
  });

  return items;
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: sampleData,
      isLoading: false,
    };

    this._onPress = this._onPress.bind(this);
  }

  componentDidMount() {
    // return this._onPress();
  }

  _onPress = async () => {
    // this.setState({
    //   isLoading: true,
    // });

    // return fetch('https://pruprodconfig.azurewebsites.net/api/values')
    //   .then(response => response.json())
    //   .then(response => {
    //     if (response) {

    //       console.log("try to read response " + JSON.stringify(response));
    //       this.setState({
    //         data: response,
    //         isLoading: false,
    //       });
    //     }
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

    // More info on all the options is below in the API Reference... just some common use cases shown here
    // const options = {
    //   title: 'Select Avatar',
    //   customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    //   storageOptions: {
    //     skipBackup: true,
    //     path: 'images',
    //   },
    // };

    // getPermissions = async () => {
    //   if (Platform.OS !== 'ios') {
    //     let { status } = await Permissions.askAsync(Permissions.CAMERA);
    //     if (status !== 'granted') {
    //       this.setState({
    //         error:
    //           'Please grant permissions to be able to upload your profile picture.',
    //       });
    //       return false;
    //     }
    //     const { status: cameraRollStatus } = await Permissions.askAsync(
    //       Permissions.CAMERA_ROLL
    //     );
    //     if (cameraRollStatus !== 'granted') {
    //       this.setState({
    //         error:
    //           'Please grant permissions to be able to upload your profile picture.',
    //       });
    //       return false;
    //     }
    //   }
    //   return true;
    // };

    // getPermissions();

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    // ImagePicker.showImagePicker(options, response => {
    //   console.log('Response = ', response);

    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   } else if (response.customButton) {
    //     console.log('User tapped custom button: ', response.customButton);
    //   } else {
    //     const source = {uri: response.uri};

    //     // You can also display the image using data:
    //     // const source = { uri: 'data:image/jpeg;base64,' + response.data };

    //     this.setState({
    //       avatarSource: source,
    //     });
    //   }
    // });

    console.log('open camera');
    try {
      const granted = await PermissionsAndroid.requestMultiple([
          "android.permission.READ_EXTERNAL_STORAGE",
          "android.permission.WRITE_EXTERNAL_STORAGE"
      ]);

      if (
        granted["android.permission.READ_EXTERNAL_STORAGE"] ===
        PermissionsAndroid.RESULTS.GRANTED &&
        granted["android.permission.WRITE_EXTERNAL_STORAGE"] ===
        PermissionsAndroid.RESULTS.GRANTED
    ) {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        console.log(image);
      });
    } else {
      console.log("Local Storage access denied");
    }

      // ImagePicker.openCamera({
      //   width: 300,
      //   height: 400,
      //   cropping: true,
      // }).then(image => {
      //   console.log(image);
      // });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
          <Text>Please wait</Text>
        </View>
      );
    }
    return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Ecomindo</Text>
              <Text style={styles.sectionDescription}></Text>
              <Button
                onPress={this._onPress}
                title="Refresh"
                accessibilityLabel="Tap on Me"
              />
              <Image
                source={this.state.avatarSource}
                style={styles.uploadAvatar}
              />
              {renderItems(this.state.data, 0)}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
