import Navbar from "../components/navbar/navbar_components";
import Footer from "../components/footer/footer_components";

import Index from "../components/index/home_components";
import Projects from "../components/index/projects_components";
import Teams from "../components/index/teams_components";
import Contacts from "../components/index/contacts_components";

const Home = () => {
    return(
        <div>
            <Navbar/>
            <div className="bg-neutral-800">
                <Index/>
                <Projects/>
                <Teams/>
                <Contacts/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;