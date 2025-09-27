var request_database=firebase.database().ref("omkartechsolutuonrequstcallforproject");
var apply_database=firebase.database().ref("omkartechsolutuonrequstapply");

function empty(value){
	if(value==""){
		return true;
	}
	return false;
}

var database=firebase.database().ref("omkartechsolutuonenquiry");
function submitenq(){
	var stream= document.getElementById("stream").value;
	var category= document.getElementById("category").value;
	var fullname= document.getElementById("fullname").value;
	var email= document.getElementById("email").value;
	var contactno= document.getElementById("contactno").value;
	var college= document.getElementById("college").value;
	var sem= document.getElementById("sem").value;
	var mode= document.getElementById("mode").value;
	if(empty(stream)|| empty(category)|| empty(fullname) || empty(email) ||
		empty(contactno)|| empty(college) || empty(sem)|| empty(mode)){
			document.getElementById("enq_warning").innerHTML="Incomplete details";
	}
	else{
		var data=database.push();
		data.set({
			stream:stream,
			category:category,
			fullname:fullname,
			email:email,
			contactno:contactno,
			college:college,
			sem:sem,
			mode:mode
		});

		alert("DAta Submited Sucessfully!!");	
		window.location.reload();
	}
}



function requestcall(){
	var fullname= document.getElementById("project_fullname").value;
	var email= document.getElementById("project_college").value;
	var contactno= document.getElementById("project_contactno").value;

	if( empty(fullname) || empty(email) ||
		empty(contactno)){
		alert("Incomplete details");
	}
	else{
     var request_data=request_database.push();
		request_data.set({
			fullname:fullname,
			email:email,
			contactno:contactno
		});

		alert("DAta Submited Sucessfully!!");	
		window.location.reload();


	}

}



function submitapply(){

	var stream= document.getElementById("applystream").value;
	var category= document.getElementById("applycategory").value;
	var fullname= document.getElementById("applyfullname").value;
	var email= document.getElementById("applyemail").value;
	var contactno= document.getElementById("applycontactno").value;
	var college= document.getElementById("applycollege").value;
	var sem= document.getElementById("applysem").value;
	var mode= document.getElementById("applymode").value;
	if(empty(stream)|| empty(category)|| empty(fullname) || empty(email) ||
		empty(contactno)|| empty(college) || empty(sem)|| empty(mode)){
		alert("Incomplete details");
	}
	else{
		var applydata=apply_database.push();
		applydata.set({
			stream:stream,
			category:category,
			fullname:fullname,
			email:email,
			contactno:contactno,
			college:college,
			sem:sem,
			mode:mode
		});

		alert("DAta Submited Sucessfully!!");	
		window.location.reload();

	}


}

function login(){
	document.getElementById("error_msg").innerHTML="Processing Please Wait.";
	document.getElementById("error_msg").style.color='green';
	document.getElementById("error_msg").style.fontWeight="bold";
	var email= document.getElementById("email_id").value;
	var password= document.getElementById("password").value;
	firebase.auth().signInWithEmailAndPassword(email,password).then((success)=>{
       document.getElementById("error_msg").innerHTML="login Successfully";
      
    }).catch((error)=>{
     
      document.getElementById("error_msg").innerHTML="Invalid ! Retry Again";
	 document.getElementById("error_msg").style.color='red';
	 document.getElementById("error_msg").style.fontWeight="bold";
     
    });

}

