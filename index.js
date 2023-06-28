const captureBtns = document.querySelectorAll(".biometrics .item button");
let data;
const handleCapture = (btn, index) => {
  const quality = 100;
  const timeout = 10;
  const imgElem = document.querySelector(`.biometrics .item-${index + 1} img`);
  const inpElem = document.querySelector(
    `.biometrics .item-${index + 1} input`
  );
  const qualityElement = document.querySelector(
    `.biometrics .item-${index + 1} .quality`
  );
  const res = CaptureFinger(quality, timeout);
  if (res.data.ErrorCode == "0") {
    data = res.data.BitmapData;
    inpElem.value = data;
    imgElem.src= "data:image/bmp;base64," + res.data.BitmapData;
    btn.innerText = "Recapture";
    qualityElement.innerText = res.data.Quality + "%";
    btn.parentElement.classList.remove("bg-gray-800");
    btn.parentElement.classList.add("bg-gray-200");
    btn.parentElement.classList.remove("text-white");
    btn.parentElement.classList.add("text-black");
  } else {
    alert("Please Capture fingerprint  again");
  }
};

captureBtns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    console.log("Hello World")
    handleCapture(btn, index);
  });
});