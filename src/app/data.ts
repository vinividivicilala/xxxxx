export type Item = {
    title: string;
    description: string;
    date: string;
    highlight?: boolean;
    detail?: {
        link: string;
        linkLabel: string;
        image?: string;
    };
};

const learnMore = "Learn more";
const github = "View on GitHub";
const game = "Try the game";

export const careerItems: Item[] = [
    {
        title: "PKL - PT. KERETA COMMUTER INDONESIA - DIPO DEPOK",
        description: "sebagai seorang siswa untuk melaksanakan PKL, kelistrikkan, komponen, perbaikan, cuci komponen dan lain-lain",
        date: "Januari 2018 - Februari 2018",
    },
export const projectItems: Item[] = [
    {
        title: "Network Architectures",
        description: "ini kosong",
        date: "Januari 2024",
    },
    {
        title: "Network Fundamental",
        description: "ini kosong",
            
        date: "Januari 2024",
    },
    {
        title: "Neural Network Fundamentals",
        description: "ini kosong",
            
        date: "Januari 2024",
    },
    {
        title: "Optimizing Network Parameters",
        description: "ini kosong",
            
        date: "Januari 2024",
    },
    {
        title: "Pemrograman Python untuk Pemula",
        description: "ini kosong",
        date: "Januari 2024",
    },
    {
        title: "Product Strategy Fundamentals: From Idea to Market Success",
        description: "ini kosong",
        date: "Januari 2024",
    },
    {
        title: "Proyek Sederhana Svelte - Todo App",
        description: "ini kosong",
        date: "Januari 2024",
    },
    {
        title: "Python Fundamental",
        description: "ini kosong",
        date: "Januari 2024",
    },
];
