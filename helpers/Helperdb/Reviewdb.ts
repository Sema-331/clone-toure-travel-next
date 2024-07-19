import star from './../public/images/ion_star.png'
import first_image from './../public/images/Rectangle 36.png'
import second_image from './../public/images/Rectangle 36_1.png'
import third_image from './../public/images/Rectangle 36_2.png'


interface IntDbReview {
    id: number,
    header: string,
    description: string,
    image_star: IntImagesStar[]
    user_name: string,
    name_hotel_ticket: string,
    image_place: string
}

interface IntImagesStar {
    id: number,
    image: string
}

export const reviewDb = [
    {
        id: 1,
        header: '“A real sense of community, nurtured”',
        description: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.',
        image_star: [
            {
                id: 1,
                image: '/images/ion_star.png'
            },
            {
                id: 2,
                image: '/images/ion_star.png'
            },
            {
                id: 3,
                image: '/images/ion_star.png'
            },
            {
                id: 4,
                image: '/images/ion_star.png'
            },
            {
                id: 5,
                image: '/images/ion_star.png'
            }
        ],
        user_name: 'Olga',
        name_hotel_ticket: 'Weave Studios – Kai Tak',
        image_place: '/images/Rectangle 36.png'
    },
    {
        id: 2,
        header: '“The facilities are superb. Clean, slick, bright.”',
        description: '“A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View moreOlgaWeave Studios – Kai TakGoogle',
        image_star: [
            {
                id: 1,
                image: '/images/ion_star.png'
            },
            {
                id: 2,
                image: '/images/ion_star.png'
            },
            {
                id: 3,
                image: '/images/ion_star.png'
            },
            {
                id: 4,
                image: '/images/ion_star.png'
            },
            {
                id: 5,
                image: '/images/ion_star.png'
            }
        ],
        user_name: 'Thomas',
        name_hotel_ticket: 'Weave Studios – Olympic',
        image_place: '/images/Rectangle 36_1.png'
    },
    {
        id: 3,
        header: '“A real sense of community, nurtured”',
        description: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.',
        image_star: [
            {
                id: 1,
                image: '/images/ion_star.png'
            },
            {
                id: 2,
                image: '/images/ion_star.png'
            },
            {
                id: 3,
                image: '/images/ion_star.png'
            },
            {
                id: 4,
                image: '/images/ion_star.png'
            },
            {
                id: 5,
                image: '/images/ion_star.png'
            }
        ],
        user_name: 'Olga',
        name_hotel_ticket: 'Weave Studios – Kai Tak',
        image_place: '/images/Rectangle 36_2.png'
    }
]