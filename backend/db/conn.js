const mongoose = require("mongoose");

async function main() {

    try {

        mongoose.set("strictQuery", true);

        await mongoose.connect("mongodb+srv://arymanreis:Ey6QverlgvP0Jew2@cluster0.8beqpgj.mongodb.net/");

        console.log("Conectado ao banco!");

    } catch (error) {
        console.log(`Erro: ${error}`);
    }

}

module.exports = main;

// Ey6QverlgvP0Jew2