# Rapport d'Audit SEO Complet — GeniusBI.ma

**Date** : 19 mars 2026
**Domaine** : https://geniusbi.ma
**Secteur** : Cabinet de conseil Data & IA — Casablanca, Maroc
**Méthode** : Audit réalisé avec la SEO & GEO Skills Library (20 skills)

---

## Score Global

| Dimension | Score | Statut |
|-----------|-------|--------|
| **SEO Technique** | 78/100 | 🟡 Bon |
| **On-Page SEO** | 72/100 | 🟡 Bon |
| **Contenu & E-E-A-T** | 55/100 | 🟠 À améliorer |
| **Schema / Données Structurées** | 35/100 | 🔴 Critique |
| **GEO (Optimisation IA)** | 30/100 | 🔴 Critique |
| **Maillage Interne** | 65/100 | 🟡 Bon |
| **Score Global** | **56/100** | 🟠 À améliorer |

---

## 1. Audit SEO Technique

### 1.1 Crawlabilité

#### Robots.txt
| Check | Statut | Notes |
|-------|--------|-------|
| Fichier existe | ✅ | `/robots.txt` présent |
| Syntaxe valide | ✅ | Syntaxe correcte |
| Sitemap déclaré | ✅ | `https://geniusbi.ma/sitemap.xml` |
| Pages importantes bloquées | ⚠️ | `/realisations` bloqué — potentiellement du bon contenu perdu |
| Assets bloqués (CSS/JS) | ✅ | Rien de bloqué |

**Problème identifié** : La page `/realisations` (études de cas) est bloquée dans robots.txt. Les études de cas sont un **signal E-E-A-T majeur** — elles démontrent l'expertise et l'expérience. Cette page devrait être indexée.

#### XML Sitemap
| Check | Statut | Notes |
|-------|--------|-------|
| Sitemap existe | ✅ | 14 URLs listées |
| Format XML valide | ✅ | Conforme |
| Référencé dans robots.txt | ✅ | Oui |
| URLs indexables uniquement | ⚠️ | `/inscription` absent du sitemap |
| Balise `lastmod` | ⚠️ | Toutes les dates identiques (2026-03-16) |
| Balise `priority` | ✅ | Bien hiérarchisé |

**Problèmes** :
- `/inscription` et `/realisations` absents du sitemap
- Les dates `lastmod` ne reflètent pas les vraies modifications

#### Score Crawlabilité : 8/10

### 1.2 Indexabilité

| Check | Statut | Notes |
|-------|--------|-------|
| Canonicals présents | ✅ | Self-referencing sur toutes les pages |
| Cohérence HTTP/HTTPS | ✅ | HTTPS forcé |
| Cohérence www/non-www | ✅ | Sans www |
| Meta robots | ✅ | `index, follow` partout |
| Balises conflictuelles | ✅ | Aucune |

**Score Indexabilité : 9/10**

### 1.3 Performance & Core Web Vitals

| Métrique | Estimation | Statut |
|----------|-----------|--------|
| **Site statique HTML** | ✅ | Pas de framework JS = excellent TTFB |
| **Lazy loading images** | ✅ | `loading="lazy"` sur toutes les images |
| **Preconnect fonts** | ✅ | Google Fonts optimisé |
| **CSS inline (homepage)** | ⚠️ | ~4600 lignes CSS inline = poids HTML |
| **Aucun srcset** | ❌ | Pas de responsive images |
| **Pas de `<picture>`** | ❌ | Pas de format switching (WebP/AVIF) |
| **Images Unsplash** | ⚠️ | Dépendance externe pour les images |

**Recommandations performance** :
1. Extraire le CSS inline dans des fichiers externes (cacheables)
2. Ajouter `srcset` et `sizes` pour le responsive images
3. Utiliser `<picture>` avec WebP/AVIF + fallback
4. Héberger les images localement au lieu d'Unsplash

### 1.4 Sécurité & HTTPS

| Check | Statut |
|-------|--------|
| HTTPS actif | ✅ |
| Déploiement Vercel | ✅ SSL automatique |
| Clean URLs | ✅ via `vercel.json` |

### 1.5 Structure des URLs