function fetchenqdata()
{
	    var table=document.getElementById("enq_data");
		var row = table.insertRow(0);
         var cell1 = row.insertCell(0);
         var cell2 = row.insertCell(1);
         var cell3 = row.insertCell(2);
         var cell4 = row.insertCell(3);
		 var cell5 = row.insertCell(4);
         var cell6 = row.insertCell(5);
		 var cell7 = row.insertCell(6);
         var cell8 = row.insertCell(7);
		 var cell9 = row.insertCell(8);
		 var cell10 = row.insertCell(9);
         cell1.style.fontWeight = 'bold';
         cell2.style.fontWeight = 'bold';
         cell3.style.fontWeight = 'bold';
         cell4.style.fontWeight = 'bold';
         cell5.style.fontWeight = 'bold';
         cell6.style.fontWeight = 'bold';
         cell7.style.fontWeight = 'bold';
         cell8.style.fontWeight = 'bold';
         cell9.style.fontWeight = 'bold';    
         cell1.innerHTML = "Stream";
         cell2.innerHTML = "Category";
         cell3.innerHTML = "FullName";
         cell4.innerHTML = "Email";
         cell5.innerHTML = "ContactNumber";
         cell6.innerHTML = "College";
         cell7.innerHTML = "Semester";
         cell8.innerHTML = "Mode";
         cell9.innerHTML = "Action";

	     var j=0;
      	var i=1;
	
		firebase.database().ref('omkartechsolutuonenquiry').once('value',function(snapshot3){
			snapshot3.forEach(function(childsnapshot3){ 

				if(childsnapshot3.val().email !="DEL"){

         j++;  
		var row = table.insertRow(j);
         var cell1 = row.insertCell(0);
         var cell2 = row.insertCell(1);
         var cell3 = row.insertCell(2);
         var cell4 = row.insertCell(3);
		 var cell5 = row.insertCell(4);
         var cell6 = row.insertCell(5);
		 var cell7 = row.insertCell(6);
         var cell8 = row.insertCell(7);
		 var cell9 = row.insertCell(8);
		 var cell10 = row.insertCell(9);

       
         cell1.innerHTML = childsnapshot3.val().stream;
         cell2.innerHTML = childsnapshot3.val().category;
         cell3.innerHTML = childsnapshot3.val().fullname;
         cell4.innerHTML = childsnapshot3.val().email;
         cell5.innerHTML = childsnapshot3.val().contactno;
         cell6.innerHTML = childsnapshot3.val().college;
         cell7.innerHTML = childsnapshot3.val().sem;
         cell8.innerHTML = childsnapshot3.val().mode;

          let button = document.createElement('button');
          button.style.backgroundColor="red";
          button.style.border="none";
	      button.style.color="white";
		  button.innerText = 'Delete';
			     /*   button.style.height='50px';
			        button.style.width='100px';
			        button.style.backgroundColor="#156118";
			        button.style.color="white";*/
	     // Attach sayHi() function to 'onclick' attribute & pass row index
		 button.setAttribute('onclick', `sayenqdelete(${i})`);  
		 
	     cell9.appendChild(button);
         
         cell10.innerHTML = childsnapshot3.val().email;
         i++;
    	     cell10.style.display = "none";
     }
             	        

		});

		 
		
	});
}
function sayenqdelete(data) {
    let table = document.getElementById('enq_data');
    let rows = table.rows;
    // Extract first & last Name
    let link = rows[data]['cells'][3].innerText;
    firebase.database().ref('omkartechsolutuonenquiry').once('value',function(snapshot3){
		snapshot3.forEach(function(childsnapshot3){ 
           var dbemail=childsnapshot3.val().email;
           if(dbemail==link){
           	childsnapshot3.ref.update({'email':"DEL"});
           	window.location.reload();

           }
             	        

		});

		 
		
	});

    
}

function fetchprodata()
{
	    var table=document.getElementById("pro_data");
		var row = table.insertRow(0);
         var cell1 = row.insertCell(0);
         var cell2 = row.insertCell(1);
         var cell3 = row.insertCell(2);
         var cell4 = row.insertCell(3);
		 var cell5 = row.insertCell(4);
		 cell1.style.fontWeight = 'bold';
         cell2.style.fontWeight = 'bold';
         cell3.style.fontWeight = 'bold';
         cell4.style.fontWeight = 'bold';
         cell5.style.fontWeight = 'bold';
 
        
       
         cell1.innerHTML = "FullName";
         cell2.innerHTML = "Email";
         cell3.innerHTML = "ContactNumber";
         cell4.innerHTML = "Status";
      

        
   

	var j=0;
	var i=1;
	
	firebase.database().ref('omkartechsolutuonrequstcallforproject').once('value',function(snapshot3){
		snapshot3.forEach(function(childsnapshot3){ 

			if(childsnapshot3.val().email !="DEL"){

         j++;  
		var row = table.insertRow(j);
          var cell1 = row.insertCell(0);
         var cell2 = row.insertCell(1);
         var cell3 = row.insertCell(2);
         var cell4 = row.insertCell(3);
		 var cell5 = row.insertCell(4);
     
      
         cell1.innerHTML = childsnapshot3.val().fullname;
         cell2.innerHTML = childsnapshot3.val().email;
         cell3.innerHTML = childsnapshot3.val().contactno;
       

          let button = document.createElement('button');
		  button.innerText = 'Delete';
		     button.style.backgroundColor="red";
		     button.style.border="none";
		      button.style.color="white";
			     /*   button.style.height='50px';
			        button.style.width='100px';
			        button.style.backgroundColor="#156118";
			        button.style.color="white";*/
	     // Attach sayHi() function to 'onclick' attribute & pass row index
		 button.setAttribute('onclick', `sayprodelete(${i})`);  
		 
	     cell4.appendChild(button);
         
         cell5.innerHTML = childsnapshot3.val().email;
         i++;
    	     cell5.style.display = "none";
     }
             	        
		});		 
		
	});
}

