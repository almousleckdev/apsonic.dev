// Service Detail Data - Centralized and Refined
// Replaces all people-centric images with motorcycle assets.
// CORRECTED FILE PATHS based on public/products audit.

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
                id: '1',
                title: 'AP50-3 用户手册',
                description: 'AP50-3型号完整用户手册，包含操作指南和维护说明。',
                pdfUrl: '/pdf/simpple.pdf',
                imageUrl: '/products/AP110-A-PLUS(白).png',
                size: '2.4 MB',
                updated: '2025年1月'
            },
            {
                id: '2',
                title: 'AP150-30 维修手册',
                description: 'AP150-30型号详细维修手册，包含故障诊断和维修步骤。',
                pdfUrl: '/pdf/simpple.pdf',
                imageUrl: '/products/AP125-12(1).png',
                size: '5.8 MB',
                updated: '2024年12月'
            }
        ],
        videos: [
            {
                id: '1',
                title: '弯梁车基础操作指南',
                description: '学习如何正确操作和维护弯梁车',
                thumbnail: '/products/AP110-A-PLUS(白).png',
                youtubeId: 'S-pUpk_yjZo'
            }
        ],
        images: [
            '/products/AP110-A-PLUS(白).png',
            '/products/AP125-12(1).png',
            '/products/AP250GY (1).png'
        ]
    },
    street: {
        title: '街车',
        manuals: [
            {
                id: '1',
                title: 'AP125-30 用户手册',
                description: 'AP125-30型号完整用户手册，包含操作指南和维护说明。',
                pdfUrl: '/pdf/simpple.pdf',
                imageUrl: '/products/AP125-30（1）.png', // Fixed full-width parentheses
                size: '2.6 MB',
                updated: '2025年1月'
            }
        ],
        videos: [
            {
                id: '1',
                title: '街车操作技巧',
                description: '掌握街车的正确操作技巧',
                thumbnail: '/products/AP125-30（2）.png', // Fixed full-width parentheses
                youtubeId: 'JGwWNGJdvx8'
            }
        ],
        images: [
            '/products/AP125-30（1）.png',
            '/products/AP125-12(1).png'
        ]
    }
};

export const TRICYCLE_DATA = {
    manuals: [
        {
            id: '1',
            title: '三轮车基础操作手册',
            description: '三轮车完整操作手册，包含安全操作指南和日常维护说明。',
            pdfUrl: '/pdf/simpple.pdf',
            imageUrl: '/products/AP150ZH-20 SPORT (1).png',
            size: '3.2 MB',
            updated: '2025年1月'
        },
        {
            id: '2',
            title: '三轮车维修技术手册',
            description: '三轮车详细维修技术手册，包含故障诊断和维修步骤。',
            pdfUrl: '/pdf/simpple.pdf',
            imageUrl: '/products/AP150ZH-20A (1).png', // Fixed: AP150ZH-20A
            size: '7.5 MB',
            updated: '2024年12月'
        }
    ],
    videos: [
        {
            id: '1',
            title: '三轮车操作基础',
            description: '学习三轮车的基本操作技巧和安全注意事项',
            thumbnail: '/products/AP150ZH-20 SPORT (1).png',
            youtubeId: 'S-pUpk_yjZo'
        },
        {
            id: '2',
            title: '三轮车维护保养',
            description: '了解三轮车的日常维护和保养要点',
            thumbnail: '/products/AP150ZH-20A (1).png', // Fixed: AP150ZH-20A 
            youtubeId: 'ScMzIvxBSi4'
        }
    ],
    images: [
        '/products/AP150ZH-20 SPORT (1).png',
        '/products/AP150ZH-20A (1).png',
        '/products/AP150ZH-20 SPORT (2).png'
    ]
};
