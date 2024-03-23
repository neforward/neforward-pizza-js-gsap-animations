const tl = gsap.timeline();
const pizzas = [
  {
    id: 0,
    name: "Burger pizza",
    price: 445,
    imgUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/c84a4190f97d4364ad2b614bd0d26297_366x366.webp",
    counter: 0,
    category: "Closed",
  },
  {
    id: 1,
    name: "Chicken curry",
    price: 475,
    imgUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/f88f70774bdc4a198379c2f53b42f48f_366x366.webp",
    counter: 0,
    category: "Grill",
  },
  {
    id: 2,
    name: "Cheese",
    price: 295,
    imgUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/3ef50ae6706e4988bb7b3d16cd6990ee_584x584.webp",
    counter: 0,
    category: "Vegetarian",
  },
  {
    id: 3,
    name: "Ham and cheese",
    price: 295,
    imgUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/3fe12c4bb05c470c9cb45fb423b7c049_366x366.webp",
    counter: 0,
    category: "Meat",
  },
  {
    id: 4,
    name: "Pepperoni Fresh",
    price: 325,
    imgUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/525becd5f6d845ea9f83af0af7e44eea_366x366.webp",
    counter: 0,
    category: "Meat",
  },
  {
    id: 5,
    name: "Double chicken",
    price: 325,
    imgUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/f351d4358f134c31b5bed9093faf38e3_366x366.webp",
    counter: 0,
    category: "Grill",
  },
  {
    id: 6,
    name: "Ham and mushrooms",
    price: 445,
    imgUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/be07674c38c54fd78f878a33988a4373_366x366.webp",
    counter: 0,
    category: "Meat",
  },
  {
    id: 7,
    name: "Margarita",
    price: 445,
    imgUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/97d4780c67b14d66a29fcdfaeadc56be_584x584.webp",
    counter: 0,
    category: "Vegetarian",
  },
  {
    id: 8,
    name: "Hot Pepperoni",
    price: 777,
    imgUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/4f760d108a3f47fea43520d234157ac2_584x584.webp",
    counter: 0,
    category: "Spicy",
  }, {
    id: 9,
    name: "Arriva!",
    price: 445,
    imgUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/27a89d3f39414366b2cdcb4965898859_584x584.webp",
    counter: 0,
    category: "Meat",
  }, {
    id: 10,
    name: "Double Pepperoni",
    price: 475,
    imgUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/32bae7e14c8741cbad6b55f33debfba2_584x584.webp",
    counter: 0,
    category: "Meat",
  },
  {
    id: 11,
    name: "Village",
    price: 475,
    imgUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/49cf9b2da27b410784dfffbabda0c14f_584x584.webp",
    counter: 0,
    category: "Vegetarian",
  },
  {
    id: 12,
    name: "Vegetables and mushrooms",
    price: 475,
    imgUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/48f0545652b946bebebfccbee70b3aa5_584x584.webp",
    counter: 0,
    category: "Vegetarian",
  },
  {
    id: 13,
    name: "Asian",
    price: 475,
    imgUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/a5fbe87430b943b7833e632e94807355_584x584.webp",
    counter: 0,
    category: "Vegetarian",
  },
  {
    id: 14,
    name: "Hawaiian",
    price: 666,
    imgUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/4c7751e9fb5047a49cb016f8842b3714_584x584.webp",
    counter: 0,
    category: "Closed",
  },
  {
    id: 15,
    name: "Four seasons",
    price: 999,
    imgUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/d81d7fe9a8f7477f8d3c9cb1bc4239d7_584x584.webp",
    counter: 0,
    category: "Grill",
  },
  {
    id: 16,
    name: "Yeizza",
    price: 222,
    imgUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/11ee866a4407afd7a0e8674b2b0cc1ab_1875x1875.webp",
    counter: 0,
    category: "Closed",
  },
  {
    id: 17,
    name: "Pesto",
    price: 444,
    imgUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/0c9b1e335a34475da6610a228cbfdb2c_584x584.webp",
    counter: 0,
    category: "Grill",
  },
  {
    id: 18,
    name: "Carbonara",
    price: 780,
    imgUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/7e67df55f25341a4b2785a8c1f784485_584x584.webp",
    counter: 0,
    category: "Spicy",
  },
]
const routeToCart = document.querySelector(".button.button--cart");
const content = document.querySelector(".content");
const categoriesArray = [
  "All",
  "Meat",
  "Vegetarian",
  "Grill",
  "Spicy",
  "Closed",
];

