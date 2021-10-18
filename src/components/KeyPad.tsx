/* ionic components */
import { IonRow, IonCol } from '@ionic/react';

/* react library */
import React from 'react';

/* personal components */
import Button from "../components/Button";
import FunctionButton from "../components/FunctionButtons";

/* grab data provided from another component (mostly grabs functions to be used) */
interface props {
    clickFunction: (add: any) => void
    createEquation: (add: any) => void
    reset: () => void
    submit: (expression:string) => void
}

/*
 * creates a layout of a keypad that contains both numerical and operational/functional inputs
 * 
 * functionalButtons property:
 * onClick Provides the button with specific functions and values
 * function provides the button with a symbol to display and is meant to show the user what the key does
 * 
 * Button property
 * Onclick provides the button with a funtion and its value
 * value display the numerical value of the key
 * decimal tells the system if the key acts like a "."
 */
const KeyPad: React.FC<props> = (props) => {
    return (
        <React.Fragment>
            <IonRow class="ion-justify-content-center">
                <IonCol size="2.7">
                    <FunctionButton onClick={() => props.reset()} function="C" />
                </IonCol>
                <IonCol offset="2.7" size="2.7">
                    <FunctionButton onClick={() => props.createEquation(" / ")} function="&#247;" />
                </IonCol>
                <IonCol size="2.7">
                    <FunctionButton onClick={() => props.createEquation(" * ")} function="x" />
                </IonCol>
            </IonRow>

            <IonRow class="ion-justify-content-center">
                <IonCol size="2.7">
                    < Button onClick={() => props.clickFunction("7")} value={7} decimal={false} />
                </IonCol>
                <IonCol size="2.7">
                    < Button onClick={() => props.clickFunction("8")} value={8} decimal={false} />
                </IonCol>
                <IonCol size="2.7">
                    < Button onClick={() => props.clickFunction("9")} value={9} decimal={false} />
                </IonCol>
                <IonCol size="2.7">
                    <FunctionButton onClick={() => props.createEquation(" - ")} function="-" />
                </IonCol>
            </IonRow>

            <IonRow class="ion-justify-content-center">
                <IonCol size="2.7">
                    < Button onClick={() => props.clickFunction("4")} value={4} decimal={false} />
                </IonCol>
                <IonCol size="2.7">
                    < Button onClick={() => props.clickFunction("5")} value={5} decimal={false} />
                </IonCol>
                <IonCol size="2.7">
                    < Button onClick={() => props.clickFunction("6")} value={6} decimal={false} />
                </IonCol>
                <IonCol size="2.7">
                    <FunctionButton onClick={() => props.createEquation(" + ")} function="+" />
                </IonCol>
            </IonRow>

            <IonRow class="ion-justify-content-center ion-align-items-stretch">
                <IonCol size="2.7">
                    < Button onClick={() => props.clickFunction("1")} value={1} decimal={false} />
                </IonCol>
                <IonCol size="2.7">
                    < Button onClick={() => props.clickFunction("2")} value={2} decimal={false} />
                </IonCol>
                <IonCol size="2.7">
                    < Button onClick={() => props.clickFunction("3")} value={3} decimal={false} />
                </IonCol>
                <IonCol size="2.7">
                    <FunctionButton onClick={() => props.submit("test 2")} function="=" />
                </IonCol>
                <IonCol size="5.4">
                    <Button onClick={() => props.clickFunction("0")} value={0} decimal={false} />
                </IonCol>
                <IonCol size="2.7">
                    <Button onClick={() => props.clickFunction(".")} value={0} decimal={true} />
                </IonCol>
            </IonRow>
        </React.Fragment>
    );
};

export default KeyPad;
