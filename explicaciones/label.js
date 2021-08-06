let array1 = ["Maria", "Josefa", "Roberta"];
let array2 = ["Pedro", "Marcelo", array1, "Josefina"];

esteFor:
for (let array in array2) {
    if(array == 2) {

        for(let array of array1) {
            if(array == 1) {
                console.log(array)
                continue esteFor;
            }
            
        }
    } else {
        console.log(array2[array])
    }
}