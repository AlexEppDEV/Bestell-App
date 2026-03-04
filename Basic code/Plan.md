
---

## Ziel der Variante

Wenn ich auf **Add to basket** klicke, bekomme ich in Funktion:

1. **welche Kategorie** (`catIndex`)
2. **welches Gericht** (`menuIndex`)
3. **den Button selbst** (`this`), damit ich denn Text ändern kann

---

## Schritt 1: Beim Rendern die Indizes übergeben

In deinem Template, wo der Button steht, machst du aus:

* vorher: `onclick="addBasket()"`
* nachher: `onclick="addBasket(indexCategories, indexMenu, this)"`

Wichtig:

* `indexCategories` ist aus deiner äußeren Schleife
* `indexMenu` ist aus deiner inneren Schleife
* `this` ist der geklickte Button

---

## Schritt 2: Funktion-Signatur anpassen

Deine Funktion soll dann so starten:

* `function addBasket(catIndex, menuIndex, btn) { ... }`

Damit hast du:

* `catIndex` → Kategorie
* `menuIndex` → Gericht
* `btn` → Button element

---

## Schritt 3: Gerichtsdaten aus deinem Array ziehen

Dann kannst du dir das Objekt holen:

* `const item = foodMenu[catIndex].menu[menuIndex];`

Und dann kommst du an alles ran:

* `item.name`
* `item.price`
* `item.menuImg`
* etc.

---

## Schritt 4: Button-Text ändern (Aufgabe 1)

Du hast jetzt `btn` direkt in der Hand.
Damit kannst du den Text ändern, z.B.:

* wenn Basket offen ist → “Close basket”
* sonst → “Add to basket” oder “Open basket”

Hinweis: Das Basket-Panel ist bei dir das Element, das du mit `.open` togglest.
Du kannst prüfen:

* `basketElement.classList.contains("open")`

---

## Schritt 5: Basket-Daten speichern (Aufgabe 2 + 3)

Mach dir eine Datenstruktur `basket` (Array), die Einträge speichert wie:

* `{ catIndex, menuIndex, quantity }`

Dann bei Klick:

* prüfen, ob es den Eintrag schon gibt

  * ja → quantity++
  * nein → push
* danach `localStorage.setItem(...)`

Und zum Anzeigen:

* `renderBasket()` liest `basket` und baut HTML in `#basketOrders`

---

## Warum diese Variante gut zum Lernen ist

* Du siehst direkt die Werte: `addBasket(1,2,this)`
* Kein “unsichtbares” event-Objekt nötig
* Kein querySelector-Raten
* Du lernst dabei automatisch:

  * Arrays mit Indizes verknüpfen
  * Daten → UI
  * UI → Daten (Warenkorb)

---


---

