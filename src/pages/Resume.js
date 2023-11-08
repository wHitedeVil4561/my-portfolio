import React, { useState } from "react";
const Resume = () => {
  const [index, setIndex] = useState(0);
  const resume = ["Education", "Professional Skills", "Experience"];
  const onChangeStatus = (status) => {
    console.log(status);
    setIndex(status);
  };
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3 items-center">
        {/* <div className="experience text-darkred">
          <strong className="text-2xl">1.5</strong>+ YEARS OF EXPERIENCE
        </div> */}
        <div className="text-3xl text-neu">My Resume</div>
      </div>
      <div className="linear-gradient-1 box-shadow-10 rounded-lg grid grid-cols-1 md:grid-cols-3 text-neu tex-xl font-semibold">
        <div
          className={`w-full flex justify-center items-center text-center rounded-lg py-5 px-8 ${
            index == 0 ? "text-darkred linear-gradient-2 box-shadow-10" : ""
          }`}
          onClick={() => onChangeStatus(0)}>
          {resume[0]}
        </div>
        <div
          className={`w-full flex justify-center items-center text-center py-5 px-8 ${
            index == 1
              ? "text-darkred linear-gradient-2 box-shadow-10 rounded-lg"
              : ""
          }`}
          onClick={() => onChangeStatus(1)}>
          {resume[1]}
        </div>
        <div
          className={`w-full flex justify-center items-center text-center py-5 px-8 ${
            index == 2
              ? "text-darkred linear-gradient-2 box-shadow-10 rounded-lg"
              : ""
          }`}
          onClick={() => onChangeStatus(2)}>
          {resume[2]}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 pl-7">
            <span className="text-darkred text-lg font-semibold">
              (2018-2022)
            </span>
            <span className="text-2xl font-semibold text-neu">Education</span>
          </div>
          <div className="border-l-[4px] border-darkblack flex flex-col gap-7">
            <div className="pl-7 relative">
              <div className="w-7 h-[4px] bg-darkblack absolute left-0 top-8"></div>
              <div className="w-[20px] h-[20px] rounded-full border-[5px] border-darkblack absolute left-[-12px] top-[24px] bg-darkslate"></div>
              <div className="flex flex-col gap-5 text-neu linear-gradient-1 box-shadow-10 p-5 cursor-pointer rounded-lg">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-3 ">
                    <span className="text-xl font-semibold">
                      Bachelor of Technology in <br /> Electronics and
                      Communication
                    </span>
                    <span className="text-sm">
                      Madan Mohan Malaviya University of Technology,
                      <br />
                      Gorakhpur(2018 - 2022)
                    </span>
                  </div>
                  <div className="px-5 py-3 rounded-md text-darkred text-xl font-semibold linear-gradient-1 box-shadow-10">
                    8.15/10
                  </div>
                </div>
                <div className="btech-summary">
                  kjdfjlsajflsajflajfusdl
                  <br />
                  fjladjflkajflka
                  <br />
                  fkladsjflkasjlk
                </div>
              </div>
            </div>
            <div className="pl-7 relative">
              <div className="w-7 h-[4px] bg-darkblack absolute left-0 top-8"></div>
              <div className="w-[20px] h-[20px] rounded-full border-[5px] border-darkblack absolute left-[-12px] top-[24px] bg-darkslate"></div>
              <div className="flex flex-col gap-5 text-neu linear-gradient-1 box-shadow-10 p-5 cursor-pointer rounded-lg">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-3 ">
                    <span className="text-xl font-semibold">Intermediate</span>
                    <span className="text-sm">
                      Devasthaly Vidyapeeth,
                      <br />
                      Ballia(2016 - 2018)
                    </span>
                  </div>
                  <div className="px-5 py-3 rounded-md text-darkred text-xl font-semibold linear-gradient-1 box-shadow-10">
                    91.6/100
                  </div>
                </div>
                <div className="btech-summary">
                  kjdfjlsajflsajflajfusdl
                  <br />
                  fjladjflkajflka
                  <br />
                  fkladsjflkasjlk
                </div>
              </div>
            </div>
            <div className="pl-7 relative">
              <div className="w-7 h-[4px] bg-darkblack absolute left-0 top-8"></div>
              <div className="w-[20px] h-[20px] rounded-full border-[5px] border-darkblack absolute left-[-12px] top-[24px] bg-darkslate"></div>
              <div className="flex flex-col gap-5 text-neu linear-gradient-1 box-shadow-10 p-5 cursor-pointer rounded-lg">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-3 ">
                    <span className="text-xl font-semibold">Matriculation</span>
                    <span className="text-sm">
                      Devasthaly Vidyapeeth,
                      <br />
                      Ballia(2014 - 2016)
                    </span>
                  </div>
                  <div className="px-5 py-3 rounded-md text-darkred text-xl font-semibold linear-gradient-1 box-shadow-10">
                    10/10
                  </div>
                </div>
                <div className="btech-summary">
                  kjdfjlsajflsajflajfusdl
                  <br />
                  fjladjflkajflka
                  <br />
                  fkladsjflkasjlk
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 pl-7">
            <span className="text-darkred text-lg font-semibold">
              (2022-Present)
            </span>
            <span className="text-2xl font-semibold text-neu">
              Job Experience
            </span>
          </div>
          <div className="border-l-[4px] border-darkblack flex flex-col gap-7 h-fit">
            <div className="pl-7 relative">
              <div className="w-7 h-[4px] bg-darkblack absolute left-0 top-8"></div>
              <div className="w-[20px] h-[20px] rounded-full border-[5px] border-darkblack absolute left-[-12px] top-[24px] bg-darkslate"></div>
              <div className="flex flex-col gap-5 text-neu linear-gradient-1 box-shadow-10 p-5 cursor-pointer rounded-lg">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-3 ">
                    <span className="text-xl font-semibold">
                      Full Stack Developer
                    </span>
                    <span className="text-sm">
                      Appventurez Mobitech,
                      <br />
                      Noida(2022 - Present)
                    </span>
                  </div>
                  {/* <div className="px-5 py-3 rounded-md text-darkred text-xl font-semibold linear-gradient-1 box-shadow-10">
                  8.15/10
                </div> */}
                </div>
                <div className="btech-summary">
                  kjdfjlsajflsajflajfusdl
                  <br />
                  fjladjflkajflka
                  <br />
                  fkladsjflkasjlk
                  <br />
                  ;lfjdlkjafljsdlkf
                </div>
              </div>
            </div>
            <div className="pl-7 relative">
              <div className="w-7 h-[4px] bg-darkblack absolute left-0 top-8"></div>
              <div className="w-[20px] h-[20px] rounded-full border-[5px] border-darkblack absolute left-[-12px] top-[24px] bg-darkslate"></div>
              <div className="flex flex-col gap-5 text-neu linear-gradient-1 box-shadow-10 p-5 cursor-pointer rounded-lg">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-3 ">
                    <span className="text-xl font-semibold">
                      Nameste React Live Course
                    </span>
                    <span className="text-sm">
                      Mentor -{" "}
                      <span className="text-darkred">Akshay Saini</span>
                      <br />2 Months
                    </span>
                  </div>
                </div>
                <div className="btech-summary">
                  kjdfjlsajflsajflajfusdl
                  <br />
                  fjladjflkajflka
                  <br />
                  fkladsjflkasjlk
                  <br />
                  ;lfjdlkjafljsdlkf
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 max-w-[720px] mx-auto w-full">
        <div className="text-3xl text-neu">Development Skill</div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col ">
            <label className="text-neu">HTML</label>
            <div className="w-full flex flex-col gap-1">
              <div className="html flex justify-end text-neu">85%</div>
              <div className="w-full h-[10px] rounded-[5px] bg-slate-300">
                <div className="html linear-gradient-4 h-[10px] rounded-[5px]"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <label className="text-neu">CSS</label>
            <div className="w-full flex flex-col gap-1">
              <div className="css-skill flex justify-end text-neu">80%</div>
              <div className="w-full h-[10px] rounded-[5px] bg-slate-300">
                <div className="css-skill linear-gradient-4 h-[10px] rounded-[5px]"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <label className="text-neu">Javascript</label>
            <div className="w-full flex flex-col gap-1">
              <div className="javascript flex justify-end text-neu">90%</div>
              <div className="w-full h-[10px] rounded-[5px] bg-slate-300">
                <div className="javascript linear-gradient-4 h-[10px] rounded-[5px]"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <label className="text-neu">Angular</label>
            <div className="w-full flex flex-col gap-1">
              <div className="javascript flex justify-end text-neu">90%</div>
              <div className="w-full h-[10px] rounded-[5px] bg-slate-300">
                <div className="javascript linear-gradient-4 h-[10px] rounded-[5px]"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <label className="text-neu">React</label>
            <div className="w-full flex flex-col gap-1">
              <div className="react flex justify-end text-neu">70%</div>
              <div className="w-full h-[10px] rounded-[5px] bg-slate-300">
                <div className="react linear-gradient-4 h-[10px] rounded-[5px]"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <label className="text-neu">Nodejs (Express,Sequelize,MySql)</label>
            <div className="w-full flex flex-col gap-1">
              <div className="react flex justify-end text-neu">70%</div>
              <div className="w-full h-[10px] rounded-[5px] bg-slate-300">
                <div className="react linear-gradient-4 h-[10px] rounded-[5px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
