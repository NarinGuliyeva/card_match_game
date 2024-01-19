let contents = document.querySelectorAll('.container .card .content');
let backs = document.querySelectorAll('.container .card .content .back');
let arr = ['card2', 'card10', 'card7', 'card8', 'card9'];
let arr_card = [];
let count = contents.length

contents.forEach((content) => {
  content.addEventListener('click', function () {
    this.classList.add('content_active');
    arr_card.push(this.className);
    for (let i = 0; i < contents.length; i++) {
      if (arr_card.length == 2 && arr_card[0] !== arr_card[1]) {
        setTimeout(() => contents[i].classList.remove('content_active'), 1000);
        setTimeout(() => (arr_card = []), 1400);
      } else if (
        arr_card[0] === arr_card[1] &&
        contents[i].className === arr_card[0]
      ) {
        console.log(arr_card);
        setTimeout(() => contents[i].classList.add('content_dnone'), 1000);
        setTimeout(() => (arr_card = []), 1500);
        count--
        if(count===1) {
            document.body.innerHTML="OYUN BİTTİ, TEBRiKLER!"
        }
      }
    }
  });
});


let empty_arr = [];
backs.forEach((back, index) => {
  while (empty_arr.length < arr.length * 2 - 1) {
    let random_number = Math.floor(Math.random() * arr.length);
    if (
      empty_arr.indexOf(random_number) === empty_arr.lastIndexOf(random_number)
    ) {
      empty_arr.push(random_number);
    }
  }
  back.innerHTML = `<img src="./img/${arr[empty_arr[index]]}.png" alt="${
    arr[empty_arr[index]]
  }" class="${arr[empty_arr[index]]}" />  `;
  back.parentElement.classList.add(arr[empty_arr[index]]);
});

// DİGER YOL
// let empty_arr = []
// backs.forEach((back,index) => {
//   let arr = ['card2','card2', 'card10', 'card10', 'card7','card7', 'card8','card8', 'card9','card9'];
// while( empty_arr.length <arr.length-1) {
//     let random_number = Math.floor(Math.random() * arr.length);
//     if( empty_arr.indexOf(random_number) === -1) {
//         empty_arr.push(random_number)
//       }
// }
// back.innerHTML = `<img src="./img/${arr[empty_arr[index]]}.png" alt=""/>  `;
// });
