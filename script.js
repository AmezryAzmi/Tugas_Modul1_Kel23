
console.log(myData)


function getSearch () {
    const getInput = document.getElementById("inputText");

    const element = myData.filter((el) =>
        el.nama_lengkap.toLowerCase().includes(getInput.value.toLowerCase())
    );

    let data = document.getElementById("element-data")

    if (getInput.value === '' || element.length === 0) {
        data.innerHTML = 'There is nothing in here'
    } else {
        render(element)
    }
}
