// pages/api/auth.js
export async function post({ request }) {
    const data = await request.formData();
    const contrasenaIngresada = data.get("pass");
    const contrasenaCorrecta = "MOLECULAR"; // ¡CAMBIA ESTO! - Valor temporal

    if (contrasenaIngresada === contrasenaCorrecta) {
        // IMPORTANTE: Aquí, en un sistema real, NO devolverías simplemente un 200.
        // En su lugar:
        //   1. Verificarías la contraseña contra Firebase Authentication.
        //   2. Si la autenticación es exitosa, generarías un token de sesión
        //      (por ejemplo, usando una biblioteca como `iron-session`) o un JWT.
        //   3. Establecerías una cookie con ese token de sesión/JWT.
        //
        // Para este ejemplo *simplificado* (sin Firebase Auth todavía),
        // simplemente devolvemos un 200.
        return new Response(null, { status: 200 });
    } else {
        return new Response("Contraseña incorrecta", { status: 403 }); // 403 Forbidden es más apropiado que 500.
    }
}

// El método GET ya no es necesario si *solo* vas a usar POST para la autenticación.
// Si necesitas verificar el estado de autenticación en otros lugares,
// podrías tener un método GET que verifique la cookie de sesión (o el token JWT).
// Pero, por ahora, puedes eliminar el método GET que tenías.