import React from 'react'
import useTheme from '../contexts/theme';

function ThemeBtn() {

    const {ThemeMode, darkTheme, lightTheme} = useTheme()

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus) {
            darkTheme()
        } else {
            lightTheme()
        }
    };

  return (
    <div className='relative left-40 mb-5'>
       <label className="inline-flex items-center cursor-pointer">
        <input 
            type="checkbox" 
            value="" 
            className="sr-only peer" 
            onChange={onChangeBtn}
            checked={ThemeMode === 'dark'}
        />
        <div className="relative w-11 h-6 bg-orange-400 peer-focus:outline-none dark:peer-focus:ring-orange-400 rounded-full peer dark:bg-orange-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
        </label>
    </div>
  )
}

export default ThemeBtn