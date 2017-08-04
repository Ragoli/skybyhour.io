function mySky() {
    var d = new Date();
    var h = d.getHours();
		
	
		console.log(h);
		
   	if(h ){
			var el = document.getElementById("div1");
			el.classList.add("gradient-sky" + h);
			
		}
		
    
}


