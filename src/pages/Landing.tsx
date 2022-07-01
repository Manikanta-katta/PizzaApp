import { IonButton, IonContent, IonHeader, IonImg, IonLabel, IonPage } from '@ionic/react';

import './Landing.css';
import img from "../assets/images/logo.jpg"
const Landing: React.FC = () => {
  return (
    <IonPage color='primary'>
      <IonHeader>
        
      </IonHeader>
      <IonContent fullscreen color="danger">
        <div className='img'>
        <IonImg className='image' src={img} alt=" "></IonImg>
        </div>
        <IonButton shape='round' color="light" className='cont' routerLink="/home"><IonLabel color="danger">Get started</IonLabel></IonButton>
       
      </IonContent>
    </IonPage>
  );
};

export default Landing;


