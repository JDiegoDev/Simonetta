export const mealsStates = [
    {
        label: 'Desayunos',
        value: 'breakfast',
        mealType: [
            {
                title: 'Lo Dulce',
                value: 'sweet',
                meals: [
                    {
                        label: 'Yogurt con Frutos rojos',
                        value: 'yogurt',
                        detail: 'Bowl de yogurt griego, frutos rojos y crumble de vainilla hecho en casa.',
                    },
                    {
                        label: 'Parfait de Manzana Chia',
                        value: 'parfait',
                        detail: 'Pudin de chia en leche de almendras, cubos de manzana caramelizada, queso cottage y granola.',
                    },
                    {
                        label: 'Acai Bowl',
                        value: 'acai',
                        detail: 'Base de fruta de acai con toppings de platano, fresa, mango, cacao nibs y coco rallado.',
                    },
                    {
                        label: 'French Toast',
                        value: 'pancakes',
                        detail: 'Esponjoso pan brioche sellao en mix de la casa, bañado de coulis de frutos rojos, crema batida y crumble de vainilla',
                    },
                    {
                        label: 'Fluffy Pancakes',
                        value: 'fluffy',
                        detail: 'Hot cakes super esponjosos acompañados de coulis de frutos rojos, pistache de miel de maple y crema batida de la casa. ',
                    },
                ]
            }, 
            {
                title: 'Lo Salado',
                value: 'main-meals',
                meals: [
                    {
                        label: 'Avo Toast',
                        value: 'avotoast',
                        detail: 'Pan de masa madre con flores de aguacate, jitomate rostizado, arugula y huevo ponchado.',
                    },
                    {
                        label: 'Bagel de Salmon',
                        value: 'bagel',
                        detail: 'Bagel de queso parmesano, queso crema de sriracha, arugula baby y salmom curado de la casa.',
                    },
                    {
                        label: 'Croque Madame/Monsieur',
                        value: 'croque',
                        detail: 'Capas de pan brioche con jamon, queso grouyere bañadas en salsa monray y a elegir tocino o huevo.',
                    },
                    {
                        label: 'American Brioche',
                        value: 'american-brioche',
                        detail: 'Sandwich de pan de camote con huevo revuelto, cebolla caramelizada, queso cheddar , tocino y cebolin.',
                    },
                    {
                        label: 'Omelette Healthy',
                        value: 'omelette',
                        detail: 'Omelette relleno de champiñon, espinaca y cebolla. Acompañados de esparragos a la plancha.',
                    },
                    {
                        label: 'Steak & Eggs',
                        value: 'steak-&-eggs',
                        detail: 'Jugoso Rib-Eye al término de elección, fileteado, acompañado de dos huevos estrellados y papas cambray de la casa.',
                    }
                ]
            }, 
            {
                title: 'Especiales de la Casa',
                value: 'specials',
                meals: [
                    {
                        label: 'Omelette Simonetta',
                        value: 'omelette-simonetta',
                        detail: 'Omelette relleno de chilaquiles verdes y jocoque bañado en salsa mornay de quesos.',
                    },
                    {
                        label: 'Huevos Cazuela',
                        value: 'Bowl Especial Simone',
                        detail: 'Bowl con huevo revuelto, papa cambray, tocino, salchicha italiana, queso cheddar, cebollin y cebolla caramelizada con un toque de salsa de tomate.',
                    },
                    {
                        label: 'Chicken & Waffles',
                        value: 'chicken-&-waffles',
                        detail: 'Pechuga estilo kentucky sobre un delicoso waffle estilo belga y maple de la casa.',
                    },
                    {
                        label: 'Huevos Benedictinos',
                        value: 'benedicts',
                        detail: 'Huevos ponchados sobre pan brioche acompañados de lomo canadiense o salmón bañados en salsa holandesa.',
                    },
                ]
            },
            {
                title: 'Clasicos',
                value: 'others',
                meals: [
                    {
                        label: 'Enchiladas Suizas',
                        value: 'enchiladas',
                        detail: 'Enchiladas rellenas de pollo bañadas en salsa especial suiza de habanero con gratin de queso, crema y cebollitas encurtidas.',
                    },
                    {
                        label: 'Chilaquiles',
                        value: 'chilaquiles',
                        detail: 'Tradicionales chilaquiles con pollo rojos o verdes, queso gratinado, crema y cebollitas encurtidas.',
                    },
                    {
                        label: 'huevos al gusto',
                        value: 'egg-choice',
                        detail: 'Acompañados de papas cambray y frijoles.',
                    },
                    {
                        label: 'Grilled cheese sandwich',
                        value: 'grilled-cheese',
                        detail: 'Sandwich de pan de masa madre relleno de queso cheddar y manchego derretido, acompañados  de sopa de tomate para choppear.',
                    },
                    {
                        label: 'Molletes',
                        value: 'molletes',
                        detail: 'Pan chapata con frijol refrito, queso manchego derretido y proteina a elegir.',
                    },
                ]
            }
        ]
    },
    {
        label: 'Comidas y Cenas',
        value: 'dinners',
        mealType: [
            {
                title: 'Entradas',
                value: 'starters',
                meals: [
                    {
                        label: 'Oyters',
                        value: 'oysters',
                        detail: '6 piezas de ostion fresco en su concha, acompañado de rasurado de la casa y salsa negra de haberno.',
                    },
                    {
                        label: 'Coliflor Rostizada',
                        value: 'cauliflower',
                        detail: 'Sobre espejo de mayo kosho, con cacahuate tostado, hojas de perejil frito, parmesano, aceite de trufa y rayadura de limon.',
                    },
                    {
                        label: 'Coles de Bruselas',
                        value: 'brussel-sprouts',
                        detail: 'fritas acompañadas de pimientos de colores, cebolla morada, cacahuate tostado y salsa de naranja de la casa spicy.',
                    },
                    {
                        label: 'Torre de Atun',
                        value: 'tuna-tower',
                        detail: 'Mix de aguacte, mango y atun freso marinados en ponzu y rasurado de la casa, pepino persa, pistache, salsa kabayaki y poro frito.',
                    },
                    {
                        label: 'Carpaccio de Betabel',
                        value: 'carpaccio',
                        detail: 'Betabel con reducción de vino tinto, mayo, ceniza trufada, parmesano, arugula baby y pistache.',
                    }
                ]
            },
            {
                title: 'Sopas',
                value: 'soups',
                meals: [
                    {
                        label: 'Jitomate Rostizado',
                        value: 'tomato-soup',
                        detail: 'Con lluvia de crema y jitomate rostizado.',
                    },
                    {
                        label: 'Crema de Alacachofa',
                        value: 'artichoke-soup',
                        detail: 'Hecha con receta tradicional, acompañada de croutones al ajo.',
                    }
                ]
            },
            {
                title: 'Ensaladas',
                value: 'saladas',
                meals: [
                    {
                        label: 'Simonetta',
                        value: 'simonetta-salad',
                        detail: 'Mix de Lechugas, supremas de mandarina, queso de cabra, nuez caramelizaday aderezo honey mustard.',
                    },
                    {
                        label: 'César',
                        value: 'ceasar-salad',
                        detail: 'Laminas de Lechuga, parmesano, crutones y aderezo cesar hecho en casa.',
                    },
                    {
                        label: 'Griega',
                        value: 'greek-salad',
                        detail: 'Mix de lechugas con espinaca baby, vinagreta de balsamico, pepino persa, queso feta, alcaparras asadas, jitomate, aceituna negra y cebolla morada.',
                    },
                    {
                        label: 'Burrata',
                        value: 'burrata',
                        detail: 'Arugula baby, aderezo balsamico trufado, ate de guayaba y pistache tostado.',
                    }
                ]
            },
            {
                title: 'Pastas',
                value: 'pastas',
                meals: [
                    {
                        label: 'Fetuccini Trufado',
                        value: 'fetuccini',
                        detail: 'En salsa de quesos al tartufo, trufa de verano y parmesano.',
                    },
                    {
                        label: 'Parpadelle de Short Rib',
                        value: 'parpadelle',
                        detail: 'Pasta al dente con short rib en salsa roja de vodka cocinada por 8+hrs.',
                    },
                ]
            },
            {
                title: 'Fuertes',
                value: 'main-course',
                meals: [
                    {
                        label: 'Pulpo Rostizado',
                        value: 'octupus',
                        detail: 'Con Salsa especial de Sriracha no picante, en cama de puré de papa chipotle, pepita tostada, ceniza de tortilla y arugula baby.',
                    },
                    {
                        label: 'Pesca del día',
                        value: 'fish',
                        detail: 'Sobre cama de endivias bañadas en esquisita salsa meuniere con ralladura de limo, echalotte y alcaparras.',
                    },
                    {
                        label: 'Salmone Simone',
                        value: 'salmon',
                        detail: 'Salmon blackened sobre cama de risotto falso, esparragos asados y gotas de aceite verde. ',
                    },
                    {
                        label: 'Pechuga Organica',
                        value: 'organic-chicken',
                        detail: 'Pechuga de pollo organica, sobre un espejo de cremoso balsamico, acompañado de zanahoria y papa romero, quenelle de jocoque de semillas-',
                    },
                    {
                        label: 'Tacos de Rib Eye',
                        value: 'rib-eye-tacos',
                        detail: 'Cuatro piezas de taco de rib eye en tortilla de harina con constra de queso manchego y espejo en salsa.',
                    },
                    {
                        label: 'Steak and Fries',
                        value: 'steak-and-fries',
                        detail: 'Jugoso Rib Eye al termino de elección, fileteado y acompañado de papas a la francesa trufadas, demi-glace de res y poro frito.',
                    },
                    {
                        label: 'Camarones Crunchy',
                        value: 'shrimps',
                        detail: 'Tempurizados y bañados en salsa especial de mayo miel, sriracha puestos en cama de lechuga francesa y ajonjoli negro.',
                    },
                ]
            },
            {
                title: 'Bowls',
                value: 'bowls',
                meals: [
                    {
                        label: 'Bowl Oriental',
                        value: 'bowl-oriental',
                        detail: 'Pechuga de pollo marinada en salsa de naranja de la casa, arroz gohan, germen de soya, pimiento morron, aceite de ajonjoli, cacahuate, y jicama frita.'
                    },
                    {
                        label: 'Super Food Bowl',
                        value: 'super-food-bowl',
                        detail: 'Mix de quinoa roja y amarailla, espinaca baby, pepino persa, cebolla morada, falafel hecho en casa, agacuate, cacahuate tostado y vinagreta de balsamico mango-vainilla.'
                    },
                    {
                        label: 'Poke Bowl',
                        value: 'poke-bowl',
                        detail: 'Elige atun o salmon, marinado en ponzu. Sobre un arroz gohan, edamames asados, perlas de queso crema, aguacte cebolla frita y mayo chipotle.'
                    },
                    {
                        label: 'Tex Mex Bowl',
                        value: 'tex-mex-bowl',
                        detail: 'Arrachera marinada en salsa agridulce sobre arroz, acompañado de elote, julianas de tortilla, cubos de camote y guacamole.'
                    },
                ]
            },
            {
                title: 'Sandwiches',
                value: 'sandwiches',
                meals: [
                    {
                        label: 'Classic Cheeseburger',
                        value: 'cheeseburger',
                        detail: 'Receta tradicional con queso cheddar, lechuga, cebolla morada, jitomate y papas a la francesa.',
                    },
                    {
                        label: 'Ceasar Salad Sandwich',
                        value: 'ceasar-salad-sandwich',
                        detail: 'Pan chapata, mix de lechugas, pechuga en cubos, y parmesano aderezado con cesar hecho en casa.',
                    },
                    {
                        label: 'Grilled Cheese Sandwich',
                        value: 'grilled-cheese-sandwich',
                        detail: 'Sandwich de pan de masa madre relleno de cheddar, queso manchego y grouyere derretidos acompañado de sopa de toamte para choppear.',
                    },
                ]
            }
        ],
    },
    {
        label: 'All Day',
        value: 'allDay',
        mealType: [
            {
                title: '',
                value: 'all-day',
                meals: [
                    {
                        label: 'Grilled Cheese Sandwich',
                        value: 'grilled-cheese-sandwich',
                        detail: 'Sandwich de pan de masa madre relleno de cheddar, queso manchego y grouyere derretidos acompañado de sopa de toamte para choppear.',
                    },
                    {
                        label: 'French Toast',
                        value: 'pancakes',
                        detail: 'Esponjoso pan brioche sellao en mix de la casa, bañado de coulis de frutos rojos, crema batida y crumble de vainilla',
                    },
                    {
                        label: 'Chicken & Waffles',
                        value: 'chicken-&-waffles',
                        detail: 'Pechuga estilo kentucky sobre un delicoso waffle estilo belga y maple de la casa.',
                    },

                ]
            }
        ],
    },
    {
        label: 'Postres',
        value: 'dessert',
        mealType: [],
    },
    {
        label: 'Cocktails & Drinks',
        value: 'cocktails',
        mealType: [
        ],
    }
];