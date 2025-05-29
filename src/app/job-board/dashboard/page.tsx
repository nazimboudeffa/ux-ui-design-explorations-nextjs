'use client';
import React, { useState } from 'react';
import { 
  Bell, 
  Search, 
  Plus, 
  TrendingUp, 
  Users, 
  Briefcase, 
  Eye, 
  Edit, 
  Trash2,
  Calendar,
  MapPin,
  DollarSign,
  Clock,
  Filter,
  Download,
  Settings,
  User,
  BarChart3,
  Activity
} from 'lucide-react';

const JobBoardDashboard = () => {
  const [userRole, setUserRole] = useState('employer'); // 'employer' or 'jobseeker'
  const [selectedTab, setSelectedTab] = useState('overview');

  // Sample data
  const stats = {
    employer: {
      totalJobs: 24,
      activeJobs: 18,
      totalApplications: 156,
      newApplications: 12
    },
    jobseeker: {
      appliedJobs: 8,
      savedJobs: 15,
      profileViews: 23,
      interviews: 3
    }
  };

  const recentJobs = [
    { id: 1, title: "Senior Frontend Developer", company: "TechCorp", location: "Remote", salary: "$80k-$120k", applications: 24, status: "Active", posted: "2 days ago" },
    { id: 2, title: "Product Manager", company: "StartupXYZ", location: "New York", salary: "$90k-$130k", applications: 18, status: "Active", posted: "5 days ago" },
    { id: 3, title: "UX Designer", company: "DesignStudio", location: "San Francisco", salary: "$70k-$100k", applications: 31, status: "Paused", posted: "1 week ago" },
  ];

  const appliedJobs = [
    { id: 1, title: "Senior React Developer", company: "TechFlow", status: "Interview Scheduled", appliedDate: "3 days ago" },
    { id: 2, title: "Full Stack Engineer", company: "WebSolutions", status: "Under Review", appliedDate: "1 week ago" },
    { id: 3, title: "Frontend Lead", company: "InnovateNow", status: "Application Sent", appliedDate: "2 weeks ago" },
  ];

  const StatCard = ({ icon: Icon, title, value, change, changeType }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          {change && (
            <p className={`text-sm mt-2 flex items-center ${changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
              <TrendingUp size={16} className="mr-1" />
              {change}
            </p>
          )}
        </div>
        <div className="p-3 bg-blue-50 rounded-lg">
          <Icon className="text-blue-600" size={24} />
        </div>
      </div>
    </div>
  );

  const JobCard = ({ job, isEmployer = true }) => (
    <div className="bg-white rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">{job.title}</h3>
          <p className="text-gray-600">{job.company}</p>
        </div>
        {isEmployer && (
          <div className="flex space-x-2">
            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
              <Eye size={16} />
            </button>
            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
              <Edit size={16} />
            </button>
            <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
              <Trash2 size={16} />
            </button>
          </div>
        )}
      </div>
      
      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
        <div className="flex items-center">
          <MapPin size={14} className="mr-1" />
          {job.location}
        </div>
        {job.salary && (
          <div className="flex items-center">
            <DollarSign size={14} className="mr-1" />
            {job.salary}
          </div>
        )}
        <div className="flex items-center">
          <Clock size={14} className="mr-1" />
          {isEmployer ? job.posted : job.appliedDate}
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        {isEmployer ? (
          <>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              job.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              {job.status}
            </span>
            <span className="text-sm text-gray-600">{job.applications} applications</span>
          </>
        ) : (
          <>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              job.status === 'Interview Scheduled' ? 'bg-green-100 text-green-800' :
              job.status === 'Under Review' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
            }`}>
              {job.status}
            </span>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View Details
            </button>
          </>
        )}
      </div>
    </div>
  );

  const EmployerDashboard = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Briefcase}
          title="Total Jobs"
          value={stats.employer.totalJobs}
          change="+3 this month"
          changeType="positive"
        />
        <StatCard
          icon={Activity}
          title="Active Jobs"
          value={stats.employer.activeJobs}
        />
        <StatCard
          icon={Users}
          title="Total Applications"
          value={stats.employer.totalApplications}
          change="+12 this week"
          changeType="positive"
        />
        <StatCard
          icon={Bell}
          title="New Applications"
          value={stats.employer.newApplications}
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus size={16} className="mr-2" />
            Post New Job
          </button>
          <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Users size={16} className="mr-2" />
            View Applications
          </button>
          <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            <BarChart3 size={16} className="mr-2" />
            Analytics
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
            <Download size={16} className="mr-2" />
            Export Data
          </button>
        </div>
      </div>

      {/* Recent Jobs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900">Your Job Postings</h2>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All
            </button>
          </div>
        </div>
        <div className="p-6 space-y-4">
          {recentJobs.map((job) => (
            <JobCard key={job.id} job={job} isEmployer={true} />
          ))}
        </div>
      </div>
    </div>
  );

  const JobSeekerDashboard = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Briefcase}
          title="Applied Jobs"
          value={stats.jobseeker.appliedJobs}
        />
        <StatCard
          icon={Activity}
          title="Saved Jobs"
          value={stats.jobseeker.savedJobs}
        />
        <StatCard
          icon={Eye}
          title="Profile Views"
          value={stats.jobseeker.profileViews}
          change="+5 this week"
          changeType="positive"
        />
        <StatCard
          icon={Calendar}
          title="Interviews"
          value={stats.jobseeker.interviews}
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Search size={16} className="mr-2" />
            Browse Jobs
          </button>
          <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <User size={16} className="mr-2" />
            Update Profile
          </button>
          <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            <Download size={16} className="mr-2" />
            Download Resume
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
            <BarChart3 size={16} className="mr-2" />
            View Analytics
          </button>
        </div>
      </div>

      {/* Applied Jobs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900">Recent Applications</h2>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All
            </button>
          </div>
        </div>
        <div className="p-6 space-y-4">
          {appliedJobs.map((job) => (
            <JobCard key={job.id} job={job} isEmployer={false} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">JobBoard Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              {/* Role Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setUserRole('employer')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    userRole === 'employer' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                  }`}
                >
                  Employer
                </button>
                <button
                  onClick={() => setUserRole('jobseeker')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    userRole === 'jobseeker' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                  }`}
                >
                  Job Seeker
                </button>
              </div>
              
              {/* Notifications */}
              <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Bell size={20} />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              
              {/* Profile */}
              <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="text-white" size={16} />
                </div>
                <span className="text-sm font-medium">John Doe</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {userRole === 'employer' ? <EmployerDashboard /> : <JobSeekerDashboard />}
      </main>
    </div>
  );
};

export default JobBoardDashboard;