// Import de la bibliothèque SHA256 pour le hachage
const SHA256 = require("sha256");

class Blockchain {
  // Initialisation de la blockchain et des transactions en attente
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.pendingTransaction = [];
  }
  /**
   * Création du bloc de genèse (Premier block)
   * @return {Object} Bloc de genèse
   */
  createGenesisBlock() {
    return {
      index: 1,
      timestamp: Date.now(),
      transactions: [],
      nonce: 0,
      hash: "hash",
      previousBlockHash: "previousBlockHash",
    };
  }
  /**
   * Récupération du dernier bloc de la blockchain
   * @return {Object} Dernier bloc
   */
  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }
  /**
   * Génération d'un hash basé sur les données d'entrée
   * @param {string} previousBlockHash
   * @param {number} timestamp
   * @param {Array} pendingTransaction
   * @return {Object} Hash et nonce
   */
  generateHash(previousBlockHash, timestamp, pendingTransaction) {
    let hash = "";
    let nonce = 0;

    // Incrémente le nonce jusqu'à ce que le hash commence par "000"
    while (hash.substring(0, 3) !== "000") {
      nonce++;
      hash = SHA256(
        previousBlockHash +
          timestamp +
          JSON.stringify(pendingTransaction) +
          nonce
      ).toString();
    }
    return { hash, nonce };
  }

  /**
   * Création d'une nouvelle transaction
   * @param {number} amount
   * @param {string} sender
   * @param {string} recipient
   */
  createNewTransaction(amount, sender, recipient) {
    const newTransaction = {
      amount,
      sender,
      recipient,
    };
    this.pendingTransaction.push(newTransaction);
  }
  /**
   * Création d'un nouveau bloc et ajout à la blockchain
   * @return {Object} Nouveau bloc
   */
  createNewBlock() {
    const timestamp = Date.now();
    const transactions = this.pendingTransaction;
    const previousBlockHash = this.createGenesisBlock().hash;
    const generateHash = this.generateHash(
      previousBlockHash,
      timestamp,
      transactions
    );
    const newBlock = {
      index: this.chain.length + 1,
      timestamp,
      transactions,
      nonce: generateHash.nonce,
      hash: generateHash.hash,
      previousBlockHash,
    };
    // Réinitialisation des transactions en attente et ajout du nouveau bloc à la blockchain
    this.pendingTransaction = [];
    this.chain.push(newBlock);

    return newBlock;
  }
}
// Export de la classe Blockchain pour utilisation dans d'autres modules
module.exports = Blockchain;
