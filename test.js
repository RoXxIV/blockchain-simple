const Blockchain = require("./blockchain");
let bitcoin = new Blockchain();
/**
 * Étape 2 :
 * Crée une nouvelle transaction avec un montant de 100, une adresse d'expéditeur
 * et une adresse de destinataire. Cette transaction sera ajoutée aux transactions en attente.
 */
bitcoin.createNewTransaction(
  "100",
  "0xBcd4042DE499D14e55001CcbB24a551F3b954096",
  "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720"
);

/**
 * Étape 1 :
 * Crée un nouveau bloc en utilisant les transactions en attente (y compris celle ajoutée à l'étape 2)
 * et en appliquant la preuve de travail pour sécuriser le bloc. Le nouveau bloc est ajouté à la chaîne.
 */
bitcoin.createNewBlock();

console.log(bitcoin);
