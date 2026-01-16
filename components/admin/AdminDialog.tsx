'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdErrorOutline, MdWarningAmber, MdCheckCircleOutline, MdClose } from 'react-icons/md';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

interface AdminDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    description: string;
    type?: 'danger' | 'warning' | 'success' | 'info';
    confirmLabel?: string;
    cancelLabel?: string;
}

export const AdminDialog = ({
    isOpen,
    onClose,
    onConfirm,
    title,
    description,
    type = 'info',
    confirmLabel = '确认',
    cancelLabel = '取消'
}: AdminDialogProps) => {

    const icons = {
        danger: <MdErrorOutline className="text-red-500 text-5xl" />,
        warning: <MdWarningAmber className="text-amber-500 text-5xl" />,
        success: <MdCheckCircleOutline className="text-brand-green text-5xl" />,
        info: <MdErrorOutline className="text-blue-500 text-5xl" />
    };

    const confirmColors = {
        danger: 'bg-red-600 hover:bg-red-700 text-white',
        warning: 'bg-amber-600 hover:bg-amber-700 text-white',
        success: 'bg-brand-green hover:bg-green-700 text-white',
        info: 'bg-blue-600 hover:bg-blue-700 text-white'
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                    />

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-2xl"
                    >
                        <div className="p-8 text-center">
                            <div className="mb-6 flex justify-center">
                                {icons[type]}
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-2">{title}</h3>
                            <p className="text-gray-500 leading-relaxed">{description}</p>
                        </div>

                        <div className="flex flex-col sm:flex-row border-t border-gray-100 bg-gray-50">
                            <button
                                onClick={onClose}
                                className="flex-1 px-8 py-4 text-sm font-bold text-gray-500 hover:bg-gray-100 transition-colors border-r border-gray-100"
                            >
                                {cancelLabel}
                            </button>
                            <button
                                onClick={() => {
                                    onConfirm();
                                    onClose();
                                }}
                                className={cn(
                                    "flex-1 px-8 py-4 text-sm font-bold transition-all",
                                    confirmColors[type]
                                )}
                            >
                                {confirmLabel}
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
