"use client";

import React from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import {
  AdminStatCard,
  AdminContentCard,
} from "@/components/admin/AdminShared";
import { AdminTable } from "@/components/admin/AdminTable";
import {
  MdTrendingUp,
  MdVisibility,
  MdArticle,
  MdMessage,
  MdMoreVert,
} from "react-icons/md";

const recentActivityCols = [
  {
    header: "操作",
    accessor: (item: any) => (
      <div className="flex items-center gap-3">
        <div
          className={`w-2 h-2 rounded-full ${item.type === "create" ? "bg-green-500" : "bg-blue-500"}`}
        />
        <span className="font-bold whitespace-nowrap">{item.action}</span>
      </div>
    ),
  },
  { header: "目标", accessor: "target" },
  { header: "用户", accessor: "user" },
  { header: "日期", accessor: "date", className: "text-gray-500 text-xs" },
];

const mockActivity = [
  {
    id: 1,
    action: "发布新闻",
    target: "第137届广交会",
    user: "管理员",
    date: "2小时前",
    type: "create",
  },
  {
    id: 2,
    action: "更新产品",
    target: "AP125-30",
    user: "管理员",
    date: "5小时前",
    type: "update",
  },
  {
    id: 3,
    action: "删除分类",
    target: "过时配件",
    user: "系统",
    date: "1天前",
    type: "delete",
  },
  {
    id: 4,
    action: "新消息",
    target: "销售咨询 #42",
    user: "公众",
    date: "1天前",
    type: "create",
  },
];

export default function AdminDashboard() {
  return (
    <AdminLayout>
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <AdminStatCard
          title="网站总访问量"
          value="42,891"
          icon={<MdVisibility className="text-2xl" />}
          trend={{ value: "12%", positive: true }}
        />
        <AdminStatCard
          title="博客文章"
          value="12"
          icon={<MdArticle className="text-2xl" />}
          trend={{ value: "4", positive: true }}
        />
        <AdminStatCard
          title="产品列表"
          value="128"
          icon={<MdTrendingUp className="text-2xl" />}
        />
        <AdminStatCard
          title="消息"
          value="42"
          icon={<MdMessage className="text-2xl" />}
          trend={{ value: "8%", positive: false }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity Table */}
        <div className="lg:col-span-2">
          <AdminContentCard
            title="最近活动"
            action={
              <button className="text-gray-400 hover:text-black p-1">
                <MdMoreVert className="text-xl" />
              </button>
            }
          >
            <AdminTable columns={recentActivityCols} data={mockActivity} />
          </AdminContentCard>
        </div>

        {/* Quick Shortcuts / Insights */}
        <div className="space-y-6">
          <AdminContentCard title="系统状态">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">数据库</span>
                <span className="text-xs font-bold text-brand-green px-2 py-0.5 rounded bg-brand-green/10">
                  稳定
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">存储</span>
                <span className="text-xs font-bold text-gray-700 px-2 py-0.5 rounded bg-gray-100">
                  已使用84%
                </span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-[84%] bg-amber-500 rounded-full" />
              </div>
            </div>
          </AdminContentCard>

          <AdminContentCard title="快速草稿">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="文章标题"
                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:border-brand-green/30 focus:bg-white outline-none transition-all"
              />
              <textarea
                placeholder="您在想什么？"
                rows={3}
                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:border-brand-green/30 focus:bg-white outline-none transition-all resize-none"
              />
              <button className="w-full bg-brand-green text-white font-bold py-3 rounded-xl hover:bg-green-700 transition-colors shadow-lg shadow-green-100">
                保存草稿
              </button>
            </div>
          </AdminContentCard>
        </div>
      </div>
    </AdminLayout>
  );
}
