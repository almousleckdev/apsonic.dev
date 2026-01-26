'use client';

import React, { useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { AdminContentCard } from '@/components/admin/AdminShared';
import { AdminTable } from '@/components/admin/AdminTable';
import { AdminDialog } from '@/components/admin/AdminDialog';
import { Button } from '@/components/ui';
import { MdAdd, MdSearch, MdVerified, MdOutlineAdminPanelSettings } from 'react-icons/md';
import type { AdminUser } from '@/lib/types/admin';

const mockUsers: AdminUser[] = [
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Super Admin', status: 'Active', lastLogin: '2025-11-20 10:30' },
    { id: '2', name: 'James Wilson', email: 'james@apsonic.com', role: 'Editor', status: 'Active', lastLogin: '2025-11-19 14:15' },
    { id: '3', name: 'Sarah Kone', email: 'sarah@apsonic.com', role: 'Moderator', status: 'Inactive', lastLogin: '2025-11-15 09:00' },
    { id: '4', name: 'Ibrahim Touré', email: 'ibrahim@apsonic.com', role: 'Editor', status: 'Active', lastLogin: '2025-11-18 16:45' },
];

export default function UserManagementPage() {
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null);

    const columns = [
        {
            header: 'User', accessor: (item: AdminUser) => (
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-bold text-xs">
                        {item.name.charAt(0)}
                    </div>
                    <div>
                        <div className="font-bold text-gray-900">{item.name}</div>
                        <div className="text-[10px] text-gray-500">{item.email}</div>
                    </div>
                </div>
            )
        },
        {
            header: 'Role', accessor: (item: AdminUser) => (
                <div className="flex items-center gap-1">
                    {item.role === 'Super Admin' && <MdOutlineAdminPanelSettings className="text-amber-500" />}
                    <span className="text-xs">{item.role}</span>
                </div>
            )
        },
        {
            header: 'Status', accessor: (item: AdminUser) => (
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${item.status === 'Active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-500'
                    }`}>
                    {item.status}
                </span>
            )
        },
        { header: 'Last Login', accessor: 'lastLogin', className: 'text-xs text-gray-500' },
    ];

    return (
        <AdminLayout>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
                    <p className="text-gray-500 text-sm">Control administrative access and permission roles</p>
                </div>
                <Button
                    className="rounded-xl px-6 h-12"
                    icon={<MdAdd className="text-xl" />}
                >
                    Invite User
                </Button>
            </div>

            <AdminContentCard
                title="System Administrators"
                action={
                    <div className="relative">
                        <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Find user..."
                            className="bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-4 py-1.5 text-xs text-gray-900 focus:border-brand-green/50 outline-none w-48"
                        />
                    </div>
                }
            >
                <AdminTable
                    columns={columns}
                    data={mockUsers}
                    onEdit={(item) => console.log('Edit', item)}
                    onDelete={(item) => {
                        setSelectedUser(item);
                        setIsDeleteDialogOpen(true);
                    }}
                />
            </AdminContentCard>

            <AdminDialog
                isOpen={isDeleteDialogOpen}
                onClose={() => setIsDeleteDialogOpen(false)}
                onConfirm={() => console.log('Deleted', selectedUser)}
                type="danger"
                title="Revoke Access?"
                description={`Are you sure you want to remove ${selectedUser?.name} from the administration portal? They will lose all access immediately.`}
                confirmLabel="Revoke Access"
            />
        </AdminLayout>
    );
}
