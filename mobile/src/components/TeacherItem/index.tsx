import React, { useState } from "react";
import { View, Image, Text, Linking } from "react-native";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsAppIcon from "../../assets/images/icons/whatsapp.png";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../../services/api";


export interface Teacher {
    id: number,
    user_id: number,
    name: string,
    avatar: string,
    whatsapp: string,
    bio: string,
    subject: string,
    cost: number
}

interface TeacherItemPros {
    teacher: Teacher,
    favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemPros> = ({ teacher, favorited }) => {
    const [isFavorited, setIsFavorited] = useState(favorited);

    const handleLinkToWhatsApp = () => {
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);

        api.post('connections', {
            users_id: teacher.id
        })
    };

    async function handleToggleFavorite() {
        const favorites = await AsyncStorage.getItem('favorites');
        let favoritesArray = [];

        if (favorites)
            favoritesArray = JSON.parse(favorites);

        if (isFavorited) {
            const favoriteIndex = favoritesArray.findIndex((_teacher: Teacher) => _teacher.id === teacher.id)

            favoritesArray.splice(favoriteIndex, 1);
        } else
            favoritesArray.push(teacher)

        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));

        setIsFavorited(!isFavorited);
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: teacher.avatar }}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>
            <Text style={styles.bio}>{teacher.bio}</Text>


            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
                </Text>

                <View style={styles.buttonsContainer}>

                    <RectButton
                        style={[styles.favoriteButton, isFavorited ? styles.unfav : {}]}
                        onPress={handleToggleFavorite}
                    >
                        <Image source={isFavorited ? unfavoriteIcon : heartOutlineIcon} />
                    </RectButton>

                    <RectButton
                        style={styles.contactButton}
                        onPress={handleLinkToWhatsApp}
                    >
                        <Image source={whatsAppIcon} />
                        <Text style={styles.contactButtonText}>
                            Entrar em contato
                            </Text>
                    </RectButton>

                </View>
            </View>
        </View>
    );
}

export default TeacherItem;
