# Audit SEO & Technique Complet — GeniusBI

**Date :** 20 mars 2026
**Périmètre :** 24 pages HTML, 3 fichiers CSS, 2 fichiers JS, sitemap.xml, robots.txt
**URL :** https://geniusbi.ma

---

## Score Global

| Dimension | Score | Détail |
|-----------|-------|--------|
| Meta Tags & OG | 7.5/10 | Présents partout, mais descriptions trop courtes sur 13 pages |
| Schemas JSON-LD | 8.5/10 | BlogPosting, Course, Organization, LocalBusiness, BreadcrumbList bien implémentés |
| Structure & Contenu | 9/10 | Hiérarchie h1→h2→h3 parfaite, CTAs sur toutes les pages |
| SEO Technique | 7/10 | CSS/JS non minifiés, pas de page 404, scripts bloquants |
| Accessibilité | 8.5/10 | Skip-to-content, ARIA labels, formulaires labellisés |
| Performance | 6.5/10 | Pas de minification, lazy loading limité, peu de WebP |
| Sécurité | 7/10 | Clé Web3Forms exposée dans le HTML (5 fichiers) |
| **TOTAL** | **7.7/10** | |

---

## 1. Meta Tags — Audit par page

### Règles de référence
- **Title** : idéal 50–60 caractères
- **Meta description** : idéal 150–160 caractères
- **OG tags** : og:title, og:description, og:image, og:url, og:type obligatoires
- **Twitter cards** : twitter:card, twitter:title, twitter:description

### Résultats détaillés

| Page | Title (chars) | Status Title | Description (chars) | Status Desc | OG | Twitter |
|------|--------------|-------------|--------------------|----|----|----|
| index.html | 62 | ⚠️ +2 | 139 | ⚠️ -11 | ✅ | ✅ |
| about.html | 60 | ✅ | 139 | ⚠️ -11 | ✅ | ✅ |
| services.html | 96 | ❌ +36 | 128 | ⚠️ -22 | ✅ | ✅ |
| academy.html | 47 | ⚠️ -3 | 165 | ⚠️ +5 | ✅ | ✅ |
| blog.html | 58 | ✅ | 144 | ⚠️ -6 | ✅ | ✅ |
| contact.html | 59 | ✅ | 134 | ⚠️ -16 | ✅ | ✅ |
| technologies.html | 46 | ⚠️ -4 | 145 | ⚠️ -5 | ✅ | ✅ |
| inscription.html | 57 | ✅ | 129 | ⚠️ -21 | ✅ | ✅ |
| rejoindre.html | 58 | ✅ | 124 | ⚠️ -26 | ✅ | ✅ |
| realisations.html | 44 | ⚠️ -6 | 152 | ✅ | ✅ | ❌ Absent |
| formation-pbi-fond. | 72 | ❌ +12 | 165 | ⚠️ +5 | ✅ | ✅ |
| formation-pbi-avancé | 77 | ❌ +17 | 149 | ✅ | ✅ | ✅ |
| blog-roadmap | 63 | ⚠️ +3 | 119 | ❌ -31 | ✅ | ✅ |
| blog-gouvernance | 80 | ❌ +20 | 142 | ⚠️ -8 | ✅ | ✅ |
| blog-consultant | 61 | ⚠️ +1 | 154 | ✅ | ✅ | ✅ |
| blog-data-quality | 54 | ⚠️ -6 | 106 | ❌ -44 | ✅ | ✅ |
| blog-databricks | 64 | ⚠️ +4 | 99 | ❌ -51 | ✅ | ✅ |
| blog-dax | 61 | ⚠️ +1 | 94 | ❌ -56 | ✅ | ✅ |
| blog-ia-generative | 52 | ⚠️ -8 | 115 | ❌ -35 | ✅ | ✅ |
| blog-lakehouse | 65 | ⚠️ +5 | 113 | ❌ -37 | ✅ | ✅ |
| blog-fabric | 56 | ⚠️ -4 | 89 | ❌ -61 | ✅ | ✅ |
| blog-azure | 56 | ⚠️ -4 | 119 | ❌ -31 | ✅ | ✅ |
| blog-strategie-pme | 57 | ✅ | 131 | ⚠️ -19 | ✅ | ✅ |
| blog-tableau-bord | 60 | ✅ | 131 | ⚠️ -19 | ✅ | ✅ |

