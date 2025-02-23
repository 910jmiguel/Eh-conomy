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
            github: "https://github.com/910jmiguel",
            linkedin: "https://www.linkedin.com/in/910jmiguel/"
        }
    },
    {
        name: "Ayla",
        school: "🎓 Wilfrid Laurier University",
        image: "/ayla.png",
        socials: {
            github: "https://github.com/aylat7",
            linkedin: "https://linkedin.com/in/ayla-topuz"
        }
    },
    {
        name: "James",
        school: "🎓 University of Toronto",
        image: "/james.jpg",
        socials: {
            github: "https://github.com/DonCozuuko",
            linkedin: "https://www.linkedin.com/in/james-rim-ab9388331/"
        }
    },
    {
        name: "Raghav",
        school: "🎓 Wilfrid Laurier University",
        image: "/raghav.jpg",
        socials: {
            github: "https://github.com/raghavkhare98",
            linkedin: "https://www.linkedin.com/in/raghav-khare-50416a16b/"
        }
    }
];
