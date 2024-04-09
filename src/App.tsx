import { useState } from 'react';
import NavButton from './components/NavButton';
import navigationLinks from './constants/navigationLinks';
import me from './constants/me';

const AboutSection = () => {
  return (
    <div className='md:h-screen w-full flex items-center py-12'>
      <h1 className='text-l md:text-3xl font-regular text-[#8296bd] tracking-wider text-balance'>
          { me.about }
      </h1>
    </div>
  )
}

const IntroductionSideBlock = () => {
  const [selectedNavigationLabel, setSelectedNavigationLabel] = useState(navigationLinks[0].label)

  return (
    <div className='w-full flex flex-col items-center justify-center items-center py-12'>
      <div className='flex flex-col justify-center'>
          <h1 className='text-5xl md:text-8xl font-bold text-[#c4d1ec]'>{ me.fullName }</h1>
          <h2 className='mt-6 text-2xl md:text-4xl font-regular text-[#c4d1ec] tracking-wider'>{ me.profile }</h2>
          <h3 className='mt-6 md:mt-12 text-xl md:text-3xl font-regular text-[#8296bd] tracking-wider text-balance'>{ me.motto }</h3>
      </div>
      
      <div className='hidden md:block w-full flex flex-col mt-12 space-y-6'>
          {
            navigationLinks.map(({label, link}, key) => {
              return <NavButton
                label={label}
                selected={selectedNavigationLabel === label}
                handleClick={(label) => setSelectedNavigationLabel(label)}
                key={key}
              />
            })
          }
      </div>
    </div>
  )
}

const ExperiencesSideBlock = () => {
  return (
    <div className='flex flex-col space-y-6 w-full'>
      {
        me.experiences.map(({period, description, skills, title}, key) => {
          return (
            <button key={key} className='flex flex-col md:flex-row p-3.5 hover:bg-white hover:bg-opacity-20 text-white hover:text-[#54d2d4] md:space-x-6 rounded-lg'>
              <span className='text-xl text-[#8296bd] font-semibold'>
                { period }
              </span>
              <div className='flex flex-col space-y-6 text-left'>
                <h1 className='text-2xl md:text-3xl font-semibold'>
                  { title }
                </h1>
                <h1 className='text-l md:text-2xl text-[#8296bd]'>
                  { description }
                </h1>
        
                <div className='w-full flex flex-wrap text-sm md:text-xl'>
                  {
                    skills.map((skill, skillKey) => {
                      return (
                        <span key={skillKey} className='rounded-2xl m-2 py-2 px-3.5 bg-[#54d2d4] bg-opacity-20 font-bold text-[#54d2d4]  '>
                          { skill }
                        </span>
                      )                  
                    })
                  }
                </div>
              </div>
            </button>
          )
        })
      }
    </div>
  )
}

function App() {
  return (
    <body className="md:flex md:flex-row  justify-end bg-[#122045] overflow-y-auto">
      
      <div className='md:h-screen w-screen md:w-[50vw] md:fixed md:left-0 flex items-center justify-center p-6'>
        <div className='w-full md:max-w-2xl'>
          <IntroductionSideBlock />
        </div>
      </div>

      <div className='w-full md:max-w-4xl p-12 md:p-6'>
        <AboutSection />
        <ExperiencesSideBlock />
      </div>
    </body>
  );
}

export default App;
