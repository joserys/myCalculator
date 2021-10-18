/*
 * the main focus of this component is to create modal pages for all the different menu
 * options, the creatation of the content is provided by the children of the component tag
 */

/* react library */
import React, { useState } from 'react';

/* ionic components */
import { IonModal, IonButton } from '@ionic/react';

/* grab data provided from another component */
interface Props {
    modalName: string 
}
/* creates a modal page using ionic modal component */
export const Modal: React.FC<Props> = (Props) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <React.Fragment>            
            <IonButton class="ion-margin-bottom ion-margin-top" color="light" expand="full" fill="outline" onClick={() => setShowModal(true)}>{Props.modalName}</IonButton>
            <IonModal isOpen={showModal} cssClass='my-custom-class'>
                {Props.children}
                <IonButton class="ion-margin-bottom" color="light" expand="full" fill="outline" onClick={() => setShowModal(false)}>Go Back</IonButton>
            </IonModal>
        </React.Fragment>
    );
};

export default Modal;