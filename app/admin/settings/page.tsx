'use client';

import React, { useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { AdminContentCard } from '@/components/admin/AdminShared';
import { AdminDialog } from '@/components/admin/AdminDialog';
import { Button, Input } from '@/components/ui';
import {
    MdSave,
    MdSecurity,
    MdSettings,
    MdPerson,
    MdFileUpload,
    MdLanguage,
    MdNotifications
} from 'react-icons/md';
import Image from 'next/image';

export default function AdminSettingsPage() {
    const [isSaveDialogOpen, setIsSaveDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSave = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsSaveDialogOpen(true);
        }, 1000);
    };

    return (
        <AdminLayout>
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header Actions */}
                <div className="flex justify-between items-center pb-6 border-b border-gray-100">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">System Settings</h2>
                        <p className="text-gray-500 mt-1 text-sm">Configure your dashboard and application preferences</p>
                    </div>
                    <Button
                        onClick={handleSave}
                        loading={isLoading}
                        className="rounded-xl px-8 h-12"
                        icon={<MdSave className="text-xl" />}
                    >
                        Save Changes
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Navigation/Categories */}
                    <div className="space-y-2">
                        {[
                            { id: 'general', label: 'General Info', icon: MdSettings },
                            { id: 'profile', label: 'Profile', icon: MdPerson },
                            { id: 'security', label: 'Security', icon: MdSecurity },
                            { id: 'notifications', label: 'Notifications', icon: MdNotifications },
                            { id: 'localization', label: 'Localization', icon: MdLanguage },
                        ].map((item, idx) => (
                            <button
                                key={item.id}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${idx === 0 ? 'bg-brand-green text-white shadow-lg shadow-green-100' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`}
                            >
                                <item.icon className="text-xl" />
                                <span className="font-semibold text-sm">{item.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="md:col-span-2 space-y-6">
                        <AdminContentCard title="Application Identity">
                            <div className="space-y-6">
                                <div className="flex items-center gap-6 pb-6 border-b border-gray-100">
                                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 group">
                                        <Image src="/images/logo/apsoniclogo.png" alt="Portal Logo" fill className="object-contain p-4" />
                                        <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
                                            <MdFileUpload className="text-gray-900 text-3xl" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-900 font-bold mb-1">Portal Logo</h4>
                                        <p className="text-xs text-gray-500 mb-3">Recommended size: 512x512px (PNG or SVG)</p>
                                        <button className="text-xs text-brand-green font-bold hover:underline">Change Logo</button>
                                    </div>
                                </div>

                                <Input
                                    label="Site Title"
                                    defaultValue="APSONIC Admin Portal"
                                    placeholder="Enter portal title"
                                />
                                <Input
                                    label="Support Email"
                                    defaultValue="support@apsonic.com"
                                    placeholder="support@example.com"
                                />
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
                                    <textarea
                                        rows={3}
                                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-900 focus:border-brand-green outline-none transition-all"
                                        defaultValue="The official administration portal for APSONIC operations."
                                    />
                                </div>
                            </div>
                        </AdminContentCard>

                        <AdminContentCard title="Display Preferences">
                            <div className="space-y-4 text-sm">
                                <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl cursor-pointer group hover:bg-gray-100 transition-all">
                                    <div>
                                        <p className="font-bold text-gray-900">Dark Mode</p>
                                        <p className="text-xs text-gray-500">Enable high-contrast dark theme</p>
                                    </div>
                                    <div className="w-12 h-6 bg-gray-200 rounded-full relative">
                                        <div className="absolute left-1 top-1 w-4 h-4 bg-gray-400 rounded-full" />
                                    </div>
                                </label>

                                <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl cursor-pointer group hover:bg-gray-100 transition-all">
                                    <div>
                                        <p className="font-bold text-gray-900">Compact Sidebar</p>
                                        <p className="text-xs text-gray-500">Hide labels and show icons only</p>
                                    </div>
                                    <div className="w-12 h-6 bg-gray-200 rounded-full relative">
                                        <div className="absolute left-1 top-1 w-4 h-4 bg-gray-400 rounded-full" />
                                    </div>
                                </label>
                            </div>
                        </AdminContentCard>
                    </div>
                </div>
            </div>

            <AdminDialog
                isOpen={isSaveDialogOpen}
                onClose={() => setIsSaveDialogOpen(false)}
                onConfirm={() => setIsSaveDialogOpen(false)}
                type="success"
                title="Settings Updated"
                description="Your preferences have been successfully updated across the entire system."
                confirmLabel="Excellent"
            />
        </AdminLayout>
    );
}
