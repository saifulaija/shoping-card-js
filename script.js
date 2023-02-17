
//  function---01;
 let serialNo= 0;
function displayData( name, price, quantity, total){
      serialNo +=1
     const tableContainer = document.getElementById('table-container');
     const tr = document.createElement('tr');

     tr.innerHTML=`
      <td>${serialNo}</td>
      <td>${name}</td>
      <td>${price}</td>
      <td>${quantity}</td>
      <td>${total}</td>
     
     `;
     
     tableContainer.appendChild(tr);
     
 
}


function disabledButton(id){
      document.getElementById(id).setAttribute("disabled", true);
    
}

// function getData(id1,id2,id3){
//       const productName = document.getElementById(id1).innerText;
//       const productPrice = document.getElementById(id2).innerText;
//       const productQuantity = document.getElementById(id3).innerText;
//       return 
// }


 let total = 0;
 let countNumber = 0;


document.getElementById('btn-field').addEventListener('click', function(){
      // get value by using id 
      countNumber = countNumber + 1;
      document.getElementById('count').innerText = countNumber; 
      const productName = document.getElementById('product-name').innerText;
      const productPrice = document.getElementById('product-price').innerText;
      const productQuantity = document.getElementById('product-quantity').innerText;
    

     const totalPrice = parseInt(productPrice) * parseInt(productQuantity);
     total = total + totalPrice;
     document.getElementById('difficult').innerText=total
    
     displayData( productName, productPrice, productQuantity, totalPrice);
     disabledButton('btn-field')
    
})

document.getElementById('second-btn').addEventListener('click', function(e){
      countNumber = countNumber + 1;
      document.getElementById('count').innerText = countNumber;
  const newProductName = e.target.parentNode.parentNode.children[0].innerText;
  const newProductPrice =e.target.parentNode.parentNode.children[2].children[0].innerText;
  const newProductQuantity =e.target.parentNode.parentNode.children[3].children[0].innerText;
   const sumTotal = parseInt(newProductPrice) + parseInt(newProductQuantity);
   total = total + sumTotal;
   document.getElementById('difficult').innerText=total
   

   displayData(newProductName,newProductPrice,newProductQuantity,sumTotal);
   disabledButton('second-btn')
})



document.getElementById('third-btn').addEventListener('click', function(){
      // get value by using id 
      countNumber = countNumber + 1;
      document.getElementById('count').innerText = countNumber;
     const productName = document.getElementById('third-name').innerText;
     const productPrice = document.getElementById('third-price').innerText;
     const productQuantity = document.getElementById('third-quantity').innerText;

     const totalPrice = parseInt(productPrice) - parseInt(productQuantity);
     total = total + totalPrice;
     document.getElementById('difficult').innerText=total
    
     displayData( productName, productPrice, productQuantity, totalPrice);
     disabledButton('third-btn')

    
})


 document.getElementById('four-btn').addEventListener('click', function(){

      countNumber = countNumber + 1;
      document.getElementById('count').innerText = countNumber;
      const productName = document.getElementById('four-name').innerText;
      const productPrice = document.getElementById('four-price').innerText;
      const productQuantity = document.getElementById('four-quantity').innerText;
 
      const totalPrice = parseInt(productPrice) - parseInt(productQuantity);
      total= total + totalPrice;
      document.getElementById('difficult').innerText=total
      
     
      displayData( productName, productPrice, productQuantity, totalPrice);
      disabledButton('four-btn')
 
})

document.getElementById('last-btn').addEventListener('click', function(){
      countNumber = countNumber + 1;
      document.getElementById('count').innerText = countNumber;
      const lastName = document.getElementById('last-name').innerText;
      const lastPrice = document.getElementById('last-price').value;
      const lastQuantity =document.getElementById('last-quantity').value;


      if(lastPrice === ""|| lastQuantity === "" || typeof lastPrice ==="number" || typeof lastQuantity === "number" ){
            return alert('please valid number')
      }
     
      

      
      const totalPrice = parseInt(lastPrice) + parseInt(lastQuantity);
      total = total + totalPrice;
      document.getElementById('difficult').innerText=total
      displayData(lastName, lastPrice, lastQuantity, totalPrice);
      disabledButton('last-btn')

     

     

})

document.getElementById('clear').addEventListener('click', function(){
      document.getElementById('table-container').style.display='none';
      document.getElementById('difficult').style.display='none'
})

