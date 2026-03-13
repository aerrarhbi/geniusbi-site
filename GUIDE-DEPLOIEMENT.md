# 🚀 GeniusBI — Guide de déploiement

## Structure du projet

```
geniusbi-site/
├── index.html          ← Page d'accueil
├── services.html       ← Page Services (détaillée)
├── about.html          ← À propos (à venir)
├── technologies.html   ← Technologies (à venir)
├── academy.html        ← Academy (à venir)
├── blog.html           ← Blog (à venir)
├── contact.html        ← Contact (à venir)
├── realisations.html   ← Réalisations (à venir)
├── css/
│   ├── shared.css      ← Styles partagés (navbar, footer, animations, boutons...)
│   └── services.css    ← Styles spécifiques à la page Services
├── js/
│   └── main.js         ← JavaScript partagé (scroll, animations, tilt, etc.)
└── assets/
    └── (logos, images à ajouter)
```

---

## Étape 1 : Créer un compte GitHub (gratuit)

1. Allez sur **https://github.com/signup**
2. Créez un compte avec votre email
3. Confirmez votre email

## Étape 2 : Créer un nouveau repository

1. Connectez-vous à GitHub
2. Cliquez sur le **+** en haut à droite → **New repository**
3. Nom du repo : `geniusbi-site`
4. Cochez **Public**
5. Cochez **Add a README file**
6. Cliquez **Create repository**

## Étape 3 : Uploader les fichiers

**Méthode simple (sans Git en ligne de commande) :**

1. Ouvrez votre repository `geniusbi-site` sur GitHub
2. Cliquez sur **Add file** → **Upload files**
3. Glissez-déposez TOUS les fichiers du dossier `geniusbi-site/` :
   - `index.html`
   - `services.html`
   - Le dossier `css/` (avec `shared.css` et `services.css`)
   - Le dossier `js/` (avec `main.js`)
4. En bas, écrivez un message : `Initial commit - homepage + services`
5. Cliquez **Commit changes**

> ⚠️ **Important** : assurez-vous que les dossiers `css/` et `js/` sont bien uploadés avec leurs fichiers dedans.

## Étape 4 : Connecter Vercel

1. Allez sur **https://vercel.com/signup**
2. Choisissez **Continue with GitHub**
3. Autorisez Vercel à accéder à vos repos
4. Cliquez **Import Project**
5. Sélectionnez le repo `geniusbi-site`
6. Laissez tous les paramètres par défaut
7. Cliquez **Deploy**

**C'est tout !** En ~30 secondes, votre site sera live sur une URL type :
`https://geniusbi-site.vercel.app`

## Étape 5 : Mettre à jour le site

À chaque fois que je vous donne de nouveaux fichiers :

1. Allez sur votre repo GitHub
2. Naviguez vers le fichier à remplacer
3. Cliquez sur le fichier → icône crayon ✏️ (Edit)
4. Remplacez le contenu → **Commit changes**
5. Vercel redéploie automatiquement en ~15 secondes !

## Étape 6 (optionnel) : Domaine personnalisé

Si vous avez un nom de domaine (ex: `geniusbi.ma`) :

1. Dans Vercel → Settings → Domains
2. Ajoutez votre domaine
3. Configurez les DNS chez votre registrar :
   - Type: **CNAME**
   - Nom: **@** ou **www**
   - Valeur: **cname.vercel-dns.com**

---

## 🔄 Workflow collaboratif avec Claude

Notre workflow pour chaque nouvelle page :

1. **Vous me dites** quelle page construire
2. **Je crée** les fichiers HTML + CSS
3. **Vous téléchargez** les fichiers
4. **Vous uploadez** sur GitHub
5. **Vercel déploie** automatiquement
6. **Vous vérifiez** sur le lien live
7. **Vous me donnez** vos retours
8. **J'ajuste** → on recommence au point 3

C'est simple, rapide, et vous voyez le résultat en live à chaque étape !
