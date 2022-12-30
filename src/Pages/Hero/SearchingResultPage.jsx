import React, { useState } from 'react'
import SearchFunctionalitySection from '../Searching/SearchFunctionalitySection'
import SearchHomePage from '../Searching/SearchHomePage'
import SearchListViewSection from '../Searching/SearchListViewSection'
import SearchRecentlyViewedSection from '../Searching/SearchRecentlyViewedSection'

function SearchingResultPage() {
    const [ viewCategory, setViewCategory ] = useState(false)
    return (
        <div className='bg-light lg:py-10'>
            <SearchHomePage 
            viewCategory={viewCategory}
            setViewCategory={setViewCategory}
            />
            <div className='lg:max-w-screen-xl lg:mx-auto'>
                <div className='lg:grid grid-cols-12 gap-5'>
                    <div className='col-span-3'>
                        <SearchFunctionalitySection
                        viewCategory={viewCategory}
                        setViewCategory={setViewCategory}
                         />
                    </div>
                    <div className='col-span-9'>
                        <SearchListViewSection />
                    </div>
                </div>
                <div className=''>
                    <SearchRecentlyViewedSection />
                </div>
            </div>
        </div>
    )
}

export default SearchingResultPage