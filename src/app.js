const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        message: "¡Pipeline de Jenkins funcionando!",
        status: "Deplegado localmente con Cloudflare Tunnel",
        timestamp: new Date()
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
    console.log(`✅ CI/CD Trigger Test: Exitoso`);
});