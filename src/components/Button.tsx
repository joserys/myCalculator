/*
 * the main focus of this component is to create the numerical key inputs
 * with a outline fill, white color scheme and round shape, it also provides
 * an acceptable onclcik function
 */

/* ionic components */
import { IonButton } from '@ionic/react';

/* grab data provided from another component */
interface Props {
    value: number, /* tells the component what numerical value it contains */
    decimal: Boolean, /* tells the system if the key contains a "." */
    onClick: () => void /* allows the button to use a function upon the key being clicked */
}

/* create a button using ionics button component */
const Button: React.FC<Props> = (props) => (
    < IonButton onClick={props.onClick} class="btnSize" size="large" shape="round" fill="outline" color="light" expand="block">{props.decimal ? "." : props.value}</IonButton>
);

export default Button;