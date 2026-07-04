module.exports = {
  config: {
    name: "maintien",
    aliases: ["actif", "statut"],
    version: "1.0.0",
    role: 0,
    category: "utilitaire",
    description: "Vérifie et aide à garder le bot actif"
  },

  onStart: async () => {},

  onChat: async function ({ event, message, api }) {
    if (!event.body) return;

    const texte = event.body.trim().toLowerCase();

    // ✅ Répond seulement si on écrit "maintien" ou "actif"
    if (!["maintien", "actif", "statut"].includes(texte)) return;

    try {
      // ✅ Vérification simple et réponse rapide
      return message.reply("✅ Angel est bien active et en ligne 🚀\nTout fonctionne correctement ! 🤍");
    } catch (erreur) {
      console.log("Erreur maintien :", erreur);
      return message.reply("⚠️ Je suis toujours là, ne t'inquiète pas ✨");
    }
  }
};
