import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
} from 'react-native'
import React from 'react'

const dummy_data = [
    {
        'main_bg': '#dbe3ff',
        'title': 'Ethereum',
        'abb': 'ETH',
        'returns': '3Y Returns',
        'change': '^ 456%',
        'change_color': '#23942e',
        'crypto_bg': '#bccbff',
        'crypto_color': '#002090',
        'crypto_value': 'CRYPTO',
        'image': require('../assets/images/ethereum.png')
    },
    {
        'main_bg': '#dbf0ff',
        'title': 'Ripple',
        'abb': 'XRP',
        'returns': '3Y Returns',
        'change': '^ 456%',
        'change_color': '#23942e',
        'crypto_bg': '#BCE3FF',
        'crypto_color': '#006591',
        'crypto_value': 'CRYPTO',
        'image': require('../assets/images/ripple1.png')
    },
    {
        'main_bg': '#FEFFDB',
        'title': 'Bitcoin',
        'abb': 'BTC',
        'returns': '3Y Returns',
        'change': '^ 456%',
        'change_color': '#23942e',
        'crypto_bg': '#FFF4BC',
        'crypto_color': '#916800',
        'crypto_value': 'CRYPTO',
        'image': require('../assets/images/bitcoin.png')
    },
    {
        'main_bg': '#FFF7DB',
        'title': 'Binance',
        'abb': 'BTC',
        'returns': '3Y Returns',
        'change': '^ 456%',
        'change_color': '#23942e',
        'crypto_bg': '#FFE4BC',
        'crypto_color': '#914E00',
        'crypto_value': 'CRYPTO',
        'image': require('../assets/images/binance.png')
    }
]
const Crypto = () => {
    return (
        <ScrollView horizontal>
            <View style={styles.box4}>
                {dummy_data.map((item) => {
                    return (
                        <View key={item.title} style={[styles.ripple, { backgroundColor: item.main_bg }]}>
                            <View>
                                <Text style={{ color: "#000000", fontFamily: 'ClashDisplayMedium' }}>{item.title}</Text>
                                <Text style={{ color: "#333333", fontSize: 9, fontWeight: '400' }}>{item.abb}</Text>
                                <Text style={{ color: "#333333", fontSize: 11, fontWeight: '400', marginTop: 12 }}>{item.returns}</Text>
                                <Text style={{ color: item.change_color, fontFamily: 'ClashDisplaySemiBold' }}>{item.change}</Text>
                                <View style={{ backgroundColor: item.crypto_bg, borderRadius: 2, width: 52, height: 17, justifyContent: 'center', alignItems: 'center', marginTop: 12 }}><Text style={{ color: item.crypto_color, fontFamily: 'ClashDisplayMedium', fontSize: 10 }}>{item.crypto_value}</Text></View>
                            </View>
                            <Image source={item.image} style={styles.rip} />
                        </View>)
                })}
            </View>
        </ScrollView>)
}
export default Crypto;

const styles = StyleSheet.create({
    box4: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: 24,
    },
    ripple: {
        backgroundColor: "#dbf0ff",
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: 152,
        height: 143,
        padding: 16,
        borderRadius: 8,
        marginRight:50
    
    },
    rip: {
        position: 'absolute',
        left: 85,
        top: 23,
        width: 100,
        height: 110,
    },
});