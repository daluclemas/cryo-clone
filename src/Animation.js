export const contentAnimate = {
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
				staggerChildren: 0.3
      }
    },

    hidden:{
      opacity: 0,
    }
  };

  export const headerContent ={

		show: {
			x: 0,
			transition: {
				duration: 0.4,
			}
		},

		hidden: {
			x: -1000
		}

  };

  export const imageAnimation = {

		hidden:{
			scale: 1.5,
			opacity: 0
		},

		show: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 0.4,
			}
		}

  }


  export const cardContainer = {
    hidden: {
      opacity: 0,

    },

		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2
			}
		}
 
  }

	export const cards = {
		hidden: {
			opacity: 0,
			scale: 1.1
		},

		show: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 1
			}
		}

	}


	export const whyTitle = {
		hidden:{
			opacity: 0,
			y: -1000
		},
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.4
			}
		}
	}

	export const why ={
		hidden: {
			x: 1000
		},
		show: {
			x: 0,
			transition: {
				duration: 0.4
			}
		}
	}

	export const blogContainer={
		hidden: {
			opacity: 0,

		}, 
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3
			}
		}
	}

	export const blog = {
		hidden: {
			opacity: 0
		},
		show: {
			opacity: 1,
			transition: {
				duration: 0.5
			}
		}
	}

	export const fromTop ={
		hidden:{
			y: -1000,
			opacity: 0
		},
		show:{
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.8
			}
		}
	}

	export const fromDown ={
		hidden:{
			y: 1000,
			opacity: 0
		},
		show:{
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.8
			}
		}
	}

	export const footer ={
		hidden: {
			opacity: 1
		}, 
		show:{
			opacity: 1,
			
		}
	}