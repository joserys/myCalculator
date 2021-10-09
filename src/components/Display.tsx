import { IonToolbar, IonText } from '@ionic/react';
import { Props } from 'react';

interface CurrentDisplay {
    display: any;

}

const currentDisplay: CurrentDisplay = { display: 0 };

const Display: React.FC = () => (
    <IonToolbar class = "ion-text-end">
        <IonText>{currentDisplay.display}</IonText>
        <hr color="white" />
    </IonToolbar>
);

export default Display;

function handleDisplay(show: any) {
    currentDisplay.display = show;
};