//crear constructuor
let estudiantes = []; //array
//crear consturctor
let contador=0;
function Estudiante(nombreP,apellidosP,generoP,celularP,correoP,campusP,semestreP,calAP,calBP,calCP ){
    this.nombre= nombreP;
    this.apellidos=apellidosP;
    this.genero= generoP;
    this.celular= celularP;
    this.correo= correoP;
    this.campus= campusP;
    this.semestre= semestreP
    this.calA= calAP;
    this.calB= calBP;
    this.calC= calCP;
    this.id=contador++;
}

    let inputNombre=document.getElementById("txtNombre");
    let inputApellidos=document.getElementById("txtApellidos");
    let inputGenero=document.getElementById("selGenero");
    let inputCelular=document.getElementById("txtCelular");
    let inputCorreo=document.getElementById("txtCorreo");
    let inputCampus=document.getElementById("txtCampus");
    let inputSemestre=document.getElementById("txtSemestre");
    let inputCalA=document.getElementById("calA");
    let inputCalB=document.getElementById("calB");
    let inputCalC=document.getElementById("calC");
    
  

function validacion(estudiante){
        let valida=true;  //todo bien
    
        //reset de errores
        inputNombre.classList.remove('error');
        inputApellidos.classList.remove('error');
        inputGenero.classList.remove('error');
        inputCelular.classList.remove('error');
        inputCorreo.classList.remove('error');
        inputCampus.classList.remove('error');
        inputSemestre.classList.remove('error');
        inputCalA.classList.remove('error');
        inputCalB.classList.remove('error');
        inputCalC.classList.remove('error');
    
        if(estudiante.nombre == ""){
            inputNombre.classList.add('error');
            valida=false;
        }
        if(estudiante.apellidos == ""){
            inputApellidos.classList.add('error');
            valida=false;
        }
        if(estudiante.genero == ""){
            inputGenero.classList.add('error');
            valida=false;
        }
        if(estudiante.celular == ""){
            inputCelular.classList.add('error');
            valida=false;
        }  
        if(estudiante.correo== ""){
            inputCorreo.classList.add('error');
            valida=false;
        }
        if(estudiante.campus == ""){
            inputCampus.classList.add('error');
            valida=false;
        }
            if(estudiante.semestre == ""){
                inputSemestre.classList.add('error');
                valida=false;
        }
        if(estudiante.calA == ""){
            inputCalA.classList.add('error');
            valida=false;
         } 
         
        if(estudiante.calA == ""){
            inputCalA.classList.add('error');
            valida=false;
        }
        if(estudiante.calB == ""){
            inputCalA.classList.add('error');
            valida=false;
        } 
        if(estudiante.calC == ""){
            inputCalA.classList.add('error');
            valida=false;
        } 
        
        return valida;
    
    }

//crear funcion register
function Registrar(){ 
    console.log("Registrando alumnos ...");
    let newEstudiante = new Estudiante (inputNombre.value,inputApellidos.value,inputGenero.value,inputCelular.value,inputCorreo.value,inputCampus.value,inputSemestre.value,inputCalA.value,inputCalB.value,inputCalC.value);



    if(validacion(newEstudiante)==true){
        
        
        console.log(newEstudiante);
        estudiantes.push(newEstudiante);
        //mostrar registros
        // displayCards();
        imprimirAlumnos();
       
        //Limpiar
        limpiarForm();
    }
}


function limpiarForm(){
    inputNombre.value="";
    inputApellidos.value="";
    inputGenero.value="";
    inputCelular.value="";
    inputCorreo.value="";
    inputCampus.value="";
    inputSemestre.value="";
    inputCalA.value="";
    inputCalB.value="";
    inputCalC.value="";

}

function imprimirAlumnos(){
        let row="";
        for(let i=0; i<estudiantes.length;i++){
            let estudiante = estudiantes[i];
            console.log(estudiante);
            a= Number(estudiante.calA);
            b= Number(estudiante.calB);
            c= Number(estudiante.calC);
            promedio= ((a+b+c)/3).toFixed(2);

            row +=`
                <tr id= "${estudiante.id}">
                    <td> ${estudiante.nombre}</td>
                    <td> ${estudiante.apellidos}</td>
                    <td> ${estudiante.genero}</td>
                    <td> ${estudiante.celular}</td>
                    <td> ${estudiante.correo}</td>
                    <td> ${estudiante.campus}</td>
                    <td> ${estudiante.semestre}</td>
                    <td> ${estudiante.calA}</td>
                    <td> ${estudiante.calB}</td>
                    <td> ${estudiante.calC}</td>
                    <td> ${promedio}</td>
                    <td><button class="btn btn-danger btn-sm" onclick="borrarAlumno(${estudiante.id});">Borrar</button></td> 
                </tr>

            `;
        }
        document.getElementById("alumnosTabla").innerHTML=row;
    }

//crear funcion init
function init(){
    let alumno1 = new Estudiante("Ivan","Ruano Cota","Hombre","686178954","ivanruano@gmail.com","Mexicali","2do","100","80","94");
        estudiantes.push(alumno1);
        let alumno2 = new Estudiante("Roberto","Gonzalez","Hombre","686178943","robert@gmail.com","Mexicali","2do","90","80","84");
        estudiantes.push(alumno2);
        let alumno3 = new Estudiante("Gabriel","Ramirez","Hombre","686158947","gabr@gmail.com","Tijuana","3ro","99","89","94");
        estudiantes.push(alumno3);

        imprimirAlumnos();
}
//ejectuar funcion init
window.onload= init;

function borrarAlumno(identificador){
    console.log("Borrando...")
    document.getElementById(identificador).remove();
    estudiantes.splice(identificador,1);

}