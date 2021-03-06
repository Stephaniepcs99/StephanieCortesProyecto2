let selecRow=null;
let listPedidos=[];
const formUI = document.querySelector('#formulario');
const listapedidosUI = document.querySelector('#listped');

let button = document.querySelector('.button').value;

//al dar click en el boton de guardar se realizara lo siguiente
function onFormSubmit(){
    let formData = LeerDator();
    if(selecRow == null){
        localStoragePedidos();
    }
    resetForm();
}

//metodo para leer los datos del formulario
function LeerDator(){
    let formData= {};
    formData["nombre"]=document.getElementById("c-nom").value;
    formData["apellido"]=document.getElementById("c-ape").value;
    formData["telefono"]=document.getElementById("c-tel").value;
    formData["email"]=document.getElementById("c-email").value;
    formData["estado"]=document.getElementById("c-edo").value;
    formData["municipio"]=document.getElementById("c-mun").value;
    formData["direccion"]=document.getElementById("c-dir").value;
    formData["producto"]=document.getElementById("p-nom").value;
    formData["categoria"]=document.getElementById("p-cat").value;
    formData["total"]=document.getElementById("p-pago").value;
    formData["descripcion"]=document.getElementById("p-des").value;
   // listPedidos.push(formData);
   // localStoragePedidos(listPedidos);
   agregarpedido(formData);
    return formData;
}


function agregarpedido(nombre,apellido,telefono,email,estado,municipio,direccion,producto,categoria,total,descripcion){
    //Objeto 
    let pedido= {
        nombre:nombre,
        apellido:apellido,
        telefono:telefono,
        email:email,
        estado:estado,
        municipio:municipio,
        direccion:direccion,
        producto:producto,
        categoria:categoria,
        total:total,
        descripcion:descripcion
    };
    //vamos agregando pedidos a la lista
    listPedidos.push(pedido);
    //al metodo se le manda como parametro lo que hay en el arreglo de los pedidos
    localStoragePedidos(listPedidos);
    return pedido;
}

//Los datos que se encuentren en el LocalStorage los mostrara en la tabla
const ColocardatoEnTabla=()=>{
    //vaciara lo que tenga la tabla
    listapedidosUI.innerHTML= '' ;
    //el arreglo sera igual al objeto convertido en String
    listPedidos= JSON.parse(localStorage.getItem('Pedido'));
    //console.log(listPedidos);
    //si el arreglo no tiene nada
    if(listPedidos ===null){
        //el arreglo sera vacio
        listPedidos=[];
    }else{
        //recorremos cada elemento del arreglo para colocarlo en la tabla
        listPedidos.forEach(element =>{
            listapedidosUI.innerHTML += ` 
            <tr>
            <td>${element.nombre.nombre}</td>
            <td>${element.nombre.apellido}</td>
            <td>${element.nombre.telefono}</td>
            <td>${element.nombre.email}</td>
            <td>${element.nombre.estado}</td>
            <td>${element.nombre.municipio}</td>
            <td>${element.nombre.direccion}</td>
            <td>${element.nombre.producto}</td>
            <td>${element.nombre.categoria}</td>
            <td>${element.nombre.total}</td>
            <td>${element.nombre.descripcion}</td>
            <td><a><i class="far fa-edit">editar</i></a> 
            <a><i class="fas fa-trash-alt">elim</i></a></td>
          </tr>`
        });
    }
}

//Guarda en el Local Storage
function localStoragePedidos(){
    //guardara el objeto del pedido en stiing
    localStorage.setItem("Pedido",JSON.stringify(listPedidos));
    //al ser guardado tambien manda a llamar el metodo sig para que coloque los datos en la tabla
    ColocardatoEnTabla();
}

//para eliminar en el Storage
const EliminarLocalStorage=(ped)=>{
    //console.log(ped);
    let indexArray;
    //recorremos cada elemento del arreglo
    listPedidos.forEach((elemento,index)=>{
        //comparamos si el elemento que tenemos en el LocalStorage es igaul al que nosotros le realizamos la accion
        if(elemento.nombre.nombre === ped){
            indexArray = index;
        }
    });
    //para poder eliminar el elemento que seleccionamos y el 1 es porque quqeremos elimnar solo 1 elemento
    listPedidos.splice(indexArray,1);
    //mandamos a llamar el siguiente metodo para guardar en el localStorage
    localStoragePedidos();
    
}



