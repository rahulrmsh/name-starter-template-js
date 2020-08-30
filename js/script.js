document.querySelector('#submit').addEventListener('click', function() {
    var inputValue = document.querySelector('#listText').value;
    if (inputValue !== null && inputValue !== null && inputValue !== undefined && inputValue !== 0 && inputValue !== "" && inputValue !== false && inputValue !== NaN) {
        var innerDiv = document.createElement('div');
        innerDiv.className = 'container-md themed-container text-muted';
        innerDiv.id = listKey;
        innerDiv.style = colorList[numKey];
        innerDiv.innerHTML = (listKey + 1) + '.\t' + inputValue;
        document.querySelector('#listKey').appendChild(innerDiv);
        document.querySelector('#listText').value = '';
        if (numKey < 5) {
            numKey++;
        } else {
            numKey = 0;
        }
        listKey++;
    }
})

document.querySelector('#reset').addEventListener('click', function() {
    document.querySelector('#listKey').innerHTML = '';
    numKey = 0;
})