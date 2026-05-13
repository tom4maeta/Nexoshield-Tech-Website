import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  Bell,
  Settings,
  LogOut,
  Briefcase,
  UserCircle2,
  Menu,
  X,
  Monitor,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";



const useAuth = () => {
  const navigate = useNavigate();

  const [user] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token || !user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return { user, logout };
};



const NAV_ITEMS = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Employees",
    icon: Users,
  },
  {
    label: "Projects",
    icon: Briefcase,
  },
  {
    label: "Software Services",
    icon: Monitor,
  },
  {
    label: "Cyber Security",
    icon: ShieldCheck,
  },
  {
    label: "Settings",
    icon: Settings,
  },
];

const STATS = [
  {
    title: "Our Team",
    value: 11,
    icon: Users,
    bg: "bg-blue-100",
    text: "text-blue-700",
    color: "#2563eb",
  },

  {
    title: "Projects Completed",
    value: 25,
    icon: Briefcase,
    bg: "bg-green-100",
    text: "text-green-700",
    color: "#10b981",
  },

  {
    title: "Cyber Security Services",
    value: 80,
    suffix: "%",
    icon: ShieldCheck,
    bg: "bg-purple-100",
    text: "text-purple-700",
    color: "#7c3aed",
  },

  {
    title: "Software Services",
    value: 90,
    suffix: "%",
    icon: Monitor,
    bg: "bg-orange-100",
    text: "text-orange-700",
    color: "#ea580c",
  },
];



function Sidebar({
  isOpen,
  onClose,
  onLogout,
}) {
  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      <aside
        className={`fixed md:static top-0 left-0 z-50 h-screen w-72 bg-gradient-to-b from-blue-700 to-indigo-900 text-white transition-transform duration-300 ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        } md:translate-x-0`}
      >
      
        <div className="p-8 border-b border-white/10">
          <h1 className="text-3xl font-black tracking-wide">
            NexoShield
          </h1>

          <p className="mt-2 text-blue-100 text-sm">
            Company Dashboard
          </p>
        </div>

      
        <nav className="p-5 space-y-3">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-white/10 transition duration-300 cursor-pointer"
              >
                <Icon size={22} />

                <span className="font-medium">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 w-full p-5">
          <button
            onClick={onLogout}
            className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 py-3 rounded-2xl font-semibold transition duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <LogOut size={20} />

            Logout
          </button>
        </div>
      </aside>
    </>
  );
}


function Header({
  user,
  sidebarOpen,
  toggleSidebar,
}) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-8 py-5 flex items-center justify-between">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="md:hidden cursor-pointer"
        >
          {sidebarOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-1">
            Welcome back,{" "}
            {user?.username || "User"}
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition cursor-pointer">
          <Bell size={22} />

          <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-red-500" />
        </button>

        {/* User */}
        <div className="hidden sm:flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-2xl">
          <UserCircle2
            size={42}
            className="text-blue-700"
          />

          <div>
            <h3 className="font-bold text-gray-800">
              {user?.username || "User"}
            </h3>

            <p className="text-sm text-gray-500 capitalize">
              {user?.role || "user"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}



function StatsCard({
  title,
  value,
  suffix = "",
  icon: Icon,
  bg,
  text,
}) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500">
            {title}
          </p>

          <h2 className="text-4xl font-black mt-3 text-gray-800">
            {value}
            {suffix}
          </h2>
        </div>

        <div className={`${bg} p-4 rounded-2xl`}>
          <Icon
            size={32}
            className={text}
          />
        </div>
      </div>
    </div>
  );
}



function PerformanceChart() {
  const chartData = useMemo(
    () =>
      STATS.map((item) => ({
        name: item.title,
        value: item.value,
        fill: item.color,
      })),
    []
  );

  return (
    <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 xl:col-span-2">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Company Performance
          </h2>

          <p className="text-gray-500 mt-1">
            This Month
          </p>
        </div>

        <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">
          Analytics
        </span>
      </div>

      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <BarChart data={chartData}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            tickLine={false}
            axisLine={false}
          />

          <Tooltip />

          <Bar
            dataKey="value"
            radius={[12, 12, 0, 0]}
          >
            {chartData.map(
              (entry, index) => (
                <Cell
                  key={index}
                  fill={entry.fill}
                />
              )
            )}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}



function ProfileCard({ user }) {
  return (
    <div className="bg-gradient-to-b from-blue-700 to-indigo-900 text-white rounded-3xl p-6 shadow-xl">
      <h2 className="text-2xl font-bold">
        User Profile
      </h2>

      <div className="flex flex-col items-center mt-8">
        <UserCircle2 size={100} />

        <h3 className="text-2xl font-bold mt-4">
          {user?.username || "User"}
        </h3>

        <p className="text-blue-100 mt-1">
          {user?.email ||
            "user@email.com"}
        </p>

        <span className="mt-4 bg-white/20 px-4 py-2 rounded-full text-sm capitalize">
          {user?.role || "user"}
        </span>
      </div>

      <div className="space-y-4 mt-10">
        <div className="bg-white/10 rounded-2xl p-4">
          <p className="text-blue-100 text-sm">
            Account Status
          </p>

          <h3 className="text-2xl font-bold text-lime-400 mt-1">
            Active
          </h3>
        </div>

        <div className="bg-white/10 rounded-2xl p-4">
          <p className="text-blue-100 text-sm">
            Last Login
          </p>

          <h3 className="text-2xl font-bold text-orange-300 mt-1">
            Today
          </h3>
        </div>
      </div>
    </div>
  );
}


function Dashboard() {
  const { user, logout } = useAuth();

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() =>
          setSidebarOpen(false)
        }
        onLogout={logout}
      />

      {/* Main */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header
          user={user}
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
        />

        {/* Content */}
        <section className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {STATS.map((item) => (
              <StatsCard
                key={item.title}
                {...item}
              />
            ))}
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">
            <PerformanceChart />

            <ProfileCard user={user} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;