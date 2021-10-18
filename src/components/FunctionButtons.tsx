/*
 * main focus of this component is to create operator/functional key inputs with solid fills, 
 * with a round shape and a specific color, as well as accaptable onClick functions
 */

/* ionic components */
import { IonButton, IonTitle, } from '@ionic/react';

/* grab data provided from another component */
interface Props {
    function: string; /* tells the system what the main function of the key is */
    onClick: () => void /* allows the button to use a function upon the key being clicked */
}

/* create a button using ionics button component */
const FunctionButton: React.FC<Props> = (props) => (
    < IonButton class={(props.function != "=") ? "btnSize" : "btnSize ion-align-items-stretch"} onClick={props.onClick} size="large" shape="round" fill={(props.function != "C") ? "solid" : "outline"} color={(props.function != "C") ? "tertiary" : "danger"} expand="block"><IonTitle color={(props.function != "C") ? "dark" : "light"}>{(props.function != "=") ? props.function : props.function}</IonTitle></IonButton>
);

export default FunctionButton;