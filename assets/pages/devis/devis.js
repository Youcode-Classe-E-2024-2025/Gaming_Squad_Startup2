const table = document.getElementById('table');
let cart = JSON.parse(localStorage.getItem("cart"));

let prixTotale = 0;

function prixTotal(arr){
    cart= ('')
    let cont = 0;
    for(let i = 0; i<arr.length;i++){
    
    let prix = arr[cont].quantity * arr[cont].price;
    table.innerHTML += `<tbody>
            <tr class="text-center">
            <td>${arr[cont].name}</td>
            <td>${arr[cont].quantity}</td>
            <td>${arr[cont].price}</td>
            <td>${prix}</td>
        </tr>
        </tbody>`
        
        cont ++;
        prixTotale = prixTotale+prix;
    }
}

prixTotal(cart);
console.log(prixTotal(cart));
table.innerHTML +=
`<tfoot>
<tr class="text-center">
<td>prix total :</td>
<td class="flex w-full flex-row text-center border-none">${prixTotale}$</td>
</tr>        
</tfoot>`
