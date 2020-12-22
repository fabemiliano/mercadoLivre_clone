import React from 'react';
import { View, Image } from 'react-native';

export default function Profile() {
    return (
        <View>
            <Image source={{ uri: "https://randomuser.me/api/portraits/men/29.jpg" }} />
        </View>
    );
}

