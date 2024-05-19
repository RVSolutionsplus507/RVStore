

const servicesData = {
    services: [
        {
            id: 1,
            category: "Web Development",
            title: "Web Development with APIs",
            description: "We Build and Deploy Web Apps with APIs.",
            price: "Get a Quote"
        },
        {
            id: 2,
            category: "Web Development",
            title: "Web Development Portfolios",
            description: "We Build and Deploy Web Portfolios.",
            price: "Get a Quote"
        },
        {
            id: 3,
            category: "Web Development",
            title: "Web Development SPA",
            description: "We Build and Deploy Single Page Applications.",
            price: "Get a Quote"
        },
        {
            id: 11,
            category: "Web Development",
            title: "WebSide with Wordpress",
            description: "We Build and Deploy Wordpress websites.",
            price: "Get a Quote"
        },
        {
            id: 12,
            category: "Web Development",
            title: "Landing Pages",
            description: "We Build and Deploy Landing Pages with Astro and SEO.",
            price: "Get a Quote"
        },
        {
            id: 4,
            category: "IPTV",
            title: "IPTV 1 month subscription",
            description: "IPTV streaming service plans.",
            image: { url: "https://i.ibb.co/smx5z0V/Plan-1-Meses.webp" },
            price: [
                { id: 1, name: "One User", channels: "10,000+", price: 10.00 },
                { id: 2, name: "Two Users", channels: "10,000+", price: 12.00 },
                { id: 3, name: "Three Users", channels: "10,000+", price: 15.00 },
            ],
        },
        {
            id: 5,
            category: "IPTV",
            title: "IPTV 3 months subscription",
            description: "IPTV streaming service plans.",
            image: { url: "https://i.ibb.co/74nXX7Y/Plan-3-Meses.webp" },
            price: [
                { id: 1, name: "One User", channels: "10,000+", price: 27.00 },
                { id: 2, name: "Two Users", channels: "10,000+", price: 33.00 },
                { id: 3, name: "Three Users", channels: "10,000+", price: 39.00 },
            ],
        },
        {
            id: 6,
            category: "IPTV",
            title: "IPTV 6 months subscription",
            description: "IPTV streaming service plans.",
            image: { url: "https://i.ibb.co/vjpgXRV/Plan-6-Meses.webp" },
            price: [
                { id: 1, name: "One User", channels: "10,000+", price: 48.00 },
                { id: 2, name: "Two Users", channels: "10,000+", price: 60.00 },
                { id: 3, name: "Three Users", channels: "10,000+", price: 72.00 },
            ],
        },
        {
            id: 7,
            category: "IPTV",
            title: "IPTV 12 months subscription",
            description: "IPTV streaming service plans.",
            image: { url: "https://i.ibb.co/wwhDKgw/Plan-12-Meses.webp" },
            price: [
                { id: 1, name: "One User", channels: "10,000+", price: 84.00 },
                { id: 2, name: "Two Users", channels: "10,000+", price: 108.00 },
                { id: 3, name: "Three Users", channels: "10,000+", price: 120.00 },
            ],
        },
        {
            id: 8,
            category: "Tech Support",
            title: "Live Chat Support.",
            description: "Get the Live chat Support Services with us.",
            billing: "Hourly",
            price: 9.99,
        },
        {
            id: 9,
            category: "Tech Support",
            title: "Laptop and PC Repair",
            description: "Laptop and PC Diagnostic and Repair Services.",
            billing: "On Demand",
            price: 60.00,
        },
        {
            id: 10,
            category: "Tech Support",
            title: "Monitoring and Maintenance",
            description: "Get your systems monitored and maintained by us.",
            billing: "Hourly",
            price: 20.00,
        },
        
    ],
};

const getServices = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(servicesData);
        }, 2000); 
    });
};

const getService = async (id) => {
    const service = await getServices();
    return service.services.find((service) => service.id === id);
};

export { getServices, getService };
