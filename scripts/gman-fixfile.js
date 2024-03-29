var fs = require('fs')
fs.readFile('download.txt', {encoding: 'utf-8'}, function(err, data) {
    if (err) throw error;

    let dataArray = data.split('\n'); // convert file data in an array
    const searchKeyword = '//'; // we are looking for a line, contains, key word 'user1' in the file
    let lastIndex = -1; // let say, we have not found the keyword

    for (let index=0; index<dataArray.length; index++) {
        if (dataArray[index].includes(searchKeyword)) { // check if a line contains the 'user1' keyword
            lastIndex = index; // found a line includes a 'user1' keyword
            break; 
        }
    }

    dataArray.splice(lastIndex, 1); // remove the keyword 'user1' from the data Array

    // UPDATE FILE WITH NEW DATA
    // IN CASE YOU WANT TO UPDATE THE CONTENT IN YOUR FILE
    // THIS WILL REMOVE THE LINE CONTAINS 'user1' IN YOUR shuffle.txt FILE
    const updatedData = dataArray.join('\n');
    fs.writeFile('nocomment.txt', updatedData, (err) => {
        if (err) throw err;
        console.log ('Successfully updated the file data');
    });

});