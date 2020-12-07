var database = firebase.database();
let room = "NFC-data";
const send = document.getElementById("send");
const nfcId = document.getElementById("nfcId");
const prace = document.getElementById("prace");
const output = document.getElementById("output");

//送信処理
send.addEventListener('click', function() {
   var now = new Date();
   database.ref(room).push({
       nfcId:nfcId.value,
       prace: prace.value,
       date: now.getFullYear() + '年' + now.getMonth()+1 + '月' + now.getDate() + '日' + now.getHours() + '時' + now.getMinutes() + '分'
   });
   prace.value="";
   nfcId.value="";
});

//受信処理
database.ref(room).on("child_added", function(data) {
   const v = data.val();
   const k = data.key;
   let str = "";
   str += '<div class="nfcId">ID：'+v.nfcId+'</div>';
   str += '<div class="text">日時：'+v.date+'</div>';
   str += '<div class="text">ブース名：'+v.message+'</div><hr>';
   output.innerHTML += str;
});