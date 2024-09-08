import React from 'react'
import LowerBanner from '../Lower Banner/LowerBanner'
import HomeAbout from '../HomeAbout/HomeAbout'
import CourseSection from '../CourseSection/CourseSection'
import Banner from '../Banner/Banner'
import CourseList from '../CourseList/CourseList'
import SearchPage from '../Search Page/SearchPage'
import RecordedCourse from '../Recorded Course/RecordedCourse'
import FeatureSection from '../FeaturedSection/FeaturedSection'
import BlogSection from '../BlogSection/BlogSection'

const HomePage = () => {
  return (
    <div className="">

      <Banner/>
        <LowerBanner/>
        <HomeAbout/>
        <CourseSection/>
        <CourseList/>
        <SearchPage/>
        <RecordedCourse/>
        <FeatureSection/>
        <BlogSection/>
        

    </div>
  )
}

export default HomePage