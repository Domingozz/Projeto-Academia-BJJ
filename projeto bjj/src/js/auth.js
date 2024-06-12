// Importar as funções necessárias dos SDKs necessários
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { firebaseConfig } from './database.js';

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Função para abrir popup de login
document.getElementById('sign-in').addEventListener('click', async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
    } catch (error) {
        console.error(error);
        alert(`Erro de autenticação: ${error.message}`);
    }
});

// Função para sair
document.getElementById('sign-out').addEventListener('click', async () => {
    try {
        await signOut(auth);
        console.log('Usuário saiu');
    } catch (error) {
        console.error(error);
        alert(`Erro ao sair: ${error.message}`);
    }
});

// Ouvir mudanças no estado de autenticação
onAuthStateChanged(auth, (user) => {
    const userInfo = document.getElementById('user-info');
    const authButtons = document.getElementById('auth-buttons');
    if (user) {
        document.getElementById('user-name').textContent = `Bem-vindo, ${user.displayName}`;
        userInfo.style.display = 'block';
        authButtons.style.display = 'none';
    } else {
        userInfo.style.display = 'none';
        authButtons.style.display = 'block';
    }
});
