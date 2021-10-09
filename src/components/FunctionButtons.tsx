import { IonButton, IonTitle, } from '@ionic/react';

interface Props {
    function: String;
}

const Button: React.FC<Props> = (props) => (
    < IonButton class = "fontSize"size="large" shape="round" fill="solid" color="tertiary" expand="block"><IonTitle>{props.function}</IonTitle></IonButton>
);

export default Button;