let selecRow=null;
const formUI = document.querySelector('#formulario');
const listapedidosUI = document.querySelector('#listped');

//al dar click en el boton de guardar se realizara lo siguiente
function onFormSubmit(){
    let formData = LeerDator();
    if(selecRow==null){
    insertNewRecord(formData);
    }else{
        actualizar(formData)
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
    celd12.innerHTML=`<a onClick="editar(this)"><i class="far fa-edit">editar</i></a> 
                      <a onClick="eliminar(this)"><i class="fas fa-trash-alt">elim</i></a>`;
}

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

function editar(td){
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
}

