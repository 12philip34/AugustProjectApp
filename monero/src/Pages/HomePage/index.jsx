import React from 'react';
import TopIntroduction from "../../Components/TopIntroduction/Index";
import BlogLinks from "../../Components/BlogLinks";
import RenderGrid from "../../Components/RenderGird";
import GuideAndResources from "../../Components/GuideAndSource";
import CommunityRender from "../../Components/CommunityRender";

const HomePage = () => {
    return (
        <div>
            <TopIntroduction />
            <BlogLinks />
            <RenderGrid />
            <GuideAndResources />
            <CommunityRender />
        </div>
    );
}

export default HomePage;