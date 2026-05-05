"use client";

import React, { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { AdminContentCard } from "@/components/admin/AdminShared";
import { AdminTable } from "@/components/admin/AdminTable";
import { AdminDialog } from "@/components/admin/AdminDialog";
import { Button, Input } from "@/components/ui";
import { MdAdd, MdFilterList } from "react-icons/md";
import Image from "next/image";
import type { AdminCategory } from "@/lib/types/admin";

const mockCategories: AdminCategory[] = [
  {
    id: 1,
    name: "Underbone",
    slug: "underbone",
    image: "/images/products/underbone.png",
    count: 24,
  },
  {
    id: 2,
    name: "Street",
    slug: "street",
    image: "/images/products/street.png",
    count: 32,
  },
  {
    id: 3,
    name: "Off-road",
    slug: "off-road",
    image: "/images/products/offroad.png",
    count: 18,
  },
  {
    id: 4,
    name: "Tricycle",
    slug: "tricycle",
    image: "/images/products/tricycle.png",
    count: 45,
  },
  {
    id: 5,
    name: "Spare Parts",
    slug: "spare-parts",
    image: "/images/products/parts.png",
    count: 1205,
  },
];

export default function CategoriesPage() {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<AdminCategory | null>(null);

  const columns = [
    {
      header: "Image",
      accessor: (item: AdminCategory) => (
        <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-gray-100 bg-gray-50">
          {/* Fallback pattern if image is missing */}
          <div className="absolute inset-0 bg-brand-green/20 flex items-center justify-center font-bold text-[10px] text-brand-green">
            IMG
          </div>
        </div>
      ),
    },
    {
      header: "Name",
      accessor: (item: AdminCategory) => (
        <div>
          <div className="font-bold text-gray-900">{item.name}</div>
          <div className="text-xs text-gray-500">/{item.slug}</div>
        </div>
      ),
    },
    {
      header: "Items Count",
      accessor: (item: AdminCategory) => (
        <span className="px-2 py-1 rounded-md bg-gray-100 text-xs text-gray-500">
          {item.count} Products
        </span>
      ),
    },
  ];

  return (
    <AdminLayout>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Product Categories
          </h2>
          <p className="text-gray-500 text-sm">
            Manage catalogs and hierarchical groupings
          </p>
        </div>
        <Button
          className="rounded-xl px-6 h-12"
          icon={<MdAdd className="text-xl" />}
        >
          Create Category
        </Button>
      </div>

      <AdminContentCard
        title="All Categories"
        action={
          <div className="flex gap-2">
            <div className="relative">
              <MdFilterList className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Filter..."
                className="bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-4 py-1.5 text-xs text-gray-900 focus:border-brand-green/50 outline-none"
              />
            </div>
          </div>
        }
      >
        <AdminTable
          columns={columns}
          data={mockCategories}
          onEdit={(item) => console.log("Edit", item)}
          onDelete={(item) => {
            setSelectedCategory(item);
            setIsDeleteDialogOpen(true);
          }}
        />
      </AdminContentCard>

      <AdminDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={() => console.log("Deleted", selectedCategory)}
        type="danger"
        title="Delete Category?"
        description={`This will permanently remove the "${selectedCategory?.name}" category. This action cannot be undone.`}
        confirmLabel="Delete Permanently"
      />
    </AdminLayout>
  );
}
