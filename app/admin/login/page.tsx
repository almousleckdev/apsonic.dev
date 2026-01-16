'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { MdEmail, MdLock, MdArrowForward, MdLogin } from 'react-icons/md';
import { Input, Button } from '@/components/ui';

export default function AdminLoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({ email: 'admin@apsonic.com', password: 'password' });
    const [errors, setErrors] = useState({ email: '', password: '' });

    const validate = () => {
        let valid = true;
        const newErrors = { email: '', password: '' };

        if (!formData.email) {
            newErrors.email = '请输入邮箱地址';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = '请输入有效的邮箱地址';
            valid = false;
        }

        if (!formData.password) {
            newErrors.password = '请输入密码';
            valid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = '密码至少需要6个字符';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        setIsLoading(true);
        // Simulate login
        setTimeout(() => {
            setIsLoading(false);
            router.push('/admin/dashboard');
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-[#f8f9fa] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-green/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-green/2 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md relative z-10"
            >
                {/* Logo Area */}
                <div className="flex flex-col items-center mb-10">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative w-24 h-24 mb-6"
                    >
                        <Image src="/images/logo/apsoniclogo.png" alt="Apsonic Logo" fill className="object-contain" />
                    </motion.div>
                    <h1 className="text-3xl font-bold text-black tracking-tight">管理 <span className="text-brand-green">中心</span></h1>
                    <p className="text-gray-500 mt-2">输入您的凭据以管理Apsonic门户</p>
                </div>

                {/* Login Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-3xl border border-gray-100 space-y-6 shadow-2xl shadow-gray-200"
                    noValidate
                >
                    <Input
                        label="邮箱地址"
                        type="email"
                        placeholder="admin@apsonic.com"
                        icon={<MdEmail />}
                        error={errors.email}
                        value={formData.email}
                        onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                    />

                    <Input
                        label="密码"
                        type="password"
                        placeholder="••••••••"
                        icon={<MdLock />}
                        error={errors.password}
                        value={formData.password}
                        onChange={(e) => {
                            setFormData({ ...formData, password: e.target.value });
                            if (errors.password) setErrors({ ...errors, password: '' });
                        }}
                    />

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 bg-gray-50 accent-brand-green" />
                            <span className="text-gray-500 group-hover:text-black transition-colors">记住我</span>
                        </label>
                    </div>

                    <Button
                        type="submit"
                        loading={isLoading}
                        className="w-full h-14 rounded-2xl text-lg font-bold"
                        icon={<MdLogin className="text-2xl" />}
                        iconPosition="right"
                    >
                        {isLoading ? '验证中...' : '登录'}
                    </Button>
                </form>

                {/* Footer Link */}
                <p className="text-center mt-8 text-gray-500 text-sm">
                    由Apsonic安全保护。 <br />
                    返回 <a href="/" className="text-gray-600 hover:text-brand-green underline decoration-brand-green/30">主网站</a>
                </p>
            </motion.div>
        </main>
    );
}
