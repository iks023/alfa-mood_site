var firebaseConfig = {
    apiKey: "AIzaSyABQone9FZrj8WlXoGCypEhU9WReO_PPOc",
    authDomain: "alphamood-842eb.firebaseapp.com",
    databaseURL: "https://alphamood-842eb.firebaseio.com",
    projectId: "alphamood-842eb",
    storageBucket: "alphamood-842eb.appspot.com",
    messagingSenderId: "527194776177"
    };
    firebase.initializeApp(firebaseConfig);
    ///////////////////////////////////КОД:///////////////////////////////////////
    var preObjectCode = document.getElementById('code');
    var dbRefObjectCode=firebase.database().ref().child('Security');
    var dbRefObjectCodeId = dbRefObjectCode.child('Code');
    dbRefObjectCodeId.on('value',snap => preObjectCode.innerText = snap.val());
    ///////////////////////////количество комментов////////////////////////////////
    var preObjectComId = document.getElementById('comment');
    var dbRefObjectCom=firebase.database().ref().child('Tue Aug 06 2019');
    var dbRefObjectComment = dbRefObjectCom.child('Comment');
    dbRefObjectComment.on('value',snap => preObjectComId.innerText = snap.val());
    ///////////////////////////////////////////////////////////////////////////////
    ////////////////////////////количество сотрудников/////////////////////////////
    var preObject = document.getElementById('object');
    var dbRefObject=firebase.database().ref().child('limits');
    var dbRefObject3 = dbRefObject.child('num');
    dbRefObject3.on('value',snap => preObject.innerText = snap.val());
    //////////////////////////////////////////////////////////////////////////////
    var day =(moment().format('ddd MMM DD YYYY'));
    console.log(moment().format('ddd MMM DD YYYY'));

    ///////////////////////////////Настроение сотрудников///////////////////////////
    function read(){
        firebase.database().ref(day).child("Bad").once('value', function(ss) {
            var x2 = ss.val();
            console.log(x2);
            firebase.database().ref(day).child("Medium").once('value',function(ss1){
              var x3 = ss1.val();
              
              firebase.database().ref(day).child("Good").once('value',function(ss2){
              var x1 = ss2.val();
    
              var myChart= new Chart(document.getElementById("doughnut-chart"), {
        type: 'doughnut',
        data: {
          labels: ["Плохое", "Среднее", "Хорошее"],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#F53134", "#D6DB32","#67ED42"],
              data: [x2,x3,x1]
            }
          ]
        },
        options: {
          title: {
            display: true,
          }
        }
    });
});
     });
     });
    // document.getElementById("chart").innerHTML=`<canvas id="myChart"></canvas>`;
 
}