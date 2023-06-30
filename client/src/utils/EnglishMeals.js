export const englishMealsStates = [
    {
        label: 'Breakfast',
        value: 'breakfast',
        mealType: [
            {
                title: 'Sweet',
                value: 'sweet',
                meals: [
                    {
                        label: 'Berries Yogurt',
                        value: 'yogurt',
                        detail: 'Greek yogurt bowl with berries and vanilla crumble',
                    },
                    {
                        label: 'Apple Chia Parfait',
                        value: 'parfait',
                        detail: 'Chia pudding with almond milk, caramelized apple, cottage cheese and granola',
                    },
                    {
                        label: 'Acai Bowl',
                        value: 'acai',
                        detail: 'Acai sorbet topped with banana, strawberry, mango, cocoa nibs and grated coconut',
                    },
                    {
                        label: 'French Toast',
                        value: 'pancakes',
                        detail: 'Fluffy brioche bread topped with berries, whipped cream and vanilla crumble',
                    },
                    {
                        label: 'Fluffy Pancakes',
                        value: 'fluffy',
                        detail: 'Super fluffy pancakes topped with berries coulis , pistachio, maple syrup, and whipped cream',
                    },
                ]
            }, 
            {
                title: 'Plates',
                value: 'main-meals',
                meals: [
                    {
                        label: 'Avo Toast',
                        value: 'avotoast',
                        detail: 'Sourdough bread, candied tomatos, baby arugula and poached eggs. ',
                    },
                    {
                        label: 'Salmon Bagel',
                        value: 'bagel',
                        detail: 'Parmesan cheese bagel, sriracha cream cheese, baby arugula and salmon',
                    },
                    {
                        label: 'Croque Madame/Monsieur',
                        value: 'croque',
                        detail: 'Brioche bread layers with ham, grouyere cheese, served with mornay sauce. Choose beetween egg or bacon.',
                    },
                    {
                        label: 'American Brioche',
                        value: 'american-brioche',
                        detail: 'Brioche bread sandwich, scrambled eggs, caramelized onions, cheedar cheese, bacon and fresh chives.',
                    },
                    {
                        label: 'Healthy Omellete',
                        value: 'omelette',
                        detail: 'Omellete stuffed with mushrooms, spinach and onions served with grilled asparagus bathed in green sauce.',
                    },
                    {
                        label: 'Steak & Eggs',
                        value: 'steak-&-eggs',
                        detail: 'Rib eye served with two sunny side up eggs and home made cambray potatos.',
                    }
                ]
            }, 
            {
                title: 'Specials',
                value: 'specials',
                meals: [
                    {
                        label: 'Simonetta Omellete',
                        value: 'omelette-simonetta',
                        detail: 'Omellete stuffed with green sauce chilaquiles, sour cream, bathed with mornay cheese sacue',
                    },
                    {
                        label: 'Cazuela Eggs',
                        value: 'Bowl Especial Simone',
                        detail: 'Poached o scrambled  eggs, bathed with special red sauce served with buttery potatoes, sour cream and manchego cheese  ',
                    },
                    {
                        label: 'Chicken & Waffles',
                        value: 'chicken-&-waffles',
                        detail: 'Kentucky style fried chicken served with belgian waflles and house maple syrup',
                    },
                    {
                        label: 'Benedicts',
                        value: 'benedicts',
                        detail: 'Poached eggs on top on brioche bread served with canadian bacon or salmon bathed in hollandaise sauce.',
                    },
                ]
            },
            {
                title: 'Classics',
                value: 'others',
                meals: [
                    {
                        label: 'Enchiladas Suizas',
                        value: 'enchiladas',
                        detail: 'Shredded chicken Enchiladas bathed in home made swiss habanero sauce topped with melted cheese, sour cream and pickled onion.',
                    },
                    {
                        label: 'Chilaquiles',
                        value: 'chilaquiles',
                        detail: 'Traditional chilaquiles served with chicken bathed in red or green sauce, melted cheese, sour cream, picked onions.',
                    },
                    {
                        label: 'Eggs any style',
                        value: 'egg-choice',
                        detail: 'Eggs of your chioice served with cambray potatos and fried beans.',
                    },
                    {
                        label: 'Grilled cheese sandwich',
                        value: 'grilled-cheese',
                        detail: 'Sourdough bread stuffed with cheedar cheese, manchego cheese, grouyere cheese, served with tomato soup to chop.',
                    },
                    {
                        label: 'Molletes',
                        value: 'molletes',
                        detail: 'Ciabatta bread with beans, melted manchego cheese and protein of your choise. Chorizo, ham or tocino.',
                    },
                ]
            }
        ]
    },
    {
        label: 'Lunch & Dinner',
        value: 'dinners',
        mealType: [
            {
                title: 'Starters',
                value: 'starters',
                meals: [
                    {
                        label: 'Oytsers',
                        value: 'oysters',
                        detail: '6 pieces of fresh oysters on the shell , served with house made sauce and black habanero sacue.',
                    },
                    {
                        label: 'Rousted Cauliflower',
                        value: 'cauliflower',
                        detail: 'Cauliflower on top of kosho mayo served with toasted nuts, fried parsley, parmesan chees slice and lemon zest.'
                    },
                    {
                        label: 'Brussels Sprouts',
                        value: 'brussel-sprouts',
                        detail : 'Fried brussel sprouts served with grilled peppers, onions, toasted nuts and house made spicy sauce.'
                    },
                    {
                        label: 'Tuna Tower',
                        value: 'tuna-tower',
                        detail: 'Avocado, mango and tuna mix marinated in ponzu sauce, cucumber, pistachio, kabayaki sacue topped with fried leeks.'
                    },
                    {
                        label: 'Beetroot Carpaccio',
                        value: 'carpaccio',
                        detail : 'Beetroot with red wine reduction, truffle mayo, parmensan cheese slice, baby aurugula and pitachio.'
                    }
                ]
            },
            {
                title: 'Soups',
                value: 'soups',
                meals: [
                    {
                        label: 'Roasted Tomato',
                        value: 'tomato-soup',
                        detail: 'Classic tomato soup topped with cream.',
                    },
                    {
                        label: 'Onion soup',
                        value: 'onion-soup',
                        detail: 'The traditional onion soup recipe.',
                    }
                ]
            },
            {
                title: 'Salads',
                value: 'saladas',
                meals: [
                    {
                        label: 'Simonetta',
                        value: 'simonetta-salad',
                        detail: 'Lettucce mix, acompanied with tangerine, goat cheese, caramelized nuts served with honey mustard dressing.'
                    },
                    {
                        label: 'Caesar Salad',
                        value: 'caesar-salad',
                        detail: 'Romain lettuce, parmesan cheese, croutons and house made classic caesar dessing.'
                    },
                    {
                        label: 'Greek Salad',
                        value: 'greek-salad',
                        detail: 'Lettuce Mix, spinach, balsamic vinaigrette, cucumber, feta cheese, grilled capers, tomato topped with black olives and purple onions. '
                    },
                    {
                        label: 'Burrata',
                        value: 'burrata',
                        detail: 'Baby arugula, truffed balsamic dressing, guava paste and toasted pistachio.'
                    }
                ]
            },
            {
                title: 'Pasta',
                value: 'pastas',
                meals: [
                    {
                        label: 'Truffle Fetuccini',
                        value: 'fetuccini',
                        detail: 'Fetuccini pasta with cheese cream and parmesan.'
                    },
                    {
                        label: 'Short Rib Parpadelle',
                        value: 'parpadelle',
                        detail: 'Parpadelle pasta served with shredded short rib cooked in vodka sauce.'
                    },
                ]
            },
            {
                title: 'Main Plates',
                value: 'main-course',
                meals: [
                    {
                        label: 'Roasted Octupus',
                        value: 'octupus',
                        detail: 'Con Salsa especial de Sriracha no picante, en cama de puré de papa chipotle, pepita tostada, ceniza de tortilla y arugula baby.',
                        detail: 'Served with non spicy Sriracha, on top of chipotle mash potato mix, topped with tortillas bites and arugula baby'
                    },
                    {
                        label: 'Pesca ',
                        value: 'fish',
                        detail: 'Fish on top of endive bathed with meuniere sauce, lemon zest, shallot and capers'
                    },
                    {
                        label: 'Salmon',
                        value: 'salmon',
                        detail: 'Blackened Salmon served with grilled asparagus on top of a parmesan fake rissoto.',
                    },
                    {
                        label: 'Grilled Chicken',
                        value: 'organic-chicken',
                        detail: 'Pechuga de pollo organica, sobre un espejo de cremoso balsamico, acompañado de zanahoria y papa romero, quenelle de jocoque de semillas-',
                        detail: 'Grilled chicken on top of balsamic cream, served with carrots and cambray potatos.'
                    },
                    {
                        label: 'Rib Eye Tacos',
                        value: 'rib-eye-tacos',
                        detail: 'Rib Eye tacos served in flour tortilla with melted machego cheese on top creamy green sauce.',
                    },
                    {
                        label: 'Steak and Fries',
                        value: 'steak-and-fries',
                        detail: 'Rib Eye steak served with truffle fries topped with fried leek',
                    },
                    {
                        label: 'Crunchy Shrimps',
                        value: 'shrimps',
                        detail: 'Tempurizados y bañados en salsa especial de mayo miel, sriracha puestos en cama de lechuga francesa y ajonjoli negro.',
                        detail: 'Tempurized shrimp bathed in house made chipotle mayo topped with black sesame.',
                    },
                ]
            },
            {
                title: 'Bowls',
                value: 'bowls',
                meals: [
                    {
                        label: 'Oriental Bowl',
                        value: 'bowl-oriental',
                        detail: 'Grilled chicken marinated in house made orange sauce served with gohan style rice, peppers, sesame oil, nuts and fried jicama.'
                    },
                    {
                        label: 'Super Food Bowl',
                        value: 'super-food-bowl',
                        detail : 'Quinoa mix, baby spinach, persa cucumber, purple onion served with falafel, avocado and toasted nuts.'
                    },
                    {
                        label: 'Poke Bowl',
                        value: 'poke-bowl',
                        detail: 'Tuna or Salmom served with gohan style rice, grilled edamame, cream cheese, fried onions topped with chipotle mayo.'
                    },
                    {
                        label: 'Tex Mex Bowl',
                        value: 'tex-mex-bowl',
                        detail: 'Arrachera served with rice, corn, tortilla bites, sweet potato topped with guacamole.'
                    },
                ]
            },
            {
                title: 'Sandwichs',
                value: 'sandwiches',
                meals: [
                    {
                        label: 'Classic Cheeseburger',
                        value: 'cheeseburger',
                        detail: 'Original cheesburger served with truffle fries.',
                    },
                    {
                        label: 'Caesar Salad Sandwich',
                        value: 'ceasar-salad-sandwich',
                        detail: 'Ciabatta bread sandwich with grilled chicken, parmesan cheese and house made caesar dressing.',
                    },
                    {
                        label: 'Grilled Cheese Sandwich',
                        value: 'grilled-cheese-sandwich',
                        detail: 'Sourdough bread stuffed with cheedar cheese, manchego cheese, grouyere cheese, served with tomato soup to chop.',

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
                        detail: 'Sourdough bread stuffed with cheedar cheese, manchego cheese, grouyere cheese, served with tomato soup to chop.',
                    },
                    {
                        label: 'French Toast',
                        value: 'pancakes',
                        detail: 'Fluffy brioche bread topped with berries, whipped cream and vanilla crumble',
                    },
                    {
                        label: 'Chicken & Waffles',
                        value: 'chicken-&-waffles',
                        detail: 'Kentucky style fried chicken served with belgian waflles and house maple syrup',
                    },

                ]
            }
        ],
    },
    {
        label: 'Cocktails & Drinks',
        value: 'cocktails',
        mealType: [
            {
                title: '',
                value: 'cocktail-and-drinks',
                meals: [
                    {
                        label: 'Sur Le Planche',
                        value: 'sur-le-planche',
                        detail: 'Lychee cocktail with vodka and prosseco'
                    },
                    {
                        label: 'Antitaxi Laughing ',
                        value: 'antitaxi',
                        detail: 'Mezcal and tequila mixed with citrus infusions.'
                    },
                    {
                        label: 'Lucky Disconection',
                        value: 'lucky-disconection',
                        detail: 'Gin & Tonic mixed with blackberry and herbal liqueur.'
                    },
                    {
                        label: 'Moscow Guava',
                        value: 'guava-moscow',
                        detail: 'Martini mixed with guava infusion.'
                    },
                    {
                        label: 'Danzantes Packshot',
                        value: 'danzantes',
                        detail: 'Strawberry mezcal infuisonated with lavender infusion and activated charcoal.'
                    },{
                        label: 'Paradigmas Mojito',
                        value: 'mojito-paradigma',
                        detail: 'Mojito infusionated with house made mango rum.',
                    },{
                        label: 'Ponche de la casa',
                        value: 'ponche',
                        detail: 'Traditional ponche with Controy, Appertol and Rum.'
                    },{
                        label: 'Avocado Spicy',
                        value: 'avocado-spicy',
                        detail: 'Mezcal, ancho reyes liqueur mixed with avocado.'
                    },
                ]
            },
        ],
    }
];