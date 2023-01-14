import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const Compo5 = ({ firstName, lastName }) => {
  // 1
  const [name, setName] = useState({ first: "", last: "" });
  const [clic, setClic] = useState(false);
  // 2
  const [etudiant, setEtudiant] = useState({ nom: "Konate", prenom: "Bakary" });
  //Cas 1
  const changePrenom1 = () => {
    setEtudiant({ ...etudiant, prenom: lastName });
  };
  //Cas 2
  const changePrenom2 = () => {
    setEtudiant((prev) => ({ ...prev, prenom: lastName }));
  };
  //Cas 3
  const changePrenom3 = () => {
    setEtudiant((prev) => {
      return { ...prev, prenom: lastName };
    });
  };
  return (
    <View>
      <Text>Compo5</Text>

      <Text>
        {clic && "Hello"} {name.first} {name.last}
      </Text>

      <Button
        title={"Dites hello"}
        onPress={() => {
          setName({ first: firstName, last: lastName });
          setClic(true);
        }}
        color="#841584"
      />

      <View>
        <Text>
          {etudiant.prenom} {etudiant.nom}
        </Text>
        <Button
          title={"Change prenom de l'etudiant"}
          onPress={changePrenom2} // remplacer la founction avec changePrenom1 ou changePrenom3
          color="#0400ff"
        />
      </View>
    </View>
  );
};

export default Compo5;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
