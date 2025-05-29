'use client';
import React, { useState } from 'react';
import { 
  Home, 
  Briefcase, 
  Users, 
  MessageSquare, 
  BarChart3, 
  Settings,
  Eye
} from 'lucide-react';

const JobDashboard = () => {
  const [activeTab, setActiveTab] = useState('All jobs');
  const [activeNavItem, setActiveNavItem] = useState('Jobs');

  const jobs = [
    {
      id: 1,
      title: 'Senior Product Designer',
      status: 'Open',
      applicants: 12,
      views: 234,
      posted: '2d ago'
    },
    {
      id: 2,
      title: 'Software Engineer',
      status: 'Open',
      applicants: 8,
      views: 156,
      posted: '3d ago'
    },
    {
      id: 3,
      title: 'Marketing Manager',
      status: 'Closed',
      applicants: 25,
      views: 302,
      posted: '5d ago'
    }
  ];

  const navItems = [
    { name: 'Home', icon: Home },
    { name: 'Jobs', icon: Briefcase },
    { name: 'Talent', icon: Users },
    { name: 'Messages', icon: MessageSquare },
    { name: 'Reports', icon: BarChart3 }
  ];

  const tabs = ['All jobs', 'Drafts', 'Archived'];

  const NavItem = ({ item, isActive, onClick }) => {
    const Icon = item.icon;
    return (
      <button
        onClick={() => onClick(item.name)}
        className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
          isActive 
            ? 'bg-gray-100 text-gray-900' 
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
        }`}
      >
        <Icon size={18} className="mr-3" />
        <span className="text-sm font-medium">{item.name}</span>
      </button>
    );
  };

  const StatusBadge = ({ status }) => (
    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
      status === 'Open' 
        ? 'bg-green-100 text-green-800' 
        : 'bg-gray-100 text-gray-800'
    }`}>
      {status}
    </span>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Company Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm font-semibold">A</span>
            </div>
            <span className="font-medium text-gray-900">Acme Co</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <NavItem
              key={item.name}
              item={item}
              isActive={activeNavItem === item.name}
              onClick={setActiveNavItem}
            />
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-gray-200 space-y-3">
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Post a job
          </button>
          <button
            onClick={() => setActiveNavItem('Settings')}
            className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
              activeNavItem === 'Settings' 
                ? 'bg-gray-100 text-gray-900' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <Settings size={18} className="mr-3" />
            <span className="text-sm font-medium">Settings</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Jobs</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Post a job
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-6">
          {/* Tabs */}
          <div className="mb-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Active Jobs Section */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Active jobs</h2>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Job title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applicants
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Views
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Posted
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {jobs.map((job) => (
                    <tr key={job.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {job.title}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge status={job.status} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {job.applicants}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {job.views}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {job.posted}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                        <button className="hover:text-blue-800 transition-colors flex items-center">
                          <Eye size={14} className="mr-1" />
                          View job
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Settings Section */}
          <div className="mt-8 bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Settings</h2>
            </div>
            <div className="px-6 py-4">
              <p className="text-sm text-gray-600">Percentage taken by job post</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDashboard;