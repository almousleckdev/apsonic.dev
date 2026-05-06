// Service Detail Data - Centralized and Refined
// Corrected to use exact filenames from public/categories (case-sensitive and space-sensitive)

export interface ManualItem {
    id: string;
    title: string;
    description: string;
    pdfUrl: string;
    imageUrl: string;
    size: string;
    updated: string;
}

export interface VideoItem {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    youtubeId: string;
}

export interface CategoryData {
    title: string;
    manuals: ManualItem[];
    videos: VideoItem[];
    images: string[];
}

export const TWO_WHEELER_DATA: Record<string, CategoryData> = {
    underbone: {
        title: '弯梁车',
        manuals: [
            {
                id: 'ub-1',
                title: 'AP110-A PLUS 用户手册',
                description: 'AP110-A PLUS型号完整用户手册，包含操作指南和维护说明。',
                pdfUrl: '/pdf/simpple.pdf',
                imageUrl: '/categories/弯梁车/AP110-A PLUS(白).png',
                size: '2.4 MB',
                updated: '2025年1月'
            },
            {
                id: 'ub-2',
                title: 'AP110-3 用户手册',
                description: 'AP110-3型号详细手册，包含操作说明与日常维护。',
                pdfUrl: '/pdf/simpple.pdf',
                imageUrl: '/categories/弯梁车/AP110-3 (1.2).png',
                size: '5.8 MB',
                updated: '2024年12月'
            },
            {
                id: 'ub-3',
                title: 'AP110-3A 用户手册',
                description: 'AP110-3A型号产品手册。',
                pdfUrl: '/pdf/simpple.pdf',
                imageUrl: '/categories/弯梁车/AP110-3A (1.1).png',
                size: '2.9 MB',
                updated: '2025年1月'
            }
        ],
        videos: [
            {
                id: 'v-ub-1',
                title: '弯梁车基础操作指南',
                description: '学习如何正确操作和维护弯梁车',
                thumbnail: '/categories/弯梁车/AP110-A PLUS.jpg',
                youtubeId: 'S-pUpk_yjZo'
            }
        ],
        images: [
            '/categories/弯梁车/AP110 (1).png',
            '/categories/弯梁车/AP110-2 (1).png',
            '/categories/弯梁车/AP110-3 (1.2).png',
            '/categories/弯梁车/AP110-3A (1.1).png',
            '/categories/弯梁车/AP110-5 (1.2).png',
            '/categories/弯梁车/AP110-A PLUS(白).png'
        ]
    },
    street: {
        title: '街车',
        manuals: [
            {
                id: 'st-1',
                title: 'AP125-27 用户手册',
                description: 'AP125-27型号完整用户手册。',
                pdfUrl: '/pdf/simpple.pdf',
                imageUrl: '/categories/街车/AP125-27 (1.2).png',
                size: '2.6 MB',
                updated: '2025年1月'
            },
            {
                id: 'st-2',
                title: 'AP150X-II 用户手册',
                description: 'AP150X-II型号产品手册。',
                pdfUrl: '/pdf/simpple.pdf',
                imageUrl: '/categories/街车/AP150X-II (1.2).png',
                size: '3.0 MB',
                updated: '2024年12月'
            },
            {
                id: 'st-3',
                title: 'Z-ONE 170 用户手册',
                description: 'Z-ONE 170型号详细维修手册。',
                pdfUrl: '/pdf/simpple.pdf',
                imageUrl: '/categories/街车/Z-ONE170（1）.png', // Fixed: Full-width parentheses
                size: '6.2 MB',
                updated: '2024年11月'
            }
        ],
        videos: [
            {
                id: 'v-st-1',
                title: '街车操作技巧',
                description: '掌握街车的正确操作技巧',
                thumbnail: '/categories/街车/Z-ONE170（5）.jpg',
                youtubeId: 'JGwWNGJdvx8'
            }
        ],
        images: [
            '/categories/街车/AP125-27 (1.2).png',
            '/categories/街车/AP150X-II (1.2).png',
            '/categories/街车/AP200-27 (1.2).png',
            '/categories/街车/Z-ONE170（1）.png'
        ]
    },
    offroad: {
        title: '越野车',
        manuals: [
            {
                id: 'or-1',
                title: 'AP200GY-3 用户手册',
                description: 'AP200GY-3型号完整用户手册。',
                pdfUrl: '/pdf/simpple.pdf',
                imageUrl: '/categories/越野车/AP200GY-3 (1.2).png',
                size: '3.1 MB',
                updated: '2025年1月'
            },
            {
                id: 'or-2',
                title: 'AP200GY-7 用户手册',
                description: 'AP200GY-7型号产品手册。',
                pdfUrl: '/pdf/simpple.pdf',
                imageUrl: '/categories/越野车/AP200GY-7 (1.2).png',
                size: '3.3 MB',
                updated: '2024年12月'
            },
            {
                id: 'or-3',
                title: 'AP200GY-9 用户手册',
                description: 'AP200GY-9型号详细维修手册。',
                pdfUrl: '/pdf/simpple.pdf',
                imageUrl: '/categories/越野车/AP200GY-9 (1.2).png',
                size: '6.5 MB',
                updated: '2024年10月'
            }
        ],
        videos: [
            {
                id: 'v-or-1',
                title: '越野车驾驶基础',
                description: '越野驾驶的安全注意事项与操作技巧',
                thumbnail: '/categories/越野车/AP200GY-3 (5).jpg',
                youtubeId: 'ScMzIvxBSi4'
            }
        ],
        images: [
            '/categories/越野车/AP200GY-3 (1.2).png',
            '/categories/越野车/AP200GY-7 (1.2).png',
            '/categories/越野车/AP200GY-9 (1.2).png'
        ]
    },
    standard: {
        title: '骑士车',
        manuals: [
            {
                id: 'sd-1',
                title: 'AP125-12 用户手册',
                description: 'AP125-12型号完整用户手册。',
                pdfUrl: '/pdf/simpple.pdf',
                imageUrl: '/categories/骑士车/AP125-12(1.2).png', // Fixed: No space
                size: '2.8 MB',
                updated: '2025年1月'
            },
            {
                id: 'sd-2',
                title: 'AP150-30 用户手册',
                description: 'AP150-30型号产品手册。',
                pdfUrl: '/pdf/simpple.pdf',
                imageUrl: '/categories/骑士车/AP150-30(1.2).png', // Added model
                size: '3.0 MB',
                updated: '2025年1月'
            },
            {
                id: 'sd-3',
                title: 'AP125-K 用户手册',
                description: 'AP125-K型号维修手册。',
                pdfUrl: '/pdf/simpple.pdf',
                imageUrl: '/categories/骑士车/AP125-K(1.2).png',
                size: '5.4 MB',
                updated: '2024年12月'
            },
            {
                id: 'sd-4',
                title: 'AP125-8 PLUS 用户手册',
                description: 'AP125-8 PLUS型号产品手册。',
                pdfUrl: '/pdf/simpple.pdf',
                imageUrl: '/categories/骑士车/AP125-8 PLUS (1.1).png',
                size: '2.7 MB',
                updated: '2024年11月'
            }
        ],
        videos: [
            {
                id: 'v-sd-1',
                title: '骑士车维护教程',
                description: '学习如何保养您的骑士系列摩托车',
                thumbnail: '/categories/骑士车/AP125-12(4).jpg',
                youtubeId: 'S-pUpk_yjZo'
            }
        ],
        images: [
            '/categories/骑士车/ALOBA底图.jpg',
            '/categories/骑士车/AP125-12(1.2).png',
            '/categories/骑士车/AP125-19 PLUS (1.2).png',
            '/categories/骑士车/AP125-30 (1.2).png',
            '/categories/骑士车/AP125-8 PLUS (1.1).png',
            '/categories/骑士车/AP125-K(1.2).png',
            '/categories/骑士车/AP150-30(1.2).png'
        ]
    }
};

