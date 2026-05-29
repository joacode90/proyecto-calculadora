import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const explore = () => {
    return (
        <View>
            <Text style={{ color: 'white', fontSize: 30 }}>explore</Text>
            <Link href={'/'} style={{ color: 'white' }}>Volver al Index</Link>
        </View>
    )
}

export default explore