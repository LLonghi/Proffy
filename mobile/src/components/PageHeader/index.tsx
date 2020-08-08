import React from "react";
import { View, Image, Text, Button, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native'
import { BorderlessButton } from 'react-native-gesture-handler'

import logoImage from "../../assets/images/logo.png";
import backIcon from "../../assets/images/icons/back.png";

interface PageHeaderPros {
    title: string;
}

const PageHeader: React.FC<PageHeaderPros> = ({ title }) => {
    const { navigate } = useNavigation();

    function handleGoBack() {
        navigate('Landing');
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>

                <Image source={logoImage} resizeMode="contain" />
            </View>
            <Text style={styles.title}>{title}</Text>
            {/* <Text style={styles.title}>Proffys disponiveis</Text> */}
        </View>
    );
}

export default PageHeader;
