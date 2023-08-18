import { useNavigation } from '@react-navigation/native'
import React, { useState,  useEffect, useRef  } from 'react'
import { StyleSheet, Text, Keyboard, Dimensions, TouchableWithoutFeedback, View, TouchableOpacity, TextInput, Image } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";


const CreatePostsScreen = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState(null);
  const [locationDescription, setLocationDescription] = useState('')
  const [photoUri, setPhotoUri] = useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();

    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  const handleSubmit = async () => {
    let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.latitude,
      };
    setLocation(coords);
    
   navigation.navigate("PostsScreen")
  }

  const deletePost = () => {
    setTitle('');
    setLocationDescription('');
    setPhotoUri(null)
  }

  let submitButtonCheck;

  if (title !== "") { submitButtonCheck = title }
  else if (locationDescription !== "") { submitButtonCheck = title }
  
   return (
     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      
       <View style={styles.container}>
         
        <View style={styles.header}>
          <Text style={styles.headerText}>Створити публікацію</Text>
          <TouchableOpacity style={styles.goBackBtn} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={'rgba(33, 33, 33, 0.8)'} />
          </TouchableOpacity>
         </View>
          
         <View style={styles.postBody}>
          
             
            
          <View style={styles.postPhotoContainer}>
             <View style={styles.postPhoto}>
               {photoUri ? (
                <>
                   <Image style={styles.camera} source={{ uri: photoUri }} />
                   <TouchableOpacity style={styles.cameraIconCont}>
                     <Ionicons name="camera" size={24} style={styles.cameraIcon } color="#fff" />
                   </TouchableOpacity>
                </>
              ) : (
                <View style={styles.cameraContainer}>
      <Camera
        style={styles.camera}
        type={type}
        ref={setCameraRef}
      >
        <View style={styles.photoView}>
          <TouchableOpacity
            style={styles.flipContainer}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
           <Ionicons name="camera-reverse-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              if (cameraRef) {
                const { uri } = await cameraRef.takePictureAsync();
                await MediaLibrary.createAssetAsync(uri);
                setPhotoUri(uri)
              }
            }}
          >
            <View style={styles.takePhotoOut}>
              <View style={styles.takePhotoInner}></View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
              )}
            </View>
            <TouchableOpacity >
              <Text style={styles.postPhotoText}>Завантажте фото</Text>
            </TouchableOpacity>
          </View>
           <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Назва..."
              placeholderTextColor="#BDBDBD"
              value={title}
              onChangeText={setTitle}
               onPress={()=>console.log('title', title)}
            />

            <View style={{ position: "relative" }}>
              <TextInput
                style={styles.locationInput}
                placeholder="Місцевість..."
                placeholderTextColor="#BDBDBD"
                value={locationDescription}
                 onChangeText={setLocationDescription}
              />
              <Ionicons
                name="location-outline"
                size={24}
                color="#BDBDBD"
                style={styles.locationIcon}
              />
            </View>
            <TouchableOpacity
              style={submitButtonCheck ? styles.anabledButton : styles.disabledButton}
              onPress={handleSubmit}
               disabled={submitButtonCheck ? false : true}
            >
              <Text
                style={
                  submitButtonCheck
                    ? styles.enabledButtonText
                    : styles.disabledButtonText
                }
              >
                Опублікувати
              </Text>
               </TouchableOpacity>
           </View>
           
          <TouchableOpacity
             style={submitButtonCheck ? styles.trashButton : styles.trashButtonDisabled}
           onPress={deletePost}
           >
            <Ionicons
              name="trash-outline"
              size={24}
              color="#DADADA"
              style={styles.trashIcon}
            />
             </TouchableOpacity>
             
         </View>
         
       </View>
     
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 55,
    paddingBottom: 11,

    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
  },
  headerText: {
    textAlign: "center",
    fontFamily: "Medium",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: "#212121",
  },
  goBackBtn: {
    position: "absolute",
    bottom: 10,
    left: 20,
  },
  postBody: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  postPhotoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 32,
  },
  postPhoto: {
    position: "relative",
    width: "100%",
    height: 240,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 8,
    overflow: "hidden",
  },
  postPhotoText: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  cameraIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -0.5 * 24 }, { translateY: -0.5 * 24 }],
  },
  cameraIconCont: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    width: 60,
    height: 60,
    borderRadius: 50,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -0.5 * 60 }, { translateY: -0.5 * 60 }],
  },
  form: {
    display: "flex",
    gap: 22,
  },
  input: {
    width: "100%",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  locationInput: {
    width: "100%",
    paddingVertical: 15,
    paddingLeft: 26,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  locationIcon: {
    position: "absolute",
    bottom: "30%",
    left: 0,

  },
  enabledButtonText: {
    textAlign: "center",
    fontSize: 16,
    color: "#FFFFFF",
  },
  anabledButton: {
    marginTop: 32,
    paddingVertical: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  disabledButtonText: {
    textAlign: "center",
    fontSize: 16,
    color: "#BDBDBD",
  },
  disabledButton: {
    marginTop: 32,
    paddingVertical: 16,
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
  },
  trashButton: {
    flex: 1,
    position: "absolute",
    width: 70,
    height: 40,
    bottom: 34,
    left: "50%",
    transform: [{ translateX: -0.3 * 70 }],

    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  trashButtonDisabled: {
    flex: 1,
    position: "absolute",
    width: 70,
    height: 40,
    bottom: 34,
    left: "50%",
    transform: [{ translateX: -0.3 * 70 }],

    borderRadius: 100,
    backgroundColor: "#F6F6F6",
  },
  trashIcon: {
    position: "absolute",
    bottom: "50%",
    left: "50%",
    transform: [{ translateY: 0.5 * 24 }, { translateX: -0.5 * 24 }],
  },
  cameraContainer: { flex: 1 },
  camera: { flex: 1 },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },

  flipContainer: {
    flex: 1,
    alignSelf: "flex-end",
    marginTop: 5,
    marginRight: 20
  },

  button: { alignSelf: "center" },

  takePhotoOut: {
    borderWidth: 2,
    borderColor: "white",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginBottom: 15,
  },

  takePhotoInner: {
    borderWidth: 2,
    borderColor: "white",
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 50,
  },
});

export default CreatePostsScreen