| Check | Statut | Notes |
|-------|--------|-------|
| URLs lisibles | ✅ | `/services`, `/blog`, `/academy` |
| URLs en français | ✅ | `/formation-powerbi-fondamentaux` |
| Pas de paramètres dynamiques | ✅ | Site statique |
| Convention de nommage | ⚠️ | Blog : `blog-*` au lieu de `/blog/*` |

**Problème** : Les articles de blog sont au même niveau que les pages (`/blog-roadmap-data-ia` au lieu de `/blog/roadmap-data-ia`). Cela nuit à la hiérarchie et au silo SEO.

---

## 2. Audit On-Page SEO

### 2.1 Balises Title

| Page | Title | Longueur | Verdict |
|------|-------|----------|---------|
| Accueil | "GeniusBI — Cabinet de conseil Data & IA à Casablanca" | 53 car. | ✅ Optimal |
| Services | "Services Data & IA — GeniusBI \| Conseil, Gouvernance..." | 71 car. | ⚠️ Un peu long |
| Blog post | "Structurer une roadmap Data & IA orientée ROI — GeniusBI Blog" | 63 car. | ✅ Bon |
| Formation | "Formation Power BI Fondamentaux — GeniusBI Academy \| 4 semaines" | 65 car. | ✅ Bon |

**Points forts** : Mots-clés en début de title, marque présente, localisation (Casablanca).

### 2.2 Meta Descriptions

| Page | Description | Longueur | Verdict |
|------|-------------|----------|---------|
| Accueil | "GeniusBI accompagne les entreprises dans leur transformation Data & IA..." | 156 car. | ✅ |
| Services | "5 leviers pour structurer votre trajectoire Data & IA..." | 154 car. | ✅ |
| Blog post | "Comment construire une roadmap Data & IA alignée..." | 100 car. | ⚠️ Court |

### 2.3 Structure Hn

| Check | Statut | Notes |
|-------|--------|-------|
| H1 unique par page | ✅ | Chaque page a un H1 unique |
| Hiérarchie H1→H2→H3 | ✅ | Structure correcte |
| Mots-clés dans les Hn | ✅ | Bien intégrés |
| H1 descriptif | ✅ | Ex: "Solutions Data et IA pour transformer votre stratégie en résultats concrets" |

### 2.4 Images

| Check | Statut | Notes |
|-------|--------|-------|
| Alt text présent | ✅ | Tous les images ont un alt |
| Alt descriptif | ✅ | Ex: "Stratégie Data", "Microsoft Fabric" |
| Lazy loading | ✅ | `loading="lazy"` |
| Dimensions spécifiées | ⚠️ | Via CSS, pas en attributs HTML |
| Srcset responsive | ❌ | Absent |

### 2.5 Open Graph & Social

| Check | Statut | Notes |
|-------|--------|-------|
| OG tags complets | ✅ | og:title, og:description, og:url, og:image |
| OG locale | ✅ | `fr_MA` |
| Twitter Cards | ✅ | `summary_large_image` |
| OG Image | ⚠️ | Utilise favicon-512.png — pas une vraie image OG |

**Problème critique** : L'image OG est un favicon 512x512. Il faut une vraie image OG (1200x630px) avec branding pour un bon rendu sur les réseaux sociaux.

**Score On-Page : 72/100**

---

## 3. Audit Données Structurées (Schema Markup)

### État actuel

| Page | Schema présent | Types |
|------|---------------|-------|
| Homepage | ✅ | Organization + LocalBusiness |
| Services | ❌ | Aucun |
| Blog posts (x4) | ❌ | Aucun |
| Formations (x2) | ❌ | Aucun |
| Academy | ❌ | Aucun |
| About | ❌ | Aucun |
| Contact | ❌ | Aucun |

### Schema manquants (opportunités rich snippets)

| Page | Schema recommandé | Impact |
|------|-------------------|--------|
| **Blog posts** | `Article` / `BlogPosting` | Rich snippets article dans Google |
| **Formations** | `Course` + `CourseInstance` | Rich results "Cours" dans Google |
| **Services** | `Service` + `Offer` | Meilleure compréhension sémantique |
| **Toutes les pages** | `BreadcrumbList` | Fil d'Ariane dans les SERPs |
| **Blog / FAQ** | `FAQPage` | Position 0, rich snippets FAQ |
| **Contact** | `ContactPage` | Aide à la compréhension |
| **About** | `AboutPage` + `Person` | Signal E-E-A-T pour les experts |

