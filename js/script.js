const mealGenerator = document.querySelector('.meal-generator');
const mealImg = mealGenerator.querySelector('.meal-img img');
const mealTitle = mealGenerator.querySelector('.meal-title');
const btnStart = mealGenerator.querySelector('.btn-start');
const btnAdd = mealGenerator.querySelector('.btn-add');

const meals = [
    { name: '紅蘿蔔炒蛋', imgSrc: './img/food_carrot_01.png' },
    { name: '烤玉米', imgSrc: './img/food_corn_01.png' },
    { name: '壽司', imgSrc: './img/food_osushi_02.png' },
    { name: 'pizza', imgSrc: './img/food_pizza_01.png' },
    { name: '啤酒', imgSrc: './img/food_beer_01.png' },
    { name: '布丁', imgSrc: './img/pudding.png' },
    { name: '香蕉', imgSrc: './img/banana.png' },
    { name: '珍珠奶茶', imgSrc: './img/bubble_tea.png' },
    { name: '巧克力蛋糕', imgSrc: './img/food_cake_chocolate.png' },
    { name: '草莓蛋糕', imgSrc: './img/food_cake_strawberry.png' },
    { name: '冰淇淋蘇打', imgSrc: './img/food_creamsoda_01.png' },
    { name: 'ㄘㄨㄚˋ冰', imgSrc: './img/ice.png' },
];

function generateMeal() {
  const randomIndex = Math.floor(Math.random() * meals.length);
  return meals[randomIndex];
}

let mealInterval; // 用於儲存 setInterval 的變數

btnStart.addEventListener('click', () => {
    btnStart.textContent = 'stop';

    if (mealInterval) {
        clearInterval(mealInterval);
        mealInterval = null;
        btnStart.textContent = 'again';
    return;
}
  // 如果 mealInterval 不存在，表示目前沒有輪播，則開始輪播
  mealInterval = setInterval(function() {
    const newMeal = generateMeal();
    mealTitle.textContent = newMeal.name;
    mealImg.src = newMeal.imgSrc;
  }, 50); 
  
});




