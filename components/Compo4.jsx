import { Button, Text, View } from "react-native";
import React, { useState } from "react";

const Compo4 = ({ firstName, lastName = "" }) => {
  const [nom, setName] = useState("");
  return (
    <View>
      <Text>Compo4</Text>
      <Text>
        Hello {firstName} {nom}
      </Text>

      <Button
        title={"clic me"}
        onPress={() => setName("Mohamed")}
        color="#9933FF"
      />
    </View>
  );
};

export default Compo4;