export const TRICYCLE_DATA = {
    manuals: [
        {
            id: 'tr-1',
            title: 'AP150ZH-20 MAX 操作手册',
            description: 'AP150ZH-20 MAX型号完整操作手册。',
            pdfUrl: '/pdf/simpple.pdf',
            imageUrl: '/categories/三轮车/AP150ZH-20更新/AP150ZH-20 MAX (1).png',
            size: '3.5 MB',
            updated: '2025年1月'
        },
        {
            id: 'tr-2',
            title: 'AP150ZH-175 MAX 用户手册',
            description: 'AP150ZH-175型号详细手册。',
            pdfUrl: '/pdf/simpple.pdf',
            imageUrl: '/categories/三轮车/AP150ZH-175 更新/AP150ZH-175 MAX (1).png',
            size: '3.2 MB',
            updated: '2024年12月'
        },
        {
            id: 'tr-3',
            title: 'AP200ZH-Q6 用户手册',
            description: 'AP200ZH-Q6型号产品手册。',
            pdfUrl: '/pdf/simpple.pdf',
            imageUrl: '/categories/三轮车/其他更新/AP200ZH-Q6 (1).png',
            size: '3.8 MB',
            updated: '2024年11月'
        }
    ],
    videos: [
        {
            id: 'v-tr-1',
            title: '三轮车操作与安全',
            description: '大型三轮车的正确驾驶与货物装载安全',
            thumbnail: '/categories/三轮车/AP150ZH-20更新/AP150ZH-20 MAX (2).jpg',
            youtubeId: 'ScMzIvxBSi4'
        }
    ],
    images: [
        '/categories/三轮车/AP150ZH-20更新/AP150ZH-20 MAX (1).png',
        '/categories/三轮车/AP150ZH-175 更新/AP150ZH-175 MAX (1).png',
        '/categories/三轮车/AP150ZH-200更新/AP150ZH-200 (1).png',
        '/categories/三轮车/其他更新/AP150ZH-Q7 (1).png',
        '/categories/三轮车/特殊/AP150ZK (1).png'
    ]
};

export const TRICYCLE_CATEGORIES: Record<string, CategoryData> = {
    standard: {
        ...TRICYCLE_DATA,
        title: '三轮车'
    }
};
