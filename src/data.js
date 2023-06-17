import katie_zaferes from './images/katie-zaferes.png'
import wedding_hotography from './images/wedding-photography.png'
import mountain_biking from './images/mountain-bike.png'
import ukr_biking from './images/pexels-evg-kowalievska-1209480.jpg'
import euro_biking from './images/pexels-gul-isik-2128028.jpg'

export default [
    {
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: katie_zaferes,
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
        coverImg: wedding_hotography,
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "Online",
        openSpots: 27,
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg: mountain_biking,
        stats: {
            rating: 4.8,
            reviewCount: 12
        },
        location: "Norway",
        openSpots: 3,
    },
    {
        id: 4,
        title: "Solo Biking",
        description: "Experience the beautiful Ukrainian landscape and meet new friends all while conquering rugged terrain on your mountain bike.",
        price: 10,
        coverImg: ukr_biking,
        stats: {
            rating: 5.0,
            reviewCount: 20
        },
        location: "Ukraine",
        openSpots: 4,
    },
    {
        id: 5,
        title: "Just Biking",
        description: "Ride across the streets of the Europe. Visit new places. Be happy. (Bike NOT provided!)",
        price: 20,
        coverImg: euro_biking,
        stats: {
            rating: 2.2,
            reviewCount: 7
        },
        location: "Europe",
        openSpots: 1,
    },
]