### Problèmes identifiés

**Critiques :**
- **8 articles de blog** ont des meta descriptions < 120 chars (perte de CTR dans les SERPs)
- **services.html** : title à 96 chars (sera tronqué dans Google)
- **2 pages formation** : titles > 70 chars

**Mineurs :**
- **realisations.html** : Twitter cards absentes (impact nul car page en noindex)
- **hreflang** : absent sur toutes les pages (acceptable si site uniquement francophone)

---

## 2. Schemas JSON-LD — Audit par page

### Couverture actuelle

| Page | Schemas présents | Status |
|------|-----------------|--------|
| index.html | Organization + LocalBusiness | ✅ Complet |
| about.html | BreadcrumbList | ⚠️ Organization manquant |
| services.html | BreadcrumbList | ⚠️ Service manquant |
| academy.html | BreadcrumbList | ⚠️ CollectionPage manquant |
| blog.html | BreadcrumbList | ⚠️ CollectionPage manquant |
| contact.html | BreadcrumbList | ✅ OK (LocalBusiness sur home) |
| technologies.html | BreadcrumbList | ✅ OK |
| inscription.html | BreadcrumbList | ✅ OK |
| rejoindre.html | BreadcrumbList | ⚠️ JobPosting manquant |
| realisations.html | Aucun | ❌ (acceptable : page noindex) |
| 12 × blog-*.html | BlogPosting + BreadcrumbList | ✅ Complet |
| 2 × formation-*.html | Course + BreadcrumbList | ✅ Complet |

### Détail des schemas blog (BlogPosting)

Tous les 12 articles incluent :
- ✅ `@type: BlogPosting` avec headline, description, url
- ✅ `datePublished` + `dateModified`
- ✅ `author: @type Person` (Ayoub Errarhbi) avec jobTitle, url, worksFor
- ✅ `publisher: @type Organization` avec logo ImageObject
- ✅ `mainEntityOfPage: WebPage`
- ✅ `inLanguage: fr`
- ✅ `articleSection` (catégorie)

### Détail des schemas formation (Course)

Les 2 pages formation incluent :
- ✅ `@type: Course` avec name, description, url
- ✅ `provider: Organization` (GeniusBI Academy)
- ✅ `hasCourseInstance: CourseInstance` avec instructor, location, courseMode
- ✅ `teaches` (compétences enseignées)
- ✅ `inLanguage: fr`

### Schemas manquants recommandés

| Schema | Page cible | Priorité | Impact |
|--------|-----------|----------|--------|
| WebSite + SearchAction | index.html | HAUTE | Sitelinks search box dans Google |
| Service | services.html | MOYENNE | Rich results pour les services |
| Organization (étendu) | about.html | MOYENNE | Renforcement Knowledge Graph |
| CollectionPage | blog.html | BASSE | Meilleure compréhension par Google |
| JobPosting | rejoindre.html | BASSE | Rich results recrutement |
| FAQPage | services.html ou contact.html | MOYENNE | Rich results FAQ |

---

## 3. Structure du Contenu

### Hiérarchie des headings

**Status : PARFAIT sur les 24 pages**

- ✅ Exactement 1 `<h1>` par page
- ✅ Pas de niveaux sautés (h1→h2→h3 respecté)
- ✅ h1 cohérent avec le title et le sujet de la page
- ✅ Mots-clés « Data », « IA », « Power BI » présents dans les h1/h2

### Estimation du contenu par page

| Page | Mots estimés | Verdict |
|------|-------------|---------|
| index.html | ~3500 | ✅ Riche |
| about.html | ~2200 | ✅ Bon |
| services.html | ~4500 | ✅ Très complet |
| blog.html (listing) | ~1800 | ✅ Adapté |
| 12 × blog articles | ~800–1200 | ⚠️ Modéré |
| academy.html | ~2000 | ✅ Adéquat |
| 2 × formations | ~1500–2000 | ✅ Bon |
| contact.html | ~800 | ✅ CTA-focused |
| technologies.html | ~1200 | ✅ Adéquat |
| inscription.html | ~1000 | ✅ Adéquat |
| rejoindre.html | ~1800 | ✅ Bon |
| realisations.html | ~1500 | ✅ Bon (noindex) |

