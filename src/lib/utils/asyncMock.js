

const servicesData = {
    services: [
        {
            id: 1,
            category: "Web Development",
            title: "Web Development with APIs",
            description: "We Build and Deploy Web Apps with APIs.",
            image: "https://i.ibb.co/JCWPyLd/webdev4.webp",
            price: "Get a Quote",
            quantity: 0
        },
        {
            id: 2,
            category: "Web Development",
            title: "Web Development Portfolios",
            description: "We Build and Deploy Web Portfolios.",
            image: "https://i.ibb.co/V2Zf3y7/webdev5.webp",
            price: "Get a Quote",
            quantity: 0
        },
        {
            id: 3,
            category: "Web Development",
            title: "Web Development SPA",
            description: "We Build and Deploy Single Page Applications.",
            image: "https://i.ibb.co/9nWYBsD/webdev3.webp",
            price: "Get a Quote",
            quantity: 0
        },
        {
            id: 11,
            category: "Web Development",
            title: "WebSide with Wordpress",
            description: "We Build and Deploy Wordpress websites.",
            image: "https://i.ibb.co/jJZ0pNQ/webdev2.webp",
            price: "Get a Quote",
            quantity: 0
        },
        {
            id: 12,
            category: "Web Development",
            title: "Landing Pages",
            description: "We Build and Deploy Landing Pages with Astro and SEO.",
            image: "https://i.ibb.co/JjJSd7p/webdev1.webp",
            price: "Get a Quote",
            quantity: 0
        },
        {
            id: 4,
            category: "IPTV",
            title: "IPTV 1 month subscription",
            description: "IPTV streaming service plans.",
            image: "https://i.ibb.co/smx5z0V/Plan-1-Meses.webp",
            price: [
                { id: 1, name: "One User", channels: "10,000+", price: 10.00 },
                { id: 2, name: "Two Users", channels: "10,000+", price: 12.00 },
                { id: 3, name: "Three Users", channels: "10,000+", price: 15.00 },
            ],
            quantity: 0
        },
        {
            id: 5,
            category: "IPTV",
            title: "IPTV 3 months subscription",
            description: "IPTV streaming service plans.",
            image: "https://i.ibb.co/74nXX7Y/Plan-3-Meses.webp",
            price: [
                { id: 1, name: "One User", channels: "10,000+", price: 27.00 },
                { id: 2, name: "Two Users", channels: "10,000+", price: 33.00 },
                { id: 3, name: "Three Users", channels: "10,000+", price: 39.00 },
            ],
            quantity: 0
        },
        {
            id: 6,
            category: "IPTV",
            title: "IPTV 6 months subscription",
            description: "IPTV streaming service plans.",
            image: "https://i.ibb.co/vjpgXRV/Plan-6-Meses.webp",
            price: [
                { id: 1, name: "One User", channels: "10,000+", price: 48.00 },
                { id: 2, name: "Two Users", channels: "10,000+", price: 60.00 },
                { id: 3, name: "Three Users", channels: "10,000+", price: 72.00 },
            ],
            quantity: 0
        },
        {
            id: 7,
            category: "IPTV",
            title: "IPTV 12 months subscription",
            description: "IPTV streaming service plans.",
            image: "https://i.ibb.co/wwhDKgw/Plan-12-Meses.webp",
            price: [
                { id: 1, name: "One User", channels: "10,000+", price: 84.00 },
                { id: 2, name: "Two Users", channels: "10,000+", price: 108.00 },
                { id: 3, name: "Three Users", channels: "10,000+", price: 120.00 },
            ],
            quantity: 0
        },
        {
            id: 8,
            category: "Tech Support",
            title: "Live Chat Support.",
            description: "Get the Live chat Support Services with us.",
            image: "https://i.ibb.co/6yCTyXR/webtech2.webp",
            billing: "Hourly",
            price: 9.99,
            quantity: 0
        },
        {
            id: 9,
            category: "Tech Support",
            title: "Laptop and PC Repair",
            description: "Laptop and PC Diagnostic and Repair Services.",
            image: "https://i.ibb.co/2hf912R/webtech1.webp",
            billing: "On Demand",
            price: 60.00,
            quantity: 0
        },
        {
            id: 10,
            category: "Tech Support",
            title: "Monitoring and Maintenance",
            description: "Get your systems monitored and maintained.",
            image: "https://i.ibb.co/cxL9bYz/webtech3.webp",
            billing: "Hourly",
            price: 20.00,
            quantity: 0
        },
        {
            id: 13,
            category: "APPs Development",
            title: "Retail Apps Development",
            description: "Get you team closer to your customers.",
            image: "https://i.ibb.co/L89DfGv/webapp1.webp",
            price: "Get a Quote",
            quantity: 0
        },
        {
            id: 14,
            category: "APPs Development",
            title: "Chat Apps Development",
            description: "Customized Chat Apps for your business.",
            image: "https://i.ibb.co/YtGH9gm/webapp4.webp",
            price: "Get a Quote",
            quantity: 0
        },
        {
            id: 15,
            category: "APPs Development",
            title: "ERP and CRM Apps Development",
            description: "Get your leads managed and centralized.",
            image: "https://i.ibb.co/K6qS9cm/webapp2.webp",
            price: "Get a Quote",
            quantity: 0
        },
        {
            id: 16,
            category: "APPs Development",
            title: "Payments Apps Development",
            description: "Get Paid by your customers.",
            image: "https://i.ibb.co/F4z83dZ/webapp3.webp",
            price: "Get a Quote",
            quantity: 0
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

const getAllServices = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(servicesData.services);
        }, 2000); 
    });
};

const getServiceByCategory = async (category, id) => {
    const services = await getServices();
    const categoryServices = services.services.filter((service) => service.category === category);
    return categoryServices.find((service) => service.id === parseInt(id));
};

const getCategory = async (category) => {
    const service = await getServices();
    return service.services.filter((service) => service.category === category);
};


export { getServices, getServiceByCategory, getCategory, getAllServices };
