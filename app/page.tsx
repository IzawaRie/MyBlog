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
  HeartIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  TrophyIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'

// 个人基本信息
const personalInfo = {
  name: '张三',
  title: '全栈开发工程师',
  birthDate: '1995-06-15',
  phone: '+86 138 0000 0000',
  email: '1944366169@qq.com',
  location: '北京市朝阳区',
  avatar: '/avatar.jpg' // 可以放置头像图片
}

// 技能数据
const skills = [
  { name: 'JavaScript/TypeScript', level: 90 },
  { name: 'React/Next.js', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'MySQL/MongoDB', level: 70 },
  { name: 'Docker/K8s', level: 65 }
]

// 工作经历
const workExperience = [
  {
    company: '腾讯科技',
    position: '高级前端开发工程师',
    period: '2022.03 - 至今',
    description: '负责微信小程序开发，用户增长50%，性能优化30%'
  },
  {
    company: '字节跳动',
    position: '前端开发工程师',
    period: '2020.07 - 2022.02',
    description: '参与抖音H5页面开发，日活用户千万级，负责组件库建设'
  }
]

// 实习经历
const internships = [
  {
    company: '阿里巴巴',
    position: '前端开发实习生',
    period: '2020.03 - 2020.06',
    description: '参与淘宝商家后台系统开发，学习大型项目架构设计'
  }
]

// 项目经验
const projects = [
  {
    name: '电商管理系统',
    tech: 'React + Node.js + MySQL',
    description: '完整的电商后台管理系统，包含商品管理、订单处理、数据统计等功能',
    highlight: '日处理订单1000+笔'
  },
  {
    name: '个人博客网站',
    tech: 'Next.js + Tailwind CSS',
    description: '响应式个人博客，支持文章发布、评论系统、SEO优化',
    highlight: '月访问量5000+'
  }
]

// 获奖经历
const awards = [
  {
    title: '全国大学生程序设计竞赛',
    level: '省级二等奖',
    year: '2019',
    description: '团队协作完成算法题目，展现编程能力'
  },
  {
    title: '优秀毕业生',
    level: '校级',
    year: '2020',
    description: '学业成绩优异，综合素质突出'
  }
]

// 博客文章
const blogPosts = [
  {
    id: 1,
    title: 'React性能优化实践',
    excerpt: '分享在实际项目中React性能优化的经验和技巧...',
    date: '2024-01-15',
    category: '技术分享'
  },
  {
    id: 2,
    title: '前端工程化最佳实践',
    excerpt: '从构建工具到部署流程的完整前端工程化方案...',
    date: '2024-01-10',
    category: '工程化'
  }
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className="min-h-screen">
      {/* 导航栏 */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">{personalInfo.name}的简历</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  { key: 'profile', label: '个人信息' },
                  { key: 'experience', label: '工作经历' },
                  { key: 'projects', label: '项目经验' },
                  { key: 'blog', label: '技术博客' }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === tab.key
                        ? 'bg-primary-500 text-white'
                        : 'text-gray-700 hover:text-primary-500'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* 个人信息页面 */}
        {activeTab === 'profile' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* 个人基本信息 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <UserIcon className="w-16 h-16 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{personalInfo.name}</h2>
                  <p className="text-xl text-primary-600 mb-4">{personalInfo.title}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      出生日期：{personalInfo.birthDate}
                    </div>
                    <div className="flex items-center">
                      <PhoneIcon className="w-4 h-4 mr-2" />
                      {personalInfo.phone}
                    </div>
                    <div className="flex items-center">
                      <EnvelopeIcon className="w-4 h-4 mr-2" />
                      {personalInfo.email}
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="w-4 h-4 mr-2" />
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 技术技能 */}
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

            {/* 获奖经历 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <TrophyIcon className="w-6 h-6 mr-2" />
                获奖经历
              </h3>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="border-l-4 border-primary-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900">{award.title}</h4>
                        <p className="text-primary-600 text-sm">{award.level}</p>
                        <p className="text-gray-600 text-sm mt-1">{award.description}</p>
                      </div>
                      <span className="text-sm text-gray-500">{award.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 自我评价 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <HeartIcon className="w-6 h-6 mr-2" />
                自我评价
              </h3>
              <div className="text-gray-600 space-y-3">
                <p>• 3年+前端开发经验，熟练掌握React、Vue等主流框架</p>
                <p>• 具备良好的代码规范和团队协作能力，参与过多个大型项目</p>
                <p>• 热爱学习新技术，关注前端发展趋势，有较强的自学能力</p>
                <p>• 责任心强，能够承受工作压力，具备解决复杂问题的能力</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* 工作经历页面 */}
        {activeTab === 'experience' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* 工作经历 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BriefcaseIcon className="w-6 h-6 mr-2" />
                工作经历
              </h3>
              <div className="space-y-6">
                {workExperience.map((work, index) => (
                  <div key={index} className="border-l-4 border-primary-500 pl-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{work.position}</h4>
                        <p className="text-primary-600 font-medium">{work.company}</p>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {work.period}
                      </span>
                    </div>
                    <p className="text-gray-600">{work.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 实习经历 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <AcademicCapIcon className="w-6 h-6 mr-2" />
                实习经历
              </h3>
              <div className="space-y-6">
                {internships.map((internship, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{internship.position}</h4>
                        <p className="text-green-600 font-medium">{internship.company}</p>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {internship.period}
                      </span>
                    </div>
                    <p className="text-gray-600">{internship.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* 项目经验页面 */}
        {activeTab === 'projects' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">项目经验</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                    <CodeBracketIcon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-primary-600 text-sm mb-3">{project.tech}</p>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <p className="text-yellow-800 text-sm font-medium">✨ {project.highlight}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 技术博客页面 */}
        {activeTab === 'blog' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">技术博客</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-4 flex items-center justify-center">
                    <BookOpenIcon className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    阅读全文 →
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </main>

      {/* 页脚 */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600">
              © 2024 {personalInfo.name}的个人简历. 联系邮箱：{personalInfo.email}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 