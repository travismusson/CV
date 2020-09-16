//Declaring menu variable
let toggleMenuStatus = false; 		//setting to false by default

let toggleNav = function(){ 		//the use of an anonymous function, is called by the onclick event from the button.
	let getSidebar = document.querySelector(".ham_side");	//used querySelector as i was having troubles using getElementById
	let getSidebarUl = document.querySelector(".ham_side ul");
	let getSidebarName = document.querySelector(".ham_side span");
	let getSidebarA = document.querySelectorAll(".ham_side a");			//puts all links in an array for more manipulation purposes	
	
	if (toggleMenuStatus === false){
		getSidebarUl.style.visibility = "visible";
		getSidebar.style.height = "7em";
		

		
		let arrLength = getSidebarA.length;			//put length of Sidebar links into a variable
		for (let i = 0; i < arrLength; i++) { 		//run through a for loop, ensuring that the loop doesnt exceed the array.
			getSidebarA[i].style.opacity = "1";	//grabs first index in array and so on and changes the opacity to visible.
			
		}
		getSidebarName.style.visibility = "visible";
		toggleMenuStatus = true;

	}
	else if (toggleMenuStatus === true){			//else if the menu is clicked again hide
		getSidebarUl.style.visibility = "hidden";
		getSidebar.style.height = "3.15em";

		let arrLength = getSidebarA.length;			
		for (let i = 0; i < arrLength; i++) { 	
			getSidebarA[i].style.opacity = "0";			
		}
		
		getSidebarName.style.visibility = "visible";	//known bug:name doesnt re appear for somereason no matter what order visibility is placed in, seems once a list is invsibile the contents cannot be visible. To be honest after much though i dont even mind how it turned out, it was an unintentional design flaw that worked out in my favour.
		toggleMenuStatus = false;
	}	
}
