interface TeamMember {
    name: string;
    school: string;
    image: string;
    socials: {
        github: string;
        linkedin: string;
    };
}

export const team: TeamMember[] = [
    {
        name: "Miguel",
        school: "🎓 York University",
        image: "/miguel2.jpg",
        socials: {
            github: "https://github.com/910miguel",
            linkedin: "https://linkedin.com/in/miguel-advincula"
        }
    },
    {
        name: "Ayla",
        school: "🎓 Wilfrid Laurier University",
        image: "/ayla.png",
        socials: {
            github: "https://github.com/mahirrahman",
            linkedin: "https://linkedin.com/in/mahir-rahman"
        }
    },
    {
        name: "James",
        school: "🎓 University of Toronto",
        image: "/james.jpg",
        socials: {
            github: "https://github.com/nirujan",
            linkedin: "https://linkedin.com/in/nirujan-loganathan"
        }
    },
    {
        name: "Raghav",
        school: "🎓 Wilfrid Laurier University",
        image: "/raghav.jpg",
        socials: {
            github: "https://github.com/muhammad-hassan",
            linkedin: "https://linkedin.com/in/muhammad-hassan"
        }
    }
];
