import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
    nav: {
        marginRight: '20px',
        fontWeight: '700',
        color: 'white',
        textDecoration: 'none',
        padding: '.8em 1em calc(.8em + 3px)',
        borderRadius: '3px',
        background: 'rgb(64,199,129)',
        boxShadow: '0 -3px rgb(53,167,110) inset',
        transition: '0.2s',
        ':hover' : {
            background: 'rgb(53, 167, 110)'
        },
        ':active' : {
            background: 'rgb(33,147,90)',
            boxShadow: '0 3px rgb(33,147,90) inset'
        }
    },

    block: {
        marginTop: '30px',
        marginBottom: '30px'
    },

    paragraf: {
        color: '#FF0000'
    }
});