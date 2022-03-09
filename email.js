const submitEmail = ()=>{
    const inputField = document.getElementById('input-field')
    const inputText = inputField.value
    console.log(inputText )
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(inputText.match(mailformat)){
       
        document.getElementById("check-valid").style.display='block'
        document.getElementById("check-invalid").style.display='none'
    }else{
        document.getElementById("check-valid").style.display='none'
        document.getElementById("check-invalid").style.display='block'
    }

}