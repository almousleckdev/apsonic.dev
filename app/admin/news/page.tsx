'use client';

import React, { useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { AdminContentCard } from '@/components/admin/AdminShared';
import { AdminTable } from '@/components/admin/AdminTable';
import { AdminDialog } from '@/components/admin/AdminDialog';
import { Button } from '@/components/ui';
import { MdAdd, MdFilterList, MdPublic, MdOutlineModeEdit } from 'react-icons/md';
import { newsItems } from '@/lib/data/news';

export default function AdminNewsPage() {
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isSaveSuccessOpen, setIsSaveSuccessOpen] = useState(false);
    const [selectedNews, setSelectedNews] = useState<any>(null);

    const handleCreate = () => {
        setIsSaveSuccessOpen(true);
    };

    const columns = [
        {
            header: 'Article Title', accessor: (item: any) => (
                <div className="max-w-md">
                    <div className="font-bold text-gray-900 line-clamp-1">{item.title}</div>
                    <div className="text-xs text-gray-500 line-clamp-1">{item.excerpt}</div>
                </div>
            )
        },
        {
            header: 'Category', accessor: (item: any) => (
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-brand-green/10 text-brand-green">
                    {item.category}
                </span>
            )
        },
        {
            header: 'Status', accessor: () => (
                <div className="flex items-center gap-2 text-green-500 text-xs">
                    <MdPublic /> Published
                </div>
            )
        },
        { header: 'Date', accessor: 'date', className: 'text-xs text-gray-500' },
    ];
    return (
        <AdminLayout>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">News & Blog Management</h2>
                    <p className="text-gray-500 text-sm">Create and edit articles for the Information Center</p>
                </div>
                <Button
                    className="rounded-xl px-6 h-12"
                    icon={<MdAdd className="text-xl" />}
                    onClick={handleCreate}
                >
                    New Article
                </Button>
            </div>

            <AdminContentCard
                title="Articles History"
                action={
                    <button className="flex items-center gap-2 text-xs text-gray-400 hover:text-gray-900 transition-colors">
                        <MdFilterList /> Filter Status
                    </button>
                }
            >
                <AdminTable
                    columns={columns}
                    data={newsItems}
                    onEdit={(item) => console.log('Edit', item)}
                    onDelete={(item) => {
                        setSelectedNews(item);
                        setIsDeleteDialogOpen(true);
                    }}
                />
            </AdminContentCard>

            <AdminDialog
                isOpen={isDeleteDialogOpen}
                onClose={() => setIsDeleteDialogOpen(false)}
                onConfirm={() => console.log('Deleted', selectedNews)}
                type="danger"
                title="Delete Article?"
                description={`Are you sure you want to delete "${selectedNews?.title}"? This will remove it from the public news feed immediately.`}
                confirmLabel="Delete Article"
            />

            <AdminDialog
                isOpen={isSaveSuccessOpen}
                onClose={() => setIsSaveSuccessOpen(false)}
                onConfirm={() => setIsSaveSuccessOpen(false)}
                type="success"
                title="Article Saved"
                description="The article has been successfully created and published to the website."
                confirmLabel="Great!"
            />
        </AdminLayout>
    );
}