const localItems = JSON.parse(localStorage.getItem("cartPizzas"));
let cartPizzas = localItems ? localItems : [];
const headerCart = document.querySelector(".header__cart")

headerCart.addEventListener("click", () => {
  headerCart.style.display = "none";
});

const renderPrices = () => {
  const totalSum = document.querySelector(".totalSum");
  const totalPizzas = document.querySelector(".totalPizzas");

  totalPizzas.innerText = cartPizzas.reduce((a, b) => {
    return a + b.counter;
  }, 0);

  totalSum.innerText =
    cartPizzas.reduce((a, b) => {
      return a + b.counter * b.price;
    }, 0) + " $";
}

renderPrices()

const goMain = (btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    headerCart.style.display = "block";
    renderMain();
  });
}

// let filteredPizzas = pizzas.slice()

const renderCatalog = (array) => {
  const contentItems = document.querySelector(".content__items");
  contentItems.innerHTML = "";

  array.forEach((pizza) => {
    contentItems.innerHTML += `
          <div class="pizza-block">
              <img class="pizza-block__image"
                  src="${pizza.imgUrl}"
                  alt="Pizza" />
              <h4 class="pizza-block__title">${pizza.name}</h4>
              <div class="pizza-block__selector">
                  <ul class="type">
                      <li class="active">thin</li>
                      <li>traditional</li>
                  </ul>
                  <ul class="size">
                      <li class="active">26 cm.</li>
                      <li>30 cm.</li>
                      <li>40 cm.</li>
                  </ul>
              </div>
              <div class="pizza-block__bottom">
                  <div class="pizza-block__price"> ${pizza.price} $</div>
                  <div data-id="${pizza.id}" class="button button--outline button--add">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                          fill="white" />
                      </svg>
                      <span>Добавить</span>
                  </div>
              </div>
          </div>
      `;

    const pizzaBlock = document.querySelectorAll(".pizza-block");

    pizzaBlock.forEach((item) => {
      const pizzaTypes = item.querySelectorAll(".type li");
      const pizzaSizes = item.querySelectorAll(".size li");
      const addBtn = item.querySelector(".button.button--outline.button--add");

      const newPizza = {
        type: "thin",
        size: "26 см.",
        id: "",
      };

      pizzaTypes.forEach((pizzaType) => {
        pizzaType.addEventListener("click", () => {
          pizzaTypes.forEach((element) => {
            element.classList.remove("active");
          });

          pizzaType.classList.add("active");
          newPizza.type = pizzaType.innerText;
        });
      });

      pizzaSizes.forEach((pizzaSize) => {
        pizzaSize.addEventListener("click", () => {
          pizzaSizes.forEach((element) => {
            element.classList.remove("active");
          });

          pizzaSize.classList.add("active");
          newPizza.size = pizzaSize.innerText;
        });
      });

      addBtn.addEventListener("click", () => {
        newPizza.id =
          pizzas[addBtn.dataset.id].name + newPizza.type + newPizza.size;

        if (cartPizzas.some((item) => item.id === newPizza.id)) {
          cartPizzas.find((item) => item.id === newPizza.id).counter++;
        } else {
          cartPizzas.push({
            id: pizzas[addBtn.dataset.id].name + newPizza.type + newPizza.size,
            type: newPizza.type,
            size: newPizza.size,
            name: pizzas[addBtn.dataset.id].name,
            price: pizzas[addBtn.dataset.id].price,
            imgUrl: pizzas[addBtn.dataset.id].imgUrl,
            counter: 1,
            category: pizzas[addBtn.dataset.id].category,
          });
        }

        localStorage.setItem("cartPizzas", JSON.stringify(cartPizzas));
        renderPrices();
      });
    });
  });

  gsap.from(".pizza-block", {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.2
  });
};

