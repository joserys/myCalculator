import { IonButtons, IonHeader, IonMenuButton, IonPage, IonToolbar,IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Page.css';
import KeyPad from '../components/KeyPad';
import Display from '../components/Display';

const Page: React.FC = () => {

    return (
        <IonPage>
            <IonHeader class= "heightSize-10" >
                <IonToolbar color="secondary" class="heightSize-100" >
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow class="ion-justify-content-center">
                        <IonCol size="11">
                            <Display />
                        </IonCol>
                    </IonRow>
                    <KeyPad />            
                </IonGrid>
            </IonContent>
        </IonPage>
  );
};

export default Page;
