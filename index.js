fetch("https://jsonplaceholder.typicode.com/users").then(function (data) {
    // console.log(data);
    return data.json(); // converting to object
}).then(function (DataOfObject) {
    console.log(DataOfObject[0].id);
    var tableData = "";
    DataOfObject.map(function (values) {
        tableData += "<tr>\n        <td> ".concat(values.id, " </td>\n        <td> ").concat(values.name, " </td>\n        <td> ").concat(values.username, " </td>\n        <td> ").concat(values.email, " </td>\n        <td> ").concat(values.phone, " </td>\n        <td>  ").concat(values.website, " </td>\n        <td>  ").concat(values.company.name, " </td>\n        <td>  ").concat(values.company.catchPhrase, " </td>\n        <td>  ").concat(values.company.bs, " </td>\n\n        </tr>");
    });
    document.getElementById("table_body").innerHTML = tableData; // used ! because of 
    //  No Null values 
});
