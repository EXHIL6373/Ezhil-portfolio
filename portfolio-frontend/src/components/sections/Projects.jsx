import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2_8px_rgba(59, 130, 246, 0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Employee Management System</h3>
                            
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li className="text-gray-400 mb-4">
                                    Built a full-stack web app with CRUD capabilities for secure employee data management.

                                </li>
                            </ul>
                            <div>
                                {["React", "Node.js", "MYSQL"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="" className="text-blue-400 hover:text-blue-300 transtition-colors my-4"> View Project </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2_8px_rgba(59, 130, 246, 0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Video Streaming Web App</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li className="text-gray-400 mb-4">
                                    Created a responsive Netflix-style platform showcasing 100 sample movies with dynamic previews and
                                    listings.

                                </li>
                                <li className="text-gray-400 mb-4">
                                    Developed modular, reusable UI components that improved development efficiency and
                                    maintainability by 40%.
                                </li>
                            </ul>

                            <div>
                                {["React", "Node.js", "MYSQL"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="" className="text-blue-400 hover:text-blue-300 transtition-colors my-4"> View Project </a>
                            </div>
                        </div>

                    </div>

                </div>
            </RevealOnScroll>
        </section>
    )
}