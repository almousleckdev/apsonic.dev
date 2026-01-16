'use client';

import React, { useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { AdminContentCard } from '@/components/admin/AdminShared';
import { AdminTable } from '@/components/admin/AdminTable';
import { AdminDialog } from '@/components/admin/AdminDialog';
import { Button, Input } from '@/components/ui';
import { MdAdd, MdSearch, MdFilterList, MdSettingsSuggest } from 'react-icons/md';

const mockProducts = [
    { id: '1', model: 'AP50-3', brand: 'APSONIC', category: 'Underbone', specsCount: 12, lastUpdated: '2025-11-20' },
    { id: '2', model: 'AP125-30', brand: 'APSONIC', category: 'Street', specsCount: 15, lastUpdated: '2025-11-18' },
    { id: '3', model: 'AP150ZH-20 SPORT', brand: 'APSONIC', category: 'Tricycle', specsCount: 18, lastUpdated: '2025-11-15' },
    { id: '4', model: 'Aloba', brand: 'APSONIC', category: 'Street', specsCount: 14, lastUpdated: '2025-11-10' },
];

export default function ProductSpecsPage() {
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    const columns = [
        {
            header: 'Product Model', accessor: (item: any) => (
                <div>
                    <div className="font-bold text-gray-900">{item.model}</div>
                    <div className="text-xs text-brand-green">{item.brand}</div>
                </div>
            )
        },
        { header: 'Category', accessor: 'category' },
        {
            header: 'Specs Defined', accessor: (item: any) => (
                <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-green" style={{ width: `${(item.specsCount / 20) * 100}%` }} />
                    </div>
                    <span className="text-xs text-gray-500">{item.specsCount}/20</span>
                </div>
            )
        },
        { header: 'Last Updated', accessor: 'lastUpdated', className: 'text-xs text-gray-500' },
    ];

    return (
        <AdminLayout>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Technical Specifications</h2>
                    <p className="text-gray-500 text-sm">Create and maintain product data sheets</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="rounded-xl px-6 h-12 text-gray-900 border-gray-200" icon={<MdSettingsSuggest className="text-xl" />}>
                        Spec Templates
                    </Button>
                    <Button className="rounded-xl px-6 h-12" icon={<MdAdd className="text-xl" />}>
                        Add Product
                    </Button>
                </div>
            </div>

            <AdminContentCard
                title="Product Catalog"
                action={
                    <div className="flex gap-4">
                        <div className="relative">
                            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search models..."
                                className="bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-xs text-gray-900 focus:border-brand-green/50 outline-none w-64"
                            />
                        </div>
                    </div>
                }
            >
                <AdminTable
                    columns={columns}
                    data={mockProducts}
                    onEdit={(item) => console.log('Edit', item)}
                    onDelete={(item) => {
                        setSelectedProduct(item);
                        setIsDeleteDialogOpen(true);
                    }}
                />
            </AdminContentCard>

            <AdminDialog
                isOpen={isDeleteDialogOpen}
                onClose={() => setIsDeleteDialogOpen(false)}
                onConfirm={() => console.log('Deleted', selectedProduct)}
                type="danger"
                title="Remove Product Specification?"
                description={`Are you sure you want to remove all technical data for ${selectedProduct?.model}? This cannot be recovered.`}
                confirmLabel="Confirm Delete"
            />
        </AdminLayout>
    );
}
