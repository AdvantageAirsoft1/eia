
const Contact = () => {
    return (
        <section id="contact" className="py-10">
            <div className="w-[89%] max-w-[1400px] m-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                        <div className="md:flex md:flex-row lg:justify-start lg:flex-col lg:text-left md:justify-between">
                            <div className="mb-6">
                                <h1 className="text-base font-medium mb-2">Email Us</h1>
                                <a className="text-gray-500 text-sm" href="TannerHumphreys@yahoo.com">
                                    TannerHumphreys@yahoo.com
                                </a>
                            </div>
                            <div className="mb-6">
                                <h1 className="text-base font-medium mb-2">Phone Number</h1>
                                <a className="text-gray-500 text-sm" href="tel:+(800)867-5309">
                                    1-800-867-5309
                                </a>
                            </div>
                            <div className="mb-6">
                                <h1 className="text-base font-medium mb-2">Come See Us!</h1>
                                <h2 className="text-gray-500 text-sm">69 Spooner Street, Bumshart Nebrahoma, 45669</h2>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <form>
                            <div className="space-y-6">
                                <div className="grid grid-col-1 md: grid-cols-2 gap-6">
                                    <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="border border-gray-300 text-gray-900 text-sm block w-full py-3 px-2"
                                    placeholder="What's Your Name"
                                    />
                                    <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="border border-gray-300 text-gray-900 text-sm block w-full py-3 px-2"
                                    placeholder="What's Your Email"
                                    />
                                    </div>
                                    <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    className="border border-gray-300 text-gray-900 text-sm block w-full py-3 px-2"
                                    placeholder="Subject"
                                    />
                                    <textarea className="border border-gray-300 text-gray-900 text-sm block w-full py-3 px-2"
                                    placeholder="Enter Message Here"
                                    name="message"
                                    id="message"
                                    rows={4}
                                    style={{resize: "none"}}
                                    />
                                    <div className="text-right">
                                        <button className="py-2 px-4 rounded-full uppercase cursor-pointer bg-primary text-white">Submit</button>
                                    </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact