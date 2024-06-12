// Importar as funções necessárias dos SDKs necessários
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Configuração do Firebase
export const firebaseConfig = {
    apiKey: "AIzaSyC88mhjKL3LtT1G7FZJQcGd3bcmj8yHduk",
    authDomain: "academia-daa6e.firebaseapp.com",
    projectId: "academia-daa6e",
    storageBucket: "academia-daa6e.appspot.com",
    messagingSenderId: "1027783656018",
    appId: "1:1027783656018:web:56445acbad9a1fb979158b",
    measurementId: "G-5EXZQNJ84V"
};

// Inicializar Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Função para adicionar dados ao Firestore
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const emailInput = document.getElementById('emailInput');
const phoneInput = document.getElementById('phoneInput');
const addButton = document.getElementById('addButton');

addButton.addEventListener('click', async (e) => {
    console.log(nameInput.value)
    console.log(e)
    e.preventDefault()
    try {
        await create(nameInput.value, ageInput.value, emailInput.value, phoneInput.value);
    } catch (error) {
        console.error('Erro ao adicionar documento: ', error);
    }
});

async function create(name, age, email, phone) {
    try {
        const docRef = await addDoc(collection(db, 'usuarios'), {
            name: name,
            age: age,
            email: email,
            phone: phone
        });
        console.log('Documento escrito com ID: ', docRef.id);
    } catch (error) {
        console.error('Erro ao adicionar documento: ', error);
    }
}