const renderMain = () => {
  content.innerHTML = `
    <div class="container">
    <div class="content__top">
      <div class="categories">
        <ul></ul>
      </div>
      <div class="sort">
        <div class="sort__label">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C" />
          </svg>
          <b>Sort By:</b>
          <span>popularity</span>
        </div>
        <div class="sort__popup">
          <ul>
            <li class="active">popularity</li>
            <li>price</li>
            <li>alphabet</li>
          </ul>
        </div>
      </div>
    </div>
    <h2 class="content__title">All pizzas</h2>
    <div class="content__items"></div>
  </div>
  `;

  const sortWrapper = document.querySelector(".sort");
  const sortLabel = document.querySelector(".sort__label");
  const sortSvg = sortLabel.querySelector("svg");
  const sortActive = sortLabel.querySelector("span");
  const sortValues = sortWrapper.querySelectorAll(".sort__popup ul li");
  sortValues.forEach((item) => {
    item.addEventListener("click", () => {
      sortValues.forEach((el) => {
        el.classList.remove("active");
      });

      item.classList.add("active");
      sortActive.innerText = item.innerText;

      let sortsDepend = null;

      switch (sortActive.innerText) {
        case "price":
          sortsDepend = "price";
          break;
        case "alphabet":
          sortsDepend = "name";
          break;

        default:
          sortsDepend = null;
          break;
      }

      const sortedPizzas = pizzas.slice().sort((a, b) => {
        if (!sortsDepend) {
          return 0;
        }

        if (a[sortsDepend] > b[sortsDepend]) {
          return 1;
        } else {
          return -1;
        }
      });

      renderCatalog(sortedPizzas);
    });
  });
  sortLabel.addEventListener("click", () => {
    sortWrapper.classList.toggle("active");
    sortSvg.classList.toggle("active");
  });

  const categoriesList = document.querySelector(".categories ul");
  categoriesArray.forEach((item) => {
    categoriesList.innerHTML += `<li> ${item} </li>`;
  });
  categoriesList.querySelectorAll("li")[0].classList.add("active");
  const categories = document.querySelectorAll(".categories ul li");
  categories.forEach((category) => {
    category.addEventListener("click", () => {
      categories.forEach((item) => {
        item.classList.remove("active");
      });

      category.classList.add("active");

      const filteredPizzas = pizzas.filter((pizza) => {
        if (category.innerText !== "All") {
          return pizza.category === category.innerText;
        } else {
          return true;
        }
      });

      renderCatalog(filteredPizzas);
    });
  });

  renderCatalog(pizzas);
  const storageItems = JSON.parse(localStorage.getItem("cartPizzas"));
};

renderMain();

