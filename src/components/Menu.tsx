import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Spam',
    url: '/page/Spam',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

    return (
        <IonMenu contentId="main" type="overlay" side="start" menuId="first">
            <IonContent>
                <IonList>
                    <IonMenuToggle >
                        <IonItem button>Settings</IonItem>
                        <IonItem button>Calculation History</IonItem>
                        <IonItem button>Conversions</IonItem>
                    </IonMenuToggle>
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
