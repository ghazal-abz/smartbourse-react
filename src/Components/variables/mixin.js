

// opacity

  export const opacity = (opacity) => {
 
    return `
    opacity: ${opacity};
    $opacity-ie: ${opacity} * 100;
    filter: alpha(opacity=${opacity}-ie); //IE8
  `
  }
  // transition
export const transition = (args) => {
 
    return `
    -webkit-transition: ${args};
    -moz-transition: ${args};
    -ms-transition: ${args};
    -o-transition: ${args};
    transition: ${args};
  `
  }

  // Flexbox display
  export const flexbox = () => {
 
    return `
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  `
  }
// justify-content
  export const justify_content = (justify) => {
 
    return `
    -webkit-justify-content: ${justify};
    -moz-justify-content: ${justify};
     -ms-justify-content: ${justify};
         justify-content: ${justify};
           -ms-flex-pack: ${justify};
  `
  }


  // align-content
export const align_content = (align) => {
 
    return `
    -webkit-align-content: ${align};
    -moz-align-content: ${align};
     -ms-align-content: ${align};
         align-content: ${align};
  `
  }

// Cross-axis Alignment
export const align_items = (align) => {
 
    return `
    -webkit-align-items: ${align};
    -moz-align-items: ${align};
     -ms-align-items: ${align};
         align-items: ${align};
  `
  }
 
// transform
// Browser Prefixes
export const transform = (transform) => {
 
    return `
	-webkit-transform: ${transform};
	-moz-transform: ${transform};
	-ms-transform: ${transform};
	transform: ${transform};
  `
  }
// // Translate
// export const translate = (x , y) => {
 
//     return `
//     ${transform(translate(x, y))};
//   `
//   }
// // TranslateY
export const translateY = (y) => {
 
    return `
    ${transform(translateY(y))};
  `
  }
// // TranslateY
// export const translateX = (x) => {
 
//     return `
//     ${transform(translateX(x))};
//   `
//   }

// Box shadows
export const box_shadow = (shadow) => {
 
    return `
    -webkit-box-shadow: ${shadow};
    -moz-box-shadow: ${shadow};       
         box-shadow: ${shadow};
  `
  }
 


  export const background = (imgpath,position,size,repeat) => {

    return `
    background: {
        image: url(${imgpath});
        position: ${position};
        repeat: ${repeat};
        size: ${size};
    }
  `
  }

  
  export const transform_time = (total_time) => {
 
    return `
    -webkit-transition: ${total_time};
    transition: ${total_time};
  `
  }
 

  export const border_radius = (man) => {
 
   return `
   -webkit-border-radius: ${man};
   -moz-border-radius: ${man};
   border-radius: ${man};
 `
 }


  