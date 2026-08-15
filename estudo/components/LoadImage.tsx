import { View, Image, StyleSheet } from 'react-native';

type ParametroInput = {
    pathImagem: string
}

export default function LoadImage({ pathImagem }: ParametroInput) {
    return (
        <View>
            <Image
                source={{ uri: pathImagem }}
                style={imagem.estilo}
            />
        </View>
    );
}

const imagem =StyleSheet.create({
    estilo: {
        height: 200,
        width: 200
    },
});
