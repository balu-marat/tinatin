

var cardProduct = document.querySelectorAll('.add__cart');
console.log(cardProduct);

var myFunctionProduct = function() {
  var titles = this.parentNode.parentNode.parentNode.querySelectorAll('.p__title');
  var prices = this.parentNode.parentNode.parentNode.querySelectorAll('.price span');
  var images = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll('.img img');
  var delPrice = this.parentNode.parentNode.parentNode.querySelectorAll('.price del');

  var create_li = document.createElement('li');
  create_li.classList.add('bag__item');
  console.log();
  console.log();
  console.log();
  console.log();

  create_li.innerHTML = '<a href="#" class="left">\
      <img src="'+images[0].src+'" alt="img50" class="n-m--img">\
    </a>\
    <div class="right">\
      <p>'+titles[0].innerText+'</p>\
      <p><span>'+prices[0].innerText+'</span><del class="">'+delPrice[0].innerText+'</del></p>\
      <div class="trash"><a href="#"><i class="fa-solid fa-trash-can"></i></a></div>\
    </div>';
  var block_cart = document.querySelector('.dropdownMenuCart ul');
  block_cart.appendChild(create_li);
  alert('Товар добавлен в корзину !');

  //   Удаление товара

  var click__trash = document.querySelectorAll('.trash');
  for (var i = 0; i < click__trash.length; i++) {
    click__trash[i].addEventListener('click', del_func, false);
  }

  function del_func(evt) {
    evt.preventDefault();
    // alert('hello');
    this.parentNode.parentNode.remove();
    // console.log(this.parentNode);
  }
};
for (var i = 0; i < cardProduct.length; i++) {
  cardProduct[i].addEventListener('click', myFunctionProduct, false);
}

