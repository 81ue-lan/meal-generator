;(function(){
  const mealGenerator = document.querySelector('.meal-generator');
  const addNewMeal = document.querySelector('.add-new-meal');
  const mealImg = mealGenerator.querySelector('.meal-img img');
  const mealTitle = mealGenerator.querySelector('.meal-title');
  const startBtn = mealGenerator.querySelector('.btn-start');
  const addBtn = mealGenerator.querySelector('.btn-add');
  const closeBtn = document.querySelector('.btn-close');
  const newMealTitle = document.querySelector('.input-meal-title');
  const newMealBtn = document.querySelector('.btn-plus');

  const meals = [
      { name: '紅蘿蔔炒蛋', imgSrc: './img/food_carrot_01.png' },
      { name: '燙青菜', imgSrc: './img/food_leafy_vegetable_01.png' },
      { name: '烤玉米', imgSrc: './img/food_corn_01.png' },
      { name: '章魚燒', imgSrc: './img/food_takoyaki_01.png' },
      { name: '三明治', imgSrc: './img/food_sandwich_01.png' },
      { name: '可頌', imgSrc: './img/food_croissant_01.png' },
      { name: '土司夾蛋', imgSrc: './img/food_plain_bread_01.png' },
      { name: '壽司', imgSrc: './img/food_osushi_02.png' },
      { name: 'pizza', imgSrc: './img/food_pizza_01.png' },
      { name: '薯條', imgSrc: './img/food_french_fries_01.png' },
      { name: '咖哩飯', imgSrc: './img/food_curry_and_rice_01.png' },
      { name: '蛋包飯', imgSrc: './img/food_omeletterice_01.png' },
      { name: '拉麵', imgSrc: './img/food_ramen_01.png' },
      { name: '義大利麵', imgSrc: './img/food_spaghetti_01.png' },
      { name: '烏龍麵', imgSrc: './img/food_udon_01.png' },
      { name: '蕎麥麵', imgSrc: './img/food_soba_01.png' },
      { name: '啤酒', imgSrc: './img/food_beer_01.png' },
      { name: '布丁', imgSrc: './img/pudding.png' },
      { name: '香蕉', imgSrc: './img/banana.png' },
      { name: '西瓜', imgSrc: './img/food_watermelon_01.png' },
      { name: '珍珠奶茶', imgSrc: './img/bubble_tea.png' },
      { name: '巧克力', imgSrc: './img/food_chocolate_02.png' },
      { name: '巧克力蛋糕', imgSrc: './img/food_cake_chocolate.png' },
      { name: '草莓蛋糕', imgSrc: './img/food_cake_strawberry.png' },
      { name: '甜甜圈', imgSrc: './img/food_donuts_01.png' },
      { name: '冰淇淋蘇打', imgSrc: './img/food_creamsoda_01.png' },
      { name: 'ㄘㄨㄚˋ冰', imgSrc: './img/ice.png' },
  ];

  function generateMeal() {
    const randomIndex = Math.floor(Math.random() * meals.length);
    return meals[randomIndex];
  }

  let mealInterval; 
  startBtn.addEventListener('click', () => {
      startBtn.textContent = 'stop';

      if (mealInterval) {
          clearInterval(mealInterval);
          mealInterval = null;
          startBtn.textContent = 'again';
      return;
  }
    // 如果 mealInterval 不存在，表示目前沒有輪播，則開始輪播
    mealInterval = setInterval(function() {
      const newMeal = generateMeal();
      mealTitle.textContent = newMeal.name;
      mealImg.src = newMeal.imgSrc;
    }, 50); 
    
  });

  addBtn.addEventListener('click', () => {
    addNewMeal.style.display = "flex";

    newMealBtn.addEventListener('click', () => {
      const newMeal = newMealTitle.value;
      if (newMeal !== '') {
        meals.push({ name: newMeal, imgSrc: './img/other_light_bulb_01.png' });
        newMealTitle.value = '';
        addNewMeal.style.display = 'none';
        alert("新增成功!🕊 𓂃𓈒 𓂂𓏸");
      }
    });
  });

  closeBtn.addEventListener('click', () => {
    addNewMeal.style.display = 'none';
  });

})()