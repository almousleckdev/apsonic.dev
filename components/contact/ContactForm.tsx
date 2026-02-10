"use client";

import React from "react";
import { useContactForm } from "@/hooks/forms/useContactForm";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { colors } from "@/lib/design-tokens";
import { motion, AnimatePresence } from "framer-motion";
import { MdCheckCircle, MdError } from "react-icons/md";

export const ContactForm = () => {
  const {
    values,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
    resetStatus,
  } = useContactForm();

  if (submitStatus === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center p-12 bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200"
      >
        <div className="text-6xl text-gray-900 mb-6">
          <MdCheckCircle />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">消息发送成功</h3>
        <p className="text-gray-600 mb-8 max-w-md">
          感谢您联系Apsonic。我们的团队成员将审核您的请求，并在24小时内回复您。
        </p>
        <Button
          onClick={resetStatus}
          variant="outline"
          className="border-gray-200 text-gray-900 hover:bg-gray-50"
        >
          发送另一条消息
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          name="firstName"
          label="名"
          placeholder="请输入您的名"
          value={values.firstName}
          onChange={handleChange}
          error={errors.firstName}
          disabled={isSubmitting}
        />
        <Input
          name="lastName"
          label="姓"
          placeholder="请输入您的姓"
          value={values.lastName}
          onChange={handleChange}
          error={errors.lastName}
          disabled={isSubmitting}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          name="email"
          type="email"
          label="电子邮箱"
          placeholder="you@company.com"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          disabled={isSubmitting}
        />
        <Input
          name="phone"
          type="tel"
          label="电话号码（可选）"
          placeholder="+233 ..."
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
          disabled={isSubmitting}
        />
      </div>

      {/* Department Select - Custom Style to match */}
      <div className="w-full">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          部门
        </label>
        <select
          name="department"
          value={values.department}
          onChange={handleChange}
          disabled={isSubmitting}
          className="flex h-12 w-full rounded-lg px-4 bg-gray-50 border border-gray-100 text-gray-900 focus:border-gray-900 focus:bg-white focus:outline-none transition-all duration-200"
        >
          <option value="general">一般咨询</option>
          <option value="sales">销售与车队</option>
          <option value="dealership">经销商申请</option>
          <option value="support">技术支持</option>
          <option value="media">媒体与公关</option>
        </select>
      </div>

      <Input
        name="subject"
        label="主题"
        placeholder="我们可以如何帮助您？"
        value={values.subject}
        onChange={handleChange}
        error={errors.subject}
        disabled={isSubmitting}
      />

      <Textarea
        name="message"
        label="留言"
        placeholder="请详细说明您的咨询内容..."
        value={values.message}
        onChange={handleChange}
        error={errors.message}
        disabled={isSubmitting}
        rows={5}
      />

      <div className="pt-4">
        <Button
          type="submit"
          className="w-full md:w-auto min-w-[200px]"
          loading={isSubmitting}
          variant="primary"
        >
          发送消息
        </Button>
      </div>

      {submitStatus === "error" && (
        <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-4 rounded-lg">
          <MdError />
          <span>出现了错误。请稍后再试。</span>
        </div>
      )}
    </form>
  );
};