### CTAs (Calls-to-Action)

**Status : EXCELLENT — CTAs sur les 24 pages**

Patterns récurrents :
- « Parler à un expert » / « Échanger avec un expert »
- « S'inscrire à une formation »
- « Démarrer un diagnostic »
- Newsletter sur le blog

---

## 4. SEO Technique

### 4.1 Sitemap.xml

**22 URLs référencées** — Toutes correspondent à des fichiers existants.

| Vérification | Status |
|---|---|
| Format XML valide | ✅ |
| Référencé dans robots.txt | ✅ |
| realisations.html exclu | ✅ (cohérent avec noindex) |
| Dates lastmod récentes | ✅ (2 mars – 19 mars 2026) |
| Priorités cohérentes | ✅ (1.0 home, 0.8-0.9 pages clés, 0.5-0.6 blogs) |
| Tous les blogs inclus | ✅ 12/12 |
| Formations incluses | ✅ 2/2 |

### 4.2 Robots.txt

```
User-agent: *
Allow: /
Sitemap: https://geniusbi.ma/sitemap.xml
```

✅ Correct. Pas de blocage inutile.

⚠️ **Suggestion** : ajouter `Disallow: /realisations` pour renforcer l'exclusion (en plus du noindex).

### 4.3 Liens internes

**Navigation principale** (identique sur les 24 pages) :
- À propos → Services → Technologies → Academy → Blog → Contact

**Footer** (identique sur les 24 pages) :
- 4 colonnes : Services (4 liens avec ancres), GeniusBI (3 liens), Academy (3 liens), Contact (2 liens)

**Pages orphelines :**
- ❌ `realisations.html` : aucun lien entrant depuis la nav, le footer ou d'autres pages (cohérent avec la volonté de la masquer)

