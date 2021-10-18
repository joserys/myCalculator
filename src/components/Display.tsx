/*
 * the main focus of this component is to create a dynamic display that will keep track of user inputs and the current expression to be solved
 * the display will also output the answer to the users expression in green font
 */

/* ionic components */
import { IonText, IonNote } from '@ionic/react';

/* grab data provided from another component */
interface Props {
    equation: String, /* the expression to be displayed and solved created by the user */
    answer: boolean /* tells the system if the current itemed displayed is an answer to an expression */
}

/* creates a display that shows users inputs and system outputs using ionic tags*/
const Display: React.FC<Props> = (props) => (
    <div className="ion-text-end">
        <IonText key="mainDisplay" class="bgFont" color={(props.answer==true)? "success" : "light"}>{props.children}</IonText>
        <div className="ion-text-end ion-no-padding ion-no-margin">
            <IonNote key="secondDisplay">{(props.equation!="0")? props.equation:""}</IonNote>
        </div>
        <hr className="ion-no-padding ion-no-margin" color="white" />
    </div>
);

export default Display;