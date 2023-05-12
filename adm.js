function checker(){
    const pass=document.getElementById("password").value;
    const checkpass=document.getElementById("checkpass").value;
    const button=document.getElementById("but");
    console.log(checkpass)
    if(pass===checkpass){
        button.disabled=false;
        console.log(true);
    }
    else{
        button.disabled=true;
    }
}

