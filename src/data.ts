import crad1image from '/public/swimming.webp'
import crad2image from '/public/breakfast.jpg'
import crad3image from '/public/mountain-bike.png'


const data: {
    id: number,
    title: string,
    description: string,
    price: number,
    image: string,
    alt: string,
    stats: {
        rating: number,
        reviewCount: number,
    }
    location: string,
    openSpots: number
}[] = [
    {
        id: 1,
        title: "Swimming Life Lessons",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        image: `${crad1image}`,
        alt: "Picture of a swimmer after she won the competition.",
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Why breakfast is so usefull?",
        description: "breakfast, food.",
        price: 125,
        image: `${crad2image}`,
        alt: "Picture of a bride wearing a white dress in a celebration hall.",
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
        image: `${crad3image}`,
        alt: "Picture of a bike in the mountains.",
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Norway",
        openSpots: 3,
    }
]

export default data;