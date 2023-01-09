import { SafeAreaView, View } from "react-native";

import Compo1 from "./components/Compo1";
import Compo2 from "./components/Compo2";
import Compo3 from "./components/Compo3";
import Compo4 from "./components/Compo4";
import Compo5 from "./components/Compo5";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Compo1 />
        <Compo2 text="Bakary" />
        <Compo3 firstName={"bakary"} />
        <Compo4 firstName={"bakary"} />
        <Compo5 firstName={"Bakary"} lastName={"Jobala"} />
        <FontAwesomeIcon icon={faMugSaucer} />
        <FontAwesomeIcon icon={faMugSaucer} />
      </View>
    </SafeAreaView>
  );
};
export default App;
