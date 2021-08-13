import React, { useEffect, useState } from "react";
import sanityClient from "../client";
export const Project = () => {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "project"]{
                title,
                place,
                link,
                description,
                date,
                tags,
                project,
                projectType
            }`
            )
            .then(data => setProjectData(data))
            .catch(console.error);
    }, []);
    return (
        <main className="bg-black p-12 bg_img_height">
            <section className="container mx-auto ">
                <h1 className="text-5xl flex justify-center font-amatic text-white">
                    My Projects
                </h1>
                <h2 className="text-xl text-gray-400 flex justify-center mb-12">
                    Welcome to my projects page!!!
                </h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData &&
                        projectData.map((project, index) => (
                            <article className="relative rounded-lg shadow-xl bg-gray-200 p-16 ">
                                <h3 className="text-gray-600 text-3xl font-bold mb-2 hover:text-gray-900">
                                    <a
                                        href={project.link}
                                        alt={project.title}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {project.title}
                                    </a>
                                </h3>
                                <div className="text-gray-500 text-xs space-x-4">
                                    <span><strong className="font-bold">Finished on</strong>:{" "}
                                        {new Date(project.date).toLocaleDateString()}
                                    </span>
                                    <span><strong className="font-bold">Company</strong>:{project.place}</span>
                                    <span><strong className="font-bold">Type</strong>:{" "} {project.projectType}</span>
                                    <p className="my-6 text-lg text-gray-700 leading-relaxed">{project.description}</p>
                                    <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-900 text-xl">View The Project {" "}</a>
                                    <span role="img" aria-label="right pointer" className="text-xl inline-flex"></span>
                                </div>
                            </article>
                        ))}
                </section>
            </section>
        </main>
    );
};
