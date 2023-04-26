const qrInput = document.querySelector(".address");
const qrInput1 = document.querySelector(".address1");
const copyBtn = document.querySelector(".copy");
const copyBtn1 = document.querySelector(".copy1");
const qrDIv = document.querySelector(".qr_code");
const amountInput = document.querySelector(".amount");
const nameInput = document.querySelector(".name");
const grid = document.querySelector(".grid");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const buttons = grid.querySelectorAll("button");
const geneBtn = document.querySelector(".gene");
const selected = document.querySelector("select");
const custom = document.querySelector(".custom");
const modal1 = document.querySelector(".custom_modal");
const secondModal = document.querySelector(".second_modal");
const sentBtn = document.querySelectorAll(".sent");
const laterBtn = document.querySelectorAll(".later");

const doQrCode = (dest) => {
  let qrcode = new QRCode(document.getElementById(dest), {
    text: "http://jindo.dev.naver.com/collie",
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
  return qrcode;
};

function makeCode(target, inpp) {
  document.querySelector(`#${target}`).textContent = "";

  if (!inpp.value) {
    alert("Input a text");
    inpp.focus();
    return;
  }

  doQrCode(target).makeCode(inpp.value);
}

function copyFunc(inputTarget) {
  // Select the text field
  inputTarget.select();
  // qrInput.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(inputTarget.value);

  // Alert the copied text
  // alert("Copied the text: " + inputTarget.value);
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    qrInput.value = btn.dataset.dest;
    overlay.classList.remove("hidden");
    modal.classList.remove("hidden");
    makeCode("qr_code", qrInput);
  });
});

const removeOver = () => {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
  modal1.classList.add("hidden");
  secondModal.classList.add("hidden");
};

overlay.addEventListener("click", removeOver);

copyBtn.addEventListener("click", () => {
  copyFunc(qrInput);
  document.querySelector(".copied").classList.remove("hidden");

  setTimeout(() => {
    document.querySelector(".copied").classList.add("hidden");
  }, 3000);
});

copyBtn1.addEventListener("click", () => {
  copyFunc(qrInput1);

  document.querySelector(".copied1").classList.remove("hidden");

  setTimeout(() => {
    document.querySelector(".copied1").classList.add("hidden");
  }, 3000);
});

// Sddresses
const addresses = {
  arbitrum: "0x0B42048fAAf8ba54DFd8900D4c92EDC8a91362E9",
  etherium: "0x0B42048fAAf8ba54DFd8900D4c92EDC8a91362E9",
  avalanche: "0x0B42048fAAf8ba54DFd8900D4c92EDC8a91362E9",
  polygon: "0x0B42048fAAf8ba54DFd8900D4c92EDC8a91362E9",
  tron: "TDS1coBf3fXvx1X51cHEMX1SZWzv3eurKo",
  fantom: "0x0B42048fAAf8ba54DFd8900D4c92EDC8a91362E9",
  solana: "8wQL1B1xuaYmigbUBG3BRjS3edHV5KAN9RrTZCmob5aP",
  BNB: "0x0B42048fAAf8ba54DFd8900D4c92EDC8a91362E9",
  cronos: "0x0B42048fAAf8ba54DFd8900D4c92EDC8a91362E9",
  optimism: "0x0B42048fAAf8ba54DFd8900D4c92EDC8a91362E9",
  cadano:
    "addr1qy68v07gwz40e9efdy50nll4jta80v72fnvp72w0ayh4cveaauftekve97cfumkdk4uvhelmgxw9ay6jnylcjz2r6h3su4wt35",
  XRP: "rMZ8Bstw2EyASfgumqx81RmqNy6uMrcQDF",
};

// TOKEN INTEGRATION
geneBtn.addEventListener("click", () => {
  // console.log(selected.value, addresses[selected.value]);
  secondModal.classList.remove("hidden");
  modal1.classList.add("hidden");
  qrInput1.value = addresses[selected.value];
  makeCode("qr_code1", qrInput1);
});

custom.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  modal1.classList.remove("hidden");
});

sentBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    removeOver();

    setTimeout(() => {
      document.querySelector(".last_modal").classList.remove("hidden");
    }, 1000);

    setTimeout(() => {
      document.querySelector(".last_modal").classList.add("hidden");
    }, 2000);
  });
});

laterBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    removeOver();

    setTimeout(() => {
      document.querySelector(".last_modal").classList.remove("hidden");
    }, 1000);

    setTimeout(() => {
      document.querySelector(".last_modal").classList.add("hidden");
    }, 2000);
  });
});
