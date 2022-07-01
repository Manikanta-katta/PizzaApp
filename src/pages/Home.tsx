import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonImg,
  IonInput,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";

import "./Home.css";
import img1 from "../assets/images/Google.png";
import img2 from "../assets/images/Facebook.png";
import img3 from "../assets/images/Twitter.png";
import img4 from "../assets/images/eatmore logo.png";
import { useState,useEffect } from "react";
import { firebaseApp } from "./firebase";


const Home: React.FC = (props) => {
  const [registerActive,setRegisterActive] = useState<boolean>(true);
  const [loginActive,setLoginActive] = useState<boolean>(false);
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [PassswordError, setPasswordError] = useState('');
  // const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }
  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }
  const authlistener = () => {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user);
      }
      else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authlistener();
  }, []);


const handlelogin = () => {
    clearErrors();
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch((err) => {

        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  const handleSignup = () => {
    clearErrors();
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":

            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  }
  return (
    <IonPage color="primary">
      <IonContent className="const">
        <IonImg className="eclipse" src={img4} alt=" "></IonImg>
        <IonCard  className="container">
          <IonCardHeader>
            <IonButton routerLink='/tab3' onClick={handlelogin}>login</IonButton>
            <IonButton routerLink='/tab3' onClick={handleSignup}>Signup</IonButton>
          </IonCardHeader>
          <IonCardContent>
            <div className="segment">
              <IonSegment color="danger" class="fix-ripple" value={registerActive ? "register" : "login"}>
                <IonSegmentButton value="login" onClick={() =>{setLoginActive(true);
                setRegisterActive(false);} }>
                  <IonLabel>Login</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="register" onClick={() =>{setLoginActive(false);
                setRegisterActive(true);} } >
                  <IonLabel>signUp</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </div>
            
            { registerActive ?(
            <IonLabel>
            <br></br>
            <IonInput class="input"  value={email}  placeholder="enter email" onIonChange={(e:any) => setEmail(e.detail.value)}></IonInput>
            <IonLabel className="errorMsg"> {emailError}</IonLabel>
            <IonInput class="input" placeholder="Password" value={password} onIonChange={(e:any) => setPassword(e.target.value)}></IonInput>
            <IonLabel className="errorMsg"> {PassswordError}</IonLabel>
            <IonInput class="input" placeholder="confirm password"></IonInput>
            <br></br>

            <IonButton routerLink="/tab3" shape="round" expand="full" color="danger" >
              <IonLabel color="light">Sign Up</IonLabel>
              
            </IonButton>
            </IonLabel>
            ):(
            
              <IonLabel>
                <br></br>
            <IonInput class="input" placeholder="enter email" onIonChange={(e:any) => setEmail(e.target.value)}></IonInput>
            <br></br>
            <IonInput class="input" placeholder="Password" value={password} onIonChange={(e:any) => setPassword(e.target.value)}></IonInput>
            <br></br>
            
        

            <IonButton routerLink="/tab3" shape="round" expand="full" color="danger" >
              <IonLabel color="light">Login</IonLabel>
              
            </IonButton>
            </IonLabel>
            )
            }
           
            <IonLabel>OR</IonLabel>
            <div className="image">
              <IonImg className="image1" src={img1} alt=" "></IonImg>
              <IonImg className="image2" src={img2} alt=" "></IonImg>
              <IonImg className="image3" src={img3} alt=" "></IonImg>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;

