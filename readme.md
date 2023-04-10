# Blockchain Simple

Ceci une implémentation simplifiée d'une blockchain en JavaScript. Le code simule une blockchain de base avec des fonctionnalités telles que la création de blocs, la gestion des transactions et l'utilisation d'une preuve de travail (PoW) pour sécuriser la chaîne.

## Fonctionnalités

- Création de blocs avec index, horodatage, transactions, nonce, hash et hash du bloc précédent

- Gestion des transactions en attente

- Implémentation d'une preuve de travail simple pour sécuriser la chaîne

## Preuve de travail (Proof of Work)

La preuve de travail (PoW) est un mécanisme de consensus qui oblige les nœuds d'un réseau à effectuer un travail de calcul considérable pour créer un nouveau bloc. Dans cette implémentation simplifiée, la PoW consiste à trouver un nonce (nombre utilisé une fois) qui, lorsqu'il est combiné avec les autres données du bloc, génère un hash répondant à certaines conditions. Dans notre cas, la condition est que le hash commence par "000".

Le processus de preuve de travail dans ce code est le suivant :

1.  Initialisez un nonce à 0 et un hash vide.
2.  Incrémente le nonce.
3.  Générez un hash en utilisant le SHA256 en combinant le hash du bloc
    précédent, l'horodatage, les transactions en attente et le nonce.
4.  Vérifiez si le hash généré commence par "000". Si ce n'est pas le
    cas, retournez à l'étape 2. Sinon, continuez à l'étape 5.
5.  Le nonce et le hash générés sont utilisés pour créer le nouveau
    bloc.

## Fichier de test

Le fichier `test.js` est un exemple d'utilisation de cette implémentation simplifiée de la blockchain. Il montre comment créer une nouvelle transaction et un nouveau bloc en suivant deux étapes principales :

1. Création d'une nouvelle transaction : Le fichier `test.js` crée une nouvelle transaction avec un montant de 100, une adresse d'expéditeur et une adresse de destinataire. Cette transaction est ajoutée aux transactions en attente de la blockchain.
2. Création d'un nouveau bloc : Ensuite, le fichier `test.js` crée un nouveau bloc en utilisant les transactions en attente (y compris celle ajoutée lors de l'étape précédente). La preuve de travail est appliquée pour sécuriser le nouveau bloc avant qu'il ne soit ajouté à la chaîne.

Pour exécuter le fichier de test, assurez-vous d'avoir installé les dépendances nécessaires et exécutez la commande suivante dans votre terminal :

```bash
node test.js
```
