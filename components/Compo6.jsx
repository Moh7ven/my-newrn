import { Button, Text, View } from "react-native";
import React, { useState } from "react";

const Compo6 = ({ lastName }) => {
  const [etudiant, setEtudiant] = useState("Bakary");
  return (
    <View>
      <Text>Compo6</Text>
      <Text>{etudiant}</Text>
      <Button
        title={"Ajouter le nom"}
        onPress={() => {
          setEtudiant((prev) => prev + " " + lastName);
        }}
        color="#f00f"
      />
    </View>
  );
};

export default Compo6;
