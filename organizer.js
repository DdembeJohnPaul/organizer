(function ($, Drupal) {
  
  //implementation for the organizer-balance class
  Drupal.behaviors.organizerBalance = {
    attach: function (context) {

          const style = document.createElement('style');

          style.setAttribute('type', 'text/css');


	      style.innerHTML = '.organize{\n\tdisplay: flex;\n\tflex-wrap: wrap;\n}\n\n.pd-org{\n\tpadding: 0.15rem;\n}\n\n.col-org-12 {\n\tflex: 0 0 100%;\n\tmax-width: 100%;\n}\n\n.col-org-3{\n\tflex: 0 0 25%;\n\tmax-width: 25%;\n}\n\n.col-org-4{\n\tflex: 0 0 33.33333333%;\n\tmax-width: 33.33333333%;\n}\n\n.col-org-6{\n\tflex: 0 0 50%;\n\tmax-width: 50%;\n}\n\n.col-org-12,\n.col-org-3,\n.col-org-4,\n.col-org-6 {\n\tposition: relative;\n}';
	 
	      document.head.insertBefore(style, document.head.querySelector('style'));
      
             once('organizer-balance', '.organizer-balance').forEach( function (element) {
       
	      element.classList.add('organize');
	      const children = element.children;
	      const length = children.length;
	      if ( element.classList.contains('organizer-balance') ) {
	      switch(length){
		      //customize/organize layout for a single field item in the container	      
		      case 1: for (let child of children){
			      child.classList.add('col-org-12');
		      }
			      break;
                      //organize or customize layout for two field items or children in the contaiiner 
		      case 2: for (let child of children){
			      child.classList.add('col-org-6', 'pd-org');
		      }
			      break;
                     //balance layout for three children in the container
		     case 3: for (let child of children){
			     child.classList.add('col-org-6', 'pd-org');
			     child.parentElement.firstElementChild.classList.add('col-org-12');
			     child.parentElement.firstElementChild.classList.remove('col-org-6');
		     }
			     break;
                     //customize or organize layout for 4 children in the container
	             case 4: for (let child of children){
			     child.classList.add('col-org-6', 'pd-org');
		     }
			     break;
                     //balance layout for 5 children in the container 
		     case 5: if(innerWidth <= 575.98){
			     for (let i=0; i<=length; i++){
                             if (i<=0) children[i].classList.add('col-org-12', 'pd-org');
                             else children[i].classList.add('col-org-6', 'pd-org');
			     }
		     } else 
			     for (let i=0; i<=length; i++){
			     if (i <= 0) children[i].classList.add('col-org-12', 'pd-org');
			     else children[i].classList.add('col-org-6', 'pd-org');
		     }
			      break;
                     //customize or organize layout for 6 children in the container
		     //for different screen sizes
		     case 6: if (innerWidth <= 575.98){
                             for (let child of children) {
				     child.classList.add('col-org-6', 'pd-org');
			     }
                             
                     } else
                             for (let child of children) {
				     child.classList.add('col-org-6', 'pd-org');
			     }
                              break;
                     //balance layout for 7 children in the container
		     //for different screen sizes
	             case 7: if (innerWidth <= 575.98) {
                             for (let i = 0; i <= length; i++) {
                             if (i <= 0) children[i].classList.add('col-org-12', 'pd-org');
                             else children[i].classList.add('col-org-6', 'pd-org');
                             }
                     } else
                             for (let i = 0; i <= children.length; i++) {
                             if (i <= 0) children[i].classList.add('col-org-12', 'pd-org');
                             else children[i].classList.add('col-org-6', 'pd-org');
                     }
                              break;

	      } //END OF SWITCH
	      }


	    //START LONG IF
	      //for container with more than 7(case 7: in switch above) children lay them out according to screen size
	      //and the parity of the total number of children
	      if (length > 7) {
		           //balance layout for screens smaller than 575.98px
		           if (innerWidth <= 575.98) {
			      if (length%2 == 1) {
				      for (let child of children) {
					      child.classList.add('col-org-6', 'pd-org');
					      children[0].classList.add('col-org-12', 'pd-org');
					      children[0].classList.remove('col-org-6');
				      }
			      } else {
				      for (let child of children) {
                                      child.classList.add('col-org-6', 'pd-org');
			      }
		      }
			   }
                      //balance layout for screens with width between 576 and 991.98px
		      if (innerWidth >= 576 && innerWidth <= 991.98) {
		      if (length % 3 == 0) {
			      for (let child of children){
				      child.classList.add('col-org-4', 'pd-org');
			      }
		      } else if (length % 3 > 0) {
			      let mod3 = length % 3;
			      for (let child of children){
				      child.classList.add('col-org-4', 'pd-org');
			      }
			      switch(mod3){

				      case 1: children[0].classList.add('col-org-12', 'pd-org');
					      children[0].classList.remove('col-org-4');
					      break;

			              case 2: children[0].classList.add('col-org-6', 'pd-org');
					      children[0].classList.remove('col-org-4');
					      children[1].classList.add('col-org-6', 'pd-org');
					      children[1].classList.remove('col-org-4');
					      break;
			      }
		      }    
		      }
              //balance layout for screens wider than 992px
		      if (innerWidth >= 992) {
			      if (length % 4 == 0) {
				      for (let child of children) {
					      child.classList.add('col-org-3', 'pd-org');
				      }
			      } else if (length % 4 > 0) {
				      let mod4 = length % 4;
				      for (let child of children) {
				      child.classList.add('col-org-3', 'pd-org');
				      }
				      switch(mod4) {

					      case 1: children[0].classList.add('col-org-12', 'pd-org');
						      children[0].classList.remove('col-org-3');
						      break;

					      case 2: children[0].classList.add('col-org-6', 'pd-org');
						      children[0].classList.remove('col-org-3');
						      children[1].classList.add('col-org-6', 'pd-org');
						      children[1].classList.remove('col-org-3');
						      break;

				              case 3: children[0].classList.add('col-org-4');
						      children[0].classList.remove('col-org-3')
						      children[1].classList.add('col-org-4');
						      children[1].classList.remove('col-org-3');
						      children[2].classList.add('col-org-4');
						      children[2].classLIst.remove('col-org-3');
						      break;
				      }
			      }
		      }
	      }//END LONG IF

      });
	    
    }
  };
              
	      //implementation of the organizer-no-balance class behavior
	      Drupal.behaviors.organizerNoBalance = {
		      attach: function(context) {
                              once('organizer-no-balance', '.organizer-no-balance').forEach(function(element){
                                      const children = element.children;
				      const length = children.length;

				      if (element.classList.contains('organizer-no-balance')) {
					      once.remove('organizer-balance', '.organizer-balance');

					      element.classList.add('organize');
					      element.classList.remove('organizer-balance');
                          //customize unbalanced layout for screens less than 1200px
					      if (window.innerWidth < 1200) {
						      for (let child of children) {
                                             child.classList.add('col-org-12', 'pd-org');
                                     
						      }
					      }
                          //customize unbalanced layout for screens wider than >= 1200px
					      if (window.innerWidth >= 1200) {
						      for (let child  of children) {
							      child.classList.add('col-org-6', 'pd-org');
						      }
					      }

				    
				    				      
				      }

				      			      
			      });
		      }
	      };

})(jQuery, Drupal);