const clearCart = () => {
  localStorage.clear();
  content.innerHTML = `
      <div class="container container--cart">
      <div class="cart cart--empty">
        <h2>Cart is Empty <icon>😕</icon></h2>
        <p>
          Most likely you haven't choosen your order<br />
          To make order pizza, go to the main page.
        </p>
        <svg width="300" height="255" viewBox="0 0 300 255" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_45_0)">
<path d="M212.984 20.1328C244.015 27.8116 269.535 61.4504 269.139 94.6172C268.751 127.712 242.445 160.335 220.432 191.73C198.481 223.129 180.948 253.32 158.757 254.92C136.538 256.496 109.696 229.448 87.4853 211.507C65.2048 193.57 47.6061 184.731 32.4473 168.966C17.2884 153.2 4.63148 130.5 7.59498 110.175C10.5585 89.8499 29.1502 71.9127 48.5952 62.1263C68.1062 52.2718 88.4046 50.5721 116.864 40.5816C145.324 30.5912 181.922 12.3981 212.984 20.1328Z" fill="#F8F8F8"/>
<path d="M197.278 173.629L156.709 91.0457C155.471 90.3018 150.502 87.0103 150.502 87.0103" stroke="#DFDFDF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M153.799 97.5847C153.314 95.933 151.86 92.5295 151.86 92.5295C150.972 92.4735 144.789 89.194 144.789 89.194" stroke="#DFDFDF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M143.02 89.498L162.244 81.4112" stroke="#DFDFDF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.94175 215.646L0 220.353L11.8618 236.391L15.5312 233.043L9.8835 218.774L4.94175 215.646Z" fill="black"/>
<path d="M100.724 201.008L96.6396 208.767L106.779 225.045L111.05 223.909L108.249 202.664L100.724 201.008Z" fill="black"/>
<path d="M146.949 91.0457C150.283 91.0457 152.985 88.9669 152.985 86.4025C152.985 83.838 150.283 81.7592 146.949 81.7592C143.616 81.7592 140.914 83.838 140.914 86.4025C140.914 88.9669 143.616 91.0457 146.949 91.0457Z" fill="#D37C59"/>
<path d="M66.4033 91.3057C63.6881 95.3051 4.01855 216.118 4.01855 216.118L10.7679 220.365L89.5101 132.507L66.4033 91.3057Z" fill="#56CAD8"/>
<path d="M117.811 61.9903C119.362 63.3581 123.908 68.6772 125.394 69.6451C126.88 70.6129 143.92 81.5712 147.116 82.5391C150.312 83.5069 143.52 86.3865 143.52 86.3865C143.52 86.3865 121.321 81.3113 119.68 80.1834C118.04 79.0556 108.315 70.9849 108.315 68.8212C108.315 66.6576 117.811 61.9903 117.811 61.9903Z" fill="#D37C59"/>
<path d="M104.805 51.5919C109.758 46.0528 119.432 59.1907 119.223 61.1224C119.013 63.0541 112.171 71.1568 107.834 71.1568C106.535 71.1568 101.325 55.4833 104.805 51.5919Z" fill="#FCC486"/>
<path d="M65.6352 92.5215C64.4716 94.1212 59.429 106.919 59.429 111.319C59.429 141.314 102.803 149.097 109.033 149.097C108.133 153.284 98.5906 200.844 99.0406 201.888C99.4905 202.932 107.407 205.064 109.033 204.788C115.239 201.304 135.274 152.796 133.769 145.897C131.655 136.231 98.4704 107.959 93.676 105.144C88.8816 102.328 65.6352 92.5215 65.6352 92.5215Z" fill="#74D5DE"/>
<path d="M94.2888 39.1939C127.675 39.1939 101.81 103.896 95.9374 107.403C92.0585 109.715 68.0091 100.924 65.4335 92.1055C64.553 89.094 75.8407 39.1939 94.2888 39.1939Z" fill="#FED385"/>
<path d="M141.868 93.2334C145.201 93.2334 147.903 91.1545 147.903 88.5901C147.903 86.0257 145.201 83.9468 141.868 83.9468C138.535 83.9468 135.832 86.0257 135.832 88.5901C135.832 91.1545 138.535 93.2334 141.868 93.2334Z" fill="#DE8E68"/>
<path d="M83.6335 69.0692C83.715 72.3326 84.7739 87.3103 86.0889 87.7622C101.992 93.2334 129.533 90.8218 134.288 90.4938C139.044 90.1659 142.093 86.7144 141.856 85.8945C141.62 85.0747 126.662 78.7876 100.697 78.0477C100.216 75.0242 101.368 65.8856 100.181 65.0698C98.9941 64.2539 83.6335 69.0692 83.6335 69.0692Z" fill="#DE8E68"/>
<path d="M88.0516 41.9654C101.864 39.0539 104.343 65.6417 103.017 67.6014C101.69 69.5611 84.0913 72.3327 81.7949 70.6209C79.4986 68.9092 77.5786 44.1691 88.0516 41.9654Z" fill="#FED892"/>
<path d="M97.4504 22.6604C96.8142 25.1641 92.4737 39.4978 92.7414 40.2577C93.009 41.0176 98.9826 44.369 101.275 44.0011C101.364 42.9093 102.338 37.0622 104.332 33.5467C106.325 30.0313 97.4504 22.6604 97.4504 22.6604Z" fill="#D37C59"/>
<path d="M115.138 22.7322C115.885 15.1072 112.507 8.51096 107.593 7.99919C102.679 7.48741 98.0898 13.2538 97.3428 20.8789C96.5958 28.5039 99.9738 35.1001 104.888 35.6119C109.802 36.1237 114.391 30.3572 115.138 22.7322Z" fill="#DE8E68"/>
<path d="M96.4844 22.6604C95.4681 22.0845 93.5403 18.6931 93.5403 15.5416C93.5403 10.6103 98.3075 7.80278 101.523 6.34301C103.955 5.21918 106.023 0 111.562 0C115.98 0 116.275 4.58728 118.307 4.76325C123.575 5.21518 126.531 5.41915 126.531 9.36653C126.531 12.2661 122.923 20.1648 115.565 20.1648C115.565 18.7011 115.088 15.0656 114.3 13.3179C109.878 13.5459 106.279 19.405 100.146 19.381C98.8311 19.357 96.4844 22.6604 96.4844 22.6604Z" fill="#FD8369"/>
<path d="M98.8002 25.1161C100.304 25.1161 101.523 23.5815 101.523 21.6886C101.523 19.7957 100.304 18.2611 98.8002 18.2611C97.2963 18.2611 96.0771 19.7957 96.0771 21.6886C96.0771 23.5815 97.2963 25.1161 98.8002 25.1161Z" fill="#DE8E68"/>
<path d="M294.845 204.792H168.113V176.44C175.044 175.808 273.577 166.21 273.577 166.21V104.568L153.799 97.5847L168.113 176.448" stroke="#DFDFDF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M178.299 220.457C181.546 220.457 184.179 217.743 184.179 214.394C184.179 211.046 181.546 208.331 178.299 208.331C175.051 208.331 172.418 211.046 172.418 214.394C172.418 217.743 175.051 220.457 178.299 220.457Z" stroke="#DFDFDF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M293.15 220.457C296.397 220.457 299.03 217.743 299.03 214.394C299.03 211.046 296.397 208.331 293.15 208.331C289.902 208.331 287.269 211.046 287.269 214.394C287.269 217.743 289.902 220.457 293.15 220.457Z" stroke="#DFDFDF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M158.477 123.353H273.577" stroke="#DFDFDF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M161.658 140.878H273.577" stroke="#DFDFDF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M133.288 93.5893L143.02 89.498" stroke="#DFDFDF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M171.398 140.878C170.137 137.202 156.763 97.7487 156.763 97.7487" stroke="#DFDFDF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_45_0">
<rect width="300" height="255" fill="white"/>
</clipPath>
</defs>
</svg>

        <a href="/" class="button button--black">
          <span>Get Back</span>
        </a>
      </div>
    </div>
  `;

  const goToMainBtn = document.querySelector(".button.button--black");
  goMain(goToMainBtn);
};

