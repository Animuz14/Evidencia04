

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBfkYSNFYbrqTTC5tka2kg3FiTriQXpkro",
    authDomain: "jojohan-6c3fe.firebaseapp.com",
    projectId: "jojohan-6c3fe",
    storageBucket: "jojohan-6c3fe.appspot.com",
    messagingSenderId: "321192937249",
    appId: "1:321192937249:web:a28d41c13078a7155a6060",
    measurementId: "G-DKEXME9CPE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export class ManageAccount {
    register(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
    .then((_) => {
        window.location.href = "login.html";
        alert("Registro exitoso. Serás redirigido a la página de inicio de sesión.");
    })
    .catch((error) => {
        console.error(error.message);
            alert("Error al registrar: " + error.message);
        });
    }
    
    authenticate(email, password) {
    signInWithEmailAndPassword(auth, email, password)
    .then((_) => {
        window.location.href = "index.html";
        alert("Has iniciado sesión correctamente. Serás redirigido a la página principal.");
    })
    .catch((error) => {
        console.error(error.message);
                alert("Error al iniciar sesión: " + error.message);
            });
        }
        signOut() {
            signOut(auth)
    .then((_) => {
        window.location.href = "index.html";
    })
    .catch((error) => {
        console.error(error.message);
    });
        }
}
