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
    this.load()
  }

  load(){
    
    this.entries = [
        {
        login: 'jefmaeda',
        name: "Jef Maeda",
        public_repos: '79',
        followers: '100'
        },
        {
            login: 'maykbrito',
            name: "Mayk Brito",
            public_repos: '90',
            followers: '120000'
        },
    ]
    
  }

}

//class 2
export class FavoritesView extends Favorites {
  constructor(root) {
    //heritage
    super(root);
    this.tbody = this.root.querySelector("table tbody");
    this.update();
  }

update(){
    this.removeAllTr()

    this.entries.forEach(user =>{
        const row = this.createRow()
        row.querySelector('.user img').src=`https://github.com/${user.login}.png`
        row.querySelector('.user img').alt=`Image of ${user.name}`
        row.querySelector('.user a').href=`https://github.com/${user.login}`
        row.querySelector('.user p').textContent=user.name
        row.querySelector('.user span').textContent=user.login
        row.querySelector('.repository').textContent=user.public_repos
        row.querySelector('.followers').textContent=user.followers

        this.tbody.append(row)
    })
}

createRow(){
    const tr = document.createElement('tr')
    tr.innerHTML = 
    `
    <td class="user">
      <img src="https://github.com/jefmaeda.png" alt="" />
      <a href="https://github.com/jefmaeda" target="_blank">
        <p>Jef Maeda</p>
        <span>jefmaeda</span>
      </a>
    </td>
    <td class="repository">76</td>
    <td class="followers">9000</td>
    <td>
      <button class="remove">&times;</button>
    </td>
    `
    return tr
}

removeAllTr(){
    this.tbody.querySelectorAll('tr')
    .forEach((tr) => {
        console.log(tr)
        tr.remove()
    })
}


}