**Maillage blog :**
- blog.html → 12 articles ✅
- Articles entre eux : pas de liens croisés entre articles (opportunité d'amélioration)

### 4.4 Page 404

❌ **Aucune page 404 personnalisée.** Le serveur renverra une 404 par défaut.

**Recommandation** : créer un `404.html` avec la navigation du site pour retenir les visiteurs.

### 4.5 Favicons

✅ **Implémentation exemplaire** :
- favicon.svg, favicon.ico, favicon-16.png, favicon-32.png, favicon-192.png, favicon-512.png
- apple-touch-icon.png (180×180)
- site.webmanifest
- meta theme-color (#0B1120)

---

## 5. Performance

### 5.1 Hints de chargement

| Hint | Status |
|------|--------|
| `dns-prefetch` Google Fonts | ✅ Sur les 24 pages |
| `preconnect` Google Fonts | ✅ Sur les 24 pages |
| `preload` ressources critiques | ❌ Absent |

### 5.2 CSS & JavaScript

| Fichier | Lignes | Minifié ? |
|---------|--------|-----------|
| css/shared.css | 411 | ❌ Non |
| css/services.css | 175 | ❌ Non |
| css/magic-animations.css | 462 | ❌ Non |
| js/main.js | 183 | ❌ Non |
| js/magic-animations.js | 189 | ❌ Non |

**Problèmes :**
- ❌ CSS et JS non minifiés (~1 420 lignes au total)
- ❌ Scripts chargés sans `defer` ni `async` → bloquent le rendu

### 5.3 Images

| Critère | Status |
|---------|--------|
| Attributs `alt` | ✅ 100% des images |
| `width` / `height` | ⚠️ Partiel (logos et hero oui, blog non) |
| `loading="lazy"` | ⚠️ Seulement 3 instances (index.html) |
| Format WebP/AVIF | ❌ 1 seul fichier WebP (logos/purview.webp) |

### 5.4 Recommandations performance

1. **Minifier CSS/JS** (gain estimé ~40% taille fichiers)
2. **Ajouter `defer`** sur les balises `<script>`
3. **Étendre `loading="lazy"`** à toutes les images below-the-fold
4. **Ajouter `width`/`height`** sur les images des articles blog (évite CLS)
5. **Convertir en WebP** les images principales (gain ~25-30% poids)
6. **Ajouter `<link rel="preload">`** pour le CSS critique

---

## 6. Accessibilité

| Critère | Status | Détail |
|---------|--------|--------|
| `<html lang="fr">` | ✅ | Toutes les pages |
| Skip-to-content | ✅ | `<a href="#main-content" class="skip-to-content">Aller au contenu principal</a>` |
| ARIA labels nav | ✅ | `aria-label="Menu"`, `aria-label="Fil d'Ariane"` |
| Labels formulaires | ✅ | Tous les champs labellisés (contact, inscription, rejoindre) |
| Hiérarchie headings | ✅ | h1→h2→h3 sans saut |
| Liens externes | ✅ | `target="_blank" rel="noopener noreferrer"` |
| Contraste couleurs | ⚠️ | Non vérifié (nécessite test navigateur) |
| Focus visible | ⚠️ | Non vérifié |

---

## 7. Sécurité

### ⚠️ Clé API Web3Forms exposée

**Clé trouvée dans 5 fichiers HTML :**
- `contact.html`
- `index.html`
- `blog.html`
- `inscription.html`
- `rejoindre.html`

**Risque :** La clé `0902ec57-2f5d-426b-a88a-...` est visible dans le code source. Un attaquant pourrait spammer le formulaire.

**Note :** Un commentaire dans contact.html indique `<!-- ⚠️ REMPLACEZ la clé ci-dessous par votre vraie clé Web3Forms -->`, ce qui suggère une clé de test.

**Recommandation :** Si c'est la clé de production, envisager un backend ou un rate-limiting côté Web3Forms.

### Autres vérifications

- ✅ Pas de mots de passe ou tokens sensibles exposés
- ✅ Liens externes avec `rel="noopener noreferrer"`
- ✅ HTTPS dans tous les canonicals et URLs

---

## 8. Cohérence du site

| Élément | Identique sur les 24 pages ? |
|---------|------------------------------|
| Navigation principale | ✅ Oui |
| Footer | ✅ Oui |
| Favicons | ✅ Oui |
| Viewport meta | ✅ Oui |
| dns-prefetch + preconnect | ✅ Oui |
| Skip-to-content | ✅ Oui |
| Contenu dupliqué problématique | ✅ Aucun |

---

## 9. Realisations.html — Status spécial

Cette page est volontairement masquée du site :
- ✅ `<meta name="robots" content="noindex, nofollow">`
- ✅ Retiré du sitemap.xml
- ✅ Aucun lien entrant (nav, footer, autres pages)
- ✅ Fichier conservé dans le repo

---

## 10. Plan d'action prioritaire

### Priorité HAUTE (impact SEO direct)

| # | Action | Pages | Effort |
|---|--------|-------|--------|
| 1 | Allonger les meta descriptions à 150-160 chars | 13 pages (surtout les 8 blogs) | Moyen |
| 2 | Raccourcir les titles > 60 chars | services, 2 formations, blog-gouvernance | Faible |
| 3 | Ajouter schema WebSite + SearchAction | index.html | Faible |
| 4 | Créer une page 404.html personnalisée | Nouveau fichier | Faible |
| 5 | Ajouter `defer` aux balises script | 24 pages | Faible |

### Priorité MOYENNE (amélioration progressive)

| # | Action | Pages | Effort |
|---|--------|-------|--------|
| 6 | Minifier CSS et JS | 5 fichiers | Moyen |
| 7 | Ajouter `loading="lazy"` à toutes les images below-fold | ~20 pages | Moyen |
| 8 | Ajouter `width`/`height` aux images des blogs | 12 articles | Moyen |
| 9 | Ajouter schema Service | services.html | Faible |
| 10 | Ajouter liens croisés entre articles blog | 12 articles | Moyen |
| 11 | Ajouter `Disallow: /realisations` au robots.txt | robots.txt | Trivial |

### Priorité BASSE (bonus)

| # | Action | Pages | Effort |
|---|--------|-------|--------|
| 12 | Ajouter schema Organization sur about.html | about.html | Faible |
| 13 | Ajouter schema JobPosting sur rejoindre.html | rejoindre.html | Faible |
| 14 | Convertir images en WebP | Assets | Élevé |
| 15 | Ajouter `<link rel="preload">` CSS critique | 24 pages | Moyen |

---

*Audit généré le 20 mars 2026 — GeniusBI Site Repository*
