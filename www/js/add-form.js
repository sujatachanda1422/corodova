window.addEventListener('load', function () {
    var forms = $('.needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            // if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            // }
            form.classList.add('was-validated');

            console.log("Data = ", $(form).serialize(), $(form).serializeArray())
        }, false);
    });

}, false);