function sayprodelete(data) {
    let table = document.getElementById('pro_data');
    let rows = table.rows;
    // Extract first & last Name
    let link = rows[data]['cells'][1].innerText;
    firebase.database().ref('omkartechsolutuonrequstcallforproject').once('value',function(snapshot3){
		snapshot3.forEach(function(childsnapshot3){ 
           var dbemail=childsnapshot3.val().email;
           if(dbemail==link){
           	childsnapshot3.ref.update({'email':"DEL"});
           	window.location.reload();
           }
		});	 
		
	});  
}

function fetchstudata()
{
	    var table=document.getElementById("stu_data");
		var row = table.insertRow(0);
         var cell1 = row.insertCell(0);
         var cell2 = row.insertCell(1);
         var cell3 = row.insertCell(2);
         var cell4 = row.insertCell(3);
		 var cell5 = row.insertCell(4);
         var cell6 = row.insertCell(5);
		 var cell7 = row.insertCell(6);
         var cell8 = row.insertCell(7);
		 var cell9 = row.insertCell(8);
		 var cell10 = row.insertCell(9);
		 cell1.style.fontWeight = 'bold';
         cell2.style.fontWeight = 'bold';
         cell3.style.fontWeight = 'bold';
         cell4.style.fontWeight = 'bold';
         cell5.style.fontWeight = 'bold';
         cell6.style.fontWeight = 'bold';
         cell7.style.fontWeight = 'bold';
         cell8.style.fontWeight = 'bold';
         cell9.style.fontWeight = 'bold';
        
       
         cell1.innerHTML = "Stream";
         cell2.innerHTML = "Category";
         cell3.innerHTML = "FullName";
         cell4.innerHTML = "Email";
         cell5.innerHTML = "ContactNumber";
         cell6.innerHTML = "College";
         cell7.innerHTML = "Semester";
         cell8.innerHTML = "Mode";
         cell9.innerHTML = "Action";


        
   

	var j=0;
	var i=1;
	
	firebase.database().ref('omkartechsolutuonrequstapply').once('value',function(snapshot3){
		snapshot3.forEach(function(childsnapshot3){ 

			if(childsnapshot3.val().email !="DEL"){

         j++;  
		var row = table.insertRow(j);
         var cell1 = row.insertCell(0);
         var cell2 = row.insertCell(1);
         var cell3 = row.insertCell(2);
         var cell4 = row.insertCell(3);
		 var cell5 = row.insertCell(4);
         var cell6 = row.insertCell(5);
		 var cell7 = row.insertCell(6);
         var cell8 = row.insertCell(7);
		 var cell9 = row.insertCell(8);
		 var cell10 = row.insertCell(9);

       
         cell1.innerHTML = childsnapshot3.val().stream;
         cell2.innerHTML = childsnapshot3.val().category;
         cell3.innerHTML = childsnapshot3.val().fullname;
         cell4.innerHTML = childsnapshot3.val().email;
         cell5.innerHTML = childsnapshot3.val().contactno;
         cell6.innerHTML = childsnapshot3.val().college;
         cell7.innerHTML = childsnapshot3.val().sem;
         cell8.innerHTML = childsnapshot3.val().mode;

          let button = document.createElement('button');
		  button.innerText = 'Delete';
		     button.style.backgroundColor="red";
		      button.style.color="white";
		       button.style.border="none";
			     /*   button.style.height='50px';
			        button.style.width='100px';
			        button.style.backgroundColor="#156118";
			        button.style.color="white";*/
	     // Attach sayHi() function to 'onclick' attribute & pass row index
		 button.setAttribute('onclick', `saystudelete(${i})`);  
		 
	     cell9.appendChild(button);
         
         cell10.innerHTML = childsnapshot3.val().email;
         i++;
    	     cell10.style.display = "none";
     }
             	        

		});

		 
		
	});
}

function saystudelete(data) {
    let table = document.getElementById('stu_data');
    let rows = table.rows;
    // Extract first & last Name
    let link = rows[data]['cells'][3].innerText;
    firebase.database().ref('omkartechsolutuonrequstapply').once('value',function(snapshot3){
		snapshot3.forEach(function(childsnapshot3){ 
           var dbemail=childsnapshot3.val().email;
           if(dbemail==link){
           	childsnapshot3.ref.update({'email':"DEL"});
           	window.location.reload();

           }
             	        

		});

		 
		
	});

    
}


function logout(){
	firebase.auth().signOut();
	alert('logeed out!');
	window.location.href="index.html";
}