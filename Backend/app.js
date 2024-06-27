const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");
const participantRoutes = require("./routes/participantRoutes");
const errorHandler = require("./utils/errorHandler");

require('dotenv').config();
const mongoose = require("mongoose");
require('dotenv').config();

const dbURI = process.env.DB_URI;

if (!dbURI) {
  console.error("A variável de ambiente DB_URI não está definida no arquivo .env.");
  process.exit(1);
}

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Conectado ao banco de dados com sucesso!");
  } catch (err) {
    console.error("Conexão com o banco de dados falhou:", err);
    process.exit(1);
  }
};


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor está funcionando na porta ${PORT}`);
});

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Bem vindo" });
});

app.use("/auth", authRoutes);
app.use("/events", eventRoutes);
app.use("/participants", participantRoutes);

app.use(errorHandler);

module.exports = app;



