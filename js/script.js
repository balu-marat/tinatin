(function () {
  "use strict";

  class cartProduct {
    constructor(shildik, shildikClass, img, title, originPrice, oldPrice, innerBlock) {
      this.shildik = shildik;
      this.shildikClass = shildikClass;
      this.img = img;
      this.title = title;
      this.originPrice = originPrice;
      this.oldPrice = oldPrice;
      this.innerBlock = document.querySelector(innerBlock);
      this.valuta = 85;
      this.originPrice = this.convertToUSD(this.originPrice);
      this.oldPrice = this.convertToUSD(this.oldPrice);
    }

    convertToUSD(price) {
      const result = price / this.valuta;
      return result.toFixed(2);
    }

    render() {
      const div = document.createElement('div');
      div.classList.add("product");
      div.innerHTML = `
                            <div class="img">
                                <div class="shildik ${this.shildikClass}">
                                    <span>${this.shildik}</span>
                                    <span class="shildik-decor"></span>
                                </div>
                                <img src=${this.img} alt="img50">
                                <div class="desk__img">
                                    <div class="desk">
                                        <p>Title</p>
                                        <p>Description</p>
                                    </div>
                                </div>
                            </div>
                            <div class="body__product">
                                <p class="p__title">${this.title}</p>
                                <div class="block__starts">
                                    <div class="stars">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <div class="review">
                                        <span>6 review (s)</span>
                                    </div>
                                </div>
                                <div class="price">
                                    <span class="currrency">$</span>
                                    <span class="oprice">${this.originPrice}</span>
                                    <span class="currencyDel">$</span>
                                    <del class="opriceDel">${this.oldPrice}</del>
                                </div>
                                <div class="btns dnone">
                                    <ul>
                                        <li class="add__cart">
                                            <span class="sery__krug"><i class="fa fa-shopping-bag"></i></span>
                                        </li>
                                        <li>
                                            <span class="sery__krug"><i class="fa fa-balance-scale"></i></span>
                                        </li>
                                        <li>
                                            <span class="sery__krug"><i class="fa fa-heart"></i></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
      `;

      this.innerBlock.append(div);

    }
  }

  new cartProduct(
    '-30%',
    'orangeR',
    'img/img63.jpg',
    'Рюкзак',
    1230,
    2500,
    '.list__product'
  ).render();


  new cartProduct(
    '-20%',
    'orangeR',
    'img/img51.jpg',
    'Футболка',
    950,
    1320,
    '.list__product'
  ).render();


  new cartProduct(
    '-50%',
    'orangeR',
    'img/img61.jpg',
    'Куртка',
    5000,
    6500,
    '.list__product'
  ).render();


  new cartProduct(
    '-45%',
    'orangeR',
    'img/img50.jpg',
    'Свитер',
    2000,
    2900,
    '.list__product'
  ).render();


  new cartProduct(
    '-30%',
    'orangeR',
    'img/img63.jpg',
    'Рюкзак',
    1230,
    2500,
    '.list__product'
  ).render();


}());