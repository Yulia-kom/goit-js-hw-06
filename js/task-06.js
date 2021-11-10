let input = document.getElementById("validation-input");

input.onblur = function () {
    const length = parseInt(this.getAttribute('data-length'));

    if (length === this.value.length) {
        this.classList.remove('invalid');
        this.classList.add('valid');
    }
    else {
        this.classList.remove('valid');
        this.classList.add('invalid');
    }
};


