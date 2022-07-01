import { IonCard, IonContent, IonHeader, IonIcon, IonImg, IonLabel, IonPage, IonTabBar, IonTabButton, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { triangle, ellipse, square } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import {menu} from 'ionicons/icons';
import './Tab3.css';
import img5 from "../assets/images/Pizza.png";
import pizalog from "../assets/images/pizalog.png";
import seafood  from "../assets/images/seafood.png";
import softdrink from "../assets/images/softdrink.png";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
       
      </IonHeader>
      <IonContent fullscreen>
       
         
      <IonIcon className='icon' icon={menu}/>
      <IonText>Food</IonText><br></br>
      <IonText className='txt'>Delivery</IonText>
      <div className='card1'>
      <IonCard color='danger' className='ion-card'>
        <IonImg className='pizlo' src={pizalog} alt=" "></IonImg>
        <IonLabel className='text1'>Pizza</IonLabel>
        </IonCard>
       
      <IonCard className='ion-card'>
      <IonImg className='sfo'  src={seafood} alt=" " ></IonImg> 
        <IonLabel className='text1'>SeaFood</IonLabel>
        </IonCard>
      <IonCard className='ion-card'>
      <IonImg className='sft' src={softdrink} alt=" "></IonImg>
        <IonLabel className='text1'>SoftDrink</IonLabel>
        </IonCard>
      </div>
      {/* <div className='ion-card'>
        <IonCard ><IonLabel >Pizza</IonLabel></IonCard>
        <IonCard>Seafood</IonCard>
        <IonCard>Softdrinks</IonCard>
      </div> */}

      <IonText>Popular</IonText>

      
        
        <IonCard>
        <div className='text2'>
          <div className='cardtxt'>
          <IonLabel>top of the week</IonLabel><br></br>
         <IonLabel>Primavera Pizza</IonLabel><br></br>
         <IonLabel>weight 540gr</IonLabel>
         </div>
         <div className='pizaimag'>
        <IonImg className='piz' src={img5} alt=" "></IonImg>
        </div>
        </div>
        </IonCard>
      
    
      </IonContent>


      <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
    </IonPage>
  );
};

export default Tab3;