const renderCart = () => {
  if (cartPizzas.length) {
    const contentItems = document.querySelector(".content__items");
    contentItems.innerHTML = "";

    cartPizzas.forEach((items) => {
      contentItems.innerHTML += `
      <div class="cart__item">
        <div class="cart__item-img">
          <img class="pizza-block__image"
            src="${items.imgUrl}"
            alt="Pizza" />
        </div>
        <div class="cart__item-info">
          <h3>${items.name}</h3>
          <p>${items.type} dough, ${items.size}</p>
        </div>
        <div class="cart__item-count">
          <div data-id="${items.id
        }" class="button button--outline button--circle cart__item-count-minus">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                fill="#EB5A1E" />
              <path
                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                fill="#EB5A1E" />
            </svg>

          </div>
          <b>${items.counter}</b>
          <div data-id="${items.id
        }" class="button button--outline button--circle cart__item-count-plus">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                fill="#EB5A1E" />
              <path
                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                fill="#EB5A1E" />
            </svg>

          </div>
        </div>
        <div class="cart__item-price">
          <b>${items.counter * items.price} $</b>
        </div>
        <div class="cart__item-remove">
          <div class="button button--outline button--circle">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                fill="#EB5A1E" />
              <path
                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                fill="#EB5A1E" />
            </svg>

          </div>
        </div>
      </div>
    `;
    });

    const cartItems = document.querySelectorAll(".cart__item");
    cartItems.forEach((item) => {
      const plusBtn = item.querySelector(".cart__item-count-plus");
      const minusBtn = item.querySelector(".cart__item-count-minus");
      const deletePizzaBtn = item.querySelector(".cart__item-remove");

      plusBtn.addEventListener("click", () => {
        cartPizzas = cartPizzas.map((pizza) => {
          if (pizza.id === plusBtn.dataset.id) {
            pizza.counter += 1;
            localStorage.setItem("cartPizzas", JSON.stringify(cartPizzas));
            renderCart();
            return pizza;
          } else {
            return pizza;
          }
        });
      });

      minusBtn.addEventListener("click", () => {
        cartPizzas = cartPizzas.map((pizza) => {
          if (pizza.id === minusBtn.dataset.id && pizza.counter !== 1) {
            pizza.counter -= 1;
            localStorage.setItem("cartPizzas", JSON.stringify(cartPizzas));
            renderCart();
            return pizza;
          } else {
            return pizza;
          }
        });
      });

      deletePizzaBtn.addEventListener("click", () => {
        cartPizzas = cartPizzas.filter((pizza) => pizza.id !== minusBtn.dataset.id)
        renderCart();
      });
    });
  } else {
    clearCart();
  }
};

