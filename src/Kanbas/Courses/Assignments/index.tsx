import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaRegStickyNote } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <>
        <br/>
            <div className="adjust-buttons-assignment">
                <input className="assignment-search button-white" placeholder="Search for Assignment" type="text" id="fname" name="fname"></input>
                <button className="button-white">+ Group</button>
                <button className="button-red"> + Assignment</button>
                <button className="button-white"><FaEllipsisV className="ms-2"/></button>
            </div>
            <hr className="hline"/>
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2" /> ASSIGNMENTS
                        <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group">
                        {assignmentList.map((assignment) => (
                            <li className="list-group-item">
                                <FaEllipsisV className="me-2" />
                                <FaRegStickyNote className="assignment-icon me-2" />
                                <Link className="link"
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                            </li>))}
                    </ul>
                </li>
            </ul>
        </>
    );
}
export default Assignments;