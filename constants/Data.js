import images from "./images";

export const Data = {
    menu: [
        {
            menuId: 100,
            menuTitle: 'Date',
            menuIcon: images.dine_icon,
        },
        {
            menuId: 200,
            menuTitle: 'Events',
            menuIcon: images.home_icon,
        },
        {
            menuId: 300,
            menuTitle: 'Tickets',
            menuIcon: images.plane_icon,
        },
    ],
    events: [
        {
            id: 1,
            title: 'Jazz on Bulli',
            location: 'Jamestown Cafe, Osu',
            description: 'Happening tonight at the jamestown cafe in Osu, come and experience a night filled with good music, people and a great time',
            attendees: '36',
            kmAway: '34km',
        },
        {
            id: 2,
            title: 'Bulli Picnic',
            location: 'Botanical Gardens Legon, Accra',
            description: 'Happening at the Legon Botanical Gardens, come and experience a night filled with good music, people and a great time',
            attendees: '12',
            kmAway: '64km',
        },
        {
            id: 3,
            title: 'Another \"On Bulli\" expeience',
            location: 'Jamestown, Accra',
            description: 'Experience a nice trip filled with good music, people who are just getting into the space of experiencing a ride in a VW Bulli. Ready to have a great time?',
            attendees: '40',
            kmAway: '12km',
        },
    ]
}