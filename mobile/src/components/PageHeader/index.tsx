import React, { ReactNode } from "react";
import { View, Image, Text, Button, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native'
import { BorderlessButton } from 'react-native-gesture-handler'

import logoImage from "../../assets/images/logo.png";
import backIcon from "../../assets/images/icons/back.png";

interface PageHeaderPros {
    title: string;
    headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderPros> = ({ title, headerRight, children }) => {
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
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {headerRight}
            </View>


            {children}
        </View>
    );
}

export default PageHeader;
