# garage-app-vuejs

Projet réalisé par :

- Killian Cambert : killiancambert

## Contexte du projet

On souhaite avoir une interface de gestion pour différents possesseurs de véhicules.
Pour le back-office de créer une API avec différentes routes en utilisant le framework Nestjs.
Quand au front, l'interface permet d'ajouter un utilisateur qui peut modifier son nom et prénom mais aussi ajouter des voitures, les modifier et les supprimer de son garage virtuel.
Pour cela nous utilisons le framework Vue.js.

## Pré-requis

Installer :

- Node
- npm
- MongoDB

## Lancer le back-office

Pour lancer la partie back-end il faut se rendre sur `user-garage-app-backend` à l'aide de cette commande dans un terminal :

```
cd user-garage-app-backend
```

Ensuite il suffit de lancer l'application back-end avec :

```
npm run start
```

Pour la base de données nous utilisons MongoDB et nous devons lancer le service MongoDB.
Pour cela nous ouvrons un nouveau terminal et il faut utiliser cette commande :

```
run sudo mongod
```

Ou bien :

```
mongod
```

Nous avons donc maintenant lancer le service MongoDB et la base de données simultanément.
Cette API est lancée sur (http://localhost:3000).

## Lancer le front-end

Pour lancer la partie front-office de cette application il faut ouvrir un nouveau terminal et se diriger sur `user-garage-app-frontend` grâce à cette commande :

```
cd user-garage-app-frontend
```

Ensuite il faut effectuer cette commande :

```
npm install
```

Et enfin lancer l'application :

```
npm run serve
```

L'interface est maintenant visible sur (http://localhost:8080)
