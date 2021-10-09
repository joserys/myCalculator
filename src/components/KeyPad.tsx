import { IonRow, IonCol } from '@ionic/react';
import React from 'react';
import Button from "../components/Button";
import FunctionButton from "../components/FunctionButtons";

const numbers = [1, 4, 7];
const btns = ["x","-","+"];

const KeyPad: React.FC = () => {
    return (
        <React.Fragment>
            <IonRow class="ion-justify-content-center">
                    <IonCol size = "2.5">
                        <FunctionButton function="C" />
                    </IonCol>
                    <IonCol offset="2.5" size="5">
                        <FunctionButton function="&#247;" />
                    </IonCol>
                </IonRow>

                {numbers.map((number, index) => {
                    return (
                        <IonRow class="ion-justify-content-center">
                            <IonCol size="2.5">
                                < Button onClick={() => addToDisplay(number)} key={index++} value={number++} decimal={false} />
                            </IonCol>
                            <IonCol size="2.5">
                                < Button onClick={() => addToDisplay(number)} key={index++} value={number++} decimal={false} />
                            </IonCol>
                            <IonCol size="2.5">
                                < Button onClick={() => addToDisplay(number)} key={index} value={number} decimal={false} />
                            </IonCol>
                            <IonCol size="2.5">
                                <FunctionButton function={btns[index-2]} />
                            </IonCol>
                        </IonRow>
                    );
                })}

            <IonRow class="ion-justify-content-center">
                    <IonCol size="5">
                    <Button onClick={() => addToDisplay(0)} key={0} value={0} decimal={false} />
                    </IonCol>
                    <IonCol size="2.5">
                    <Button onClick={() => addToDisplay(0)} key={0} value={0} decimal={true} />
                    </IonCol>
                    <IonCol size="2.5">
                        <FunctionButton function="=" />
                    </IonCol>
            </IonRow>
        </React.Fragment>
    );
};

export default KeyPad;

function addToDisplay(show: number): void {
    
}