**Score Schema : 35/100** — Seule la homepage a du schema. Opportunité massive manquée.

---

## 4. Audit Contenu & E-E-A-T

### 4.1 Volume de contenu

| Type | Nombre | Statut |
|------|--------|--------|
| Pages principales | 8 | ✅ |
| Articles de blog | 4 | ⚠️ Insuffisant pour autorité topique |
| Pages formations | 2 | ⚠️ |
| Études de cas | 1 (bloquée) | ❌ |
| **Total pages indexées** | **14** | 🟠 Faible |

### 4.2 Analyse E-E-A-T

| Dimension | Score | Notes |
|-----------|-------|-------|
| **Experience** | 4/10 | Pas d'études de cas indexées, pas de témoignages visibles |
| **Expertise** | 6/10 | Blog technique ok mais seulement 4 articles |
| **Authoritativeness** | 5/10 | Pas de profils d'experts, pas de bio détaillée |
| **Trustworthiness** | 6/10 | Adresse physique, téléphone, email visibles |

### 4.3 Lacunes de contenu identifiées

**Sujets à couvrir absolument** (forte demande Maroc/Afrique du Nord) :
1. "Consultant Data Maroc" — aucune page ciblée
2. "Formation Power BI Casablanca" — page existante mais pas optimisée locale
3. "Gouvernance des données entreprise" — article existant mais pas assez profond
4. "Migration cloud Azure Maroc" — aucun contenu
5. "IA générative entreprise Maroc" — article existant, à enrichir
6. "Microsoft Fabric formation" — aucun contenu (technologie phare du site)
7. "Data mesh vs data lakehouse" — article existant
8. "Tableau de bord Power BI exemple" — aucun contenu (fort volume de recherche)
9. "Stratégie data PME Maroc" — aucun contenu
10. "Databricks vs Snowflake comparatif" — aucun contenu

**Score Contenu & E-E-A-T : 55/100**

---

## 5. Audit GEO (Generative Engine Optimization)

### 5.1 Optimisation pour les systèmes IA

| Critère | Statut | Notes |
|---------|--------|-------|
| Déclarations quotables | ❌ | Pas de phrases structurées pour citation IA |
| Q&A structuré | ❌ | Pas de sections FAQ |
| Statistiques sourcées | ❌ | Pas de chiffres avec sources |
| Attribution d'experts | ⚠️ | Auteur visible mais pas d'expertise détaillée |
| FAQ Schema | ❌ | Aucun FAQPage markup |
| Contenu unique/original | ⚠️ | Contenu générique, pas assez différenciant |
| Entités nommées claires | ⚠️ | "GeniusBI" utilisé mais pas renforcé par Knowledge Graph |

### 5.2 Présence IA actuelle

- **Google AI Overview** : Probablement absente (site trop récent, fondé 2025)
- **ChatGPT/Perplexity** : GeniusBI probablement non référencé
- **Raison** : Contenu insuffisant, pas de signaux de citation, pas de FAQ schema

**Score GEO : 30/100** — Travail majeur nécessaire

---

## 6. Audit Maillage Interne

### 6.1 Structure de navigation

| Check | Statut | Notes |
|-------|--------|-------|
| Navigation principale | ✅ | 7 liens : Accueil, À propos, Services, Technologies, Academy, Blog, Contact |
| Footer organisé | ✅ | 4 colonnes avec liens thématiques |
| CTAs stratégiques | ✅ | Liens vers Contact et Inscription |
| Liens contextuels | ⚠️ | Peu de liens entre articles de blog |
| Fil d'Ariane | ❌ | Absent (sauf lien retour dans les blogs) |

### 6.2 Problèmes identifiés

1. **Pas de fil d'Ariane (breadcrumb)** sur les pages intérieures
2. **Articles de blog isolés** — pas de liens croisés entre articles
3. **Pages orphelines potentielles** — `/inscription` pas dans la navigation principale
4. **Pas de structure en silo** — blog au même niveau URL que les pages principales

**Score Maillage : 65/100**

---

## 7. Audit Meta Tags

