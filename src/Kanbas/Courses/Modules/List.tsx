import React, { useState } from "react";
import "../Navigation/index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();

    // const modulesList = modules.filter((module) => module.course === courseId);
    // const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    // const [moduleList, setModuleList] = useState<any[]>(modules);

    // const [module, setModule] = useState({
    //     name: "New Module",
    //     description: "New Description",
    //     course: courseId,
    // });
    // const addModule = (module: any) => {
    //     const newModule = {
    //         ...module,
    //         _id: new Date().getTime().toString()
    //     };
    //     const newModuleList = [newModule, ...moduleList];
    //     setModuleList(newModuleList);
    // };
    // const deleteModule = (moduleId: string) => {
    //     const newModuleList = moduleList.filter(
    //         (module) => module._id !== moduleId);
    //     setModuleList(newModuleList);
    // };
    // const updateModule = (updatedModule: any) => {
    //     const newModuleList = moduleList.map((m) => {
    //         if (m._id === updatedModule._id) {
    //             return module;
    //         } else {
    //             return m;
    //         }
    //     });
    //     setModuleList(newModuleList);
    // };


    return (
        <>
            <div className="adjust-buttons">
                <button className="button-white">Collapse All</button>
                <button className="button-white">View Progress</button>
                <select className="button-white" >
                    <option> Publish All</option>
                    <option>Publish All Modules and Items</option>
                    <option>Publish Modules Only</option>
                    <option>Unpublish All</option>
                </select>
                <button className="button-red"
                    onClick={() => dispatch(addModule({ ...module, course: courseId }))}> + Module</button>
                <button className="button-white"><FaEllipsisV className="ms-2" /></button>
                <button className="button-white"
                    onClick={() => dispatch(updateModule(module))}>Update</button>
            </div> <hr className="hline" />
            <ul className="list-group">
                <li className="list-group-item">
                    <button className="btn green-btn"
                        onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                        Add
                    </button>
                    <button className="btn edit-button"
                        onClick={() => dispatch(updateModule(module))}>
                        Update
                    </button>
                    <input className="text"
                        value={module.name}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, name: e.target.value }))
                        } /> 
                        ]\
                        ]\\
                    <textarea className="text"
                        value={module.description}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, description: e.target.value }))
                        } />
                </li>
                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item">
                            <button className="btn edit-button"
                                onClick={() => dispatch(setModule(module))}>
                                Edit
                            </button>
                            <button className="btn delete-button"
                                onClick={() => dispatch(deleteModule(module._id))}>
                                Delete
                            </button>
                            <h3>{module.name}</h3>
                            <p>{module.description}</p>
                        </li>
                    ))}
            </ul>
        </>
    )


    // return (
    //     <>
    //         <div className="adjust-buttons">
    //             <button className="button-white">Collapse All</button>
    //             <button className="button-white">View Progress</button>
    //             <select className="button-white" >
    //                 <option> Publish All</option>
    //                 <option>Publish All Modules and Items</option>
    //                 <option>Publish Modules Only</option>
    //                 <option>Unpublish All</option>
    //             </select>
    //             <button className="button-red"
    //                 onClick={() => dispatch(addModule({ ...module, course: courseId }))}> + Module</button>
    //             <button className="button-white"><FaEllipsisV className="ms-2" /></button>
    //             <button className="button-white"
    //                 onClick={() => dispatch(updateModule(module))}>Update</button>

    // </div> <hr className="hline" />
    // <ul className="list-group wd-modules">
    //     {moduleList
    //         .filter((module) => module.course === courseId)
    //         .map((module, index) => (
    //             <li key={index} className="list-group-item">
    //                 <div>
    //                     <FaEllipsisV className="me-2" />
    //                     <span className="float-end">
    //                         <FaCheckCircle className="text-success" />
    //                         <FaPlusCircle className="ms-2" />
    //                         <FaEllipsisV className="ms-2" />
    //                     </span>
    //                     <input className="text" value={module.name}
    //                         onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
    //                         } /> <br /> <br />
    //                     <textarea className="text" value={module.description}
    //                         onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
    //                         } />
    //                     <button className="new-button"
    //                         onClick={() => dispatch(deleteModule(module._id))}> 
    //                         Delete
    //                     </button>
    //                     <button className="btn edit-button"
    //                         onClick={() => dispatch(setModule(module))}>
    //                         Edit
    //                     </button>
    //                 </div>
    //             </li>))}

    {/* {
                    modulesList.map((module, index) => (
                        <li key={index}
                            className="list-group-item"
                            onClick={() => setSelectedModule(module)}>
                            <div>
                                <FaEllipsisV className="me-2" />
                                {module.name}
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" />
                                    <FaPlusCircle className="ms-2" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                            </div>
                            {selectedModule._id === module._id && (
                                <ul className="list-group">
                                    {module.lessons?.map((lesson, index) => (
                                        <li className="list-group-item" key={index}>
                                            <FaEllipsisV className="me-2" />
                                            {lesson.name}
                                            <span className="float-end">
                                                <FaCheckCircle className="text-success" />
                                                <FaEllipsisV className="ms-2" />
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))
                } */}
    //             </ul>
    //         </>
    //     );
    // }
}
export default ModuleList;
