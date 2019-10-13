import Interactable from 'react-interactable/noNative';

const styles = {
    container: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    square: {
        width: 40,
        height: 40,
        backgroundColor: 'red',
    },
};
const Swipeable = () => {
    return (
        <section style={styles.container}>
            <Interactable.View>
                <article style={styles.square} />
            </Interactable.View>
        </section>
    );
};

export default Swipeable;
