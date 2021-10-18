/*
 * The main focus of the component is to create a side menu page that holds more options
 * the current options it holds are history log, conversion tool, and settings
 * currently only thing that works is the history log
 */

/* ionic components */
import { IonItem, IonLabel, IonList, IonMenu, IonMenuToggle } from '@ionic/react';

/* react library */
import { useState } from 'react';

/* personal Components */
import Modal from '../components/Modal';
import './Menu.css'; /* ionic css template */

/* grab data provided from another component */
interface props {
    history: string[],
    clickedFunction: (add:string) => void
}

/* creates a side menu page that holds more options for the application */
const Menu: React.FC<props> = (props) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <IonMenu contentId="main" type="overlay" side="start" menuId="first">
            <IonMenuToggle>
                <Modal modalName="History Log">
                    <IonList>
                        {props.history.map(expression => {
                            return (
                                <IonItem key={expression} class="ion-text-center" button onClick={() => {
                                    props.clickedFunction(expression);
                                    setShowModal(false)
                                }}>
                                    <IonLabel>{expression}</IonLabel>
                                </IonItem>
                            );                            
                        })}                        
                    </IonList>
                </Modal>
                <Modal modalName="Conversion Tool"></Modal>
                <Modal modalName="Settings"></Modal>
            </IonMenuToggle>            
        </IonMenu>
    );
};

export default Menu;
