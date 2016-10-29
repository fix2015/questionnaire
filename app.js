angular.module('angularApp', ['ui.router','questions'])
    .constant('listOfQuestion', [
        {
            text: "We need your address to confirm our best offer",
            questions: [
                {
                    id: "21",
                    type: 'text',
                    text: "I live in __&__",
                    name: 'address',
                    valid: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/,
                    datalist:[
                        'Ukraine',
                        'Russia',
                        'USA',
                        'Britain',
                        'Swed',
                    ]
                },
                {
                    id: "22",
                    type: 'text',
                    text: "My zip code is __&__",
                    name: 'zip',
                    valid: /(^\d{5}$)|(^\d{5}-\d{4}$)/
                }
            ]
        },
        {
            text: "RocketRoute would like to give you the best product. This survey will take few seconds.",
            questions: [
                {
                    id: "11",
                    type: 'text',
                    text: "My name is __&__",
                    name: 'name',
                    valid: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/,
                    length: '3255'
                },
                {
                    id: "12",
                    type: 'text',
                    text: "I’m using __&__ email",
                    name: 'email',
                    valid: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                },
                {
                    id: "13",
                    text: "And my phone number is __&__",
                    type: 'text',
                    valid: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/
                }
            ]
        },
        {
            text: "These answers provides deeper insights to craft something special",
            questions: [
                {
                    id: "31",
                    type: 'text',
                    text: "My family makes $__&__ per year",
                    name: 'money',
                    valid: /^[0-9]\d*$/,
                },
                {
                    id: "32",
                    type: 'select',
                    text: "There is __&__ person in my tax household",
                    name: 'peson',
                    valid: /^[0-9]$/,
                    datalist:[
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10
                    ]
                }
            ]
        }


    ])