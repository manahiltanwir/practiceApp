import React from 'react'
const Menu = [
    {
        id: 1,
        images: "https://media.istockphoto.com/photos/breakfast-with-bacon-eggs-pancakes-and-toast-picture-id533645537?b=1&k=20&m=533645537&s=170667a&w=0&h=soL3LM7t-t35nDjG62WvPBWvo7Eyw0mO9GEnthc8B4w=",
        name: "Egg",
        category: "Breakfast",
        price: "60 Rs",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, modi!",
    },
    {
        id: 2,
        images: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWtmYXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Tea",
        category: "Breakfast",
        price: "40 Rs",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, repellat!",
    },
    {
        id: 3,
        images: "https://media.istockphoto.com/photos/mug-on-plate-filled-with-coffee-surrounded-by-coffee-beans-picture-id157528129?b=1&k=20&m=157528129&s=170667a&w=0&h=8DLweTb1F3_rJFKpHn9ha8aIiQQDAJKdX5y2pR63VsA=",
        name: "Coffee",
        category: "Breakfast",
        price: "100 Rs",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, molestiae.",
    },
    {
        id: 4,
        images: "https://media.istockphoto.com/photos/briyani-rice-with-chicken-and-some-veggie-picture-id1303098890?b=1&k=20&m=1303098890&s=170667a&w=0&h=KP1QYMIS6eUnRI4aSGP-Hj7qn6TZX4WtqGf7JttQ8pQ=",
        name: "Biryani",
        category: "Lunch",
        price: "80 Rs",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, eaque.",
    },
    {
        id: 5,
        images: "https://media.istockphoto.com/photos/closeup-of-hamburger-with-black-background-picture-id1316673531?b=1&k=20&m=1316673531&s=170667a&w=0&h=j_tGwCKrUMDSwiJFhUAotWFMoTaKfk9quld9_dYMUgE=",
        name: "Burger",
        category: "Lunch",
        price: "200 Rs",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ipsa?",
    },
    {
        id: 6,
        images: "https://images.unsplash.com/photo-1560750133-8b36d8292953?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bHVuY2glMjBkaXNoZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Pizza",
        category: "Lunch",
        price: "700 Rs",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, officiis?",
    },
    {
        id: 7,
        images: "https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGlubmVyJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Chicken",
        category: "Dinner",
        price: "220 Rs",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, similique!",
    }
    , {
        id: 11,
        images: "https://media.istockphoto.com/photos/breakfast-with-bacon-eggs-pancakes-and-toast-picture-id533645537?b=1&k=20&m=533645537&s=170667a&w=0&h=soL3LM7t-t35nDjG62WvPBWvo7Eyw0mO9GEnthc8B4w=",
        name: "Egg",
        category: "Evening",
        price: "60 Rs",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, modi!",
    },
    {
        id: 12,
        images: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWtmYXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Tea",
        category: "Afternoon",
        price: "40 Rs",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, repellat!",
    },
    {
        id: 8,
        images: "https://images.unsplash.com/photo-1565720490528-48e5be3d6a1f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRpbm5lciUyMGRpc2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Macroni",
        category: "Dinner",
        price: "150 Rs",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, est!",
    },
    {
        id: 8,
        images: "https://media.istockphoto.com/photos/basket-of-chicken-nuggets-with-sweet-and-sour-sauce-picture-id618209540?b=1&k=20&m=618209540&s=170667a&w=0&h=WqiuCM9pxbfdWhmOzDIAc8BQ1EJwk8CZdG2gMq3yj90=",
        name: "Nuggets",
        category: "Dinner",
        price: "130 Rs",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, velit?",
    }, {
        id: 9,
        images: "https://media.istockphoto.com/photos/basket-of-chicken-nuggets-with-sweet-and-sour-sauce-picture-id618209540?b=1&k=20&m=618209540&s=170667a&w=0&h=WqiuCM9pxbfdWhmOzDIAc8BQ1EJwk8CZdG2gMq3yj90=",
        name: "Nuggets",
        category: "Bhook",
        price: "130 Rs",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, velit?",
    }, {
        id: 10,
        images: "https://media.istockphoto.com/photos/basket-of-chicken-nuggets-with-sweet-and-sour-sauce-picture-id618209540?b=1&k=20&m=618209540&s=170667a&w=0&h=WqiuCM9pxbfdWhmOzDIAc8BQ1EJwk8CZdG2gMq3yj90=",
        name: "Nuggets",
        category: "Timepass",
        price: "130 Rs",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, velit?",
    }
]
export default Menu