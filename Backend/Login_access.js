
async function loginUser(username, password) {
    console.log("inicio de la función loginUser");
    try {
        const response = await axios.post("https://django.narurm.eu/compunotesapi/", {
            username: username,
            password: password
        });

      

        const token = response.data.token;
        localStorage.setItem("token", token);
        console.log("Login exitoso, token:", token);
    } catch (error) {
        console.error("Error en el login:", error.response?.data || error.message);
    }
}
