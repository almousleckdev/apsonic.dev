'use client';

import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { AdminDialog } from './AdminDialog';
import { usePathname, useRouter } from 'next/navigation';

interface AdminLayoutProps {
    children: React.ReactNode;
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    // Helper to get title from pathname
    const getPageTitle = (path: string) => {
        const parts = path.split('/');
        const lastPart = parts[parts.length - 1];
        if (!lastPart || lastPart === 'dashboard') return '仪表板概览';
        const titles: Record<string, string> = {
            'news': '新闻与博客',
            'categories': '产品分类',
            'products': '产品规格',
            'users': '用户管理',
            'settings': '设置'
        };
        return titles[lastPart] || lastPart.charAt(0).toUpperCase() + lastPart.slice(1).replace(/-/g, ' ');
    };

    const title = getPageTitle(pathname);

    const handleLogout = () => {
        router.push('/admin/login');
    };

    return (
        <div className="min-h-screen bg-[#f8f9fa] text-gray-900 selection:bg-brand-green/30 selection:text-brand-green">
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                onLogout={() => setIsLogoutDialogOpen(true)}
            />

            <div className="lg:ml-72 flex flex-col min-h-screen">
                <Header onMenuClick={() => setIsSidebarOpen(true)} title={title} />
                <main className="flex-grow p-4 md:p-8">
                    {children}
                </main>
            </div>

            <AdminDialog
                isOpen={isLogoutDialogOpen}
                onClose={() => setIsLogoutDialogOpen(false)}
                onConfirm={handleLogout}
                type="warning"
                title="确认登出"
                description="您确定要结束会话吗？您需要重新登录才能访问仪表板。"
                confirmLabel="登出"
            />
        </div>
    );
};
