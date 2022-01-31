// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

let colors =["blue","red","green"]

for ( let index = 0; index < colors.length; index++){
    
        const element = colors[index];
        // console.log (element)
        let suffix

        switch (index){
            case 0:
                suffix = "st"
                break; 
                
             case 1:
                suffix = "nd"
             break;
            
             case 2:
                suffix = "rd"
             break;
             default:
                suffix = "th"
             break;
        }
        console.log(`my ${index+1}${suffix} favorite color is ${element}`)

    }