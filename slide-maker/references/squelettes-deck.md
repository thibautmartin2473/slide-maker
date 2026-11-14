# Squelettes de deck (cinq du pack Riplo, rattachés aux fonds, plus deux squelettes d'entreprise)

Points de départ pour le **plan de titres**, pas des gabarits à remplir : couper toute slide qui n'avance pas l'argument. Pour chaque ligne, écrire un titre-conclusion avec son chiffre. Les cinq squelettes de conseil sont repris du pack gratuit de Riplo (2026-10-29) et rattachés aux **fonds** de [fonds/](fonds/) (le fond donne le plan détaillé et les archétypes ; le squelette ci-dessous sert de contrôle de l'ordre et de la première slide).

| Squelette | Fond le plus proche | Remarque |
|---|---|---|
| 1. Deck de recommandation (défaut) | [point-de-vue](fonds/point-de-vue.md), [case-conseil](fonds/case-conseil.md) | |
| 2. Rapport au conseil ou au comité de direction | [investor-relations](fonds/investor-relations.md), [diagnostic](fonds/diagnostic.md) | écart au plan par moteur = move [bridge-a-groupes](moves/bridge-a-groupes.md) |
| 3. Point mensuel de trésorerie (dirigeant) | aucun (squelette d'entreprise) | pont de variation = move [bridge-a-groupes](moves/bridge-a-groupes.md), seuil = move [ligne-de-reference](moves/ligne-de-reference.md) |
| 4. Présentation de budget à un comité | aucun (squelette d'entreprise) | réalisé contre budget = move [cible-vers-realise](moves/cible-vers-realise.md) |
| 5. Dossier de séance de travail | [programme-transformation](fonds/programme-transformation.md), [diagnostic](fonds/diagnostic.md) | |
| 6. Conclusions d'une analyse commerciale ou d'un diagnostic (due diligence commerciale) | [etude-de-marche](fonds/etude-de-marche.md), [etude-commanditee](fonds/etude-commanditee.md) | taille de marché bottom-up et top-down côte à côte |
| 7. Dossier de présentation d'investissement (screener de comité d'investissement) | [business-case-options](fonds/business-case-options.md) (il recommande ; l'[information-memorandum](fonds/information-memorandum.md) ne recommande rien) | trois leviers de création de valeur = move [rangee-unite](moves/rangee-unite.md) |
| (selon l'ancrage) pitch vendeur | [sell-side-pitch](fonds/sell-side-pitch.md) | squelette propre à ce fond, pas dans le pack Riplo |

## Règles communes

- **La première slide porte la réponse.** Pas de révélation finale : le dirigeant ou le comité lit d'abord la recommandation, puis les preuves. Exception : l'étude commanditée opposable (fond [etude-commanditee](fonds/etude-commanditee.md)) pose la méthode et le contrat de lecture (slides 3-4) avant la synthèse en messages (slide 5), parce que le document doit résister à la contestation du commanditaire.
- Ce qui soutient sans faire avancer va en **annexe** (annexe longue, corps court).
- **Une section d'une seule slide n'est pas une section.**
- Chaque slide de contenu : un titre-conclusion avec son chiffre, au registre (`deck.data.json`, voir [registre-preuves.md](registre-preuves.md)), source en pied.
- Entre 6 et 12 slides pour le corps d'un point mensuel ou d'un comité ; au-delà, scinder en deux documents.

## 1. Recommandation (squelette par défaut)

1. La recommandation en une phrase, avec la demande
2. Pourquoi maintenant : le déclencheur ou l'échéance de décision
3. Ce que nous avons trouvé : trois à cinq constats, une slide chacun avec son exhibit
4. Ce que cela implique, constats pris ensemble
5. Les options étudiées et pourquoi celle-ci
6. Les risques et ce qui nous ferait changer d'avis
7. Ce qu'il nous faut de vous : décision, responsable, date

## 2. Rapport au conseil ou au comité de direction

1. Résumé : la décision, la recommandation, la demande
2. Performance contre plan : le pont par moteur
3. Les deux ou trois choses qui ont bougé
4. Perspectives et prévision révisée (estimations étiquetées « E »)
5. Décisions requises

## 3. Point mensuel de trésorerie (dirigeant)

1. Où en est la trésorerie, en une phrase et trois chiffres (solde, couverture en semaines de charges, seuil)
2. D'où vient la variation du mois ou du trimestre (pont : exploitation, besoin en fonds de roulement, investissements, financement)
3. La tendance sur six à douze mois
4. Le poste qui pèse : créances clients en retard, stocks ou dettes fournisseurs (tableau des trois premiers, reste regroupé)
5. La prévision à trois à six mois, avec le seuil et les hypothèses (valeurs « E »)
6. Les décisions demandées : action, effet attendu, responsable, date
7. Annexe : hypothèses de la prévision, détail des flux

## 4. Présentation de budget à un comité

1. La demande : le budget, ce qu'il permet, la décision attendue
2. Rappel de l'exercice écoulé : réalisé contre budget, les écarts qui comptent
3. Les hypothèses structurantes (volumes, prix, masse salariale) avec leur source
4. Le budget par poste : ce qui change par rapport à l'an dernier et pourquoi (pont)
5. Les investissements demandés : montant, retour attendu, délai
6. Le plan de trésorerie qui en résulte, avec le seuil
7. Les risques et ce qui déclencherait un ajustement
8. Décisions et calendrier

## 5. Dossier de séance de travail

1. Objectif de la séance et ce qu'on veut en sortir
2. Où nous en étions
3. La question sur la table
4. Les preuves, une slide par fil
5. Les options, arbitrages explicites
6. Prochaines étapes, responsables, dates

## 6. Conclusions d'une analyse commerciale ou d'un diagnostic (conclusions de due diligence commerciale)

1. Verdict en tête et niveau de confiance
2. Taille de marché : top-down et bottom-up côte à côte
3. Moteurs de croissance et leurs preuves
4. Position concurrentielle notée contre des critères annoncés
5. Preuves clients : rétention, cohortes, concentration
6. Risques pour la thèse
7. Implications pour l'opération (implications et décision)

## 7. Dossier de présentation d'investissement (screener de comité d'investissement)

1. L'opportunité en une page : quoi, taille, pourquoi nous
2. Marché : taille, croissance, structure
3. Société : ce qu'elle fait et comment elle gagne de l'argent
4. Profil financier et leviers clés
5. La thèse : trois leviers de création de valeur
6. Risques clés et les diligences qui les lèveraient
7. Processus, calendrier et demande