const EditarLocalStorage=(ped)=>{
    //esta es otra forma de buscar el index sin el forEach  que utilizamos en Eliminar y solo usando findIndex
    let indexArray= listPedidos.findIndex((elemento)=>{
        return elemento.nombre.nombre === ped //colocamos e return para que no nos vmarque el -1
    });
    //console.log(indexArray); //nos imprime los indices
    console.log(listPedidos[indexArray]); // se imprime nuestro objeto
    //si confirma al querer editar hara lo siguiente:
    if(confirm("??Estas seguro de querer editar la celda?")){
        //updatePedido guardara el valor que el usuario coloque
        let updatePedido=prompt("Que dato deseas cambiar? \n 1- Nombre / nombre \n2- Apellido / apellido \n3-Telefono / telefono \n4- Email / email \n5- Estado / estado \n6- Municipio / municipio \n7- Direccion / direccion \n8- Producto / producto \n9-Categoria / categoria \n10-Total / total \n11- Descripcion / descripcion","");
        //si coloca nombre o 1
        if(updatePedido == 'nombre' || updatePedido == 'Nombre' || updatePedido == '1'){
            //DatoNuevo guardara el valor que coloque el usuario
            let DatoNuevo=prompt("Cual es tu NOMBRE nuevo?","");
            //NOTA: el arreglo contiene Objetos y obtendremos el indice del objeto al que hemos seleccionado
            //al indice de ese areglo en el elemento de nombre se le colocara el dato que coloco el usuario
            listPedidos[indexArray].nombre.nombre = DatoNuevo;
        }
        //si coloca apellido o 2
        if(updatePedido == 'apellido' || updatePedido == 'Apellido' || updatePedido == '2'){
            //DatoNuevo guardara el valor que coloque el usuario
            let DatoNuevo=prompt("Cual es tu APELLIDO nuevo?","");
            //NOTA: el arreglo contiene Objetos y obtendremos el indice del objeto al que hemos seleccionado
            //al indice de ese areglo en el elemento de apellido se le colocara el dato que coloco el usuario
            listPedidos[indexArray].nombre.apellido = DatoNuevo;
        }
        //si coloca telefono o 3
        if(updatePedido == 'telefono' || updatePedido == 'Telefono' || updatePedido == '3'){
            //DatoNuevo guardara el valor que coloque el usuario
            let DatoNuevo=prompt("Cual es tu TELEFONO nuevo?","");
            //NOTA: el arreglo contiene Objetos y obtendremos el indice del objeto al que hemos seleccionado
            //al indice de ese areglo en el elemento de telefono se le colocara el dato que coloco el usuario
            listPedidos[indexArray].nombre.telefono = DatoNuevo;
        }
        //si coloca email o 4
        if(updatePedido == 'email' || updatePedido == 'Email' || updatePedido == '4'){
            //DatoNuevo guardara el valor que coloque el usuario
            let DatoNuevo=prompt("Cual es tu EMAIL nuevo?","");
            //NOTA: el arreglo contiene Objetos y obtendremos el indice del objeto al que hemos seleccionado
            //al indice de ese areglo en el elemento de email se le colocara el dato que coloco el usuario
            listPedidos[indexArray].nombre.email = DatoNuevo;
        }
        //si coloca estado o 5
        if(updatePedido == 'estado' || updatePedido == 'Estado' || updatePedido == '5'){
            //DatoNuevo guardara el valor que coloque el usuario
            let DatoNuevo=prompt("Cual es tu ESTADO nuevo?","");
            //NOTA: el arreglo contiene Objetos y obtendremos el indice del objeto al que hemos seleccionado
            //al indice de ese areglo en el elemento de estado se le colocara el dato que coloco el usuario
            listPedidos[indexArray].nombre.estado = DatoNuevo;
        }
        //si coloca municipio o 6
        if(updatePedido == 'municipio' || updatePedido == 'Municipio' || updatePedido == '6'){
            //DatoNuevo guardara el valor que coloque el usuario
            let DatoNuevo=prompt("Cual es tu MUNICIPIO nuevo?","");
            //NOTA: el arreglo contiene Objetos y obtendremos el indice del objeto al que hemos seleccionado
            //al indice de ese areglo en el elemento de municipio se le colocara el dato que coloco el usuario
            listPedidos[indexArray].nombre.municipio = DatoNuevo;
        }
        //si coloca direccion o 7
        if(updatePedido == 'direccion' || updatePedido == 'Direccion' || updatePedido == '7'){
            //DatoNuevo guardara el valor que coloque el usuario
            let DatoNuevo=prompt("Cual es tu DIRECCION nuevo?","");
            //NOTA: el arreglo contiene Objetos y obtendremos el indice del objeto al que hemos seleccionado
            //al indice de ese areglo en el elemento de direccion se le colocara el dato que coloco el usuario
            listPedidos[indexArray].nombre.direccion = DatoNuevo;
        }
        //si coloca producto o 8
        if(updatePedido == 'producto' || updatePedido == 'Producto' || updatePedido == '8'){
            //DatoNuevo guardara el valor que coloque el usuario
            let DatoNuevo=prompt("Cual es tu PRODUCTO nuevo?","");
            //NOTA: el arreglo contiene Objetos y obtendremos el indice del objeto al que hemos seleccionado
            //al indice de ese areglo en el elemento de producto se le colocara el dato que coloco el usuario
            listPedidos[indexArray].nombre.producto = DatoNuevo;
        }
        //si coloca categoria o 9
        if(updatePedido == 'categoria' || updatePedido == 'Categoria' || updatePedido == '9'){
            //DatoNuevo guardara el valor que coloque el usuario
            let DatoNuevo=prompt("Cual es tu CATEGORIA nuevo?","");
            //NOTA: el arreglo contiene Objetos y obtendremos el indice del objeto al que hemos seleccionado
            //al indice de ese areglo en el elemento de categoria se le colocara el dato que coloco el usuario
            listPedidos[indexArray].nombre.categoria = DatoNuevo;
        }
        //si coloca total o 10
        if(updatePedido == 'total' || updatePedido == 'Total' || updatePedido == '10'){
            //DatoNuevo guardara el valor que coloque el usuario
            let DatoNuevo=prompt("Cual es tu TOTAL nuevo?","$");
            //NOTA: el arreglo contiene Objetos y obtendremos el indice del objeto al que hemos seleccionado
            //al indice de ese areglo en el elemento de total se le colocara el dato que coloco el usuario
            listPedidos[indexArray].nombre.total = DatoNuevo;
        }
        //si coloca descripcion o 11
        if(updatePedido == 'descripcion' || updatePedido == 'Descripcion' || updatePedido == '11'){
            //DatoNuevo guardara el valor que coloque el usuario
            let DatoNuevo=prompt("Cual es tu DESCRIPCION nuevo?","");
            //NOTA: el arreglo contiene Objetos y obtendremos el indice del objeto al que hemos seleccionado
            //al indice de ese areglo en el elemento de descripcion se le colocara el dato que coloco el usuario
            listPedidos[indexArray].nombre.descripcion = DatoNuevo;
        }
    }
    //mandamos a llamar el siguiente metodo para guardar en el localStorage
    localStoragePedidos();
    
}
//metodo para poder insertar los datos en la tabla
/*function insertNewRecord(data){
    let table = document.getElementById("lista-pedidos").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    celd1=newRow.insertCell(0);
    celd1.innerHTML=data.nombre;
    celd2=newRow.insertCell(1);
    celd2.innerHTML=data.apellido;
    celd3=newRow.insertCell(2);
    celd3.innerHTML=data.telefono;
    celd4=newRow.insertCell(3);
    celd4.innerHTML=data.email;
    celd5=newRow.insertCell(4);
    celd5.innerHTML=data.estado;
    celd6=newRow.insertCell(5);
    celd6.innerHTML=data.municipio;
    celd7=newRow.insertCell(6);
    celd7.innerHTML=data.direccion;
    celd8=newRow.insertCell(7);
    celd8.innerHTML=data.producto;
    celd9=newRow.insertCell(8);
    celd9.innerHTML=data.categoria;
    celd10=newRow.insertCell(9);
    celd10.innerHTML=data.total;
    celd11=newRow.insertCell(10);
    celd11.innerHTML=data.descripcion;
    celd12=newRow.insertCell(11);
    celd12.innerHTML=`<a><i class="far fa-edit">editar</i></a> 
                      <a><i class="fas fa-trash-alt">elim</i></a>`;
}*/

