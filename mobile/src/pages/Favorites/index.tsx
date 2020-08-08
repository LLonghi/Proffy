import React from "react";
import { View, Image, Text, ImageBackground } from "react-native";
import styles from "./styles";

import bgImage from "../../assets/images/give-classes-background.png";
import studyIcon from "../../assets/images/icons/study.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";
import PageHeader from "../../components/PageHeader";

//style={styles.container}
function Favorites() {
  return (
    <View style={styles.container} >
      <PageHeader title='Meus Proffys favoritos'></PageHeader>
    </View>
  );
}

export default Favorites;
