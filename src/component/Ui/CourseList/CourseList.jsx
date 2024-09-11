
const courses = [
    {
      title: "Salesforce CDP - Data cloud (Customer data platform)",
      date: "9th May 2024 (THU) 11:30 PM IST",
      type: "demo",
    },
    {
      title: "Salesforce Einstein Analytics (Salesforce Tableau)",
      date: "13th May 2024 (MON) 06:30 AM IST",
      type: "demo",
    },
    {
      title: "Salesforce Einstein Analytics (Salesforce Tableau)",
      date: "13th May 2024 (MON) 06:30 AM IST",
      type: "demo",
    },
    {
      title: "Salesforce CDP - Data cloud (Customer data platform)",
      date: "9th May 2024 (THU) 11:30 PM IST",
      type: "batch",
    },
    {
      title: "Salesforce CDP - Data cloud (Customer data platform)",
      date: "9th May 2024 (THU) 11:30 PM IST",
      type: "batch",
    },
    {
      title: "Salesforce CDP - Data cloud (Customer data platform)",
      date: "9th May 2024 (THU) 11:30 PM IST",
      type: "batch",
    },
  ];

  export default function CourseList() {
    return (
      <div className=" text-white p-8" id="CourseList">
        {/* Course Demos Section */}
        <h2 className="text-4xl font-semibold mb-4 text-center"><span className="text-[#0A92CD]">Upcoming</span> <span className="text-[#0F2239]">Course Demos</span></h2>
        <div className="flex justify-center py-2 mb-5">
        <img src="/Icon/vector.png" width={100} height={10} alt="vector"></img>
        </div>

        <div className="space-y-4 mb-8">
          {courses
            .filter((course) => course.type === "demo")
            .map((course, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-[#3ba7d7] from-15%  to-[#fff] to-85%  rounded-[50px] p-4 flex justify-between items-center shadow-[0px_2px_8px_rgba(0,0,0,0.3)]"
              >
                <div>
                  <h3 className="text-lg font-semibold text-[#0F2239] ml-10">{course.title}</h3>
                  <p className="text-[#0A92CD] ml-10">{course.date}</p>
                </div>
                <div className="flex space-x-4">
                  <button className="bg-transparent text-black font-semibold py-2 px-4 rounded-[50px] border-2 border-black border-solid">Course Content</button>
                  <button className="bg-[#0455E0] text-white font-semibold py-2 px-4 rounded-[50px] flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8.257 3.099c.366-.446.958-.588 1.48-.358l8 4a1.25 1.25 0 010 2.518l-8 4a1.25 1.25 0 01-1.48-.358l-4-5a1.25 1.25 0 010-1.54l4-5zM12 8a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                    Join Meeting
                  </button>
                </div>
              </div>
            ))}
        </div>
  
        {/* Regular Batches Section */}
        <h2 className="text-4xl font-semibold mb-4 text-center"><span className="text-[#0A92CD]">Upcoming</span> <span className="text-[#0F2239]">Regular Batch</span></h2>
        <div className="flex justify-center py-2 mb-5">
        <img src="/Icon/vector.png" width={100} height={10} alt="vector"></img>
        </div>

        <div className="space-y-4">
          {courses
            .filter((course) => course.type === "batch")
            .map((course, index) => (
              <div
                key={index}
                className="bg-[#0F2239] rounded-[50px] p-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg font-semibold ml-10">{course.title}</h3>
                  <p className="text-[#0A92CD] ml-10">{course.date}</p>
                </div>
                <div className="flex space-x-4">
                  <button className="bg-transparent text-white font-semibold py-2 px-4 rounded-[50px] border-2 border-white border-solid " id="course_list_content">Course Content</button>
                  <button className="bg-blue-700 text-white font-semibold py-2 px-4 rounded-[50px] flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8.257 3.099c.366-.446.958-.588 1.48-.358l8 4a1.25 1.25 0 010 2.518l-8 4a1.25 1.25 0 01-1.48-.358l-4-5a1.25 1.25 0 010-1.54l4-5zM12 8a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                    Join Meeting
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
  