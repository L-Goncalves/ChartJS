 let myChart = document.getElementById('myChart').getContext('2d');
        

        let masspopChart = new Chart(myChart,{
            type: 'pie', // os Tipos de Gráfico podem ser bar, horizontalBar, pie, doughnut, radar, polarArea 
            data:{

                // labels das Cidades
                labels:[
                    'São Paulo (Capital)',
                    'Guarulhos', 
                    'Campinas',
                    'São Bernardo do Campo',
                    'Santo André',
                    'São José dos Campos',
                    'Osasco'

                ],

                datasets:[{
                    label:'',
                    data:[
                        12.106, // São Paulo(Capital)
                        1.349, // Guarulhos 
                        1.182, // Campinas
                        0.827, // São Bernardo do Campo
                        0.715, // Santo André
                        0.703,  // São José dos Campos
                        0.697 // Osasco


                    ],
                    // Para cor única é só descomentar isso aqui e comentar o array abaixo
                    // backgroundColor: 'black'
                    backgroundColor: [
                        '#1395BA',
                        '#006699',
                        '#6E4373',
                        '#FF7F0E',
                        '#2CA02C',
                        '#063951',
                        '#FEF400',

                    ]
                }]
            },

            options:{
                
                title:{
                    display: false,
                    text:'Maiores cidades em São Paulo',
                    fontSize: 20,
                    
                },
                legend:{
                    position:'right',
                    labels:{
                        fontColor: '#000'
                    }
                }
                   
                
                
            }          

        });