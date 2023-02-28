/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Bryan Ong",
  logo_name: "Bryan Ong",
  nickname: "Bryan",
  full_name: "Bryan",
  subTitle:
    "Full Stack Developer, Machine Learning Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://docs.google.com/document/d/1wfFgJQCYOBrn2YBoPzTS6AMdHV4r4MNC0KnFjayN8ys/edit?usp=sharing",
  mail: "mailto:hkanani191@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/bryanongjx",
  linkedin: "https://www.linkedin.com/in/bryanongjx/",
  gmail: "bryanongjx@u.nus.edu",
  gitlab: "https://gitlab.com/bryanongjx",
  facebook: "",
  twitter: "",
  instagram: "",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Database Management with SQL / MongoDB",
        "⚡ Developing mobile applications using React Native",
        "⚡ Integration of third party services such as Firebase",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Machine Learning",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ CNN Models",
        "⚡ AI Algorithms (Min Max / A* Search)",
        "⚡ Deep Learning Models",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Pytorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#339933",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National University of Singapore",
      subtitle: "B.S Computer Science w/ Second Major Business Management",
      logo_path: "nuslogo.png",
      alt_name: "SSEC",
      duration: "Aug 2021 - Present",
      descriptions: [
        "⚡ I'm currently pursuing my bachelors in Computer Science.",
        "⚡ Core subjects: Data Structures & Algorithms, Software Engineering, Computer Networking, DBMS, AI / Machine Learning",
        "⚡ Involvements: Director of Academics (NUS Computing Club), Deputy Director (NUS Entrepreneurship Society)",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://nus.edu.sg/",
    },
    {
      title: "Victoria Junior College",
      subtitle: "GCE 'A' Levels",
      logo_path: "vjclogo.png",
      alt_name: "VJC",
      duration: "2017 - 2018",
      descriptions: [
        "⚡ IGP of AAA/B",
        "⚡ Information Technology Club Member",
        "⚡ Varsity Floorball",
      ],
      website_link: "https://www.victoriajc.moe.edu.sg/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Advanced Proficiency in Javascript & General Coding Knowledge",
      subtitle: "Triplybyte Certified",
      logo_path: "triplebyte.png",
      certificate_link:
        "https://triplebyte.com/tb/bryan-ong-nsk7aol/certificate",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experiences",
  subtitle: "",
  description:
    "I've had multiple past internships and completed a few personal projects. Currently, I am actively looking for meaningful internships to expand my skillsets",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Full Stack App Developer",
          company: "Aegis Pte Ltd",
          company_url:
            "https://www.linkedin.com/company/aegis-building-&-engineering-pte-ltd-singapore-/mycompany/",
          logo_path: "aegislogo.jpeg",
          duration: "July 2022 - Jan 2023",
          location: "Singapore",
          description: `Project lead for the development of the Aegis Tradesmen Application. The application adopted the MRNN Tech Stack with MongoDB as database for client records and NestJS for server requests. Front-end was developed using react native. Our project model used the Waterfall model with bi-weekly sprints such that my team was able to maintain constant progress throughout.
          `,
          color: "#0071C5",
        },
        {
          title: "Software QA Engineer Intern",
          company: "Works Pte Ltd",
          company_url: "https://www.linkedin.com/company/officialworks/",
          logo_path: "workslogo.png",
          duration: "June 2022 - July 2022",
          location: "Singapore",
          description: `Focus on change request functions in close collaboration with the project manager and team leads.
          Developed new and maintained existing applications.
          Increased productivity and problem-solving technics by 20%.
          We primarily used PERN and MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "App Development Apprenticeship",
          company: "Tik Tok",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktoklogo.png",
          duration: "May 2022 - June 2022",
          location: "Singapore",
          description: `Spearheaded a team of 5 in developed a News Feed Application Project for Tik Tok. Our project was awarded 'Best Project Award' by TikTok developers amongst 121 projects. The application was developed on Android Studio using Java as the base programming language with dependencies like Retrofit and Glide being utilized. J-Unit Testing was also carried out.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Other Experiences",
      experiences: [
        {
          title: "Director of Academic Liaison",
          company: "NUS Computing Club",
          company_url: "https://nuscomputing.com/",
          logo_path: "nuscomputingclub.jpeg",
          duration: "Aug 2022 - Present",
          location: "Singapore",
          description:
            "In-charge of overseeing the planning of all academic events for the faculty. Events organised included: technical workshops in Java, Industry Talks with TikTok, NCS, CreditSuisse and P&G and LifeHack (NUS Computing's annual flagship hackathon)",
          color: "#FBBD18",
        },
        {
          title: "Deputy Director",
          company: "NUS Entrepreneurship Society (NES)",
          company_url:
            "https://www.linkedin.com/company/nusentresoc/?originalSubdomain=sg",
          logo_path: "neslogo.png",
          duration: "Aug 2022 - Present",
          location: "Singapore",
          description:
            "In-charge of the organisation and outreach of UNICON, NES' annual flagship event for entrepreneurs. Event boasted a pitching competition, Fireside Chats, Startup booths exhibitions and Panel Discussions.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My personal projects features Machine Learning Projects using various kinds of neural networks, and a mini Software Engineering project I developed using Java",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profilephoto.jpeg",
    description: "Feel free to contact me via email at bryanongjx@u.nus.edu :)",
  },
  blogSection: {
    title: "Github",
    subtitle: "Feel free to access my github account to view my repos below!",
    link: "https://github.com/bryanongjx",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Image Recognition Model",
      url: "https://github.com/bryanongjx",
      description:
        "This project trained a Deep Learning Neural Network to process and classify various images with over 99.4% accuracy. Technologies: SKlearn, Pytorch, and Numpy",
      languages: [],
      links: [
        {
          name: "Github",
          url: "https://github.com/bryanongjx",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "1",
      name: "Postal Code Automation",
      url: "https://github.com/bryanongjx",
      description:
        "An Machine Learning model that recognises handwritten postal codes to automate the manual keying postals into systems. Concepts: 3-layer CNN",
      languages: [],
      links: [
        {
          name: "Github",
          url: "https://github.com/bryanongjx",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "2",
      name: "Tick Pro",
      url: "https://bryanongjx.github.io/ip",
      description:
        "A chat-bot that allows you to track & manage your tasks / schedule and assign priorities quickly & conveniently. Technologies: JavaFX, J-Unit, Git",
      languages: [],
      links: [
        {
          name: "Github",
          url: "https://bryanongjx.github.io/ip",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