//pone en blanco cada uno de los inputs del formulario
function resetForm(){
    document.getElementById("c-nom").value="";
    document.getElementById("c-ape").value="";
    document.getElementById("c-tel").value="";
    document.getElementById("c-email").value="";
    document.getElementById("c-edo").value="";
    document.getElementById("c-mun").value="";
    document.getElementById("c-dir").value="";
    document.getElementById("p-nom").value="";
    document.getElementById("p-cat").value="";
    document.getElementById("p-pago").value="";
    document.getElementById("p-des").value="";
}

/*function editar(td){
    selecRow = td.parentElement.parentElement;
    document.getElementById("c-nom").value=selecRow.cells[0].innerHTML;
    document.getElementById("c-ape").value=selecRow.cells[1].innerHTML;
    document.getElementById("c-tel").value=selecRow.cells[2].innerHTML;
    document.getElementById("c-email").value=selecRow.cells[3].innerHTML;
    document.getElementById("c-edo").value=selecRow.cells[4].innerHTML;
    document.getElementById("c-mun").value=selecRow.cells[5].innerHTML;
    document.getElementById("c-dir").value=selecRow.cells[6].innerHTML;
    document.getElementById("p-nom").value=selecRow.cells[7].innerHTML;
    document.getElementById("p-cat").value=selecRow.cells[8].innerHTML;
    document.getElementById("p-pago").value=selecRow.cells[9].innerHTML;
    document.getElementById("p-des").value=selecRow.cells[10].innerHTML;
}

function actualizar(formData){
    selecRow.cells[0].innerHTML = formData.nombre;
    selecRow.cells[1].innerHTML = formData.apellido;
    selecRow.cells[2].innerHTML = formData.telefono;
    selecRow.cells[3].innerHTML = formData.email;
    selecRow.cells[4].innerHTML = formData.estado;
    selecRow.cells[5].innerHTML = formData.municipio;
    selecRow.cells[6].innerHTML = formData.direccion;
    selecRow.cells[7].innerHTML = formData.producto;
    selecRow.cells[8].innerHTML = formData.categoria;
    selecRow.cells[9].innerHTML = formData.total;
    selecRow.cells[10].innerHTML = formData.descripcion;
}*/

/*function eliminar(td){
    if(confirm("??Estas seguro de querer eliminar el pedido?")){
        row = td.parentElement.parentElement;
        document.getElementsById("lista-pedidos").deleteRow(row.rowIndex);
        resetForm();
    }
}*/

//este nos sirve para que cada que se refresque la pagina siempre se haga primero el metodo "ColocardatoEnTabla"
document.addEventListener('DOMContentLoaded',ColocardatoEnTabla);

//para poder eliminar en el STORAGE
listapedidosUI.addEventListener('click', (e) =>{
    e.preventDefault();
    //me imprime el evento
    //console.log(e);
    //me imprime el icono que estoy clickeando ("edit" o "elim")
    //console.log(e.target.innerHTML);
    if(e.target.innerHTML === 'editar' || e.target.innerHTML === 'elim'){
        //me imprimira el innerHTML que correscomde al td de "nombre" de mi columna seleccionada
        let text =e.path[3].childNodes[1].innerHTML;
        //accion de eliminar
        if(e.target.innerHTML === 'elim'){
            EliminarLocalStorage(text);
        }
        //accion de editar
        if(e.target.innerHTML === 'editar'){
            EditarLocalStorage(text);
        }

    }
});
