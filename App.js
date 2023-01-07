import { SafeAreaView, Text, View } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Yes</Text>
        <FontAwesomeIcon icon={faMugSaucer} />
        <FontAwesomeIcon icon={faMugSaucer} />
      </View>
    </SafeAreaView>
  );
};
export default App;
