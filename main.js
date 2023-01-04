const canvas = document.getElementById("result");
const preview = document.getElementById("preview");
preview.addEventListener("click", prev);

// canvas.height = canvas.width / 1.616;
const ctx = canvas.getContext("2d");


const image = document.getElementById("imgDisplayed");
const logo = document.getElementById("logo");

function prev(){
	  ctx.font = "14px Krasar";
      var x = document.getElementById("form");
      x.style.display = "none";

      var xz = document.getElementById("show");
      xz.style.display = "block";


      let inName = document.getElementById("inName").value;
      let inSex = document.getElementById("inSex").value;
      let inPosition = document.getElementById("inPosition").value;
      let inDays = document.getElementById("inDays").value;
      let inDateF = document.getElementById("inDateF").value;
      let inMonthF = document.getElementById("inMonthF").value;
      let inYearF = document.getElementById("inYearF").value;
      let inDateT = document.getElementById("inDateT").value;
      let inMonthT = document.getElementById("inMonthT").value;
      let inYearT = document.getElementById("inYearT").value;
      let inDateI = document.getElementById("inDateI").value;
      let inMonthI = document.getElementById("inMonthI").value;
      let inYearI = document.getElementById("inYearI").value;
      let inReason = document.getElementById("inReason").value;

      const name = document.getElementById("name");
      const sex = document.getElementById("sex");
      const position = document.getElementById("position");
      const days = document.getElementById("days");
      const datef = document.getElementById("datef");
      const datet = document.getElementById("datet");
      const datei = document.getElementById("datei");
      const reason = document.getElementById("reason");

      name.innerHTML = inName;
      sex.innerHTML = inSex;
      position.innerHTML = inPosition;
      days.innerHTML =  inDays + " ថ្ងៃ";
      datef.innerHTML = inDateF + "." + inMonthF + "." + inYearF;
      datet.innerHTML = inDateT + "." + inMonthT + "." + inYearT;
      datei.innerHTML = inDateI + "." + inMonthI + "." + inYearI;
      reason.innerHTML = inReason;
      
      
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, 800, 900);
      ctx.fillStyle = "#1876f2";
      ctx.fillRect(0, 0, 800, 100);
      // ctx.fillStyle = "#f1f3f4";
      // ctx.fillRect(0, 750, 800, 50);
      ctx.fillStyle = "#1876f2";
      ctx.fillRect(200, 570, 300, 2);
      ctx.drawImage(logo, 25, 15, 140, 70);
      ctx.fillStyle = "#000";
      ctx.font = '22pt Krasar'; //Arial
      ctx.fillStyle = "#ffffff";
      ctx.fillText("ពាក្យស្នើសុំអនុញ្ញាតឈប់សម្រាក", 200, 68);
      ctx.font = '20pt Krasar'; //Arial
      ctx.fillStyle = "#000";
      ctx.fillText("ខ្ញុំបាទ/នាងខ្ញុំ", 50, 150);
      ctx.fillStyle = "#1876f2";
      ctx.fillText(name.innerHTML, 190, 150);
      ctx.fillStyle = "#000";
      ctx.fillText("តួនាទី", 380, 150);
      ctx.fillStyle = "#1876f2";
      ctx.fillText(position.innerHTML, 450, 150);
      ctx.fillStyle = "#000";
      ctx.fillText("សូមគោរពជូនលោកប្រធានហាងស្រែមាស", 150, 210);
      ctx.fillText("កម្មវត្ថុ", 50, 270);
      ctx.fillText("សុំច្បាប់ឈប់សម្រាកចំនួន", 200, 270);
      ctx.fillStyle = "#1876f2";
      ctx.fillText(days.innerHTML, 470, 270);
      ctx.fillStyle = "#000";
      ctx.fillText("ចាប់ពីថ្ងៃទី", 50, 340);
      ctx.fillStyle = "#1876f2";
      ctx.fillText(datef.innerHTML, 250, 340);
      ctx.fillStyle = "#000";
      ctx.fillText("ដល់ថ្ងៃទី", 50, 410);
      ctx.fillStyle = "#1876f2";
      ctx.fillText(datet.innerHTML, 250, 410);
      ctx.fillStyle = "#000";
      ctx.fillText("ចូលធ្វើការវិញថ្ងៃទី", 50, 480);
      ctx.fillStyle = "#1876f2";
      ctx.fillText(datei.innerHTML, 250, 480);
      ctx.fillStyle = "#000";
      ctx.fillText("មូលហេតុ", 50, 550);
      ctx.fillStyle = "#1876f2";
      ctx.fillText(reason.innerHTML, 250, 550);
      ctx.fillStyle = "#000";
      ctx.fillText("សេចក្តីដូចបានជម្រាបខាងលើ", 200, 620);
      ctx.fillText("សូមលោកប្រធានមេត្តាអនុញ្ញាតដោយក្តីអនុគ្រោះ", 100, 670);
      ctx.fillText("សូមលោកប្រធានទទួលការគោរពដ៏ខ្ពង់ខ្ពស់អំពីខ្ញុំបាទ/នាងខ្ញុំ។", 50, 720); 
      
      var conSex = document.getElementById("inSex").value;
      

      if (conSex < 3) {      
        ctx.fillRect(122, 142, 60, 2);
        ctx.fillRect(582, 712, 60, 2);
      } else {       
        ctx.fillRect(50, 142, 60, 2);
        ctx.fillRect(512, 712, 60, 2);
      }


}

const download = document.getElementById("down");
download.addEventListener("click", function(){

  if(window.navigator.msSaveBlob) {

    window.navigator.msSaveBlob(canvas.msToBlob(), "Card.png");
  } else {

    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = canvas.toDataURL();
    a.download = "Card.png";
    a.click();
    document.body.removeChild(a);
  }
});



async function onShares() {

    const note = 'សូមគោរព  និងជំរាបសួរលោកប្រធាន និងថ្នាក់ដឹកនាំក្រុមហ៊ុន🙏។ ខ្ញុំបាទ/នាងខ្ញុំ  សុំអនុញ្ញាតច្បាប់សម្រាកដូចទម្រង់ស្នើសុំខាងលើ សូមលោកប្រធាន និងថ្នាក់ដឹកនាំមេត្តាពិនិត្យឲ្យក្តីអនុគ្រោះ។';

        const dataUrl = canvas.toDataURL();
        const blob = await (await fetch(dataUrl)).blob(); 
        const filesArray = [
            new File(
                [blob],
                'Card.png',
                {
                    type: blob.type,
                    lastModified: new Date().getTime()
                }
            )
        ]; 
    const shareData = {
            text: note ,
            files: filesArray
        }; 
        navigator.share(shareData);
    }



