import { Outlet, } from "react-router-dom";


interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {

  
  

  return (
    <div className="flex min-h-screen w-full relative">
      {/* Sidebar */}
      <div className="flex-shrink-0">
       
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Fixed Header */}
        <div className="flex-shrink-0 px-4 lg:px-6 pt-4 bg-white">
          
        </div>
        
        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-6 bg-[#f4f4f5]">
          <main className="h-full">
            {children || <Outlet />}
          </main>
        </div>
      </div>
    </div>
  );
}