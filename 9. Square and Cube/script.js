function calcsqrcube() {
    let result = "<table border='1'><tr><th>Number</th><th>Square</th><th>Cube</th></tr>";

    for (let i=0; i<11; i++) {
        let square = i*i;
        let cube = i*i*i;

        result += "<tr><td>"+i+"</td><td>"+square+"</td><td>"+cube+"</td></tr>";
    }

    result+="</table>";

    return result;
}

document.body.innerHTML = calcsqrcube();