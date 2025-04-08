import axios from "axios";
// Esta función se encarga de registrar un nuevo usuario en la API de Django
// utilizando una solicitud POST.
async function registerUser(username, password, email) {
    try {
        const response = await axios.post("https://django.narurm.eu/compunotesapi/users", {
            username: username,
            password: password,
            email: email
        });

        console.log("Registro exitoso:", response.data);
    } catch (error) {
        console.error("Error en el registro:", error.response?.data || error.message);
    }
}