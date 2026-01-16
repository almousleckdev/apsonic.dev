'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { MdEdit, MdDelete, MdChevronLeft, MdChevronRight } from 'react-icons/md';

interface Column<T> {
    header: string;
    accessor: keyof T | string | ((item: T) => React.ReactNode);
    className?: string;
}

interface AdminTableProps<T> {
    columns: Column<T>[];
    data: T[];
    onEdit?: (item: T) => void;
    onDelete?: (item: T) => void;
    isLoading?: boolean;
}

export function AdminTable<T extends { id: string | number }>({
    columns,
    data,
    onEdit,
    onDelete,
    isLoading = false
}: AdminTableProps<T>) {
    return (
        <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            {columns.map((col, idx) => (
                                <th key={idx} className={cn("px-6 py-4 font-bold text-gray-600 uppercase tracking-wider text-[10px]", col.className)}>
                                    {col.header}
                                </th>
                            ))}
                            {(onEdit || onDelete) && (
                                <th className="px-6 py-4 font-bold text-gray-600 uppercase tracking-wider text-[10px] text-right">
                                    Actions
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {isLoading ? (
                            <tr>
                                <td colSpan={columns.length + (onEdit || onDelete ? 1 : 0)} className="px-6 py-12 text-center text-gray-400">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-8 h-8 border-2 border-brand-green/30 border-t-brand-green rounded-full animate-spin" />
                                        <span>Loading data...</span>
                                    </div>
                                </td>
                            </tr>
                        ) : data.length === 0 ? (
                            <tr>
                                <td colSpan={columns.length + (onEdit || onDelete ? 1 : 0)} className="px-6 py-12 text-center text-gray-400 italic">
                                    No records found
                                </td>
                            </tr>
                        ) : (
                            data.map((item, idx) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition-colors group">
                                    {columns.map((col, colIdx) => (
                                        <td key={colIdx} className={cn("px-6 py-4 text-gray-700", col.className)}>
                                            {typeof col.accessor === 'function'
                                                ? col.accessor(item)
                                                : (item as any)[col.accessor as any] as React.ReactNode}
                                        </td>
                                    ))}
                                    {(onEdit || onDelete) && (
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                                {onEdit && (
                                                    <button
                                                        onClick={() => onEdit(item)}
                                                        className="p-2 hover:bg-brand-green/10 hover:text-brand-green rounded-lg transition-colors"
                                                    >
                                                        <MdEdit className="text-lg" />
                                                    </button>
                                                )}
                                                {onDelete && (
                                                    <button
                                                        onClick={() => onDelete(item)}
                                                        className="p-2 hover:bg-red-500/10 hover:text-red-500 rounded-lg transition-colors"
                                                    >
                                                        <MdDelete className="text-lg" />
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    )}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Basic Pagination (UI only) */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
                <p className="text-xs text-gray-500">Showing {data.length} records</p>
                <div className="flex gap-2">
                    <button className="p-1.5 border border-gray-200 rounded-lg text-gray-400 hover:border-gray-300 hover:text-black transition-all disabled:opacity-20" disabled>
                        <MdChevronLeft className="text-xl" />
                    </button>
                    <button className="p-1.5 border border-gray-200 rounded-lg text-gray-400 hover:border-gray-300 hover:text-black transition-all disabled:opacity-20" disabled>
                        <MdChevronRight className="text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
}
