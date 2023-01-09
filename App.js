import { SafeAreaView, StyleSheet, View } from "react-native";

import Compo1 from "./components/Compo1";
import Compo2 from "./components/Compo2";
import Compo3 from "./components/Compo3";
import Compo4 from "./components/Compo4";
import Compo5 from "./components/Compo5";
import Compo6 from "./components/Compo6";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { faArrowDownUpAcrossLine } from "@fortawesome/free-solid-svg-icons/faArrowDownUpAcrossLine";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FontAwesomeIcon icon={faArrowDownUpAcrossLine} />
        <Compo1 />
        <Compo2 text="Bakary" />
        <FontAwesomeIcon icon={faMugSaucer} />
        <Compo3 firstName={"bakary"} />
        <FontAwesomeIcon icon={faArrowDownUpAcrossLine} />
        <Compo4 firstName={"bakary"} />
        <FontAwesomeIcon icon={faArrowDownUpAcrossLine} />
        <Compo5 firstName={"Bakary"} lastName={"Jobala"} />
        <FontAwesomeIcon icon={faArrowDownUpAcrossLine} />
        <Compo6 lastName={"Jobala"} />
        <FontAwesomeIcon icon={faArrowDownUpAcrossLine} />
        <FontAwesomeIcon icon={faMugSaucer} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});

export default App;
