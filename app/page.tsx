'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  UserIcon,
  BookOpenIcon,
  CodeBracketIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

// 模拟博客文章数据
const blogPosts = [
  {
    id: 1,
    title: '我的第一篇技术博客',
    excerpt: '分享我在前端开发中的一些心得和体会，包括React、Next.js等技术的使用经验...',
    date: '2024-01-15',
    category: '技术分享',
    readTime: '5分钟'
  },
  {
    id: 2,
    title: '如何构建现代化的个人博客',
    excerpt: '详细介绍如何使用Next.js和Tailwind CSS构建一个现代化的个人博客网站...',
    date: '2024-01-10',
    category: '教程',
    readTime: '8分钟'
  },
  {
    id: 3,
    title: '我的2023年度总结',
    excerpt: '回顾2023年的学习、工作和生活，分享一些收获和感悟...',
    date: '2023-12-31',
    category: '生活感悟',
    readTime: '6分钟'
  }
]

// 技能数据
const skills = [
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'Python', level: 70 },
  { name: 'Docker', level: 65 }
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('about')

  return (
    <div className="min-h-screen">
      {/* 导航栏 */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">我的博客</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['about', 'blog', 'projects', 'contact'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? 'bg-primary-500 text-white'
                        : 'text-gray-700 hover:text-primary-500'
                    }`}
                  >
                    {tab === 'about' && '关于我'}
                    {tab === 'blog' && '博客文章'}
                    {tab === 'projects' && '项目展示'}
                    {tab === 'contact' && '联系方式'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 关于我 */}
        {activeTab === 'about' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* 个人介绍卡片 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <UserIcon className="w-16 h-16 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">你好，我是博主</h2>
                  <p className="text-lg text-gray-600 mb-4">
                    一名热爱技术的全栈开发者，专注于前端开发和用户体验设计。
                    我喜欢分享技术心得，记录学习过程，也喜欢探索新的技术栈。
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                      前端开发
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      全栈工程师
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                      技术博主
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 技能展示 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CodeBracketIcon className="w-6 h-6 mr-2" />
                技术技能
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 兴趣爱好 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <HeartIcon className="w-6 h-6 mr-2" />
                兴趣爱好
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <BookOpenIcon className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">阅读</h4>
                  <p className="text-gray-600 text-sm">喜欢阅读技术书籍和科幻小说</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <CodeBracketIcon className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">编程</h4>
                  <p className="text-gray-600 text-sm">热爱编程，享受创造的过程</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                  <HeartIcon className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">音乐</h4>
                  <p className="text-gray-600 text-sm">喜欢听各种类型的音乐</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 博客文章 */}
        {activeTab === 'blog' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">最新博客文章</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <motion.div
                  key={post.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <BookOpenIcon className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                        阅读更多 →
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 项目展示 */}
        {activeTab === 'projects' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">项目展示</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                  <CodeBracketIcon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">个人博客系统</h3>
                <p className="text-gray-600 mb-4">
                  使用Next.js和Tailwind CSS构建的现代化个人博客，支持响应式设计和SEO优化。
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Next.js</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">React</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">Tailwind</span>
                </div>
                <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  查看项目 →
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-4 flex items-center justify-center">
                  <CodeBracketIcon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">任务管理应用</h3>
                <p className="text-gray-600 mb-4">
                  一个简洁高效的任务管理应用，帮助用户更好地组织和管理日常任务。
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Vue.js</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Node.js</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">MongoDB</span>
                </div>
                <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  查看项目 →
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* 联系方式 */}
        {activeTab === 'contact' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">联系我</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">联系方式</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <EnvelopeIcon className="w-6 h-6 text-primary-600" />
                    <span className="text-gray-700">example@email.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <PhoneIcon className="w-6 h-6 text-primary-600" />
                    <span className="text-gray-700">+86 138 0000 0000</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPinIcon className="w-6 h-6 text-primary-600" />
                    <span className="text-gray-700">中国，北京</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">社交媒体</h3>
                <div className="space-y-4">
                  <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">G</span>
                    </div>
                    <span>GitHub</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors">
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">T</span>
                    </div>
                    <span>Twitter</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">L</span>
                    </div>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </main>

      {/* 页脚 */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600">
              © 2024 我的个人博客. 使用 Next.js 和 Tailwind CSS 构建.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 