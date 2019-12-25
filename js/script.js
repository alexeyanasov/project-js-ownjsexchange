document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    const customer = document.getElementById('customer');
    const freelancer = document.getElementById('freelancer');
    // console.log(customer, freelancer);

    const blockCustomer = document.getElementById('block-customer');
    const blockFreelancer = document.getElementById('block-freelancer');
    // console.log(blockCustomer, blockFreelancer);

    const blockChoice = document.getElementById('block-choice');
    const btnExit = document.getElementById('btn-exit');

    // Получение формы
    const formCustomer = document.getElementById('form-customer');
    // Массив заказа
    const orders = [];

    customer.addEventListener('click', () => {
        blockChoice.style.display = 'none';
        blockCustomer.style.display = 'block';
        btnExit.style.display = 'block';
    });

    freelancer.addEventListener('click', () => {
        blockChoice.style.display = 'none';
        blockFreelancer.style.display = 'block';
        btnExit.style.display = 'block';
    });

    btnExit.addEventListener('click', () => {
        btnExit.style.display = 'none';
        blockFreelancer.style.display = 'none';
        blockCustomer.style.display = 'none';
        blockChoice.style.display = 'block';
    });

    formCustomer.addEventListener('submit', (e) => {
        e.preventDefault();
        const obj = {};
        
        for(const elem of formCustomer.elements){
            // Фильтруем все input-ы
            if((elem.tagName === 'INPUT' && elem.type !== 'radio') || (elem.type === 'radio' && elem.checked) || elem.tagName === 'TEXTAREA'){
                // console.dir(elem);
                obj[elem.name] = elem.value;
            }
            // console.log(obj);

            // Очищение формы
            if(elem.type !== 'radio'){
                elem.value = '';
            }
        }

        // Сохраняем в виде массива объект заказа
        orders.push(obj);
        console.log(orders);
        
    });
})