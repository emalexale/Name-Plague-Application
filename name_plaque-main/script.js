// Adding variables to store our data
const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');



// Refactoring with Arrow Function
const countLeters = (some_data) =>{
  const price = some_data.replace(' ', '').length * 5; // price of each letter
  userLeterPreview.textContent = some_data
  userPricePreview.textContent = '$'+price
}

userInput.oninput = (e)=>{
  countLeters(e.target.value)
}

const userBuyNow = document.querySelector('.buy-submit');
 

const buyNow = () =>{

  const limit = userInput.value.replaceAll(' ','').length


    if (userInput.value === ''){

      alert('Please input your Name')

    }else if (userInput.value === 'YOUR NAME') {
      alert('Please Enter another name')
    }

    else if (userInput.value === 'your name') {
      alert('Please Enter another name')
    }

    else if (limit <= 15) {
      alert('Successful')
    }else {
      alert('Your input should not exceed 15 letters, Thank You')
    }





    



    
 
 

  }
  

 //userBuyNow.onclick = () =>{

   //  buyNow()

  //};

  userBuyNow.addEventListener('click',function () {
    buyNow()
  }) 


// usrInput.addEventListener('input', function(e){
//   countLetters(e.target.value)
// } )









