import { StyleSheet } from 'react-native';
import Colors from './Colors';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primary,
        marginBottom: 16,
    },
    text: {
        fontSize: 16,
        color: Colors.text,
    },
    button: {
        backgroundColor: Colors.button,
        padding: 12,
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default Styles;
