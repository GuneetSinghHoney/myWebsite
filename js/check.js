var x;
function honey()
{
	
	this.visibility = false;
	  $( "#mp" ).slideUp( 5000, function() {
    
		  $("#mp").attr("src","img/portfolio/packed.jpg");
		  $( "#mp" ).slideDown( 5000, function() {
    		
		  
  });
  });
	
	document.getElementById("count").innerHTML = 0;
	x = setInterval(function() {
  process();
		console.log("Logged");
}, 1000);
	
}

function process()
{
	
	var onj = document.getElementById("processingDiv");
	onj.innerHTML = "Processing ------------  ";
	
	console.log( parseInt(document.getElementById("count").innerHTML));
	document.getElementById("count").innerHTML = (parseInt(document.getElementById("count").innerHTML)+1)+"";
	
	
	if(parseInt(document.getElementById("count").innerHTML) == 6)
		{
			clearInterval(x);
			end();
		}
}

function end()
{
	$("#headersss").text(" PACKED ! 🤝  CONTACT FOR GIVING SHIPPING DETAILS BELOW ");
	
	document.getElementById("hiding").innerHTML = "";
}