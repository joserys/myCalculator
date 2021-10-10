import { IonToolbar, IonText } from '@ionic/react';

interface Props {
    show: any;

}

const Display: React.FC<Props> = (props) => (
    <IonToolbar class = "ion-text-end">
        <IonText>{props.show}</IonText>
        <hr color="white" />
    </IonToolbar>
);

export default Display;