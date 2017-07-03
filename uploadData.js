		$("#eventForm").submit(function(event){
		    // cancels the form submission
		    event.preventDefault();
		    submitForm();
		});
      $(function () {
          $('#datetimepicker').datetimepicker();
      });

       // Initialize Firebase
		  var config = {
		    apiKey: "AIzaSyDqe1H2lYUaAwga430MLx2_maTOd4qWlYE",
		    authDomain: "ionic-app-63ba5.firebaseapp.com",
		    databaseURL: "https://ionic-app-63ba5.firebaseio.com",
		    storageBucket: "ionic-app-63ba5.appspot.com",
		    messagingSenderId: "693021254121"
		  };
		  firebase.initializeApp(config);

		  function submitForm()
		  {
		  	var formData = {
		  		"eventName": $("#eventName").val(),
		  		"time": $("#time").val(),
		  		"venue": $("#venue").val(),
		  		"imageURL": $("#imageURL").val(),
		  		"description": $("#description").val(),
		  		"limitedPeople": $("#limitedPeople").val(),
		  		"category": $("#category").val(),
		  		"price": $("#price").val()
		  	};
		   	$("#eventForm").hide();
		    $(".spinner").show();
		  	console.log("formData",formData)

		  	//firebase.database().ref('eventData/'+ Date.now()).set({
				firebase.database().ref().child('eventData').push(formData)
				.then(function(){
			  	$(".spinner").hide();
			  	swal("Form Submitted, Thank You!");
			  	$("#eventForm").show();
			  });

			  jQuery('#eventForm')[0].reset();
		  }
