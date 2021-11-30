async function clickMeButton() {
  let notificationMessage = "You just clicked ";
  let notificationFromModal = document.getElementById(
    "notification-from-modal"
  );
  showModalDialog("Are you sure you want continue?").then((confirm) => {
    if (confirm) {
      notificationFromModal.innerText = `${notificationMessage} "Yes"`;
    } else {
      notificationFromModal.innerText = `${notificationMessage} "Cancel"`;
    }
    notificationFromModal.classList.add("showing");
  });
}

async function clickThisButton() {
  let notificationMessage = "You just clicked ";
  let notificationFromModal = document.getElementById(
    "notification-from-modal"
  );
  showModalDialog("Are you sure you want continue or not?").then((confirm) => {
    if (confirm) {
      notificationFromModal.innerText = `${notificationMessage} "Yes"`;
    } else {
      notificationFromModal.innerText = `${notificationMessage} "Cancel"`;
    }
    notificationFromModal.classList.add("showing");
  });
}

function showModalDialog(message) {
  return new Promise((resolve) => {
    let confirm = false;
    let modal = document.getElementById("modal-dialog-continue");
    document.getElementById("modal-message").innerText = message;

    let buttonYes = document.getElementById("modal-button-yes");
    let buttonCancel = document.getElementById("modal-button-cancel");

    modal.classList.add("showing");

    buttonYes.addEventListener("click", function (e) {
      modal.classList.remove("showing");
      confirm = true;
      resolve(confirm);
    });

    buttonCancel.addEventListener("click", (e) => {
      modal.classList.remove("showing");
      confirm = false;
      resolve(confirm);
    });
  });
}
