import React from "react";
import Navbar from "../../components/Navbar";

const Announcements = () => {
  // Mock data - Replace with actual data from your backend
  const announcements = [
    {
      id: 1,
      title: "Mid-term Schedule",
      course: "Mathematics 101",
      content:
        "The mid-term examination will be held on March 25th, 2024. Please ensure you have completed all the required readings and assignments.",
      date: "1 day ago",
      priority: "High",
    },
    {
      id: 2,
      title: "Lab Safety Guidelines",
      course: "Physics Advanced",
      content:
        "Important safety guidelines for the upcoming lab sessions. All students must read and acknowledge these guidelines before participating in any lab activities.",
      date: "2 days ago",
      priority: "Medium",
    },
    {
      id: 3,
      title: "Course Materials Update",
      course: "Chemistry Basics",
      content:
        "New course materials have been uploaded. Please download and review them before the next class session.",
      date: "3 days ago",
      priority: "Low",
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-500/20 text-red-400";
      case "medium":
        return "bg-yellow-500/20 text-yellow-400";
      case "low":
        return "bg-green-500/20 text-green-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar userType="teacher" />

      <div className="p-6">
        {/* Background Effects */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-400 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300 opacity-10 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-indigo-400">
              Announcements
            </h1>
            <button className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition">
              Create New Announcement
            </button>
          </div>

          <div className="space-y-6">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="bg-gray-800/80 backdrop-blur-md rounded-lg shadow-lg p-6 transition-transform duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-indigo-400 mb-2">
                      {announcement.title}
                    </h2>
                    <p className="text-gray-400">{announcement.course}</p>
                  </div>
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${getPriorityColor(
                      announcement.priority
                    )}`}
                  >
                    {announcement.priority}
                  </span>
                </div>

                <p className="text-gray-300 mb-4">{announcement.content}</p>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">
                    Posted {announcement.date}
                  </span>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-sm bg-gray-700 text-white rounded-md hover:bg-gray-600 transition">
                      Edit
                    </button>
                    <button className="px-3 py-1 text-sm bg-red-500/20 text-red-400 rounded-md hover:bg-red-500/30 transition">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
