import React, { useEffect, useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Stack, useRouter } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

// import ScanIn from "../../assets/img/ScanIN.png";
// import ScanOut from "../../assets/img/ScanOUT.png";
import { api, type RouterOutputs } from "../utils/api";

const Index = () => {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [scanned, setScanned] = useState(false);
  const { userId } = useAuth();

  const { mutate: visit } = api.visit.create.useMutation({
    onSuccess: (data) => console.log(data),
  });

  const getBarCodeScannerPermissions = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === "granted");
  };

  useEffect(() => {
    void getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    visit();
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View className="bg-white">
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View className="bg-white">
        <Text className="m-2">No access to camera</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => void getBarCodeScannerPermissions()}
        />
      </View>
    );
  }

  // Return the View
  return (
    <View className="bg-white">
      <View className="h-full w-full overflow-hidden">
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: "100%", width: "100%" }}
        >
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            {scanned && (
              <Button
                title={"Tap to Scan Again"}
                onPress={() => setScanned(false)}
              />
            )}
            {/* <TouchableOpacity onPress={() => console.log("dd")}>
               <Image
                style={{
                  height: 280,
                  width: 300,
                }}
                alt="lol"
                source={S}
              /> 
            </TouchableOpacity> */}
          </View>
        </BarCodeScanner>
      </View>
    </View>
  );
};

export default Index;
