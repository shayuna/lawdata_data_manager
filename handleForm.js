function handleForm(){
    document.getElementById("fileForm").action="set?fNm="+document.getElementById("fNm").value;
    document.getElementById("fileForm").submit();
}
