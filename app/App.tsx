import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapView, { Marker } from "react-native-maps";
import { categories } from "./categories";
import { useState, useEffect } from "react";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export interface IMk {
  category: string;
  contact: string;
  description: string;
  id: string;
  latitude: number;
  longitude: number;
  name: string;
}

function HomeScreen() {
  const [markes, setMarkes] = useState<IMk[]>([]);
  const navigation = useNavigation<any>();
  const [filter, setFilter] = useState("");

  const filterMark = markes.filter((mah) => mah.category === filter);

  useEffect(() => {
    fetch("http://192.168.1.10:3000//store").then(async (resquest) => {
      const data = await resquest.json();

      setMarkes(data);
    });
  }, []);

  if (!markes || markes.length === 0) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerConteiner}>
        <Text style={styles.tiTle}>Bem vindo.</Text>
        <Text style={styles.subTiTle}>
          Encontre pontos de comércio local no mapa
        </Text>
      </View>

      <MapView
        style={styles.map}
        region={{
          latitude: markes[0].latitude,
          longitude: markes[0].longitude,
          latitudeDelta: 4,
          longitudeDelta: 4,
        }}
      >
        {(filter ? filterMark : markes).map((item) => {
          return (
            <Marker
              key={item.id}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              onPress={() => {
                navigation.navigate("Datail", item);
              }}
            />
          );
        })}
      </MapView>

      <View style={styles.categoryContainer}>
        <FlatList
          data={categories}
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setFilter(filter === item.key ? "" : item.key);
              }}
              key={item.key}
              style={[
                styles.categoryItem,
                filter === item.key ? styles.selectedCategory : null,
              ]}
            >
              <Image source={item.image} style={styles.imgcategory} />
              <Text style={styles.categoryText}>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

type DatailRoute = RouteProp<{ datail: IMk }, "datail">;

function DataScreen() {
  const { params } = useRoute<DatailRoute>();

  const [address, setAddres] = useState<any>();

  const navigatoHeader = useNavigation();

  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${params.latitude}&lon=${params.longitude}&format=json`
    ).then(async (res) => {
      const dt = await res.json();

      setAddres(dt);

      navigatoHeader.setOptions({
        title: params.name,
        headerStyle: {
          backgroundColor: "#1F619B",
        },
        headerTintColor: "#fff",
      });
    });
  }, []);

  return (
    <View style={styles.containerDatail}>
      <Text style={styles.titleDatail}>{params.name}</Text>
      <Text style={styles.subTitleDatail}>{params.description}</Text>
      <Text style={styles.sectionDatailEnd}>Endereço</Text>
      <Text style={styles.textDatail}>{address?.address.road}</Text>
      <Text style={styles.textDatail}>{address?.address.city}</Text>
      <Text style={styles.textDatail}>{address?.address.postcode}</Text>
      <Text style={styles.textDatail}>{address?.address.state}</Text>
      <Text style={styles.sectionDatailCnt}>Contato</Text>
      <Text style={styles.textDatail}>{params.contact}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Datail" component={DataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F4FA",
  },

  headerConteiner: {
    padding: 20,
    paddingTop: Platform.OS === "android" ? 70 : 0,
  },

  tiTle: {
    fontSize: 24,
    fontWeight: "500",
    color: "#1F619B",
  },

  subTiTle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#1F619B",
  },

  map: {
    flex: 1,
  },

  categoryContainer: {
    padding: 10,
  },

  categoryItem: {
    height: 110,
    width: 100,
    backgroundColor: "#CDDDEF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  imgcategory: {
    width: 50,
    height: 50,
  },

  categoryText: {
    color: "#222222",
    marginTop: 5,
    textAlign: "center",
  },

  selectedCategory: {
    borderColor: "#1F619B",
    borderWidth: 1,
  },

  //Datail

  containerDatail: {
    flex: 1,
    backgroundColor: "#E0F4FA",
    padding: 20,
  },

  titleDatail: {
    fontSize: 24,
    fontWeight: "600",
    color: "#1F619B",
  },

  subTitleDatail: {
    fontSize: 16,
    fontWeight: "400",
    color: "#6C6C80",
  },

  sectionDatail: {
    color: "#1F619B",
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 20,
  },
  sectionDatailEnd: {
    color: "#1F619B",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 20,
    paddingBottom: 5,
  },

  sectionDatailCnt: {
    color: "#1F619B",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 20,
  },

  textDatail: {
    color: "#6C6C80",
    fontSize: 16,
  },
});