### 7.1 Éléments présents sur toutes les pages

| Balise | Statut |
|--------|--------|
| `<title>` | ✅ Unique et optimisé |
| `<meta description>` | ✅ Unique |
| `<meta keywords>` | ✅ (peu d'impact SEO mais présent) |
| `<meta robots>` | ✅ `index, follow` |
| `<link canonical>` | ✅ Self-referencing |
| OG tags | ✅ Complets |
| Twitter Cards | ✅ Complets |
| `og:locale` | ✅ `fr_MA` |

### 7.2 Améliorations recommandées

| Élément | Action |
|---------|--------|
| **OG Image** | Créer une image 1200x630 par page (ou au minimum par catégorie) |
| `og:type` | Utiliser `article` pour les blogs (actuellement `website` partout) |
| `article:published_time` | Ajouter aux articles de blog |
| `article:author` | Ajouter aux articles de blog |
| `hreflang` | Non nécessaire actuellement (site monolingue) |

---

## 8. Plan d'Optimisation SEO — Roadmap par Priorité

### Phase 1 : Quick Wins (Semaines 1-2) — Impact immédiat

| # | Action | Skill utilisé | Impact | Effort |
|---|--------|---------------|--------|--------|
| 1 | **Débloquer `/realisations`** dans robots.txt et ajouter au sitemap | technical-seo-checker | 🔴 Élevé | Faible |
| 2 | **Ajouter Schema BlogPosting** aux 4 articles de blog | schema-markup-generator | 🔴 Élevé | Moyen |
| 3 | **Ajouter Schema Course** aux 2 pages formation | schema-markup-generator | 🔴 Élevé | Moyen |
| 4 | **Ajouter BreadcrumbList Schema** à toutes les pages | schema-markup-generator | 🟡 Moyen | Faible |
| 5 | **Créer des images OG** dédiées (1200x630) | meta-tags-optimizer | 🟡 Moyen | Moyen |
| 6 | **Changer `og:type` en `article`** pour les blogs | meta-tags-optimizer | 🟢 Faible | Faible |
| 7 | **Mettre à jour les dates `lastmod`** du sitemap | technical-seo-checker | 🟢 Faible | Faible |

### Phase 2 : Structure & Contenu (Semaines 3-6)

| # | Action | Skill utilisé | Impact | Effort |
|---|--------|---------------|--------|--------|
| 8 | **Ajouter des FAQ sections** sur les pages services et formations | geo-content-optimizer | 🔴 Élevé | Moyen |
| 9 | **Implémenter FAQPage Schema** sur les nouvelles FAQ | schema-markup-generator | 🔴 Élevé | Faible |
| 10 | **Ajouter un fil d'Ariane** visible + BreadcrumbList | internal-linking-optimizer | 🟡 Moyen | Moyen |
| 11 | **Créer des liens croisés** entre articles de blog | internal-linking-optimizer | 🟡 Moyen | Faible |
| 12 | **Enrichir la page À propos** avec bios d'experts et Schema Person | entity-optimizer | 🟡 Moyen | Moyen |
| 13 | **Ajouter `/inscription` au sitemap** | technical-seo-checker | 🟢 Faible | Faible |

### Phase 3 : Création de Contenu (Semaines 7-12)

| # | Action | Skill utilisé | Impact | Effort |
|---|--------|---------------|--------|--------|
| 14 | **Écrire 8-10 nouveaux articles** ciblant les gaps identifiés | seo-content-writer | 🔴 Élevé | Élevé |
| 15 | **Page "Consultant Data Maroc"** (landing page SEO locale) | keyword-research + seo-content-writer | 🔴 Élevé | Moyen |
| 16 | **Page "Formation Microsoft Fabric"** | seo-content-writer | 🔴 Élevé | Moyen |
| 17 | **Enrichir les études de cas** avec chiffres et résultats | content-refresher | 🟡 Moyen | Moyen |
| 18 | **Créer un glossaire Data & IA** | seo-content-writer | 🟡 Moyen | Moyen |

### Phase 4 : GEO & Autorité (Semaines 13-20)

| # | Action | Skill utilisé | Impact | Effort |
|---|--------|---------------|--------|--------|
| 19 | **Optimiser chaque article pour citation IA** (quotable statements) | geo-content-optimizer | 🔴 Élevé | Moyen |
| 20 | **Ajouter des statistiques sourcées** dans le contenu | content-quality-auditor | 🟡 Moyen | Moyen |
| 21 | **Construire la présence entité** GeniusBI (Wikidata, Knowledge Graph) | entity-optimizer | 🟡 Moyen | Élevé |
| 22 | **Stratégie de backlinks** (annuaires marocains, partenaires) | backlink-analyzer | 🟡 Moyen | Élevé |
| 23 | **Monitoring continu** des rankings et alertes | rank-tracker + alert-manager | 🟢 Courant | Faible |

---

## 9. Top 5 des Actions les Plus Urgentes

| Priorité | Action | Pourquoi | Score attendu |
|----------|--------|----------|---------------|
| **1** | Ajouter Schema markup (BlogPosting, Course, FAQ, Breadcrumb) | 0 schema sur 13 pages intérieures = visibilité SERP perdue | Schema : 35 → 75 |
| **2** | Débloquer et enrichir `/realisations` | Les études de cas sont le signal E-E-A-T #1 pour un cabinet conseil | E-E-A-T : 55 → 65 |
| **3** | Ajouter des sections FAQ + FAQPage Schema | Position 0 + citations IA + rich snippets | GEO : 30 → 50 |
| **4** | Produire 8+ articles SEO ciblés | 4 articles = autorité topique insuffisante | On-Page : 72 → 82 |
| **5** | Créer des vraies images OG (1200x630) | Un favicon comme OG image = CTR social proche de 0 | Partage social +50% |

---

## 10. Projection de Scores après Optimisation

| Dimension | Actuel | Après Phase 1-2 | Après Phase 3-4 |
|-----------|--------|-----------------|-----------------|
| SEO Technique | 78 | 88 | 92 |
| On-Page SEO | 72 | 82 | 88 |
| Contenu & E-E-A-T | 55 | 65 | 80 |
| Schema / Structured Data | 35 | 75 | 90 |
| GEO (IA) | 30 | 50 | 70 |
| Maillage Interne | 65 | 78 | 85 |
| **Score Global** | **56** | **73** | **84** |

---

## Annexe : Inventaire Complet des Pages

| URL | Title | Schema | Score Page |
|-----|-------|--------|------------|
| `/` | GeniusBI — Cabinet de conseil Data & IA à Casablanca | Organization + LocalBusiness | 82/100 |
| `/about` | À propos — GeniusBI | ❌ | 65/100 |
| `/services` | Services Data & IA — GeniusBI | ❌ | 70/100 |
| `/technologies` | Technologies Data & IA — GeniusBI | ❌ | 60/100 |
| `/academy` | GeniusBI Academy | ❌ | 65/100 |
| `/blog` | Blog Data & IA — GeniusBI | ❌ | 60/100 |
| `/contact` | Contactez-nous — GeniusBI | ❌ | 68/100 |
| `/inscription` | Inscription Formation — GeniusBI | ❌ | 55/100 |
| `/rejoindre` | Rejoindre GeniusBI | ❌ | 50/100 |
| `/realisations` | Réalisations — GeniusBI | ❌ (bloquée) | 30/100 |
| `/formation-powerbi-fondamentaux` | Formation Power BI Fondamentaux | ❌ | 68/100 |
| `/formation-powerbi-avance` | Formation Power BI Avancé | ❌ | 68/100 |
| `/blog-roadmap-data-ia` | Structurer une roadmap Data & IA | ❌ | 62/100 |
| `/blog-gouvernance-data` | Gouvernance des données | ❌ | 62/100 |
| `/blog-ia-generative-entreprise` | IA Générative pour l'entreprise | ❌ | 62/100 |
| `/blog-lakehouse-vs-datamesh` | Lakehouse vs DataMesh | ❌ | 62/100 |

---

*Rapport généré par la SEO & GEO Skills Library — 20 skills pour SEO + GEO*
*Skills utilisés : technical-seo-checker, on-page-seo-auditor, content-quality-auditor, schema-markup-generator, meta-tags-optimizer, keyword-research, competitor-analysis, geo-content-optimizer, internal-linking-optimizer, entity-optimizer*
