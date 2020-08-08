import React from "react";
import { View, Image, Text, Button, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsAppIcon from "../../assets/images/icons/whatsapp.png";

interface TeacherItemPros {
}

const TeacherItem: React.FC<TeacherItemPros> = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://pbs.twimg.com/profile_images/1265077578320281606/AH4XhkKX_400x400.jpg' }}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Leo Longhi</Text>
                    <Text style={styles.subject}>Fisica</Text>
                </View>
            </View>
            <Text style={styles.bio}>blablalbla bla bla blablalbla {'\n'}{'\n'}blaaablblba blalabla{'\n'}blbaaaa abla blaabla blablaaa abla blaa </Text>


            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton
                        style={[styles.favoriteButton,styles.unfav]}
                    >
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>
                    <RectButton
                        style={styles.contactButton}
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
