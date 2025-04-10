async function loginUser(username, password) {
    console.log("Inicio de la función loginUser");
    try {
        const response = await axios.post("https://django.narurm.eu/compunotesapi/login/", {
            username,
            password
        });

        console.log("Respuesta del servidor:", response);
        console.log("Datos de la respuesta:", response.data);

        const accessToken = response.data.access;
        const refreshToken = response.data.refresh;

        if (accessToken && refreshToken) {
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);

            document.cookie = `accessToken=${accessToken}; path=/; max-age=3600`;
            console.log("Login exitoso ✅");
        } else {
            console.error("No se encontraron los tokens en la respuesta:", response.data);
        }

    } catch (error) {
        console.error("Error en el login:", error.response?.data || error.message);
    }
}