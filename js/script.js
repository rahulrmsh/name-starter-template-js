var speedCount = 0;
document.querySelector('#submit').addEventListener('click', function() {
    var inputValue = document.querySelector('#listText').value;
    if (inputValue !== null && inputValue !== null && inputValue !== undefined && inputValue !== 0 && inputValue !== "" && inputValue !== false && inputValue !== NaN) {
        document.querySelector('.wrapper').innerHTML = '';
        for (var i = 0; i < inputValue.length; i++) {
            speedCount += 120;
            var animationSpeed = 'animation-delay: ' + speedCount + 'ms;';
            var innerSpan = document.createElement('span');
            innerSpan.style = animationSpeed;
            innerSpan.innerHTML = inputValue.charAt(i);
            document.querySelector('.wrapper').appendChild(innerSpan);
            document.querySelector('#listText').value = '';
        }
    }
})