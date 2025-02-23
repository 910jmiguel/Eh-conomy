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
        school: "York University",
        image: "/team/miguel.jpg",
        socials: {
            github: "https://github.com/910miguel",
            linkedin: "https://linkedin.com/in/miguel-advincula"
        }
    },
    {
        name: "Ayla",
        school: "Wilfrid Laurier University",
        image: "/team/mahir.jpg",
        socials: {
            github: "https://github.com/mahirrahman",
            linkedin: "https://linkedin.com/in/mahir-rahman"
        }
    },
    {
        name: "James",
        school: "University of Toronto",
        image: "/team/nirujan.jpg",
        socials: {
            github: "https://github.com/nirujan",
            linkedin: "https://linkedin.com/in/nirujan-loganathan"
        }
    },
    {
        name: "Raghav",
        school: "Wilfrid Laurier University",
        image: "/team/muhammad.jpg",
        socials: {
            github: "https://github.com/muhammad-hassan",
            linkedin: "https://linkedin.com/in/muhammad-hassan"
        }
    }
];
