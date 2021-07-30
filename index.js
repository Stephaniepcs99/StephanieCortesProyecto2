let selecRow=null;
const formUI = document.querySelector('#formulario');
const listapedidosUI = document.querySelector('#listped');

//al dar click en el boton de guardar se realizara lo siguiente
function onFormSubmit(){
    let formData = LeerDator();
    insertNewRecord(formData);
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
    return formData;
}

//metodo para poder insertar los datos en la tabla
function insertNewRecord(data){
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
}

