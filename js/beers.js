fetch('beers.json')
.then((res) => res.json())
.then((data) => {
    const beer = data;
    let stout = beer.filter(beers => beers.type == 'stout');
    let pale = beer.filter(beers => beers.type == 'pale');
    let ipa = beer.filter(beers => beers.type == 'ipa');
    let wheat = beer.filter(beers => beers.type == 'wheat');
    let cream = beer.filter(beers => beers.type == 'cream');
    let lager = beer.filter(beers => beers.type == 'lager');
    let strong = beer.filter(beers => beers.type == 'strong');
    let rye = beer.filter(beers => beers.type == 'rye');
    let porter = beer.filter(beers => beers.type == 'porter');
    let old = beer.filter(beers => beers.type == 'old');
    let fruit = beer.filter(beers => beers.type == 'fruit');
    let pilsner = beer.filter(beers => beers.type == 'pilsner');
    let marzen = beer.filter(beers => beers.type == 'marzen');
    let scottish = beer.filter(beers => beers.type == 'scottish');
    let brown = beer.filter(beers => beers.type == 'brown');
    let sour = beer.filter(beers => beers.type == 'sour');
    let schwarzbier = beer.filter(beers => beers.type == 'schwarzbier');
    let belgian = beer.filter(beers => beers.type == 'belgian');
    let blonde = beer.filter(beers => beers.type == 'blonde');
    let farm = beer.filter(beers => beers.type == 'farm');
    let cali = beer.filter(beers => beers.type == 'cali');
    let red = beer.filter(beers => beers.type == 'red');
    let seltzer = beer.filter(beers => beers.type == 'seltzer');
    let bock = beer.filter(beers => beers.type == 'bock');
    let festbier = beer.filter(beers => beers.type == 'festbier');
    let dark = beer.filter(beers => beers.type == 'dark');
    let other = beer.filter(beers => beers.type == 'other');
  
   
    const beerSelection = document.getElementById("beer-selection");

    const beerArr = [stout, pale, ipa, wheat, cream, lager, strong, rye, porter, old, fruit, pilsner, marzen, scottish, brown, sour, schwarzbier, belgian, blonde, farm, cali, red, seltzer, bock, festbier, dark, other];
    const idArr = ["stout", "pale", "ipa", "wheat", "cream", "lager", "strong", "rye", "porter", "old", "fruit", "pilsner", "marzen", "scottish", "brown", "sour", "schwarzbier", "belgian", "blonde", "farm", "cali", "red", "seltzer", "bock", "festbier", "dark", "other"];
    const titleArr = ["Stout's", "Pale Ale's", "IPA's", "Wheat Beer's", "Cream Ale's", "Lager's", "Strong Ale's", "Rye Beer's", "Porter's", "Old Ale's", "Fruit Beer's", "Pilsner's", "Marzen's", "Scottish Ale's", "Brown Ale's", "Sour's", "Schwarzbier's", "belgian's", "Blonde's", "Farmhouse Ale's", "California Common Ale's", "Red Ale's", "Seltzer's", "Bock's", "festbier", "Dark Ale's", "Other's"];
    
    const beerWindow = document.getElementById('beer-window');
    let beerValue = beerSelection.value;
    let beerFilter = beerArr[beerValue];
    let beerId = idArr[beerValue];
    let beerTitle = titleArr[beerValue];
    let beerContainer =
    `<div class="beer-container">
        <h2>${beerTitle}</h2>
        <div id="${beerId}" class="beer-layout">
        </div>
    </div>`;
    beerWindow.innerHTML = beerContainer
    let beerCards = ``;
    beerFilter.forEach(renderCard => {
        beerCards += `
        <div class="beer-card">
            <img src="img/${renderCard.img}" alt="Vallensons' ${renderCard.type} Beer">

            <h3>${renderCard.title}</h3>
            <hr>
            <p><em>${renderCard.style}</em></p>
            <p>ABV: ${renderCard.abv}</p>
        </div>`
        document.getElementById(beerId).innerHTML = beerCards;
    });

    beerSelection.addEventListener('change', function () {
        beerValue = beerSelection.value
        let beerFilter = beerArr[beerValue];
        let beerId = idArr[beerValue];
        let beerTitle = titleArr[beerValue];
        console.log(beerValue);
        let beerContainer =
        `<div class="beer-container">
            <h2>${beerTitle}</h2>
            <div id="${beerId}" class="beer-layout">
            </div>
        </div>`;
        beerWindow.innerHTML = beerContainer
        console.log(beerContainer)
        let beerCards = ``;
        beerFilter.forEach(renderCard => {
            beerCards += `
            <div class="beer-card">
                <img src="img/${renderCard.img}" alt="Vallensons' ${renderCard.type} Beer">

                <h3>${renderCard.title}</h3>
                <hr>
                <p><em>${renderCard.style}</em></p>
                <p>ABV: ${renderCard.abv}</p>
            </div>`
            document.getElementById(beerId).innerHTML = beerCards;
        });
    });
})
