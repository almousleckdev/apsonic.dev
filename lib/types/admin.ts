export interface AdminUser {
    id: string;
    name: string;
    email: string;
    role: 'Super Admin' | 'Editor' | 'Moderator' | 'Admin';
    status: 'Active' | 'Inactive';
    lastLogin: string;
}

export interface AdminCategory {
    id: number | string;
    name: string;
    slug: string;
    image: string;
    count: number;
}

export interface AdminProduct {
    id: string;
    model: string;
    brand: string;
    category: string;
    specsCount: number;
    lastUpdated: string;
}
