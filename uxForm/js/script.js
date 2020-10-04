window.onload = function () {
  console.log("loaded");
  //passwords fields.
  let pwdConstraintLen,
    pwdConstraintSmall,
    pwdConstraintCapital,
    pwdConstraintDigit,
    pwdInput,
    pwdInputValue;
  let usernameInput; 
   usernameInput =  document.getElementById("username");
  pwdInput = document.querySelector("#pwd-input");
  pwdReenterInput = document.querySelector("#pwd-reenter");
  pwdConstraintCapital = document.querySelector(".pwd-constraint__capital");
  pwdConstraintSmall = document.querySelector(".pwd-constraint__small");
  pwdConstraintLen = document.querySelector(".pwd-constraint__len");
  pwdConstraintDigit = document.querySelector(".pwd-constraint__digit");

  /**
   * @description pwd contraint paragraph ref
   * @param {pwd contraint paragraph ref} pwdConstraintObj
   */
  function showCorrect(pwdConstraintObj) {
    pwdConstraintObj.children[0].classList.remove("hide");
    pwdConstraintObj.style.color = "green";
  }

  /**
   * @description pwd contraint paragraph ref
   * @param {pwd contraint paragraph ref} pwdConstraintObj
   */

  function showIncorrect(pwdConstraintObj) {
    pwdConstraintObj.children[0].classList.add("hide");
    pwdConstraintObj.style.color = "red";
  }
  /**
   * listener for onchange input password field
   */

  function pwdInputListener(evt) {
    //console.log("the total character", evt.target.value);
    let pwdCapital = /[A-Z]/;
    let pwdSmall = /[a-z]/;
    let pwdDigit = /[0-9]/;
    let pwdValue = evt.target.value.trim();

    //process password length constraint
    if (pwdValue.trim().length >= 8) {
      showCorrect(pwdConstraintLen);
    } else {
      showIncorrect(pwdConstraintLen);
    }

    //process password capital constraint
    if (pwdCapital.test(pwdValue)) {
      showCorrect(pwdConstraintCapital);
    } else {
      showIncorrect(pwdConstraintCapital);
    }

    //process password small constraint
    if (pwdSmall.test(pwdValue)) {
      showCorrect(pwdConstraintSmall);
    } else {
      showIncorrect(pwdConstraintSmall);
    }

    //process password digit constraint
    if (pwdDigit.test(pwdValue)) {
      showCorrect(pwdConstraintDigit);
    } else {
      showIncorrect(pwdConstraintDigit);
    }
  }

  /**
   * @description {verify password reenter matching}
   * @param {evt}
   */
  function pwdReenterInputListener(evt) {
    //remove if there is pwd-not-match class
    document.querySelector("#pwd-reenter").classList.remove("pwd-not-match");
    console.log(pwdInputValue);
    //access password value
    if (!pwdInputValue) {
      pwdReenterInput.value = "";
      //make reenter input field bottom border red
      document.querySelector("#pwd-reenter").classList.add("pwd-not-match");
    } else {
      let pwdArr = pwdInputValue.split("");
      let pwdReenter = evt.target.value.split("");
      for (let i = 0; i < pwdReenter.length; i++) {
        if (pwdReenter[i] != pwdArr[i]) {
          //make reenter input field bottom border red
          document.querySelector("#pwd-reenter").classList.add("pwd-not-match");
        }
      }
    }
  }
  /**
   * @description { save password on change listener}
   */
  function pwdInputChangeListener(evt) {
    pwdInputValue = evt.target.value.trim();
    console.log(pwdInputValue);
  }

  /**
   * @description { check if both pwd and ped reentered are matched.}
   */

   function pwdReenterChangeListener(evt) {
    // console.log("value"+ evt.target.value);
     let pwdReentered = evt.target.value;
     if(pwdReentered === pwdInputValue) {
      document.getElementById("pwd-input").classList.remove("pwd-not-match");
      document.querySelector("#pwd-reenter").classList.remove("pwd-not-match");
      document.getElementById("pwd-input").classList.add("pwd-match");
      document.querySelector("#pwd-reenter").classList.add("pwd-match");
     }else {
      document.getElementById("pwd-input").classList.remove("pwd-match");
      document.querySelector("#pwd-reenter").classList.remove("pwd-match");
      document.getElementById("pwd-input").classList.add("pwd-not-match");
      document.querySelector("#pwd-reenter").classList.add("pwd-not-match");
     }
   }

   /**
    * @description { input listener in username input field}
    */

    function usernameInputListener(evt) {
      //create a regular expression of valid combination
      //then match all the input value with with regec
      // and relace all the  non applicable charachter with spaces.
      let usernameValue = evt.target.value.trim();
      usernameInput.value = usernameValue;
    }
   
   //Listener for username input fields 

   usernameInput.addEventListener("input", usernameInputListener);


  /**
   * Listener for password input
   */
  pwdInput.addEventListener("input", pwdInputListener);
  pwdInput.addEventListener("change", pwdInputChangeListener);
  /**
   * Listener for re-enter password input
   */
  pwdReenterInput.addEventListener("input", pwdReenterInputListener);
  pwdReenterInput.addEventListener("change",pwdReenterChangeListener);
  /**
   * Copied from W3School
   */
  function checkrequirements() {
    var b,
      i,
      l,
      smallabc,
      ok,
      upperabc,
      digits,
      valid = 1;
    b = document.forms["loginform"]["w3schools_psw"];
    if (b.value.length < 8) {
      valid = 0;
      document.getElementById("req1").style.color = "crimson";
      document
        .getElementById("req1")
        .getElementsByTagName("i")[0].style.visibility = "hidden";
    } else {
      document.getElementById("req1").style.color = "#4CAF50";
      document
        .getElementById("req1")
        .getElementsByTagName("i")[0].style.visibility = "visible";
    }
    smallabc = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    l = b.value.length;
    ok = 0;
    for (i = 0; i < l; i++) {
      if (smallabc.indexOf(b.value.substr(i, 1)) > -1) {
        ok = 1;
        break;
      }
    }
    if (ok == 0) {
      valid = 0;
      document.getElementById("req2").style.color = "crimson";
      document
        .getElementById("req2")
        .getElementsByTagName("i")[0].style.visibility = "hidden";
    } else {
      document.getElementById("req2").style.color = "#4CAF50";
      document
        .getElementById("req2")
        .getElementsByTagName("i")[0].style.visibility = "visible";
    }
    upperabc = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    l = b.value.length;
    ok = 0;
    for (i = 0; i < l; i++) {
      if (upperabc.indexOf(b.value.substr(i, 1)) > -1) {
        ok = 1;
        break;
      }
    }
    if (ok == 0) {
      valid = 0;
      document.getElementById("req3").style.color = "crimson";
      document
        .getElementById("req3")
        .getElementsByTagName("i")[0].style.visibility = "hidden";
    } else {
      document.getElementById("req3").style.color = "#4CAF50";
      document
        .getElementById("req3")
        .getElementsByTagName("i")[0].style.visibility = "visible";
    }
    digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    l = b.value.length;
    ok = 0;
    for (i = 0; i < l; i++) {
      if (digits.indexOf(b.value.substr(i, 1)) > -1) {
        ok = 1;
        break;
      }
    }
    if (ok == 0) {
      valid = 0;
      document.getElementById("req4").style.color = "crimson";
      document
        .getElementById("req4")
        .getElementsByTagName("i")[0].style.visibility = "hidden";
    } else {
      document.getElementById("req4").style.color = "#4CAF50";
      document
        .getElementById("req4")
        .getElementsByTagName("i")[0].style.visibility = "visible";
    }
    return valid;
  }
};
