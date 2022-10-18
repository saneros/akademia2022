Angular Router (https://angular.io/tutorial/toh-pt5) 

- a komponensek az alábbi url-eken érhetőek el:
http://localhost:4200/about
http://localhost:4200/disclaimer
http://localhost:4200/items
http://localhost:4200/details
- a bal oldali menü segítségével is lehet navigálni az oldalon
- érvénytelen url esetén (pl. http://localhost:4200/kiskutya) is az 'about' komponens jelenik meg
- http://localhost:4200/details/1035805 url-en az 1035805 id-vel rendelkező itemet jeleníti meg

Bónusz:
- a menüben vizualizáljuk, hogy melyik url-en vagyunk (pl eltérő háttérszínű a kiválasztott menüelem)
- a menü elemei dinamikusan állnak elő, csak egy helyen kell megadni az url-eket
- http://localhost:4200/details/1111111 (olyan id, amihez nem talál elemet) esetén navigáljon át az http://localhost:4200/items url-re
  - ha itt böngésző visszát nyom a felhasználó, akkor az ne a http://localhost:4200/details/1111111 url-re vigyen
- az items oldalon egy névre kattintva betölti a hozzá kapcsolódó details oldalt
- az items és a details oldal nem érhető el addig, amíg a felhasználó nem kapcsolta be a disclaimer checkboxot
  - ilyen esetben dobja a felhasználót a disclaimer képernyőre
- a details az http://localhost:4200/items/details/{id} url-en érhető el, ilyenkor is aktív az items menü

  
