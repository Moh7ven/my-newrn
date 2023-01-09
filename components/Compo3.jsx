import { Text, View } from "react-native";

import React from "react";

const Compo3 = ({ firstName, lastName = "" }) => {
  return (
    <View>
      <Text>Compo3</Text>
      <Text>
        Hello {firstName} {lastName}
      </Text>
    </View>
  );
};

export default Compo3;
