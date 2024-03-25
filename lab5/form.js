var FormA = [ 
    { label: 'Город: ', elemtype:'text1line', name:'city', width:200 }, 
    { label: 'Доставка: ', elemtype:'check', name:'delivery' },
    { label: 'Email: ', elemtype:'email', name:'email', width: 200 },
    { label: 'Пароль: ', elemtype:'password', name:'password', width:200 },
    { label: 'Дата: ', elemtype:'date', name:'date' },
    { label: 'Дополнительная информация: ', elemtype:'textarea', name:'textarea', rows: 4, cols: 50 },
    { label: 'Заказ: ', elemtype:'select', name:'select', options: ['Парацетомол', 'Ибупрофен', 'Аспирин', 'Омепразол', 'Левотироксин'] },
    { label: 'Отослать: ', elemtype:'button', value:'Send' }
];

function createDynamicForm(formArray) {
    var formContainer = document.getElementById('formContainer');
    var form = document.createElement('form');

    formArray.forEach(function(element) {
        var field;

        switch (element.elemtype) {
            case 'text1line':
            case 'email':
            case 'password':
            case 'date':
                field = document.createElement('input');
                field.type = element.elemtype;
                field.name = element.name;
                field.style.width = element.width + 'px' || 'auto';
                break;
            case 'check':
                field = document.createElement('input');
                field.type = 'checkbox';
                field.name = element.name;
                break;
            case 'textarea':
                field = document.createElement('textarea');
                field.name = element.name;
                field.rows = element.rows || 2;
                field.cols = element.cols || 20;
                break;
            case 'select':
                field = document.createElement('select');
                field.name = element.name;
                element.options.forEach(function(optionText) {
                    var option = document.createElement('option');
                    option.text = optionText;
                    field.add(option);
                });
                break;
            case 'button':
                field = document.createElement('input');
                field.type = 'submit';
                field.value = element.value;
                break;
            default:
                console.error('Unknown element type: ' + element.elemtype);
                return;
        }

        var label = document.createElement('label');
        label.innerHTML = element.label;

        form.appendChild(label);
        form.appendChild(field);
        form.appendChild(document.createElement('br'));
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        var emailField = form.querySelector('input[name="email"]');
        var passwordField = form.querySelector('input[name="password"]');

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            alert('Please enter a valid email address.');
            return;
        }

        var password = passwordField.value;
        if (password.length < 4 || password.length > 12) {
            alert('Password must be between 4 and 12 characters.');
            return;
        }
        alert('Form submitted successfully!');
    });

    formContainer.appendChild(form);
}

document.addEventListener("DOMContentLoaded", function() {
    createDynamicForm(FormA);
});
