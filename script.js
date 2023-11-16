const fileInput = document.querySelector('input');
const downloadBtn = document.querySelector('button');

downloadBtn.addEventListener("click",(e)=>{
      e.preventDefault(); // preventing form from submitting
      downloadBtn.innerText = "Downloading file..."
      fetchFile(fileInput.value);
})

function fetchFile(url) {
      // fetching file & returning response as blob
      fetch(url).then((res)=> res.blob()).then((file)=>{
            let tempUrl = URL.createObjectURL(file);
            let aTag = document.createElement("a");
            aTag.href = tempUrl;// passing tempUrl as href value of <a>tag
            // passing file last name & extension as value of <a>tag
            aTag.download = url.replace(/^.*[\\\/], '');
            document.body.appendChild(aTag); // adding <a> inside body
            aTag.click(); // clicking <a> tag so the file download
            aTag.remove(); // removing <a> tag so the file downloaded
            URL.revokeObjectURL(tempUrl);
            downloadBtn.innerText = "Download File";
      }).catch(()=>{
            // catch if there is an error
            downloadBtn.innerText = "Download File";
            alert("Failed to download file!");
      })
}