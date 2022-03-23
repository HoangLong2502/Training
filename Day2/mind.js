let data = [
    {   
        type: "coffee & desserts",
        title: "ALMA – Coming Soon",
        imgUrl: "https://thegrovela.com/wp-content/uploads/2021/04/GAF_Alma-Cocina-de-Mexico_Coming-Soon_900x600.jpg"
    },
    {
        type: "family-friendly dining",
        title: "ALMA – Coming Soon",
        imgUrl: "https://thegrovela.com/wp-content/uploads/2017/05/Grove_Dining_Dining-Detail_The-Cheesecake-Factory-900x600.png"
    },
    {
        type: "food & beverages",
        title: "ALMA – Coming Soon",
        imgUrl: "https://thegrovela.com/wp-content/uploads/2017/06/Grove_Dining_Dining-Detail_American-Girl-Cafe_Crop-P_900x600px.png"
    },
    {
        type: "quick bites",
        title: "ALMA – Coming Soon",
        imgUrl: "https://thegrovela.com/wp-content/uploads/2021/04/GAF_Alma-Cocina-de-Mexico_Coming-Soon_900x600.jpg"
    },
    {
        type: "restaurants",
        title: "ALMA – Coming Soon",
        imgUrl: "https://thegrovela.com/wp-content/uploads/2021/07/2021_GAF_AMC_PromoImage_Hero_HP-Tile_900x600.png"
    }
]

var listItem = document.getElementById('listItem');

let type = document.getElementById('type')
type.addEventListener("change", changeOption);

window.onload = changeOption;

function changeOption() {
    const value = document.getElementById('type').value;
    const result = data.filter(function(data) {
        return data.type == value
    });
    console.log(result);
    listItem.innerHTML = ``;
    if(result.length == 0) {
        for(let i = 0; i < data.length; i++) {
        
            listItem.innerHTML += `
                <div class="small-cart__Item">
                    <img class="item__img" src="${data[i].imgUrl}" alt="">
                    <p>${data[i].title}</p>
                </div>
            `
        }
    }
    for(let i = 0; i < result.length; i++) {
        
        listItem.innerHTML += `
            <div class="small-cart__Item">
                <img class="item__img" src="${result[i].imgUrl}" alt="">
                <p>${result[i].title}</p>
            </div>
        `
    }
}