routeToCart.addEventListener("click", async (e) => {
  e.preventDefault();

  await tl.to(".content", {
    scale: 0.9,
    duration: 1
  })

  await tl.to(".content", {
    x: "-100vw",
    duration: 1
  })

  await tl.to(".content", {
    x: "100vw",
    duration: 0
  })

  if (localStorage.getItem("cartPizzas")) {
    const totalSum = document.querySelector(".totalSum");
    const totalPizzas = document.querySelector(".totalPizzas");
    content.innerHTML = `
    <div class="container container--cart">
    <div class="cart">
      <div class="cart__top">
        <h2 class="content__title"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
              stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
              stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
              stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Cart</h2>
        <div class="cart__clear">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
              stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>

          <span>Remove All</span>
        </div>
      </div>

      <div class="content__items"></div>

      <div class="cart__bottom">
        <div class="cart__bottom-details">
          <span> Total Pizzas: <b>${totalPizzas.innerText} шт.</b> </span>
          <span> Order Amount: <b>${totalSum.innerText}</b> </span>
        </div>
        <div class="cart__bottom-buttons">
          <a href="/" class="button button--outline button--add go-back-btn">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>

            <span>Get Back</span>
          </a>
          <div class="button pay-btn">
            <span>Pay</span>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;

    const goBackBtn = document.querySelector(
      ".button.button--outline.button--add.go-back-btn"
    );
    goMain(goBackBtn)

    renderCart()

    const clearCartBtn = document.querySelector(".cart__clear");
    clearCartBtn.addEventListener("click", clearCart);
  } else {
    clearCart();
  }

  tl.to(".content", {
    x: "0",
    duration: 1
  })

  tl.to(".content", {
    scale: 1,
    duration: 1
  })
})