import { IonButton } from '@ionic/react';

interface Props {
    value: number;
    decimal: Boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = (props) => (
    < IonButton class="fontSize" size="large" shape="round" fill="outline" color="light" expand="block">{props.decimal ? "." : props.value}</IonButton>
);

export default Button;