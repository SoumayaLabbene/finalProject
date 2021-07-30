

// sticky title
window.onscroll = function () { myFunction() };

function myFunction() {
    if (window.scrollY > 710 && window.scrollY<1650) {
        document.getElementById('myHeader').classList.add("sticky");
        
  } else {
        document.getElementById('myHeader').classList.remove("sticky");
      
  }
}

//register form
function validate(val) {
      v1 = document.getElementById("fname");
      v2 = document.getElementById("lname");
      v3 = document.getElementById("email");
      v4 = document.getElementById("username");
      v5 = document.getElementById("address");
      v6 = document.getElementById("pn");
      v7 = document.getElementById("pass");
      
      flag1 = true;
      flag2 = true;
      flag3 = true;
      flag4 = true;
      flag5 = true;
      flag6 = true;
      flag7 = true;
      
      if(val>=1 || val==0) {
      if(v1.value == "") {
      v1.style.borderColor = "red";
      flag1 = false;
      }
      else {
      v1.style.borderColor = "green";
      flag1 = true;
      }
      }
      
      if(val>=2 || val==0) {
      if(v2.value == "") {
      v2.style.borderColor = "red";
      flag2 = false;
      }
      else {
      v2.style.borderColor = "green";
      flag2 = true;
      }
      }
      if(val>=3 || val==0) {
      if(v3.value == "") {
      v3.style.borderColor = "red";
      flag3 = false;
      }
      else {
      v3.style.borderColor = "green";
      flag3 = true;
      }
      }
      if(val>=4 || val==0) {
      if(v4.value == "") {
      v4.style.borderColor = "red";
      flag4 = false;
      }
      else {
      v4.style.borderColor = "green";
      flag4 = true;
      }
      }
      if(val>=5 || val==0) {
      if(v5.value == "") {
      v5.style.borderColor = "red";
      flag5 = false;
      }
      else {
      v5.style.borderColor = "green";
      flag5 = true;
      }
      }
      if(val>=6 || val==0) {
      if(v6.value == "") {
      v6.style.borderColor = "red";
      flag6 = false;
      }
      else {
      v6.style.borderColor = "green";
      flag6 = true;
      }
      }
      if(val>=7 || val==0) {
            if(v7.value == "") {
            v7.style.borderColor = "red";
            flag7 = false;
            }
            else {
            v7.style.borderColor = "green";
            flag7 = true;
            }
            }
      
      flag = flag1 && flag2 && flag3 && flag4 && flag5 && flag6;
      
      return flag;
}
      
// Search bar
function search() {
      let input = document.getElementById('searchbar').value
      input=input.toLowerCase();
      let x = document.getElementsByClassName('titreD');
      for (i = 0; i < x.length; i++) {
          if (!x[i].innerHTML.toLowerCase().includes(input)) {
              document.getElementById("C" + i).style.display = "none";
          }
          else {
              var e = document.getElementById("C" + i).style.display = "block";
              
          }
      }
}
  

const firebaseConfig = {
    apiKey: "AIzaSyAtsPFa0TS7nbXnKKnJmwULvH2Ze8B00I4",
    authDomain: "travia-c5d4b.firebaseapp.com",
    projectId: "travia-c5d4b",
    storageBucket: "travia-c5d4b.appspot.com",
    messagingSenderId: "302632953569",
    appId: "1:302632953569:web:d2f9cae08c10f3c482f9a0",
    measurementId: "G-5ZCGJPW8JF"
};
  
firebase.initializeApp(firebaseConfig);


var email = document.getElementById('email');
  var password = document.getElementById('pass');
var btnLogin = document.getElementById('btnlogin');
var btnRegister = document.getElementById('btnRegister');

btnLogin.addEventListener('click', e => {
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email.value, password.value).then(user => {
        alert("Login successful !", user.email);
        window.location.href = "indexx.html";

    }).catch(err => {
        console.log(err);
    })

})

btnRegister.addEventListener('click', e => {
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value).then(user => {
        alert("Signup Successful !", user.email)
        window.location.href = "login.html";
    }).catch(err => {
        console.log(err.message);
    });
})


var btnboook = document.getElementById('boook');

            btnboook.addEventListener('click', () => {
          var database=firebase.database();
          var ref=database.ref('booking');
          var data={
              destination:document.getElementById("dest").value,
              departureDate: document.getElementById("depart").value,
              returnDate: document.getElementById("arrivée").value,
              numberOfPeople: document.getElementById("nbr").value,
             }


          ref.push(data).then(() => {
                  console.log('ok')
              }).catch((e)=>console.log(e));

      })





