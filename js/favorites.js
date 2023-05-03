/*
// class 1 vai conter a logica dos dados, como os dados serao estruturados
this responsible for date in table

unity of class is "heritage -> extends"

// class 2 vai criar a visualização e eventos do HTML
this responsible for creating the HTML
*/

//class 1
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
  }
}

//class 2
export class FavoritesView extends Favorites {
  constructor(root) {
    //heritage
    super(root);

    this.update();
  }

  update() {
    this.removeAllTr();
  }

  removeAllTr() {
    const tbody = this.root.querySelector("table tbody");

    tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
    });
  }
}
