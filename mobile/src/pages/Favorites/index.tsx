import React from "react";
import { View, Image, Text, ImageBackground, ScrollView } from "react-native";
import styles from "./styles";

import bgImage from "../../assets/images/give-classes-background.png";
import studyIcon from "../../assets/images/icons/study.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

//style={styles.container}
function Favorites() {
  return (
    <View style={styles.container} >
      <PageHeader title='Meus Proffys favoritos'></PageHeader>
      
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom:16
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default Favorites;
