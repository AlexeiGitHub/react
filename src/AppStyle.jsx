import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    block: {
        width: '400px',
        margin: '0 auto',
    },
    li: {
        fontSize: '24px',
        marginTop: '30px',
        listStyleType: 'none'
    },
    checkbox: {
        visibility: 'hidden'
    },
    refactor: {
        paddingRight: '20px'
    },
    span2: {
        visibility: 'hidden',
        color: '#0015ff',
        transition: 'color 0.5s',
        ':hover' : {
            color: '#05ff00'
        }
    },
    del: {
        display: 'inline-block',
        width: '42px',
        textAlign: 'center',
        marginLeft: '-120px',
        color: '#ff0101',
        textDecoration: 'none',
        visibility: 'hidden',
        ':hover' : {
            color: '#000000'
        }
    },
    span: {
        cursor: 'pointer',
        display: 'block',
        paddingLeft: '123px',
        borderRadius: '22px',
        ':hover' : {
        //    background: '#cac2c2'
        }
    },
    spanAddUser: {
        cursor: 'pointer',
        margin: '32px auto',
        display: 'table',
        backgroundColor: '#7e7777',
        padding: '4px 84px',
        borderRadius: '18px',
        fontSize: '23px',
        ':hover' : {
          //  backgroundColor: '#565252',
            color: '#d6cfcf'
        }
    },
    modal: {
        padding: '163px',
        width: '490px',
        height: '209px',
        margin: '0 auto',
        backgroundColor: '#737373',
        borderRadius: '18px',
        fontSize: '17px',
        zIndex: '0',
        color: '#f5f3f3',
    },
    btnAdd: {
        visibility: 'hidden'
    }
});