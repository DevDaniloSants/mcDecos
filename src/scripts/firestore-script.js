import { initializeApp } from 'firebase/app'
import { getFirestore, addDoc, collection } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyCXZRPaoRew-joRgsL01wh5wiyteyob9IA',
    authDomain: 'mcdecos-55b63.firebaseapp.com',
    projectId: 'mcdecos-55b63',
    storageBucket: 'mcdecos-55b63.appspot.com',
    messagingSenderId: '183845019422',
    appId: '1:183845019422:web:154d826e198e9aa7edf30f',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const categories = [
    {
        id: 'e91debc0-a26a-4957-88c0-3230266297eb',
        name: 'hamburguer',
        displayName: 'Hambúrguer',
        imageUrl:
            'https://img.freepik.com/fotos-gratis/cheeseburger-gourmet-grelhado-com-legumes-frescos-e-batatas-fritas-geradas-por-ia_188544-38732.jpg?t=st=1719093548~exp=1719097148~hmac=c3c486e4685ea709b8368f3e1f422e0a7f4562065d99b1ebfade102e6c72cc17&w=1380',
        products: [
            {
                id: '0949ddb2-7d60-464c-8f5b-08bf6f226b9b',
                displayName: 'MC Simples',
                price: 6,
                imageUrl:
                    'https://img.freepik.com/free-photo/view-ready-eat-delicious-meal-go_23-2151431747.jpg?t=st=1719098818~exp=1719102418~hmac=6023933ef2599a56a23e5bfa4552e35a58a2110451288e7e40b2790897bb6886&w=1380',
                ingredients: [
                    {
                        id: '0190424a-811c-7c04-b5cc-34083ee10a44',
                        name: 'meat',
                        displayName: 'Carne',
                        imageUrl: 'https://i.ibb.co/7tJT9rN/food-12910738.png',
                    },
                    {
                        id: '0190424a-811c-79f8-b21e-d80817b6df41',
                        name: 'sauces',
                        displayName: 'Molhos',
                        imageUrl: 'https://i.ibb.co/XSYkQPm/ketchup-531955.png',
                    },
                    {
                        id: '0190424a-811c-7221-b94a-653b10586448',
                        name: 'potato',
                        displayName: 'Batata palha',
                        imageUrl: 'https://i.ibb.co/7tJT9rN/food-12910738.png',
                    },
                    {
                        id: '0190426a-1517-71a0-a85e-9c62a65e1a81',
                        name: 'cheese',
                        displayName: 'Queijo',
                        imageUrl:
                            'https://i.ibb.co/0r49qkP/cheese-12910664.png',
                    },
                ],
            },
            {
                id: '0190426a-1517-7cb4-a23c-9d9c20c56ec2',
                displayName: 'MC Burguer',
                price: 7,
                imageUrl:
                    'https://img.freepik.com/free-photo/grilled-cheeseburger-rustic-bun-with-fries-generated-by-ai_24640-81517.jpg?t=st=1719101398~exp=1719104998~hmac=a8602de0db0b9c9ec6f059819aeb57e63fb6355e4ce7d0858544567f78188670&w=1380',
                ingredients: [
                    {
                        id: '0190424a-811c-7c04-b5cc-34083ee10a44',
                        name: 'meat',
                        displayName: 'Carne',
                        imageUrl: 'https://i.ibb.co/7tJT9rN/food-12910738.png',
                    },
                    {
                        id: '0190424a-811c-79f8-b21e-d80817b6df41',
                        name: 'sauces',
                        displayName: 'Molhos',
                        imageUrl: 'https://i.ibb.co/XSYkQPm/ketchup-531955.png',
                    },
                    {
                        id: '0190424a-811c-7221-b94a-653b10586448',
                        name: 'potato',
                        displayName: 'Batata palha',
                        imageUrl: 'https://i.ibb.co/7tJT9rN/food-12910738.png',
                    },
                    {
                        id: '4486b172-5740-436b-a66a-da8ed4358c50',
                        name: 'cheese',
                        displayName: 'Queijo',
                        imageUrl:
                            'https://i.ibb.co/0r49qkP/cheese-12910664.png',
                    },
                    {
                        id: '0190426a-1517-7bf5-957d-ff007f00b65b',
                        name: 'egg',
                        displayName: 'Ovo',
                        imageUrl: 'https://i.ibb.co/1KgD7Mn/food-12910577.png',
                    },
                ],
            },
            {
                id: '0190426a-1517-714c-a483-4ec1bc7bc8c2',
                displayName: 'MC Bacon',
                price: 10,
                imageUrl:
                    'https://img.freepik.com/free-photo/grilled-gourmet-cheeseburger-with-fresh-vegetables-fries-generated-by-ai_188544-38732.jpg?t=st=1719104242~exp=1719107842~hmac=56a7fb8afec7100d4573aae8b93d6599a6ce137f1aa2a6db991c68166c4e6cdf&w=1380',
                ingredients: [
                    {
                        id: '0190424a-811c-7c04-b5cc-34083ee10a44',
                        name: 'meat',
                        displayName: 'Carne',
                        imageUrl: 'https://i.ibb.co/7tJT9rN/food-12910738.png',
                    },
                    {
                        id: '0190424a-811c-79f8-b21e-d80817b6df41',
                        name: 'sauces',
                        displayName: 'Molhos',
                        imageUrl: 'https://i.ibb.co/XSYkQPm/ketchup-531955.png',
                    },
                    {
                        id: '0190424a-811c-7221-b94a-653b10586448',
                        name: 'potato',
                        displayName: 'Batata palha',
                        imageUrl: 'https://i.ibb.co/7tJT9rN/food-12910738.png',
                    },
                    {
                        id: '4486b172-5740-436b-a66a-da8ed4358c50',
                        name: 'cheese',
                        displayName: 'Queijo',
                        imageUrl:
                            'https://i.ibb.co/0r49qkP/cheese-12910664.png',
                    },
                    {
                        id: '0190426a-1517-7bf5-957d-ff007f00b65b',
                        name: 'egg',
                        displayName: 'Ovo',
                        imageUrl: 'https://i.ibb.co/1KgD7Mn/food-12910577.png',
                    },
                    {
                        id: '0190426a-1517-7ff1-aab4-89c8ab0631b0',
                        name: 'ham',
                        displayName: 'Presunto',
                        imageUrl: 'https://i.ibb.co/gW3BTSZ/food-12918527.png',
                    },
                    {
                        id: '0190426a-1517-7ea8-9c21-6ac5cf4b218f',
                        name: 'corn',
                        displayName: 'Milho',
                        imageUrl: 'https://i.ibb.co/RDhcHjd/corn-5009632.png',
                    },
                    {
                        id: '0190426a-1517-710e-b97d-01a387ae05fd',
                        name: 'pea',
                        displayName: 'Ervilha',
                        imageUrl: 'https://i.ibb.co/2yjd2nL/peas-5501234.png',
                    },
                    {
                        id: '0190426a-1517-7c8c-b6c0-e81f74439950',
                        name: 'bacon',
                        displayName: 'Bacon',
                        imageUrl: 'https://i.ibb.co/XLH5MwR/food-12910732.png',
                    },
                ],
            },
            {
                id: '0190426a-1517-7125-b794-6247eff71ef1',
                displayName: 'MC Calabresa',
                price: 10,
                imageUrl:
                    'https://img.freepik.com/free-photo/grilled-cheeseburger-with-tomato-onion-fries-generated-by-ai_188544-43039.jpg?t=st=1719105026~exp=1719108626~hmac=b735b360bc7747025ff19dfe73c5411986a946350ff8142c4729b16360ccd1d4&w=1380',
                ingredients: [
                    {
                        id: '0190424a-811c-7c04-b5cc-34083ee10a44',
                        name: 'meat',
                        displayName: 'Carne',
                        imageUrl: 'https://i.ibb.co/7tJT9rN/food-12910738.png',
                    },
                    {
                        id: '0190424a-811c-79f8-b21e-d80817b6df41',
                        name: 'sauces',
                        displayName: 'Molhos',
                        imageUrl: 'https://i.ibb.co/XSYkQPm/ketchup-531955.png',
                    },
                    {
                        id: '0190424a-811c-7221-b94a-653b10586448',
                        name: 'potato',
                        displayName: 'Batata palha',
                        imageUrl: 'https://i.ibb.co/7tJT9rN/food-12910738.png',
                    },
                    {
                        id: '4486b172-5740-436b-a66a-da8ed4358c50',
                        name: 'cheese',
                        displayName: 'Queijo',
                        imageUrl:
                            'https://i.ibb.co/0r49qkP/cheese-12910664.png',
                    },
                    {
                        id: '0190426a-1517-7bf5-957d-ff007f00b65b',
                        name: 'egg',
                        displayName: 'Ovo',
                        imageUrl: 'https://i.ibb.co/1KgD7Mn/food-12910577.png',
                    },
                    {
                        id: '0190426a-1517-7ff1-aab4-89c8ab0631b0',
                        name: 'ham',
                        displayName: 'Presunto',
                        imageUrl: 'https://i.ibb.co/gW3BTSZ/food-12918527.png',
                    },
                    {
                        id: '0190426a-1517-7ea8-9c21-6ac5cf4b218f',
                        name: 'corn',
                        displayName: 'Milho',
                        imageUrl: 'https://i.ibb.co/RDhcHjd/corn-5009632.png',
                    },
                    {
                        id: '0190426a-1517-710e-b97d-01a387ae05fd',
                        name: 'pea',
                        displayName: 'Ervilha',
                        imageUrl: 'https://i.ibb.co/2yjd2nL/peas-5501234.png',
                    },
                    {
                        id: '0190426a-1517-7aa1-be1a-20bc80f48d84',
                        name: 'sausage',
                        displayName: 'Calabresa',
                        imageUrl:
                            'https://i.ibb.co/cFMPj53/sausage-8204840.png',
                    },
                ],
            },
            {
                id: '0190426a-1517-785a-96c8-f1f179e21f6f',
                displayName: 'MC Decos',
                price: 11,
                imageUrl:
                    'https://img.freepik.com/free-photo/burger-with-lot-toppings-it_24640-80791.jpg?t=st=1719105393~exp=1719108993~hmac=4f3d8fd3743ad107287c3807d0d8585b1a14fea7703fa18c75f6299d940119a3&w=1380',
                ingredients: [
                    {
                        id: '0190424a-811c-7c04-b5cc-34083ee10a44',
                        name: 'meat',
                        displayName: 'Carne',
                        imageUrl: 'https://i.ibb.co/7tJT9rN/food-12910738.png',
                    },
                    {
                        id: '0190424a-811c-79f8-b21e-d80817b6df41',
                        name: 'sauces',
                        displayName: 'Molhos',
                        imageUrl: 'https://i.ibb.co/XSYkQPm/ketchup-531955.png',
                    },
                    {
                        id: '0190424a-811c-7221-b94a-653b10586448',
                        name: 'potato',
                        displayName: 'Batata palha',
                        imageUrl: 'https://i.ibb.co/7tJT9rN/food-12910738.png',
                    },
                    {
                        id: '4486b172-5740-436b-a66a-da8ed4358c50',
                        name: 'cheese',
                        displayName: 'Queijo',
                        imageUrl:
                            'https://i.ibb.co/0r49qkP/cheese-12910664.png',
                    },
                    {
                        id: '0190426a-1517-7bf5-957d-ff007f00b65b',
                        name: 'egg',
                        displayName: 'Ovo',
                        imageUrl: 'https://i.ibb.co/1KgD7Mn/food-12910577.png',
                    },
                    {
                        id: '0190426a-1517-7ff1-aab4-89c8ab0631b0',
                        name: 'ham',
                        displayName: 'Presunto',
                        imageUrl: 'https://i.ibb.co/gW3BTSZ/food-12918527.png',
                    },
                    {
                        id: '0190426a-1517-7ea8-9c21-6ac5cf4b218f',
                        name: 'corn',
                        displayName: 'Milho',
                        imageUrl: 'https://i.ibb.co/RDhcHjd/corn-5009632.png',
                    },
                    {
                        id: '0190426a-1517-710e-b97d-01a387ae05fd',
                        name: 'pea',
                        displayName: 'Ervilha',
                        imageUrl: 'https://i.ibb.co/2yjd2nL/peas-5501234.png',
                    },
                    {
                        id: '0190426a-1517-7c8c-b6c0-e81f74439950',
                        name: 'bacon',
                        displayName: 'Bacon',
                        imageUrl: 'https://i.ibb.co/XLH5MwR/food-12910732.png',
                    },
                    {
                        id: '0190426a-1517-7aa1-be1a-20bc80f48d84',
                        name: 'sausage',
                        displayName: 'Calabresa',
                        imageUrl:
                            'https://i.ibb.co/cFMPj53/sausage-8204840.png',
                    },
                ],
            },
        ],
    },
    {
        id: '0190426a-1517-7365-b46a-57a3653376b9',
        name: 'hotDog',
        displayName: 'Hot-Dog',
        imageUrl:
            'https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151431653.jpg?t=st=1719105101~exp=1719108701~hmac=9c2288517e5b9edee3bfce75267e372bf3343f21199909da32b1a79d784cfb85&w=740',
        products: [
            {
                id: 'bb36beab-6a89-4768-ba90-2dfc7f0cf45b',
                displayName: 'Cachorro quente Simples (Linguiça)',
                price: 7,
                imageUrl:
                    'https://img.freepik.com/free-photo/grilled-beef-hot-dog-bun-with-ketchup-onion-generated-by-artificial-intelligence_188544-90307.jpg?t=st=1719139412~exp=1719143012~hmac=8ad85063137878e9364d4e452a126cc50d793ce3791fa5b91a68ea4dfd462626&w=1380',
                ingredients: [
                    {
                        id: '0190424a-811c-79f8-b21e-d80817b6df41',
                        name: 'sauces',
                        displayName: 'Molhos',
                        imageUrl: 'https://i.ibb.co/XSYkQPm/ketchup-531955.png',
                    },
                    {
                        id: '0190424a-811c-7221-b94a-653b10586448',
                        name: 'potato',
                        displayName: 'Batata palha',
                        imageUrl: 'https://i.ibb.co/7tJT9rN/food-12910738.png',
                    },
                    {
                        id: '0190426a-1517-7ea8-9c21-6ac5cf4b218f',
                        name: 'corn',
                        displayName: 'Milho',
                        imageUrl: 'https://i.ibb.co/RDhcHjd/corn-5009632.png',
                    },
                    {
                        id: '0190426a-1517-710e-b97d-01a387ae05fd',
                        name: 'pea',
                        displayName: 'Ervilha',
                        imageUrl: 'https://i.ibb.co/2yjd2nL/peas-5501234.png',
                    },
                    {
                        id: '0190426a-1517-7aa1-be1a-20bc80f48d84',
                        name: 'sausage',
                        displayName: 'Calabresa',
                        imageUrl:
                            'https://i.ibb.co/cFMPj53/sausage-8204840.png',
                    },
                ],
            },
            {
                id: 'a375beb7-d952-4460-a1e3-d78267c276ce',
                displayName: 'Cachorro quente Simples (Salsicha)',
                price: 7,
                imageUrl:
                    'https://img.freepik.com/free-photo/hot-dogs-served-wooden-plank-marble-surface-onions-back_157027-3642.jpg?t=st=1719139842~exp=1719143442~hmac=32dbe87096499b738efec1540dc991ffdb4c7ea3cda1311a97f1e0c8e27e6a91&w=1380',
                ingredients: [
                    {
                        id: '0190424a-811c-79f8-b21e-d80817b6df41',
                        name: 'sauces',
                        displayName: 'Molhos',
                        imageUrl: 'https://i.ibb.co/XSYkQPm/ketchup-531955.png',
                    },
                    {
                        id: '0190424a-811c-7221-b94a-653b10586448',
                        name: 'potato',
                        displayName: 'Batata palha',
                        imageUrl: 'https://i.ibb.co/7tJT9rN/food-12910738.png',
                    },
                    {
                        id: '0190426a-1517-7ea8-9c21-6ac5cf4b218f',
                        name: 'corn',
                        displayName: 'Milho',
                        imageUrl: 'https://i.ibb.co/RDhcHjd/corn-5009632.png',
                    },
                    {
                        id: '0190426a-1517-710e-b97d-01a387ae05fd',
                        name: 'pea',
                        displayName: 'Ervilha',
                        imageUrl: 'https://i.ibb.co/2yjd2nL/peas-5501234.png',
                    },
                    {
                        id: '77659497-5780-4819-a3a9-d5419c4257a5',
                        name: 'sausage',
                        displayName: 'Salsicha',
                        imageUrl:
                            'https://i.ibb.co/cFMPj53/sausage-8204840.png',
                    },
                ],
            },
        ],
    },
    {
        id: '0190426a-1517-74b4-93f2-81c0491c36f2',
        name: 'drinks',
        displayName: 'Bebidas',
        imageUrl:
            'https://img.freepik.com/free-photo/gold-colored-brandy-bottle-wooden-table-generated-by-ai_188544-18741.jpg?t=st=1719105157~exp=1719108757~hmac=ab8f992c33fdc847878ef61043c3415284973107ac2e10d1561eeed791933bad&w=1380',
        products: [
            {
                id: '971198ae-d24f-4b52-8666-39d1c9503c60',
                displayName: 'Coca cola 2L',
                price: 12,
                imageUrl:
                    'https://i.ibb.co/HntvrV5/418534698-676138364694239-225702860333728958-n.jpg',
            },
            {
                id: '6152deeb-ba70-4d9f-b0fb-b9561883cc33',
                displayName: 'Pepsi 2L',
                price: 11,
                imageUrl:
                    'https://i.ibb.co/HDr5KWQ/Pepsi-Sound-Identity-01.jpg',
            },
            {
                id: '431ef6b6-0b69-4234-b675-7c2d3b951088',
                displayName: 'Guaraná Antártica 2L',
                price: 11,
                imageUrl:
                    'https://i.ibb.co/ssqJv8q/a18d16418a1a074b79b21c3b1c0ad0cd.jpg',
            },
        ],
    },
]

const main = async () => {
    await Promise.all(
        categories.map(async (category) => {
            await addDoc(collection(db, 'categories'), category)
        })
    )
}

// eslint-disable-next-line no-undef
main().then(() => process.exit())
