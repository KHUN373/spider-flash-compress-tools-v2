async function uploadVideo(){

const file =
document.getElementById("video").files[0];


if(!file){

alert("Select video first");
return;

}


const formData = new FormData();

formData.append("video",file);


document.getElementById("status").innerHTML =
"Uploading...";


const response =
await fetch("/upload",{

method:"POST",

body:formData

});


const result =
await response.json();


document.getElementById("status").innerHTML =
result.message;


if(result.file){

const link =
document.getElementById("download");


link.href=result.file;

link.download="compressed.mp4";

link.style.display="block";

link.innerHTML="Download Compressed Video";

}


}