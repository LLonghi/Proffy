import React from "react";
import { View } from "react-native";
import styles from "./styles";

import { useNavigation } from "@react-navigation/native";
import PageHeader from "../../components/PageHeader";

//style={styles.container}
function TeacherList() {  
  return (
    <View style={styles.container} >
      <PageHeader title='Proffys disponiveis'></PageHeader>
    </View>
  );
}

export default TeacherList;
