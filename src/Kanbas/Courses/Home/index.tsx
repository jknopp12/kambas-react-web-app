import ModuleList from "../Modules/List";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFileImport, FaRegArrowAltCircleRight, FaHome, FaChartBar, FaMicrophone, FaRegChartBar, FaRegBell } from "react-icons/fa";

function Home() {
    return (
        <div className="container">
            <br />
            <div className="row">
                <div className="col-lg">
                    <ModuleList />
                </div>
                <div className="course-status">
                    <div className="wd-flex-row-container">
                        <div>
                            <button className="button-course-status"> <FaFileImport className="fa-2xs"/> Import Existing Content</button><br />
                            <button className="button-course-status"> <FaRegArrowAltCircleRight className="fa-2xs"/> Import From Commons</button><br />
                            <button className="button-course-status"> <FaHome className="fa-2xs"/> Choose Home Page</button><br />
                            <button className="button-course-status"> <FaChartBar className="fa-2xs"/> View Course Stream</button><br />
                            <button className="button-course-status"> <FaMicrophone className="fa-2xs"/> New Announcement</button><br />
                            <button className="button-course-status"> <FaRegChartBar className="fa-2xs"/> New Analytics</button><br />
                            <button className="button-course-status"> <FaRegBell className="fa-2xs"/> View Course Notifications</button><br /><br />
                            <h4>Coming Up</h4>
                            <a href="/Kanbas/Calendar/index.html" className="red-font">View Calendar</a>
                            <ul>
                                <li><a href="#" className="red-font"> Lecture January 10 @ 6pm</a></li>
                                <li><a href="#" className="red-font"> Lecture January 17 @ 6pm</a></li>
                                <li><a href="#" className="red-font"> Lecture January 24 @ 6pm</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;

